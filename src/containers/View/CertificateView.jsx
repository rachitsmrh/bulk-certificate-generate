import React, { useContext } from "react";
import MiddleContainer from "../../components/MiddleContainer/MiddleContainer";
import download from "../../assets/download.png";
import "./View.css";
import { DataContext } from "../../context/DataContext";
import WhiteBoard from "../../components/WhiteBoard/WhiteBoard";
import { DOWNLOAD_CERTIFICATE } from "../../common/constants";

const CertificateView = () => {
  console.log("CV");
  const { downloadCertificate } = useContext(DataContext);
  return (
    <>
      <MiddleContainer>
        <div className="editor_head_comp" onClick={() => downloadCertificate()}>
          <p>{DOWNLOAD_CERTIFICATE}</p>
          <img src={download} alt="download" />
        </div>
      </MiddleContainer>
      <WhiteBoard />
    </>
  );
};

export default React.memo(CertificateView);
