import style from "./style.module.css";
import React, { useState, useEffect, useRef } from "react";
import { devices } from "styles/theme";
import MenuIcon from "components/global/Icons/MenuIcon";
import { useDeviceWidth } from "hooks/useDeviceWidth";

const REAL_CATEGORIES = [
  {
    name: "Teclados",
    slug: "/categorias/teclados",
    subcategories: [
      {
        name: "Teclados Bluetooth",
        slug: "/categorias/teclados/teclados-bluetooth",
      },
      {
        name: "Teclados Wireless",
        slug: "/categorias/teclados/teclados-wireless",
      },
      {
        name: "Teclados USB",
        slug: "/categorias/teclados/teclados-usb",
      },
      {
        name: "Teclados Gamer",
        slug: "/categorias/teclados/teclados-gamer",
      },
    ],
  },
  {
    name: "Mouse",
    slug: "/categorias/mouse",
    subcategories: [
      {
        name: "Mouse Wireless",
        slug: "/categorias/mouse/mouse-wireless",
      },
      {
        name: "Mouse USB",
        slug: "/categorias/mouse/mouse-usb",
      },
      {
        name: "Mouse Gamer",
        slug: "/categorias/mouse/mouse-gamer",
      },
      {
        name: "Mouse Pad",
        slug: "/categorias/mouse/mouse-pad",
      },
    ],
  },
  {
    name: "Audífonos",
    slug: "/categorias/audifonos",
    subcategories: [
      {
        name: "Audífonos p/PC",
        slug: "/categorias/audifonos/audifonos-pc",
      },
      {
        name: "Audífonos p/celular",
        slug: "/categorias/audifonos/audifonos-celular",
      },
      {
        name: "Audífonos Bluetooth",
        slug: "/categorias/audifonos/audifonos-bluetooth",
      },
    ],
  },
  {
    name: "Zona Gamer",
    slug: "/categorias/zona-gamer",
    subcategories: [
      {
        name: "Teclados Gamer",
        slug: "/categorias/zona-gamer/teclados-gamer",
      },
      {
        name: "Mouse Gamer",
        slug: "/categorias/zona-gamer/mouse-gamer",
      },
      {
        name: "Audífonos Gamer",
        slug: "/categorias/zona-gamer/audifonos-gamer",
      },
      {
        name: "Micrófonos Gamer",
        slug: "/categorias/zona-gamer/microfonos-gamer",
      },
      {
        name: "Sillas Gamer",
        slug: "/categorias/zona-gamer/sillas-gamer",
      },
    ],
  },
  {
    name: "Almacenamiento",
    slug: "/categorias/almacenamiento",
    subcategories: [
      {
        name: "Memoria USB",
        slug: "/categorias/almacenamiento/memorias-usb",
      },
      {
        name: "Memoria micro SD",
        slug: "/categorias/almacenamiento/memoria-micro-sd",
      },
      {
        name: "Disco Duro Externo",
        slug: "/categorias/almacenamiento/discos-duros-externos",
      },
      {
        name: "Disco Duro SSD",
        slug: "/categorias/almacenamiento/disco-duro-ssd",
      },
    ],
  },
  {
    name: "Parlantes",
    slug: "/categorias/parlantes",
    subcategories: [
      {
        name: "Parlantes para PC",
        slug: "/categorias/parlantes/parlantes-pc",
      },
      {
        name: "Parlantes Bluetooth",
        slug: "/categorias/parlantes/parlantes-bluetooth",
      },
    ],
  },
  {
    name: "Estabilizadores y Corriente",
    slug: "/categorias/estabilizadores-y-corriente",
  },
  {
    name: "Micrófonos",
    slug: "/categorias/microfonos",
    subcategories: [
      {
        name: "Micrófonos p/PC",
        slug: "/categorias/microfonos/microfonos-pc",
      },
      {
        name: "Micrófonos p/celular",
        slug: "/categorias/microfonos/microfonos-celular",
      },
      {
        name: "Micrófonos p/karaoke",
        slug: "/categorias/microfonos/microfonos-karaoke",
      },
    ],
  },
  {
    name: "Adaptadores",
    slug: "/categorias/adaptadores",
    subcategories: [
      {
        name: "Adaptadores Bluetooth",
        slug: "/categorias/adaptadores/adaptadores-bluetooth",
      },
      {
        name: "Adaptadores de red",
        slug: "/categorias/adaptadores/adaptadores-de-red",
      },
      {
        name: "Adaptadores de audio",
        slug: "/categorias/adaptadores/adaptadores-de-audio",
      },
      {
        name: "Adaptadores USB",
        slug: "/categorias/adaptadores/adaptadores-usb",
      },
    ],
  },
  {
    name: "Hubs / Docking Station",
    slug: "/categorias/hubs-docking-station",
  },
  {
    name: "Cables",
    slug: "/categorias/cables",
  },
  {
    name: "Cámaras",
    slug: "/categorias/camaras",
    subcategories: [
      {
        name: "Cámaras web",
        slug: "/categorias/camaras/camaras-web",
      },
      {
        name: "Cámaras de vigilancia",
        slug: "/categorias/camaras/camaras-de-vigilancia",
      },
    ],
  },
  {
    name: "Redes y conectividad",
    slug: "/categorias/redes-y-conectividad",
  },
  {
    name: "Mochilas / Portalaptop / Protectores",
    slug: "/categorias/mochilas-portalaptop-protectores",
  },
  {
    name: "Coolers",
    slug: "/categorias/coolers",
  },
  {
    name: "Smart Home",
    slug: "/categorias/smart-home",
  },
  {
    name: "Fuentes de Poder",
    slug: "/categorias/fuentes-de-poder",
  },
  {
    name: "Celulares",
    slug: "/categorias/celulares",
    subcategories: [
      {
        name: "iPhone",
        slug: "/categorias/celulares/iphone",
      },
      {
        name: "Samsung",
        slug: "/categorias/celulares/samsung",
      },
      {
        name: "Xiaomi",
        slug: "/categorias/celulares/xiaomi",
      },
      {
        name: "Motorola",
        slug: "/categorias/celulares/motorola",
      },
      {
        name: "Vivo",
        slug: "/categorias/celulares/vivo",
      },
      {
        name: "Realme",
        slug: "/categorias/celulares/realme",
      },
    ],
  },
  {
    name: "Accesorios para Celulares",
    slug: "/categorias/accesorios-para-celulares",
    subcategories: [
      {
        name: "Cargadores p/auto",
        slug: "/categorias/accesorios-para-celulares/cargadores",
      },
      {
        name: "Cables",
        slug: "/categorias/accesorios-para-celulares/cables",
      },
      {
        name: "Adaptadores",
        slug: "/categorias/accesorios-para-celulares/adaptadores",
      },
      {
        name: "Almacenamiento",
        slug: "/categorias/accesorios-para-celulares/almacenamiento",
      },
      {
        name: "Baterías",
        slug: "/categorias/accesorios-para-celulares/baterias",
      },
      {
        name: "Carcasas / Protectores",
        slug: "/categorias/accesorios-para-celulares/carcasas-protectores",
      },
      {
        name: "Sujetadores / pop sockets",
        slug: "/categorias/accesorios-para-celulares/sujetadores-pop-sockets",
      },
    ],
  },
  {
    name: "Servicio Técnico de Celulares",
    slug: "/categorias/servicio-tecnico-de-celulares",
  },
];

// const CATEGORIES = [
//   "Accesorios",
//   "Bebés",
//   "Belleza",
//   "Casa",
//   "Computación",
//   "Deportes",
//   "Electrodomésticos",
//   "Electrónica",
//   "Hogar",
//   "Juguetes",
//   "Libros",
//   "Mascotas",
//   "Moda",
//   "Muebles",
//   "Salud",
//   "Supermercado",
//   "Videojuegos",
// ];

// const BRANDS = [
//   "Apple",
//   "Logitech",
//   "Genius",
//   "Micronics",
//   "XBlade",
//   "Samsung",
//   "Sony",
//   "LG",
//   "Nintendo",
// ];

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
            <h3 className={style.h3}>Categorias</h3>
            <ul className={style.ul__categories__container}>
              {REAL_CATEGORIES.map((item, index) => {
                return (
                  <li
                    className={`${style.item_list} ${style.item_list_container}`}
                    key={index}
                  >
                    <a className={style.category__name} href={item.slug}>
                      {item.name}
                    </a>
                    {item.subcategories && item.subcategories.length > 0 && (
                      <ul>
                        {item.subcategories.map((subitem, index) => {
                          return (
                            <li className={style.item_list} key={index}>
                              <a
                                className={style.subcategory__name}
                                href={subitem.slug}
                              >
                                {subitem.name}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          {/* <div>
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
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Dropdown;
