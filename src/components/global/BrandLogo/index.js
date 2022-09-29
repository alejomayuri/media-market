import style from "./style.module.css";

export default function BrandLogo({ logo }) {
  return (
    <div className={style.brand__logo}>
      <img src={logo} alt="brand-logo" />
    </div>
  );
}
