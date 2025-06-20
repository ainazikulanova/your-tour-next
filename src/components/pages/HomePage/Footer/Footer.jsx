import s from "./Footer.module.scss";
import SocialMediaBlock from "./SocialMediaBlock";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <SocialMediaBlock />
    </footer>
  );
}
