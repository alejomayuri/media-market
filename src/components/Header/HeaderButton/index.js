import style from "./style.module.css";

export default function HeaderButton({ children }) {
  return <button className={style.button}>{children}</button>;
}
