import Header from "./components/Header";
import {useState} from "react"
import Navbar from "./components/Navbar";
import { gridComponents } from "./assets/data/data";
import GridItem from "./components/GridItem";
import classNames from "classnames";


function App() {
  const [isDarkModeOn, setIsDarkModeOn] = useState(true);
  
  return (
    <div className={classNames("background-gradient", {"background-gradient--dark": isDarkModeOn})}>
      <div className="content">
        <Header isDarkModeOn={isDarkModeOn} setIsDarkModeOn={setIsDarkModeOn} />
        <Navbar darkTheme = {isDarkModeOn} />
        <div className="grid">
          {gridComponents.map((item, index)=> (<GridItem key={index} logo={item.logo} name={item.name} description={item.description} status={item.isActive} darkTheme={isDarkModeOn} />))}
        </div>
      </div>
    </div>
  );
}

export default App;
