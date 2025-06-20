import Menu from "./Menu";
import Section from "@/components/commons/Section";
import SearchBtn from "./SearchBtn";
import style from "./Header.module.scss";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.gradient}>
        <Menu />
        <Section>
          <div className={style.content}>
            <h1 className={style.title}>Идеальные путешествия существуют</h1>
            <p className={style.subtitle}>
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
