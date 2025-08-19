import classNames from "classnames";
import { useState } from "react";

function Switch({status, darkTheme}) {
    const [isActive, setIsActive] = useState(status);
    console.log(status);

    return (
        <div className={classNames("switch-btn", {"switch-btn--toggled": isActive, "switch-btn--dark": darkTheme})} onClick={()=> setIsActive(cur => !cur)} tabIndex="0">
            <span className={classNames("switch-btn__indicator", {"switch-btn__indicator--toggled": isActive})} ></span>
        </div>
    )
};

export default Switch;