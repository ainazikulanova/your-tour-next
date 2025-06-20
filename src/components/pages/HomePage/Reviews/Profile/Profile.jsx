import s from "./Profile.module.scss";
import Image from "next/image";

export default function Profile({ name, tour, src }) {
  return (
    <div className={s.profile}>
      <div className={s.author}>
        <p className={s.name}>{name}</p>
        <p className={s.type}>{tour}</p>
      </div>
      <Image
        className={s.photo}
        src={src}
        alt={`Фотография ${name}`}
        width={75}
        height={75}
      />
    </div>
  );
}
