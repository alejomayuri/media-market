import SaleTimerBox from "components/SaleTimerBox";
import HomeBanner from "components/HomeBanner";
import HomeCoupons from "components/HomeCoupons";
import HomeBrands from "components/HomeBrands";
import HomeCategories from "components/HomeCategories";
import HomeProducts from "components/HomeProducts";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <main>
        <HomeCoupons />
        <SaleTimerBox />
        <HomeBrands />
        <HomeCategories />
        {/* <HomeProducts /> */}
      </main>
    </>
  );
}
