import { useState } from "react";
import styles from "./Nav.module.scss";

export default function Nav() {
  const [activeTab, setActiveTab] = useState("Популярные");

  const tabs = ["Популярные", "Авторские", "Походы", "Сплавы", "Велопрогулки"];

  return (
    <nav>
      <ul className={styles.tour}>
        {tabs.map((tab) => (
          <li key={tab}>
            <button
              className={`${styles.btn} ${
                activeTab === tab ? styles["btn_state-active"] : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
