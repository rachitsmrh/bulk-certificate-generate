import React from "react";
import "./MiddleContainer.css";
const MiddleContainer = (props) => {
  console.log("MC");

  return <div className="middle_div_icon_list">{props.children}</div>;
};

export default React.memo(MiddleContainer);
