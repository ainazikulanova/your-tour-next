import ArrowIcon from "@/components/icons/ArrowIcon";
import s from "./Item.module.scss";

export default function Item({ src }) {
  return (
    <li className={s.item}>
      <div className={s.gradient}></div>
      <img className={s.img} src={src} />
      <div className={s.text}>
        <h3 className={s.name}>Путешествие в горы</h3>
        <p className={s.price}>от 80 000 руб</p>
      </div>
      <div className={s.more}>
        <button className={s.btn}>
          <span className={s.label}>Подробнее</span>
          <span className={s.arrow}>
            <ArrowIcon />
          </span>
        </button>
      </div>
    </li>
  );
}
