import style from "./style.module.css";
import logo from "logo.jpeg";
import map from "media/map.png";
import Phone from "components/global/Icons/Phone";
import Facebook from "components/global/Icons/Facebook";
import Twitter from "components/global/Icons/Twitter";
import Whatsapp from "components/global/Icons/Whatsapp";

export default function TopFooter() {
  return (
    <footer>
      <div className={style.top__footer}>
        <div className={style.container}>
          <div>
            <img className={style.logo} src={logo} alt="logo" />
            <div>
              <p className={style.info}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                euismod, nisi eget consectetur consectetur, nisi nisi
                consectetur nisi, eget consectetur nisi nisi eget consectetur.
              </p>
            </div>
          </div>
          <div>
            <div className={style.address}>
              <strong>
                Av. Gral. Antonio Alvarez de Arenales 2153, Lince 15046
              </strong>
              <p>Lince, Lima, Perú</p>
            </div>
            <div>
              <div>
                <Phone width={30} />
                <p>(+51) 987-654-321</p>
              </div>
              <div className={style.social__container}>
                <Facebook width={30} />
                <Twitter width={30} />
                <Whatsapp width={30} />
              </div>
              <div className={style.map__container}>
                <img src={map} alt="map" />
              </div>
            </div>
          </div>
          <div className={style.form__container}>
            <h3>CONTÁCTANOS</h3>
            <form>
              <input className={style.input} type="text" placeholder="Nombre" />
              <input className={style.input} type="text" placeholder="Correo" />
              <input
                className={style.input}
                type="text"
                placeholder="Teléfono"
              />
              <textarea className={style.textarea} placeholder="Mensaje" />
              <button className={style.submit}>Enviar</button>
            </form>
          </div>
        </div>
      </div>
      <p className={style.bottom__footer__text}>
        Copyright© 2022 - Todos los derechos reservados | Términos y Condiciones
        | Políticas de privacidad | Política de calidad, garantía y devoluciones
        | Política de cookies | Formas de pago | Promociones y Cupones | Tarifas
        y zonas de reparto
      </p>
    </footer>
  );
}
