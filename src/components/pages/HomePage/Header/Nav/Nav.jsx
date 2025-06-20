import style from "./Nav.module.scss";

export default function Nav() {
  return (
    <>
      <nav>
        <ul className={style.list}>
          <li>
            <a href="#tours" className={style.item}>
              Туры
            </a>
          </li>
          <li>
            <a href="#create-tour" className={style.item}>
              Создать тур
            </a>
          </li>
          <li>
            <a href="#reviews" className={style.item}>
              Отзывы
            </a>
          </li>
          <li>
            <a href="#history" className={style.item}>
              Истории
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
