import style from "./style.module.css";
import React, { useState, useEffect, useRef } from "react";
import DisplayedMenu from "components/DisplayedMenu";
import UserOptions from "components/UserOptions";

function Dropdown({ dropdownTitle, children, containerRelative = false, tiny = false, childrenContent }) {
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
      dropdownListRef.current.querySelector("button").focus();
      document.addEventListener("mousedown", clickOutsideHandler);
    } else {
      document.addEventListener("mousedown", clickOutsideHandler);
    }
  }, [isOpen]);

  let childrenContentComponent = null;

  if (childrenContent === "displayedMenu") {
    childrenContentComponent = <DisplayedMenu clickHandler={clickHandler} />;
  } else if (childrenContent === "userOptions") {
    childrenContentComponent = <UserOptions clickHandler={clickHandler} />;
  }

  return (
    <div className={`${style.container} ${containerRelative ? style.containerRelative : ""}`}>
      <div className={style.dropdown_wrapper} onKeyUp={keyHandler}>
        <button
          className={style.button}
          aria-haspopup="true"
          aria-controls={dropdownTitle}
          onClick={clickHandler}
          ref={activatorRef}
        >
          {dropdownTitle}
        </button>
      </div>
      <div
        ref={dropdownListRef}
        className={`${tiny ? style.tinyBox : style.box} ${isOpen ? style.active : ""} ${
          style.dropdown_item_list
        }`}
      >
        {childrenContentComponent ? childrenContentComponent : children}
      </div>
    </div>
  );
}

export default Dropdown;
