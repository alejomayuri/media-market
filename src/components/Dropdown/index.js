import style from "./style.module.css";
import React, { useState, useEffect, useRef } from "react";
import { devices } from "styles/theme";
import MenuIcon from "components/global/Icons/MenuIcon";
import { useDeviceWidth } from "hooks/useDeviceWidth";
import SearchBar from "components/global/SearchBar";
import { REAL_CATEGORIES, BRANDS } from "assets/cats";
import CategoriesAndSubcategoriesList from "components/global/CategoriesAndSubcategoriesList";

function Dropdown({ dropdownTitle }) {
  const activatorRef = useRef(null);
  const dropdownListRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const width = useDeviceWidth();

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const keyHandler = (event) => {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };

  const clickOutsideHandler = (event) => {
    if (dropdownListRef.current) {
      if (
        dropdownListRef.current.contains(event.target) ||
        activatorRef.current.contains(event.target)
      ) {
        return;
      }

      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      dropdownListRef.current.querySelector("button").focus();
      document.addEventListener("mousedown", clickOutsideHandler);
    } else {
      document.addEventListener("mousedown", clickOutsideHandler);
    }
  }, [isOpen]);

  return (
    <>
      <div className={style.dropdown_wrapper} onKeyUp={keyHandler}>
        <button
          className={style.button}
          aria-haspopup="true"
          aria-controls={dropdownTitle}
          onClick={clickHandler}
          ref={activatorRef}
        >
          {dropdownTitle} <MenuIcon />
          {width > devices.mobile && "Menu"}
        </button>
      </div>
      <div
        ref={dropdownListRef}
        className={`${style.box} ${isOpen ? style.active : ""} ${
          style.dropdown_item_list
        }`}
      >
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

            <CategoriesAndSubcategoriesList
              data={BRANDS}
              onClick={clickHandler}
              title="Marcas"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
