import style from "./style.module.css";
import LocationIcon from "components/global/Icons/LocationIcon";

export default function StoreLocation() {
  return (
    <div className={style.location}>
      <h3>
        <a
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=RVGFM7i1CqM"
          target="_blank"
        >
          NUESTRA TIENDA
        </a>
      </h3>
      <LocationIcon />
    </div>
  );
}
