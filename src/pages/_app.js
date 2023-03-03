import MainLayout from "../components/layout/MainLayout";
import "@/styles/style.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
