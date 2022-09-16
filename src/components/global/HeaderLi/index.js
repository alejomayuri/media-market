import style from "./style.module.css";

export default function HeaderLi({ children }) {
  return <li className={style.li}>{children}</li>;
}
