import style from "./style.module.css";
import React, { useState, useEffect, useRef } from "react";
import MenuIcon from "components/Icons/MenuIcon";

function Dropdown({ items = ["hola"], dropdownTitle }) {
  const activatorRef = useRef(null);
  const dropdownListRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

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
          Menú
        </button>
      </div>
      <div
        ref={dropdownListRef}
        className={`${style.box} ${isOpen ? style.active : ""} ${
          style.dropdown_item_list
        }`}
      >
        <ul>
          {items.map((item, index) => {
            return (
              <li className={style.item_list} key={index}>
                <a href={item.slug}>{item}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Dropdown;
