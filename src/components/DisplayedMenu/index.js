import style from "./style.module.css";
import { useDeviceWidth } from "hooks/useDeviceWidth";
import { devices } from "styles/theme";
import SearchBar from "components/global/SearchBar";
import { REAL_CATEGORIES, BRANDS } from "assets/cats";
import CategoriesAndSubcategoriesList from "components/global/CategoriesAndSubcategoriesList";

export default function DisplayedMenu ({clickHandler}) {
    const width = useDeviceWidth();

    return(
        <div className={style.menu__container}>
          <div>
            {width <= devices.mobile && (
              <div className={style.top__menu}>
                <SearchBar />
              </div>
            )}
            <div className={style.no_tablet_desk__myShopping}>
              <button>
                <span>Iniciar sesión</span>
              </button>
            </div>
            <div className={style.no_desk__myShopping}>
              <button onClick={clickHandler}>
                <span>Mis compras</span>
              </button>
            </div>

            <CategoriesAndSubcategoriesList
              data={REAL_CATEGORIES}
              onClick={clickHandler}
              title="Categorías"
            />
          </div>
        </div>
    )
}