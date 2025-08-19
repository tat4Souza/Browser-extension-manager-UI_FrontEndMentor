import {useState} from 'react';
import classNames from "classnames/bind";
import Button from "./Button";

function Navbar({darkTheme, onActiveFilter, onInactiveFilter, onAllFilter}) {
     const [activeButton, setIsActiveButton] = useState('All');

    return (
    <div className="navbar mb-4">
        <h1 className={classNames("nav__h1", {"nav__h1--dark": !darkTheme}) } >Extensions List</h1>
        <div className="navbar__buttons">
            <Button isActive={activeButton === 'All'} buttonId = 'All' onClick={()=> {setIsActiveButton('All'); onAllFilter();}} darkTheme={darkTheme}>All</Button>
            <Button isActive={activeButton === 'Active'} buttonId = 'Active' darkTheme={darkTheme} onClick={()=> {setIsActiveButton('Active'); onActiveFilter();}}>Active</Button>
            <Button isActive={activeButton === 'Inactive'} buttonId = 'Inactive' darkTheme={darkTheme} onClick={()=> {setIsActiveButton('Inactive'); onInactiveFilter();}} >Inactive</Button>
        </div>
    </div>)
}

export default Navbar;