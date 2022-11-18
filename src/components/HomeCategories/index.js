import style from "./style.module.css";
import HomeCategory from "components/global/HomeCategory";
import g from "media/cat-gamer.png";
import { REAL_CATEGORIES } from "assets/cats";
import { useEffect, useState } from "react";
import { useDeviceWidth } from "hooks/useDeviceWidth";

export default function HomeCategories() {
  const [limit, setLimit] = useState(true);
  const [downLimit, setDownLimit] = useState(5);
  const width = useDeviceWidth();

  useEffect(() => {
    if (width <= 1024) {
      setDownLimit(4);
    }
    if (width <= 500) {
      setDownLimit(6);
    }
  }, [width]);

  return (
    <div>
      <div className={style.home__categories__container}>
        {REAL_CATEGORIES.categories
          .map((category, index) => (
            <HomeCategory key={index} image={g} title={category.name} />
          ))
          .slice(0, limit ? downLimit : 20)}
      </div>
      <div className={style.button__container}>
        <button className={style.show__button}>
          {limit ? (
            <span onClick={() => setLimit(false)}>Ver más</span>
          ) : (
            <span onClick={() => setLimit(true)}>Ver menos</span>
          )}
        </button>
      </div>
    </div>
  );
}
