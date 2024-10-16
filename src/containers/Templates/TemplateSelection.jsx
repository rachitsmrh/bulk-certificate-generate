import React, { useContext } from "react";

import t1 from "../../assets/t1.PNG";
import t2 from "../../assets/t2.PNG";
import t3 from "../../assets/t3.PNG";
import "./Template.css";
import WhiteBoard from "../../components/WhiteBoard/WhiteBoard";
import MiddleContainer from "../../components/MiddleContainer/MiddleContainer";
import { DataContext } from "../../context/DataContext";

const TemplateSelection = () => {
  console.log("TS");

  const { templateId, setTemplateId } = useContext(DataContext);
  return (
    <>
      <MiddleContainer>
        <img
          onClick={() => setTemplateId(0)}
          className={templateId === 0 ? "border_blue" : "border_black"}
          src={t1}
          alt=""
        />
        <img
          onClick={() => setTemplateId(1)}
          className={templateId === 1 ? "border_blue" : "border_black"}
          src={t2}
          alt=""
        />
        <img
          onClick={() => setTemplateId(2)}
          className={templateId === 2 ? "border_blue" : "border_black"}
          src={t3}
          alt=""
        />
      </MiddleContainer>
      <WhiteBoard />
    </>
  );
};

export default React.memo(TemplateSelection);
