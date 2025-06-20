import style from "./Menu.module.scss";
import Logo from "../Logo";
import Nav from "../Nav";
import Contact from "../Contact";

export default function Menu() {
  return (
    <>
      <div id="header" className={style.menu}>
        <Logo />
        <Nav />
        <Contact />
      </div>
    </>
  );
}
