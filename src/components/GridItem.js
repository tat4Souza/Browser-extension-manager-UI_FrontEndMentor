import classNames from "classnames";
import Button from "./Button";
import Switch from "./Switch";


function GridItem({name, logo, description, status, darkTheme, onRemoveExtension, onToggle}) {

    return (
        <div className={classNames("grid__item", {"grid__item--dark": darkTheme})}>
            <div className="grid__logo-info">
                <img alt="Expansion Logo" src={logo} />
                <div className="grid__info">
                    <h3 className="mb-1">{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className="grid__footer">
                <Button className="button--remove" darkTheme={darkTheme} onClick={()=> onRemoveExtension(name)}>Remove</Button>
                <Switch status={status} darkTheme={darkTheme} onToggle={onToggle} />
            </div>
        </div>
    )
}

export default GridItem;