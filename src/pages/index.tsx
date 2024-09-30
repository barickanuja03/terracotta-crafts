import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Navbar from "@/components/Navbar";
import PopularProduct from "@/components/PopularProduct";
import PremiumProducts from "@/components/PremiumProducts";



export default function Home() {
  return (
    <>
    <Navbar />
    <Herosection />
    {/* <Categories /> */}
    <PopularProduct />
    <PremiumProducts />
    <Footer />
   </>
  );
}
