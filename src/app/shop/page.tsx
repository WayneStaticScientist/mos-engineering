import BreadCrump from "@/components/breadcrumpt";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ProductLists from "@/components/product-list";

export default function Home() {
  return (
    <>
      <Header />
      <BreadCrump title="Shop" />
      <ProductLists />
      <Footer />
    </>
  );
}
