import style from "./Section.module.scss";

export default function Section({ children, ...props }) {
  return (
    <section className={style.section} {...props}>
      {children}
    </section>
  );
}
