import style from "./style.module.css";

export default function HeaderSectionContainer({ children }) {
  return <div className={style.container}>{children}</div>;
}
