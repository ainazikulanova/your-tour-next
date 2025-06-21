import s from "./Reviews.module.scss";
import List from "./List";
import Title from "@/components/commons/Title";
import Subtitle from "@/components/commons/Subtitle";
import Section from "@/components/commons/Section";

export default function Reviews() {
  return (
    <Section>
      <Title title={"Отзывы наших путешественников"} />
      <Subtitle
        subtitle={
          "Идейные соображения высшего порядка, а также рамки и место обучения кадров"
        }
      />
      <List />
    </Section>
  );
}
