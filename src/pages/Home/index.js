import style from "./style.module.css";

import MenuIcon from "components/Icons/MenuIcon";
import Logo from "components/Logo";
import HeaderButton from "components/Header/HeaderButton";
import HeaderLi from "components/Header/HeaderLi";
import DownArrowIcon from "components/Icons/DownArrowIcon";
import CartButton from "components/Header/CartButton";
import SearchBar from "components/Header/SearchBar";

export default function Home() {
  return (
    <div className={style.home__container}>
      <header className={style.header}>
        <Logo />
        <HeaderButton>
          <MenuIcon />
          Menú
        </HeaderButton>
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
    </div>
  );
}
