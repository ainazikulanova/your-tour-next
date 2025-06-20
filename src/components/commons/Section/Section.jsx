import s from "./Section.module.scss";

export default function Section({ children, ...props }) {
  return (
    <section className={s.section} {...props}>
      {children}
    </section>
  );
}
