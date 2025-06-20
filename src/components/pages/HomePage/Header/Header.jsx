import Menu from "./Menu";
import Section from "@/components/commons/Section";
import SearchBtn from "./SearchBtn";
import s from "./Header.module.scss";

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.gradient}>
        <Menu />
        <Section>
          <div className={s.content}>
            <h1 className={s.title}>Идеальные путешествия существуют</h1>
            <p className={s.subtitle}>
              Идейные соображения высшего порядка, а также рамки и место
              обучения кадров
            </p>
            <SearchBtn />
          </div>
        </Section>
      </div>
    </header>
  );
}
