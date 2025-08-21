import logoDark from "../assets/logos/logo.svg";
import logoLight from "../assets/logos/logoLight.svg";
import classNames from "classnames";
import ThemeSwitch from "./ThemeSwitch";

function Header({ isDarkModeOn, setIsDarkModeOn }) {
  return (
    <header
      className={classNames("header mb-6", {
        "header--darkMode": isDarkModeOn,
        "header--lightMode": !isDarkModeOn,
      })}
    >
      <div className={classNames({ "img-container": isDarkModeOn })}>
        <img
          className="img"
          alt="logo"
          src={isDarkModeOn ? logoLight : logoDark}
        />
      </div>
      <ThemeSwitch darkTheme={isDarkModeOn} setDarkTheme={setIsDarkModeOn} />
    </header>
  );
}

export default Header;
