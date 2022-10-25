import style from "./style.module.css";
import { devices } from "styles/theme";
import Logo from "components/global/Logo";
import CartButton from "components/global/CartButton";
import SearchBar from "components/global/SearchBar";
import DownArrowIcon from "components/global/Icons/DownArrowIcon";
import Dropdown from "components/Dropdown";
import StoreLocation from "components/StoreLocation";
import { useDeviceWidth } from "hooks/useDeviceWidth";

export default function SiteHeader() {
  const width = useDeviceWidth();

  return (
    <>
      <header className={style.header}>
        <div>
          {width <= devices.mobile && <Dropdown />}
          <Logo />
          {width > devices.mobile && <Dropdown />}
        </div>
        <div className={style.div__form__container}>
          {width > devices.mobile && <SearchBar />}
          <ul className={style.ul}>
            <li className={`${style.li} ${style.only__tablet__desk}`}>
              Iniciar sesión
              <DownArrowIcon width={25} />
            </li>
            <li className={`${style.li} ${style.only__desk}`}>
              Mis compras
              <DownArrowIcon width={25} />
            </li>
          </ul>
          <CartButton />
        </div>
      </header>
      <StoreLocation />
    </>
  );
}
