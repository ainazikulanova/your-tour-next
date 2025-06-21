import ArrowIcon from "@/components/icons/ArrowIcon";
import s from "./Item.module.scss";
import Benefits from "../Benefits";

export default function Item({ src, variant, showBenefits = false }) {
  return (
    <div className={s.conteiner}>
      <ul className={s.list}>
        <li className={s.item}>
          <div className={s.gradient}></div>
          <img className={s.img} src={src} alt="Фото тура" />
          <div className={s.text}>
            <h3 className={s.title}>Автостопом в Стамбул</h3>
            <p className={s.subtitle}>
              Идейные соображения высшего порядка, а также рамки и место
              обучения кадров обеспечивает широкому кругу (специалистов) участие
              в формировании новых предложений.
            </p>
            {showBenefits && <Benefits />}
          </div>

          <div className={s.actions}>
            <div className={s.more}>
              <button className={s.btn}>
                <span className={s.label}>Подробнее</span>
                <span className={s.arrow}>
                  <ArrowIcon />
                </span>
              </button>
            </div>
            <div className={s.nav}>
              <a href="#" className={s.link}>
                telegram
              </a>
              <a href="#" className={s.link}>
                facebook
              </a>
              <a href="#" className={s.link}>
                {variant}
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
