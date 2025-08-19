import classNames from "classnames/bind";
import Button from "./Button";

function Navbar({darkTheme}) {
    console.log("tema", darkTheme)
    return (
    <div className="navbar mb-4">
        <h1 className={classNames("nav__h1", {"nav__h1--dark": !darkTheme}) } >Extensions List</h1>
        <div className="navbar__buttons">
            <Button isActive={true} darkTheme={darkTheme}>All</Button>
            <Button darkTheme={darkTheme}>Active</Button>
            <Button darkTheme={darkTheme}>Inactive</Button>
        </div>
    </div>)
}

export default Navbar;