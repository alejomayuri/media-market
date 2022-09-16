import style from "./style.module.css";
import React, { useState, useEffect, useRef } from "react";
import { devices } from "styles/theme";
import MenuIcon from "components/global/Icons/MenuIcon";
import { useDeviceWidth } from "hooks/useDeviceWidth";

const CATEGORIES = [
  "Accesorios",
  "Bebés",
  "Belleza",
  "Casa",
  "Computación",
  "Deportes",
  "Electrodomésticos",
  "Electrónica",
  "Hogar",
  "Juguetes",
  "Libros",
  "Mascotas",
  "Moda",
  "Muebles",
  "Salud",
  "Supermercado",
  "Videojuegos",
];

const BRANDS = [
  "Apple",
  "Logitech",
  "Genius",
  "Micronics",
  "XBlade",
  "Samsung",
  "Sony",
  "LG",
  "Nintendo",
];

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
      dropdownListRef.current.querySelector("a").focus();
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
            <h3>Categorias</h3>
            <ul>
              {CATEGORIES.map((item, index) => {
                return (
                  <li className={style.item_list} key={index}>
                    <a href={item.slug}>{item}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3>Marcas</h3>
            <ul>
              {BRANDS.map((item, index) => {
                return (
                  <li className={style.item_list} key={index}>
                    <a href={item.slug}>{item}</a>
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