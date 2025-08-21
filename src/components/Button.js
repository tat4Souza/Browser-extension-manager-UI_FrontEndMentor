import classNames from "classnames";

function Button({ children, className, darkTheme, onClick, isActive }) {
  return (
    <button
      className={classNames("button", className, {
        "button--active": isActive,
        "button--dark": darkTheme,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
