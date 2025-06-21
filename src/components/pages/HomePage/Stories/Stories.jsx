import Section from "@/components/commons/Section";
import s from "./Stories.module.scss";
import Title from "@/components/commons/Title";
import Subtitle from "@/components/commons/Subtitle";
import Item from "./Item";

const stories = [
  {
    id: 1,
    src: "/images/stories/story_photo_1.png",
    variant: "YouTube",
    showBenefits: true,
  },
  {
    id: 2,
    src: "/images/stories/story_photo_2.png",
    variant: "ВКонтакте",
    showBenefits: false,
  },
  {
    id: 3,
    src: "/images/stories/story_photo_3.png",
    variant: "ВКонтакте",
    showBenefits: false,
  },
];

export default function Stories({ src, variant }) {
  return (
    <Section>
      <Title title={"Истории путешествий"} />
      <Subtitle
        subtitle={
          "Идейные соображения высшего порядка, а также рамки и место обучения кадров"
        }
      />
      {stories.map((story) => (
        <Item
          key={story.id}
          src={story.src}
          variant={story.variant}
          showBenefits={story.showBenefits}
        />
      ))}
    </Section>
  );
}
