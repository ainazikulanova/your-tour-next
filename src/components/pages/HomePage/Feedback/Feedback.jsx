import Section from "@/components/commons/Section";
import s from "./Feedback.module.scss";
import Image from "next/image";

export default function Feedback() {
  return (
    <Section className={s.feedback}>
      <Image
        className={s.img}
        src="/images/footer/footer_photo.png"
        alt="Дом на берегу реки на фоне снежных гор."
        width={370}
        height={370}
      />
      <div className={s.text}>
        <h2 className={s.title}>Пора в путешествие вместе с нами!</h2>
        <p className={s.subtitle}>
          Напиши на почту и узнай подробности на{" "}
          <a className={s.email} href="mailto:yourtour@gmail.com">
            yourtour@gmail.com
          </a>
        </p>
      </div>
    </Section>
  );
}
