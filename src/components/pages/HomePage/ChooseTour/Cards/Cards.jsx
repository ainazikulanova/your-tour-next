import Item from "../Item";
import s from "./Cards.module.scss";

const cards = [
  {
    id: 1,
    src: "/images/tour-cards/card_tour_photo_1.png",
  },
  {
    id: 2,
    src: "/images/tour-cards/card_tour_photo_2.png",
  },
  {
    id: 3,
    src: "/images/tour-cards/card_tour_photo_3.png",
  },
  {
    id: 4,
    src: "/images/tour-cards/card_tour_photo_4.png",
  },
  {
    id: 5,
    src: "/images/tour-cards/card_tour_photo_5.png",
  },
  {
    id: 6,
    src: "/images/tour-cards/card_tour_photo_6.png",
  },
];

export default function Cards() {
  return (
    <ul className={s.cards}>
      {cards.map((card) => (
        <Item key={card.id} src={card.src} />
      ))}
    </ul>
  );
}
