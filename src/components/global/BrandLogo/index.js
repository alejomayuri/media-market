import style from "./style.module.css";

export default function BrandLogo({ logo }) {
  return <img className={style.brand__logo} src={logo} alt="brand-logo" />;
}
