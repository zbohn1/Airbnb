import styles from "@/styles/SearchForm.module.scss";
import { Montserrat } from "@next/font/google";
import RegionHolder from "@/components/RegionHolder.js";
import GuestHolder from "@/components/Guests/GuestHolder.js";
import React from "react";
import { SearchFilterContext } from "@/pages/index.js";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--montserrat-font",
});

const SearchForm = ({
  searchOpen,
  menuOpen,
  regionOpen,
  guestOpen,
  openClose,
  setMenuOpen,
  setSearchOpen,
}) => {
  const [guests, setGuests] = React.useState(0);
  const { searchState, setSearchState, searchIncrement, setSearchIncrement } =
    React.useContext(SearchFilterContext);

  function changeGuests(type) {
    if (type == "minus") {
      const newGuests = guests - 1;
      setGuests((prev) => prev - 1);
      setSearchState((prev) => {
        return { ...prev, guests: newGuests };
      });
    } else if (type == "plus") {
      const newGuests = guests + 1;
      setGuests((prev) => prev + 1);
      setSearchState((prev) => {
        return { ...prev, guests: newGuests };
      });
    }
    console.log(searchState);
  }

  return (
    <>
      <form
        className={searchOpen ? styles.visibleform : styles.hiddenform}
        onSubmit={(event) => {
          event.preventDefault();
          setMenuOpen(false);
          setSearchOpen(false);
          setSearchIncrement((prev) => prev + 1);
        }}
      >
        <div className={regionOpen ? styles.linerrselect : styles.linergselect}>
          {" "}
        </div>
        <div
          className={
            regionOpen
              ? styles.rbuttoncontainerselected
              : styles.rbuttoncontainer
          }
          onClick={() => openClose("region")}
        >
          <div className={styles.where}>Where</div>
          <div className={styles.searchregion}>Search by region</div>
          <RegionHolder show={regionOpen} openClose={openClose} />
        </div>
        <div
          className={
            guestOpen
              ? styles.gbuttoncontainerselected
              : styles.gbuttoncontainer
          }
          onClick={() => openClose("guest")}
        >
          <div className={styles.gbuttoninnercontainer1}>
            <div className={styles.who}>Who</div>
            <div className={styles.addguests}>
              {guests == 0 ? "Add guests" : `${guests} guests`}
            </div>
          </div>
          <button className={styles.gbutton}>
            <img
              src="/images/searchicon.png"
              alt="search icon"
              style={{ width: "15px" }}
            />
            <span>Search</span>
          </button>
        </div>
        <GuestHolder show={guestOpen} changeGuests={changeGuests} />
      </form>
    </>
  );
};

export default SearchForm;
