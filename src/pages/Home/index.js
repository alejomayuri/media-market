import SaleTimerBox from "components/SaleTimerBox";
import HomeBanner from "components/HomeBanner";
import HomeCoupons from "components/HomeCoupons";
import HomeBrands from "components/HomeBrands";
import HomeCategories from "components/HomeCategories";
import HomeProducts from "components/HomeProducts";
import HomeSquareCards from "components/HomeSquareCards";
import useUser from "hooks/useUser";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <main>
        <HomeCoupons />
        <SaleTimerBox />
        <HomeBrands />
        <HomeSquareCards />
        <HomeCategories />
        <HomeProducts />
      </main>
    </>
  );
}
