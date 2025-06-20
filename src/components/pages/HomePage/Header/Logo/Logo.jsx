import s from "./Logo.module.scss";
import LogoWhiteIcon from "@/components/icons/LogoWhiteIcon";

export default function Logo() {
  return (
    <>
      <LogoWhiteIcon className={s.logo} />
    </>
  );
}
