import style from "./style.module.css";
import logo from "logo.jpeg";

export default function Logo() {
  return (
    <div className={style.container}>
      <img className={style.image} src={logo} alt="logo" />
    </div>
  );
}
