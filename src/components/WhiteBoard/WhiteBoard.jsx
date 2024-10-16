import React, { useContext, useMemo } from "react";
import "./WhiteBoard.css";
import bg0 from "../../assets/bg0.png";
import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";
import { DataContext } from "../../context/DataContext";
import { CERTIFICATE_COMPLETION } from "../../common/constants";

const WhiteBoard = () => {
  console.log("WB");

  const { data, sign, templateId, studentList } = useContext(DataContext);
  const getBackgroundImage = useMemo(() => {
    if (templateId === 0) return bg0;
    else if (templateId === 1) return bg1;
    else return bg2;
  }, [templateId]);

  return (
    <div className="student_certificates">
      {studentList.map((student, index) => (
        <div className="editor_white_board" key={index}>
          <div
            className="certificate"
            style={{
              "--background-image": `url(${getBackgroundImage})`,
            }}
            id="content"
          >
            <div className="cert_head">
              <h2>{data.heading1}</h2>
              <h1>{CERTIFICATE_COMPLETION}</h1>
            </div>
            <div className="cert_main">
              <p>{data.heading2}</p>
              <h2>{student.f_name + " " + student.l_name}</h2>
              <p>{data.subheading} </p>
            </div>
            <div className="cert_sign">
              <img src={sign} alt="" />
              <p>{data.head_name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(WhiteBoard);
