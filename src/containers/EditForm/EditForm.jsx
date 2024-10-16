import React, { useContext } from "react";
import "./EditForm.css";
import MiddleContainer from "../../components/MiddleContainer/MiddleContainer";
import WhiteBoard from "../../components/WhiteBoard/WhiteBoard";
import { DataContext } from "../../context/DataContext";
import {
  CERTIFICATE_HEADING1,
  CERTIFICATE_HEADING2,
  CERTIFICATE_SUBHEADING,
  HEAD_NAME,
  HEAD_SIGN,
} from "../../common/constants";
const EditForm = () => {
  console.log("EF");

  const { data, setData, setSign } = useContext(DataContext);

  function handleChange(event) {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setData({
      ...data,
      [event.target.name]: value,
    });
  }
  const onImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSign(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <>
      <MiddleContainer>
        <div className="input_comp">
          <label>{CERTIFICATE_HEADING1}</label>
          <input
            type="text"
            placeholder="Certificate Headings"
            name="heading1"
            value={data.heading1}
            onChange={handleChange}
          />
        </div>
        <div className="input_comp">
          <label>{CERTIFICATE_HEADING2}</label>
          <input
            type="text"
            placeholder="Certificate Headings"
            name="heading2"
            value={data.heading2}
            onChange={handleChange}
          />
        </div>
        <div className="input_comp">
          <label>{CERTIFICATE_SUBHEADING}</label>
          <input
            type="text"
            placeholder="Certificate Headings"
            name="subheading"
            value={data.subheading}
            onChange={handleChange}
          />
        </div>
        <div className="input_comp">
          <label>{HEAD_NAME}</label>
          <input
            type="text"
            placeholder="Head Name"
            name="head_name"
            value={data.head_name}
            onChange={handleChange}
          />
        </div>
        <div className="input_comp upload_input">
          <label for="sign_img">{HEAD_SIGN}</label>
          <input
            type="file"
            id="sign_img"
            accept="image/*"
            onChange={onImage}
            className="filetype"
          />
        </div>
      </MiddleContainer>
      <WhiteBoard />
    </>
  );
};

export default React.memo(EditForm);
