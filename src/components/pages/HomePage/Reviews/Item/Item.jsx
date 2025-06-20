import clsx from "clsx";
import s from "./Item.module.scss";
import Profile from "../Profile";

export default function Item({ text, name, tour, src, variant }) {
  return (
    <li className={clsx(s.item, s[variant])}>
      {text.split("\n\n").map((paragraph, index) => (
        <p className={s.text} key={index}>
          {paragraph}
        </p>
      ))}
      <Profile name={name} tour={tour} src={src} />
    </li>
  );
}
