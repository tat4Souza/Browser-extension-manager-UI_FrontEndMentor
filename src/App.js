import Header from "./components/Header";
import {useState} from "react"
import Navbar from "./components/Navbar";
import { gridComponents } from "./assets/data/data";
import GridItem from "./components/GridItem";
import classNames from "classnames";


function App() {
  const [isDarkModeOn, setIsDarkModeOn] = useState(true);
  const [visibleList, setVisibleList] = useState(gridComponents)


  const handleActiveFilter = () => {
    setVisibleList(gridComponents)
    setVisibleList(extensions => extensions.filter(ext => ext.isActive))
  }
  
  const handleInactiveFilter = () => {  
    setVisibleList(gridComponents)
    setVisibleList(extensions => extensions.filter(ext => !ext.isActive));
  }

  const handleAllFilter = () => {
    setVisibleList(gridComponents);
  }

  const handleRemoveExtension = (name) => {
    setVisibleList(extensions => extensions.filter(ext=> ext.name !== name))
  }

  console.log()
  
  return (
    <div className={classNames("background-gradient", {"background-gradient--dark": isDarkModeOn})}>
      <div className="content">
        <Header isDarkModeOn={isDarkModeOn} setIsDarkModeOn={setIsDarkModeOn} />
        <Navbar darkTheme = {isDarkModeOn} onActiveFilter = {handleActiveFilter} onInactiveFilter={handleInactiveFilter} onAllFilter = {handleAllFilter} />
        <div className="grid">
          {visibleList.map((item, index)=> (<GridItem key={index} logo={item.logo} name={item.name} description={item.description} status={item.isActive} darkTheme={isDarkModeOn} onRemoveExtension={handleRemoveExtension} />))}
        </div>
      </div>
    </div>
  );
}

export default App;
