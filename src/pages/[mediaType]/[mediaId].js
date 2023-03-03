import SingleItemPage from "@/components/singleItemPage/SingleItemPage";
import React from "react";

export default function SingleMediaPage(props) {
  const { mediaType, mediaId } = props;

  return <SingleItemPage mediaType={mediaType} mediaId={mediaId} />;
}

export async function getServerSideProps(context) {
  const { mediaType, mediaId } = context.params;

  return {
    props: {
      mediaType: mediaType,
      mediaId: mediaId,
    },
  };
}
