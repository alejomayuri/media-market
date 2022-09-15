import style from "./style.module.css";

import Logo from "components/Logo";
import HeaderLi from "components/Header/HeaderLi";
import DownArrowIcon from "components/Icons/DownArrowIcon";
import CartButton from "components/Header/CartButton";
import SearchBar from "components/Header/SearchBar";
import Dropdown from "components/global/Dropdown";

export default function Home() {
  return (
    <div className={style.home__container}>
      <header className={style.header}>
        <Logo />
        <Dropdown />
        <SearchBar />
        <ul className={style.ul}>
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
      </header>
      <h1>xd</h1>
    </div>
  );
}
