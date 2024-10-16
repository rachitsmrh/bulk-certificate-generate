import React, { useContext } from "react";

import cert from "../../assets/cert.png";
import download from "../../assets/download.png";
import {
  BULK_CERTIFICATE_GENERATOR,
  SUBMIT_REVIEW,
} from "../../common/constants";
import "./TopBar.css";
import { DataContext } from "../../context/DataContext";

const TopBar = () => {
  console.log("TB");

  const { downloadCertificate } = useContext(DataContext);
  return (
    <div className="editor_head">
      <div className="editor_head_comp">
        <img src={cert} alt="Badge" />
        <h2>{BULK_CERTIFICATE_GENERATOR}</h2>
      </div>
      <div className="editor_head_comp">
        <a href="https://forms.gle/zXJz1KsxNpiRpeMf7" target="blank">
          {SUBMIT_REVIEW}
        </a>
        <img
          src={download}
          alt="Download File"
          onClick={() => downloadCertificate()}
        />
      </div>
    </div>
  );
};

export default React.memo(TopBar);
