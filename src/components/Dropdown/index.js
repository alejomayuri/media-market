import style from "./style.module.css";
import React, { useState, useEffect, useRef } from "react";
import { devices } from "styles/theme";
import MenuIcon from "components/global/Icons/MenuIcon";
import { useDeviceWidth } from "hooks/useDeviceWidth";
import SearchBar from "components/global/SearchBar";
import { Link } from "wouter";
import { REAL_CATEGORIES, BRANDS } from "assets/cats";

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
            <h3 className={style.h3}>Categorias</h3>
            <ul className={style.ul__categories__container}>
              {REAL_CATEGORIES.map((item, index) => {
                return (
                  <li className={style.item_list_container} key={index}>
                    <Link
                      onClick={clickHandler}
                      className={style.a__item_list}
                      href={item.slug}
                    >
                      <button>{item.name}</button>
                    </Link>
                    {item.subcategories && item.subcategories.length > 0 && (
                      <ul>
                        {item.subcategories.map((subitem, index) => {
                          return (
                            <li className={style.item_list} key={index}>
                              <Link
                                onClick={clickHandler}
                                className={style.subcategory__name}
                                href={subitem.slug}
                              >
                                <button>{subitem.name}</button>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <h3 className={style.h3}>Marcas</h3>
            <ul className={style.ul__categories__container}>
              {BRANDS.map((item, index) => {
                return (
                  <li className={style.item_list_container} key={index}>
                    <Link
                      onClick={clickHandler}
                      className={style.category__name}
                      href={item.slug}
                    >
                      <button>{item.name}</button>
                    </Link>
                    {/* <a className={style.category__name} href={item.slug}>
                      {item.name}
                    </a> */}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
