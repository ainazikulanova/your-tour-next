import s from "./Benefits.module.scss";

export default function Benefits() {
  return (
    <ul className={s.benefits}>
      <li className={s.benefit}>вкусная еда</li>
      <li className={s.benefit}>дешевый транспорт</li>
      <li className={s.benefit}>красивый город.</li>
    </ul>
  );
}
