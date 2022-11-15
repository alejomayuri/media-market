import style from "./style.module.css";
import Whatsapp from "components/global/Icons/Whatsapp";

export default function FixedWhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511999999999"
      className={style.fixed_whatsapp_button}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Whatsapp fill="#fff" width={70} height={70} />
    </a>
  );
}
