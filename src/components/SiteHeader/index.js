import style from "./style.module.css";
import { devices } from "styles/theme";
import Logo from "components/global/Logo";
import HeaderLi from "components/global/HeaderLi";
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
          <SearchBar />
          <ul className={`${style.ul}`}>
            <HeaderLi>
              Iniciar sesión
              <DownArrowIcon width={25} />
            </HeaderLi>
            <HeaderLi>
              Mis compras
              <DownArrowIcon width={25} />
            </HeaderLi>
          </ul>
          <CartButton />
        </div>
      </header>
      <StoreLocation />
    </>
  );
}
