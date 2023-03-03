import React, { useState, useEffect } from "react";
import axios from "axios";
import PageNavigations from "../CategoryPage/PageNavigations";
import { SearchPageSlides } from "../CategoryPage/CategoryPageSlides";
import LoadingCircle from "../loading/LoadingCircle";
import { useRouter } from "next/router";

export default function SearchPage() {
  const router = useRouter();
  const { pageIdx, query } = router.query;
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (pageIdx) setPage(parseInt(pageIdx));
  }, [pageIdx]);

  useEffect(() => {
    GetItemsList();
    router.replace({
      query: { ...router.query, pageIdx: page },
    });
  }, [query, page]);

  // gets the list of the things
  function GetItemsList() {
    setIsLoading(true);
    axios.post("/api/search", { query: query, page: page }).then((res) => {
      const data = res.data;
      setPagesCount(data.total_pages);
      setList(data.results);
      setIsLoading(false);
    });
  }

  function changePage(increment = 1) {
    const newPageIndex = page + increment;
    if (newPageIndex < 1 || newPageIndex > pagesCount) return;
    setPage(newPageIndex);
    window.scrollTo(0, 0);
  }

  return (
    <div className="home-section category-section">
      {/* section header */}
      <header className="section-header">
        <h1>Searching : {query}</h1>
        <span className={`header-category `}>{"All"}</span>
        <div style={{ display: isLoading ? "block" : "none" }}>
          <LoadingCircle size={40} />
        </div>
      </header>

      {/* next and previous page buttons */}
      <PageNavigations
        changePage={changePage}
        page={page}
        pagesCount={pagesCount}
      />

      {/* pages slides */}
      <div className="display-map">{SearchPageSlides(list)}</div>

      {/* next and previous page buttons */}
      <PageNavigations
        changePage={changePage}
        page={page}
        pagesCount={pagesCount}
      />
    </div>
  );
}
