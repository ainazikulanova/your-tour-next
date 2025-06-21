import Section from "@/components/commons/Section";
import s from "./ChooseTour.module.scss";
import Title from "@/components/commons/Title";
import Nav from "./Nav";
import Cards from "./Cards";

export default function ChooseTour() {
  return (
    <Section className={s.tours}>
      <Title title={"Выбери свой тур"} />
      <Nav />
      <Cards />
    </Section>
  );
}
