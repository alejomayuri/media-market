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
        slug: "/productos/teclados/teclados-bluetooth",
      },
      {
        name: "Teclados Wireless",
        slug: "/productos/teclados/teclados-wireless",
      },
      {
        name: "Teclados USB",
        slug: "/productos/teclados/teclados-usb",
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
        slug: "/productos/mouse/mouse-wireless",
      },
      {
        name: "Mouse USB",
        slug: "/productos/mouse/mouse-usb",
      },
      {
        name: "Mouse Gamer",
        slug: "/productos/mouse/mouse-gamer",
      },
      {
        name: "Mouse Pad",
        slug: "/productos/mouse/mouse-pad",
      },
    ],
  },
  {
    name: "Audífonos",
    slug: "/productos?categoria=audifonos",
    subcategories: [
      {
        name: "Audífonos p/PC",
        slug: "/productos/audifonos/audifonos-pc",
      },
      {
        name: "Audífonos p/celular",
        slug: "/productos/audifonos/audifonos-celular",
      },
      {
        name: "Audífonos Bluetooth",
        slug: "/productos/audifonos/audifonos-bluetooth",
      },
    ],
  },
  {
    name: "Zona Gamer",
    slug: "/productos?categoria=zona-gamer",
    subcategories: [
      {
        name: "Teclados Gamer",
        slug: "/productos/zona-gamer/teclados-gamer",
      },
      {
        name: "Mouse Gamer",
        slug: "/productos/zona-gamer/mouse-gamer",
      },
      {
        name: "Audífonos Gamer",
        slug: "/productos/zona-gamer/audifonos-gamer",
      },
      {
        name: "Micrófonos Gamer",
        slug: "/productos/zona-gamer/microfonos-gamer",
      },
      {
        name: "Sillas Gamer",
        slug: "/productos/zona-gamer/sillas-gamer",
      },
    ],
  },
  {
    name: "Almacenamiento",
    slug: "/productos?categoria=almacenamiento",
    subcategories: [
      {
        name: "Memoria USB",
        slug: "/productos/almacenamiento/memorias-usb",
      },
      {
        name: "Memoria micro SD",
        slug: "/productos/almacenamiento/memoria-micro-sd",
      },
      {
        name: "Disco Duro Externo",
        slug: "/productos/almacenamiento/discos-duros-externos",
      },
      {
        name: "Disco Duro SSD",
        slug: "/productos/almacenamiento/disco-duro-ssd",
      },
    ],
  },
  {
    name: "Parlantes",
    slug: "/productos?categoria=parlantes",
    subcategories: [
      {
        name: "Parlantes para PC",
        slug: "/productos/parlantes/parlantes-pc",
      },
      {
        name: "Parlantes Bluetooth",
        slug: "/productos/parlantes/parlantes-bluetooth",
      },
    ],
  },
  {
    name: "Micrófonos",
    slug: "/productos?categoria=microfonos",
    subcategories: [
      {
        name: "Micrófonos p/PC",
        slug: "/productos/microfonos/microfonos-pc",
      },
      {
        name: "Micrófonos p/celular",
        slug: "/productos/microfonos/microfonos-celular",
      },
      {
        name: "Micrófonos p/karaoke",
        slug: "/productos/microfonos/microfonos-karaoke",
      },
    ],
  },
  {
    name: "Adaptadores",
    slug: "/productos?categoria=adaptadores",
    subcategories: [
      {
        name: "Adaptadores Bluetooth",
        slug: "/productos/adaptadores/adaptadores-bluetooth",
      },
      {
        name: "Adaptadores de red",
        slug: "/productos/adaptadores/adaptadores-de-red",
      },
      {
        name: "Adaptadores de audio",
        slug: "/productos/adaptadores/adaptadores-de-audio",
      },
      {
        name: "Adaptadores USB",
        slug: "/productos/adaptadores/adaptadores-usb",
      },
    ],
  },
  {
    name: "Cámaras",
    slug: "/productos?categoria=camaras",
    subcategories: [
      {
        name: "Cámaras web",
        slug: "/productos/camaras/camaras-web",
      },
      {
        name: "Cámaras de vigilancia",
        slug: "/productos/camaras/camaras-de-vigilancia",
      },
    ],
  },
  {
    name: "Smart Home",
    slug: "/productos?categoria=smart-home",
    subcategories: [
      {
        name: "Alexa",
        slug: "/productos/smart-home/alexa",
      },
      {
        name: "Google Home",
        slug: "/productos/smart-home/google-home",
      },
    ],
  },
  {
    name: "Celulares",
    slug: "/productos?categoria=celulares",
    subcategories: [
      {
        name: "iPhone",
        slug: "/productos/celulares/iphone",
      },
      {
        name: "Samsung",
        slug: "/productos/celulares/samsung",
      },
      {
        name: "Xiaomi",
        slug: "/productos/celulares/xiaomi",
      },
      {
        name: "Motorola",
        slug: "/productos/celulares/motorola",
      },
      {
        name: "Vivo",
        slug: "/productos/celulares/vivo",
      },
      {
        name: "Realme",
        slug: "/productos/celulares/realme",
      },
    ],
  },
  {
    name: "Accesorios para Celulares",
    slug: "/productos?categoria=accesorios-para-celulares",
    subcategories: [
      {
        name: "Cargadores p/auto",
        slug: "/productos/accesorios-para-celulares/cargadores",
      },
      {
        name: "Cables",
        slug: "/productos/accesorios-para-celulares/cables",
      },
      {
        name: "Adaptadores",
        slug: "/productos/accesorios-para-celulares/adaptadores",
      },
      {
        name: "Almacenamiento",
        slug: "/productos/accesorios-para-celulares/almacenamiento",
      },
      {
        name: "Baterías",
        slug: "/productos/accesorios-para-celulares/baterias",
      },
      {
        name: "Carcasas / Protectores",
        slug: "/productos/accesorios-para-celulares/carcasas-protectores",
      },
      {
        name: "Sujetadores / pop sockets",
        slug: "/productos/accesorios-para-celulares/sujetadores-pop-sockets",
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
    console.log("click");
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
