import style from "./style.module.css";
import React, { useState, useEffect, useRef } from "react";
import { devices } from "styles/theme";
import MenuIcon from "components/global/Icons/MenuIcon";
import { useDeviceWidth } from "hooks/useDeviceWidth";
import SearchBar from "components/global/SearchBar";
import { Link } from "wouter";

const REAL_CATEGORIES = [
  {
    name: "Teclados",
    slug: "/productos?categoria=teclados",
    subcategories: [
      {
        name: "Teclados Bluetooth",
        slug: "/productos?categoria=teclados&subcategoria=teclados-bluetooth",
      },
      {
        name: "Teclados Wireless",
        slug: "/productos?categoria=teclados&subcategoria=teclados-wireless",
      },
      {
        name: "Teclados USB",
        slug: "/productos?categoria=teclados&subcategoria=teclados-usb",
      },
      {
        name: "Teclados Gamer",
        slug: "/productos?categoria=teclados&subcategoria=teclados-gamer",
      },
    ],
  },
  {
    name: "Mouse",
    slug: "/productos?categoria=mouse",
    subcategories: [
      {
        name: "Mouse Wireless",
        slug: "/productos?categoria=mouse&subcategoria=mouse-wireless",
      },
      {
        name: "Mouse USB",
        slug: "/productos?categoria=mouse&subcategoria=mouse-usb",
      },
      {
        name: "Mouse Gamer",
        slug: "/productos?categoria=mouse&subcategoria=mouse-gamer",
      },
      {
        name: "Mouse Pad",
        slug: "/productos?categoria=mouse&subcategoria=mouse-pad",
      },
    ],
  },
  {
    name: "Audífonos",
    slug: "/productos?categoria=audifonos",
    subcategories: [
      {
        name: "Audífonos p/PC",
        slug: "/productos?categoria=audifonos&subcategoria=audifonos-pc",
      },
      {
        name: "Audífonos p/celular",
        slug: "/productos?categoria=audifonos&subcategoria=audifonos-celular",
      },
      {
        name: "Audífonos Bluetooth",
        slug: "/productos?categoria=audifonos&subcategoria=audifonos-bluetooth",
      },
    ],
  },
  {
    name: "Zona Gamer",
    slug: "/productos?categoria=zona-gamer",
    subcategories: [
      {
        name: "Teclados Gamer",
        slug: "/productos?categoria=zona-gamer&subcategoria=teclados-gamer",
      },
      {
        name: "Mouse Gamer",
        slug: "/productos?categoria=zona-gamer&subcategoria=mouse-gamer",
      },
      {
        name: "Audífonos Gamer",
        slug: "/productos?categoria=zona-gamer&subcategoria=audifonos-gamer",
      },
      {
        name: "Micrófonos Gamer",
        slug: "/productos?categoria=zona-gamer&subcategoria=microfonos-gamer",
      },
      {
        name: "Sillas Gamer",
        slug: "/productos?categoria=zona-gamer&subcategoria=sillas-gamer",
      },
    ],
  },
  {
    name: "Almacenamiento",
    slug: "/productos?categoria=almacenamiento",
    subcategories: [
      {
        name: "Memoria USB",
        slug: "/productos?categoria=almacenamiento&subcategoria=memorias-usb",
      },
      {
        name: "Memoria micro SD",
        slug: "/productos?categoria=almacenamiento&subcategoria=memoria-micro-sd",
      },
      {
        name: "Disco Duro Externo",
        slug: "/productos?categoria=almacenamiento&subcategoria=discos-duros-externos",
      },
      {
        name: "Disco Duro SSD",
        slug: "/productos?categoria=almacenamiento&subcategoria=disco-duro-ssd",
      },
    ],
  },
  {
    name: "Parlantes",
    slug: "/productos?categoria=parlantes",
    subcategories: [
      {
        name: "Parlantes para PC",
        slug: "/productos?categoria=parlantes&subcategoria=parlantes-pc",
      },
      {
        name: "Parlantes Bluetooth",
        slug: "/productos?categoria=parlantes&subcategoria=parlantes-bluetooth",
      },
    ],
  },
  {
    name: "Micrófonos",
    slug: "/productos?categoria=microfonos",
    subcategories: [
      {
        name: "Micrófonos p/PC",
        slug: "/productos?categoria=microfonos&subcategoria=microfonos-pc",
      },
      {
        name: "Micrófonos p/celular",
        slug: "/productos?categoria=microfonos&subcategoria=microfonos-celular",
      },
      {
        name: "Micrófonos p/karaoke",
        slug: "/productos?categoria=microfonos&subcategoria=microfonos-karaoke",
      },
    ],
  },
  {
    name: "Adaptadores",
    slug: "/productos?categoria=adaptadores",
    subcategories: [
      {
        name: "Adaptadores Bluetooth",
        slug: "/productos?categoria=adaptadores&subcategoria=adaptadores-bluetooth",
      },
      {
        name: "Adaptadores de red",
        slug: "/productos?categoria=adaptadores&subcategoria=adaptadores-de-red",
      },
      {
        name: "Adaptadores de audio",
        slug: "/productos?categoria=adaptadores&subcategoria=adaptadores-de-audio",
      },
      {
        name: "Adaptadores USB",
        slug: "/productos?categoria=adaptadores&subcategoria=adaptadores-usb",
      },
    ],
  },
  {
    name: "Cámaras",
    slug: "/productos?categoria=camaras",
    subcategories: [
      {
        name: "Cámaras web",
        slug: "/productos?categoria=camaras&subcategoria=camaras-web",
      },
      {
        name: "Cámaras de vigilancia",
        slug: "/productos?categoria=camaras&subcategoria=camaras-de-vigilancia",
      },
    ],
  },
  {
    name: "Smart Home",
    slug: "/productos?categoria=smart-home",
    subcategories: [
      {
        name: "Alexa",
        slug: "/productos?categoria=smart-home&subcategoria=alexa",
      },
      {
        name: "Google Home",
        slug: "/productos?categoria=smart-home&subcategoria=google-home",
      },
    ],
  },
  {
    name: "Celulares",
    slug: "/productos?categoria=celulares",
    subcategories: [
      {
        name: "iPhone",
        slug: "/productos?categoria=celulares&subcategoria=iphone",
      },
      {
        name: "Samsung",
        slug: "/productos?categoria=celulares&subcategoria=samsung",
      },
      {
        name: "Xiaomi",
        slug: "/productos?categoria=celulares&subcategoria=xiaomi",
      },
      {
        name: "Motorola",
        slug: "/productos?categoria=celulares&subcategoria=motorola",
      },
      {
        name: "Vivo",
        slug: "/productos?categoria=celulares&subcategoria=vivo",
      },
      {
        name: "Realme",
        slug: "/productos?categoria=celulares&subcategoria=realme",
      },
    ],
  },
  {
    name: "Accesorios para Celulares",
    slug: "/productos?categoria=accesorios-para-celulares",
    subcategories: [
      {
        name: "Cargadores p/auto",
        slug: "/productos?categoria=accesorios-para-celulares&subcategoria=cargadores",
      },
      {
        name: "Cables",
        slug: "/productos?categoria=accesorios-para-celulares&subcategoria=cables",
      },
      {
        name: "Adaptadores",
        slug: "/productos?categoria=accesorios-para-celulares&subcategoria=adaptadores",
      },
      {
        name: "Almacenamiento",
        slug: "/productos?categoria=accesorios-para-celulares&subcategoria=almacenamiento",
      },
      {
        name: "Baterías",
        slug: "/productos?categoria=accesorios-para-celulares&subcategoria=baterias",
      },
      {
        name: "Carcasas / Protectores",
        slug: "/productos?categoria=accesorios-para-celulares&subcategoria=carcasas-protectores",
      },
      {
        name: "Sujetadores / pop sockets",
        slug: "/productos?categoria=accesorios-para-celulares&subcategoria=sujetadores-pop-sockets",
      },
    ],
  },
  {
    name: "Servicio Técnico de Celulares",
    slug: "/productos?categoria=servicio-tecnico-de-celulares",
  },
  {
    name: "Estabilizadores y Corriente",
    slug: "/productos?categoria=estabilizadores-y-corriente",
  },
  {
    name: "Hubs / Docking Station",
    slug: "/productos?categoria=hubs-docking-station",
  },
  {
    name: "Cables",
    slug: "/productos?categoria=cables",
  },
  {
    name: "Redes y conectividad",
    slug: "/productos?categoria=redes-y-conectividad",
  },
  {
    name: "Mochilas / Portalaptop / Protectores",
    slug: "/productos?categoria=mochilas-portalaptop-protectores",
  },
  {
    name: "Coolers",
    slug: "/productos?categoria=coolers",
  },
  {
    name: "Fuentes de Poder",
    slug: "/productos?categoria=fuentes-de-poder",
  },
];

const BRANDS = [
  {
    name: "Apple",
    slug: "/productos/Apple",
  },
  {
    name: "Logitech",
    slug: "/productos/Logitech",
  },
  {
    name: "Genius",
    slug: "/productos/Genius",
  },
  {
    name: "Micronics",
    slug: "/productos/Micronics",
  },
  {
    name: "XBlade",
    slug: "/productos/XBlade",
  },
  {
    name: "Samsung",
    slug: "/productos/Samsung",
  },
  {
    name: "Sony",
    slug: "/productos/Sony",
  },
  {
    name: "LG",
    slug: "/productos/LG",
  },
  {
    name: "Nintendo",
    slug: "/productos/Nintendo",
  },
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
