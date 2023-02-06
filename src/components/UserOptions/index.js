import style from "./style.module.css";
import { logout } from "firebase.js";
import { Link } from "wouter";

function UserOptions({ clickHandler }) {

    const handleLogout = () => {
        clickHandler()
        logout()
    }

    return (
        <div className={style.dropdown_wrapper}>
            <Link href="/mis-compras">
              <li className={`${style.li} ${style.only__desk}`}>
                Mis compras
              </li>
            </Link> 
            <button onClick={handleLogout}>
                Cerrar sesión
            </button>
        </div>
  );
}

export default UserOptions;
