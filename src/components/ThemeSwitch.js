import classNames from "classnames";
import { useState } from "react";

function ThemeSwitch({ darkTheme, setDarkTheme }) {
  const [animated, setIsAnimated] = useState(false);

  return (
    <div>
      <button
        className={classNames("switch", {
          "switch--darkMode": darkTheme,
          "switch--lightMode": !darkTheme,
        })}
        onClick={() => {
          setDarkTheme((cur) => !cur);
          setIsAnimated(true);
          setTimeout(() => {
            setIsAnimated(false);
          }, 500);
        }}
      >
        <i
          className={classNames("pi", {
            "pi-sun": darkTheme,
            "pi-moon": !darkTheme,
            animated: animated,
          })}
        ></i>
      </button>
    </div>
  );
}

export default ThemeSwitch;
