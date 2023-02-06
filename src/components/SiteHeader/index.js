import style from "./style.module.css";
import { devices } from "styles/theme";
import Logo from "components/global/Logo";
import CartButton from "components/global/CartButton";
import SearchBar from "components/global/SearchBar";
import DownArrowIcon from "components/global/Icons/DownArrowIcon";
import UserIcon from "components/global/Icons/User";
import Dropdown from "components/Dropdown";
import StoreLocation from "components/StoreLocation";
import { useDeviceWidth } from "hooks/useDeviceWidth";
import { Link } from "wouter";
import useUser from "hooks/useUser";
import MenuIcon from "components/global/Icons/MenuIcon";

export default function SiteHeader() {
  const { user } = useUser();
  // console.log(user)
  const width = useDeviceWidth();
  const menuText = width > devices.mobile && "Menu"

  let headerMenu = (
    <Dropdown dropdownTitle={
      (
        <>
          <MenuIcon />
          {menuText}
        </>
      )
    } childrenContent="displayedMenu" />
  )

  let userOptionsMenu = (
    <Dropdown containerRelative={true} tiny={true} dropdownTitle={
      (
        <>
          <span style={
            {textAlign: "left", fontSize: "16px", width: "100", fontWeight: "600"}
          }>
            Hola, {user && user.username}
          </span>
          {/* <DownArrowIcon width={25} /> */}
        </>
      )
    } childrenContent="userOptions" />
  )

  return (
    <>
      <header className={style.header}>
        <div>
          {width <= devices.mobile && headerMenu}
          <Logo />
          {width > devices.mobile && headerMenu}
        </div>
        <div className={style.div__form__container}>
          {width > devices.mobile && <SearchBar />}
          <ul className={style.ul}>
            {
              user ? (
                  userOptionsMenu
              ) : (
                <Link href="/login">
                  <li className={`${style.li} ${style.only__tablet__desk}`}>
                    <UserIcon stroke="#fff" fill="#fff" width={25} />
                    ingresar
                  </li>
                </Link>
              )
            }
            {/* <Link href="/mis-compras">
              <li className={`${style.li} ${style.only__desk}`}>
                Mis compras
              </li>
            </Link> */}
          </ul>
          <CartButton />
        </div>
      </header>
      <StoreLocation />
    </>
  );
}
