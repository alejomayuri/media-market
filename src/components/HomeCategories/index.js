import style from "./style.module.css";
import HomeCategory from "components/global/HomeCategory";
import g from "media/cat-gamer.png";

const HOME__CATEGORIES = [
  {
    category: "teclados",
    color: "red",
  },
  {
    category: "mouse",
    color: "green",
  },
  {
    category: "audífonos",
    color: "blue",
  },
  {
    category: "gamer",
    color: "purple",
  },
  {
    category: "celulares",
    color: "orange",
  },
  {
    category: "cámaras",
    color: "cyan",
  },
];

export default function HomeCategories() {
  return (
    <div>
      <div className={style.home__categories__container}>
        {HOME__CATEGORIES.map((category, index) => (
          <HomeCategory
            key={index}
            image={g}
            title={category.category}
            color={category.color}
          />
        ))}
      </div>
    </div>
  );
}
