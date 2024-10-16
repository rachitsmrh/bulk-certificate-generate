import React, { useContext } from "react";
import "./ToggleSwitch.css";
import { DataContext } from "../../context/DataContext";
import { defualtStudents } from "../../common/constants";

const ToggleSwitch = () => {
  console.log("TS");

  const { bulkUpload, setBulkUpload, setStudentList } = useContext(DataContext);

  const handleToggle = () => {
    setBulkUpload((prevState) => {
      if (prevState) {
        setStudentList(defualtStudents);
      }
      return !prevState;
    });
  };

  return (
    <div className="toggle-switch" onClick={handleToggle}>
      <div className={`switch ${bulkUpload ? "on" : "off"}`}></div>
    </div>
  );
};

export default React.memo(ToggleSwitch);
