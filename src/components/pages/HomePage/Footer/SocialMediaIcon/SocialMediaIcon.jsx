import s from "./SocialMediaIcon.module.scss";
import Image from "next/image";

export default function SocialMediaIcon({ iconSrc, socialName, href = "#" }) {
  return (
    <li>
      <a className={s.item} href={href}>
        <Image
          src={iconSrc}
          alt={socialName}
          width={26}
          height={26}
          className={s.icon}
        />
        <p className={s.name}>{socialName}</p>
      </a>
    </li>
  );
}
