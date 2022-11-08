import style from "./style.module.css";
import { useEffect, useState } from "react";
import Timer from "components/global/Icons/Timer";

export default function SaleTimer() {
  let year = new Date().getFullYear();

  // Format mm/dd/yyyy
  let dateToEnd = `11/24/${year}`;

  const calculateTimeLeft = () => {
    const difference = +new Date(dateToEnd) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft.seconds > 0) {
          return {
            ...timeLeft,
            seconds: timeLeft.seconds - 1,
          };
        }
        if (timeLeft.minutes > 0) {
          return {
            ...timeLeft,
            minutes: timeLeft.minutes - 1,
            seconds: 59,
          };
        }
        if (timeLeft.hours > 0) {
          return {
            ...timeLeft,
            hours: timeLeft.hours - 1,
            minutes: 59,
            seconds: 59,
          };
        }
        if (timeLeft.days > 0) {
          return {
            ...timeLeft,
            days: timeLeft.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={style.sale__timer}>
        <div className={style.sale__timer__header}>
          <h2 className="sale-timer__title">Oferta por tiempo limitado</h2>
          <Timer width={"40px"} fill="#fff" />
        </div>
        <div className={style.sale__timer__body}>
          <div className="sale-timer__item">
            <div className={style.number}>
              <p>{`${timeLeft.days < 10 ? "0" : ""}${timeLeft.days}`}</p>
            </div>
          </div>
          <div className="sale-timer__item">
            <div className={style.number}>
              <p className={style.two__points}>:</p>
            </div>
          </div>
          <div className="sale-timer__item">
            <div className={style.number}>
              <p>{`${timeLeft.hours < 10 ? "0" : ""}${timeLeft.hours}`}</p>
            </div>
          </div>
          <div className="sale-timer__item">
            <div className={style.number}>
              <p className={style.two__points}>:</p>
            </div>
          </div>
          <div className="sale-timer__item">
            <div className={style.number}>
              <p>{`${timeLeft.minutes < 10 ? "0" : ""}${timeLeft.minutes}`}</p>
            </div>
          </div>
          <div className="sale-timer__item">
            <div className={style.number}>
              <p className={style.two__points}>:</p>
            </div>
          </div>
          <div className="sale-timer__item">
            <div className={style.number}>
              <p>{`${timeLeft.seconds < 10 ? "0" : ""}${timeLeft.seconds}`}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
