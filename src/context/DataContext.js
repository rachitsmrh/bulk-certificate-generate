import React, { createContext, useState, useCallback, useMemo } from "react";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import sign_img from "../assets/sign.png";
import {
  defualtStudents,
  HEADING1,
  NAME,
  PARAGRAPH_HEADING,
  PARAGRAPH_SUBHEADING,
} from "../common/constants";

// Create a context
export const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    heading1: HEADING1,
    heading2: PARAGRAPH_HEADING,
    name: defualtStudents[0].f_name + " " + defualtStudents[0].l_name,
    subheading: PARAGRAPH_SUBHEADING,
    head_name: NAME,
  });
  const [sign, setSign] = useState(sign_img);
  const [templateId, setTemplateId] = useState(0);
  const [studentList, setStudentList] = useState(defualtStudents);
  const [bulkUpload, setBulkUpload] = useState(false);

  const PrintPdf = async (name) => {
    const divToDisplay = document.getElementById("content");
    console.log(divToDisplay);
    html2canvas(divToDisplay, { dpi: 2000 }).then(function (canvas) {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
      });
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        pdfWidth,
        pdfHeight,
        undefined,
        "FAST"
      );

      pdf.save(name + "_certificate.pdf");
    });
  };

  const downloadCertificate = useCallback(async () => {
    console.log("dc");
    for (var i = 0; i < studentList.length; i++) {
      await PrintPdf(studentList[i].f_name + " " + studentList[i].l_name);
    }
  }, [studentList]);

  const contextValue = useMemo(
    () => ({
      downloadCertificate,
      studentList,
      setStudentList,
      data,
      setData,
      sign,
      setSign,
      templateId,
      setTemplateId,
      bulkUpload,
      setBulkUpload,
    }),
    [downloadCertificate, studentList, data, sign, templateId, bulkUpload]
  );

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};
