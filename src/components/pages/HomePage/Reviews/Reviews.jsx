import s from "./Reviews.module.scss";
import List from "./List";
import Title from "@/components/commons/Title";
import Subtitle from "@/components/commons/Subtitle";

export default function Reviews() {
  return (
    <>
      <Title title={"Отзывы наших путешественников"} />
      <Subtitle
        subtitle={
          "Идейные соображения высшего порядка, а также рамки и место обучения кадров"
        }
      />
      <List />
    </>
  );
}
