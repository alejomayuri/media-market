import style from "./style.module.css";
import SearchIcon from "components/Icons/SearchIcon";

export default function SearchBar() {
  return (
    <form className={style.form}>
      <input className={style.input} type="text" placeholder="Buscar" />
      <button className={style.button}>
        <SearchIcon stroke="#fff" width={20} />
      </button>
    </form>
  );
}
