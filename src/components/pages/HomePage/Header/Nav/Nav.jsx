import s from "./Nav.module.scss";

export default function Nav() {
  return (
    <>
      <nav>
        <ul className={s.list}>
          <li>
            <a href="#tours" className={s.item}>
              Туры
            </a>
          </li>
          <li>
            <a href="#create-tour" className={s.item}>
              Создать тур
            </a>
          </li>
          <li>
            <a href="#reviews" className={s.item}>
              Отзывы
            </a>
          </li>
          <li>
            <a href="#history" className={s.item}>
              Истории
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
