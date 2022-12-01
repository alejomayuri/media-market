import style from "./style.module.css";
import logo from "logo.jpeg";
import { Link } from "wouter";

export default function Logo() {
  return (
    <div className={style.container}>
      <Link href="/">
        <img className={style.image} src={logo} alt="logo" />
      </Link>
    </div>
  );
}
