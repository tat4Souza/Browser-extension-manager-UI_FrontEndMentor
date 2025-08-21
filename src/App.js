import Header from "./components/Header";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { gridComponents } from "./assets/data/data";
import GridItem from "./components/GridItem";
import classNames from "classnames";
import DeleteModal from "./components/DeleteModal";
import NoExtensionsFound from "./components/NoExtensionsFound";

function App() {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);
  const [extensionList, setExtensionList] = useState(gridComponents);
  const [filter, setFilter] = useState("all");
  const [selectedExtension, setSelectedExtension] = useState(null);
  const [openDeleteModal, setIsOpenDeleteModal] = useState(false);

  const visibleList = extensionList.filter((ext) => {
    switch (filter) {
      case "active":
        return ext.isActive;
      case "inactive":
        return !ext.isActive;
      case "all":
      default:
        return true;
    }
  });

  const handleActiveFilter = () => {
    setFilter("active");
  };
  const handleInactiveFilter = () => {
    setFilter("inactive");
  };
  const handleAllFilter = () => {
    setFilter("all");
  };

  const handleRemoveExtension = (name) => {
    setSelectedExtension(name);
    setIsOpenDeleteModal(true);
  };

  const handleConfirmRemove = () => {
    setExtensionList((extensions) =>
      extensions.filter((ext) => ext.name !== selectedExtension)
    );
    setIsOpenDeleteModal(false);
  };

  const handleToggle = (name) => {
    setExtensionList((prev) =>
      prev.map((ext) =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  return (
    <div
      className={classNames("background-gradient", {
        "background-gradient--dark": isDarkModeOn,
      })}
    >
      <div className="content">
        <Header isDarkModeOn={isDarkModeOn} setIsDarkModeOn={setIsDarkModeOn} />
        <Navbar
          darkTheme={isDarkModeOn}
          onActiveFilter={handleActiveFilter}
          onInactiveFilter={handleInactiveFilter}
          onAllFilter={handleAllFilter}
        />
        <div
          className={classNames({
            "content-items": extensionList.length === 0,
            grid: extensionList.length !== 0,
          })}
        >
          {extensionList.length !== 0 ? (
            visibleList.map((ext, index) => (
              <GridItem
                key={index}
                logo={ext.logo}
                name={ext.name}
                description={ext.description}
                status={ext.isActive}
                darkTheme={isDarkModeOn}
                onRemoveExtension={handleRemoveExtension}
                onToggle={() => handleToggle(ext.name)}
              />
            ))
          ) : (
            <NoExtensionsFound />
          )}
        </div>
        {openDeleteModal && (
          <DeleteModal
            darkTheme={isDarkModeOn}
            name={selectedExtension}
            onClose={() => setIsOpenDeleteModal(false)}
            onConfirm={handleConfirmRemove}
          />
        )}
      </div>
    </div>
  );
}

export default App;
