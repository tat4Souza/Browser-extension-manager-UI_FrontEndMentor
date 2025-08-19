import classNames from "classnames";

function Switch({status, darkTheme, onToggle}) {

    return (
        <div className={classNames("switch-btn", {"switch-btn--toggled": status, "switch-btn--dark": darkTheme})} onClick={onToggle} tabIndex="0">
            <span className={classNames("switch-btn__indicator", {"switch-btn__indicator--toggled": status})} ></span>
        </div>
    )
};

export default Switch;