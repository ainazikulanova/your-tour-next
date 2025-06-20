import s from "./SocialMediaBlock.module.scss";
import TgIcon from "@/components/icons/TgIcon";
import FbIcon from "@/components/icons/FbIcon";
import VkIcon from "@/components/icons/VkIcon";

const socialLinks = [
  {
    Icon: TgIcon,
    name: "telegram",
  },
  {
    Icon: FbIcon,
    name: "facebook",
  },
  {
    Icon: VkIcon,
    name: "vkontakte",
  },
];

export default function SocialMediaBlock() {
  return (
    <div className={s.social}>
      <h2 className={s.title}>Наши социальные сети</h2>
      <ul className={s.list}>
        {socialLinks.map(({ Icon, name }) => (
          <li key={name}>
            <a className={s.footer__item}>
              <Icon />
              <p>{name}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
