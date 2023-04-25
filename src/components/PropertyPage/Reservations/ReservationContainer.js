import { Montserrat } from "@next/font/google";
import styles from "@/styles/ReservationContainer.module.scss";
import ReservationButton from "@/components/PropertyPage/Reservations/ReservationButton.js";
import DatePicker from "@/components/PropertyPage/Reservations/DatePicker.js";
import { React, useEffect, useState, useRef } from "react";
import GuestButton2 from "@/components/PropertyPage/Reservations/Guests/GuestButton2.js";
import GuestHolder2 from "@/components/PropertyPage/Reservations/Guests/GuestHolder2.js";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--montserrat-font",
});

const ReservationContainer = ({ filtered }) => {
  const [dates, setDates] = useState({
    start: "2023-05-01",
    end: "2023-05-02",
  });
  const [days, setDays] = useState(1);
  const [guestOpen, setGuestOpen] = useState(false);
  const [numberGuests, setNumberGuests] = useState(1);

  function updateDate(name, value) {
    if (name == "Check-in") {
      let dateUpdate = value;
      setDates((prev) => {
        return { ...prev, start: value };
      });
      setDays(() => {
        const startDate = new Date(dateUpdate);
        const endDate = new Date(dates.end);
        const diffTime = endDate - startDate;
        return diffTime / (1000 * 60 * 60 * 24);
      });
    } else if (name == "Check-out") {
      let dateUpdate = value;
      setDates((prev) => {
        return { ...prev, end: value };
      });
      setDays(() => {
        const startDate = new Date(dates.start);
        const endDate = new Date(dateUpdate);
        const diffTime = endDate - startDate;
        return diffTime / (1000 * 60 * 60 * 24);
      });
    }
  }

  function guestClick() {
    setGuestOpen(!guestOpen);
  }

  function changeGuests(type) {
    if (type == "minus") {
      const newGuests = numberGuests - 1;
      setNumberGuests((prev) => prev - 1);
    } else if (type == "plus") {
      const newGuests = numberGuests + 1;
      setNumberGuests((prev) => prev + 1);
    }
  }

  return (
    <div className={styles.reservationcontainer}>
      <div className={styles.pricecontainer}>
        <h4 className={styles.number}>{`$${filtered[0].price}`}</h4>
        <p className={styles.night}>night</p>
      </div>
      <div className={styles.pickerscontainer}>
        <DatePicker
          kind="Check-in"
          start="2023-05-01"
          value={dates.start}
          updateDate={updateDate}
        />
        <DatePicker
          kind="Check-out"
          start="2023-05-02"
          value={dates.end}
          updateDate={updateDate}
        />
      </div>
      <div style={{ position: "relative" }}>
        <GuestButton2 numberGuests={numberGuests} guestClick={guestClick} />
        <GuestHolder2
          show={guestOpen}
          changeGuests={changeGuests}
          numberGuests={numberGuests}
          guestClick={guestClick}
        />
      </div>
      <ReservationButton />
      <div className={styles.centered}>
        <p>You won't be charged yet</p>
      </div>
      <div className={styles.aligner}>
        <h2
          className={styles.underline}
        >{`$${filtered[0].price} x ${days} nights`}</h2>
        <h2 className={styles.adding}>{`$${filtered[0].price * days}`} </h2>
      </div>
      <div className={styles.aligner}>
        <h2
          className={styles.underline}
        >{`cleaning price $${filtered[0].cleaning_price}`}</h2>
        <h2 className={styles.adding}>{`$${filtered[0].cleaning_price}`}</h2>
      </div>
      <hr className={styles.spacer}></hr>
      <div className={styles.aligner}>
        <h2 className={styles.total}>Total before taxes</h2>
        <h2 className={styles.total}>{`$${
          parseInt(filtered[0].price * days) +
          parseInt(filtered[0].cleaning_price)
        }`}</h2>
      </div>
    </div>
  );
};

export default ReservationContainer;
