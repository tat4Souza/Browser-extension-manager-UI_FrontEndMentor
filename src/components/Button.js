import classNames from "classnames";
import { useState } from "react";

function Button({children, className, darkTheme}) {
    const [isActive, setIsActive] = useState(false);

    return (
        <button className={classNames("button", className, {"button--active": isActive, "button--dark": darkTheme})} onClick={()=> setIsActive(cur => !cur)}>
            {children}
        </button>
    )
}

export default Button;