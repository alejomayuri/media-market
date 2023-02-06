import style from "./style.module.css";
import LocationIcon from "components/global/Icons/LocationIcon";

export default function StoreLocation() {
  return (
    <div className={style.location}>
      <a
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=RVGFM7i1CqM"
          target="_blank"
        >
        <h3>NUESTRA TIENDA</h3>
        <LocationIcon />
      </a>
    </div>
  );
}
