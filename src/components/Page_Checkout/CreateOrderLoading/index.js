import style from "./style.module.css";
import spinner from "media/spinner.gif";

export default function CreateOrderLoading () {
    return <>
        <div className={style.creatingProduct_container}>
            <h2>
                Creando tu orden...
            </h2>
            <img
                className={style.creatingProduct_spinner}
                src={spinner}
                alt="spinner"
            />
        </div>
    </>
}