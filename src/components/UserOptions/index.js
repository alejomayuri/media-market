import style from "./style.module.css";
import { logout } from "firebase.js";

function UserOptions({ clickHandler }) {

    const handleLogout = () => {
        clickHandler()
        logout()
    }

    return (
        <div className={style.dropdown_wrapper}>
            <button onClick={handleLogout}>
                Cerrar sesión
            </button>
        </div>
  );
}

export default UserOptions;
