import s from "./Subtitle.module.scss";

export default function Subtitle({ subtitle }) {
  return (
    <>
      <p className={s.subtitle}>{subtitle}</p>
    </>
  );
}
