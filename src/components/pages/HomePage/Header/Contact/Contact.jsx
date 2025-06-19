import style from "./Contact.module.scss";

export default function Contact() {
  return (
    <>
      <link id="header-number" className={style.number} href="tel:+79999999999">
        +7 999 999 99 99
      </link>
    </>
  );
}
