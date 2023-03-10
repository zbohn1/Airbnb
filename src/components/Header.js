import styles from "@/styles/Header.module.scss";
import Search from "@/components/Search.js";
import SearchForm from "@/components/SearchForm.js";
import { react, useEffect, useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [regionOpen, setRegionOpen] = useState(false);
  const [guestOpen, setGuestOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  function searchClick(e) {
    setMenuOpen(true);
    if (e.currentTarget.id == "regionbutton") {
      setRegionOpen(true);
    } else if (e.currentTarget.id == "guestbutton") {
      setGuestOpen(true);
    }
    setTimeout(() => setSearchOpen(true), 250);
  }

  function openClose(title) {
    if (title == "region") {
      setRegionOpen(true);
      setGuestOpen(false);
      console.log("huh");
    } else if (title == "guest") {
      setRegionOpen(false);
      setGuestOpen(true);
      console.log("it is working");
    }
  }

  function closeMenu() {
    setMenuOpen(false);
    setRegionOpen(false);
    setGuestOpen(false);
    setSearchOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);
      setRegionOpen(false);
      setGuestOpen(false);
      setSearchOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headeritem1}>
          <img src="/images/logo.png" className={styles.logo} />
        </div>
        <div className={styles.headeritem2}>
          <Search searchClick={searchClick} menuOpen={menuOpen} />
        </div>
        <div className={styles.headeritem3}>
          <h6>login</h6>
        </div>
        <div
          className={menuOpen ? styles.headerlengthen : styles.headershorten}
        >
          <SearchForm
            searchOpen={searchOpen}
            menuOpen={menuOpen}
            regionOpen={regionOpen}
            guestOpen={guestOpen}
            openClose={openClose}
            setMenuOpen={setMenuOpen}
            setSearchOpen={setSearchOpen}
          />
        </div>
        {menuOpen && (
          <div className={styles.opacitylayer} onClick={closeMenu}></div>
        )}
      </header>
    </>
  );
};

export default Header;
