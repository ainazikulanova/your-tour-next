import s from "./Contact.module.scss";

export default function Contact() {
  return (
    <>
      <a id="header-number" className={s.number} href="tel:+79999999999">
        +7 999 999 99 99
      </a>
    </>
  );
}
