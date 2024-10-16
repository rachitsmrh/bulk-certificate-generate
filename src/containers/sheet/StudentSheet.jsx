import React, { useContext } from "react";
import MiddleContainer from "../../components/MiddleContainer/MiddleContainer";
import WhiteBoard from "../../components/WhiteBoard/WhiteBoard";
import { DataContext } from "../../context/DataContext";
import xlsx from "xlsx";
import "./StudentSheet.css";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";

const StudentSheet = () => {
  console.log("SS");

  const { studentList, setStudentList, bulkUpload } = useContext(DataContext);
  const readUploadFile = async (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = xlsx.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = xlsx.utils.sheet_to_json(worksheet);
        setStudentList(json);

        console.log(studentList);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setStudentList((prevList) => {
      const updatedFirstObject = { ...prevList[0], [name]: value };
      return [updatedFirstObject, ...prevList.slice(1)];
    });
  };

  return (
    <>
      <MiddleContainer>
        <div className="input_comp">
          <label>First Name</label>
          <input
            type="text"
            placeholder="First Name"
            name="f_name"
            value={studentList[0].f_name}
            onChange={handleChange}
            disabled={bulkUpload}
          />
        </div>
        <div className="input_comp">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="l_name"
            name="l_name"
            value={studentList[0].l_name}
            onChange={handleChange}
            disabled={bulkUpload}
          />
        </div>
        <div className="input_comp">
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={studentList[0].email}
            onChange={handleChange}
            disabled={bulkUpload}
          />
        </div>
        <div className="input_comp">
          <label> Enable Bulk Upload</label>
          <ToggleSwitch />
        </div>
        {bulkUpload && (
          <div className="input_comp upload_input">
            <label for="upload">Select Excel File:</label>
            <label for="upload">
              Excel file must the having column name as :<mark>"f_name"</mark> =
              First Name
              <mark>"l_name"</mark> = Last Name and
              <mark>"email"</mark> = Email
            </label>
            <input
              type="file"
              name="upload"
              id="accept"
              accept=".xlsx*"
              onChange={readUploadFile}
            />
          </div>
        )}

        <div className="stu_list">
          {studentList.map((item, index) => (
            <div className="stu_list_comp" key={index}>
              <p>{index + 1}</p>
              <p>First Name : {item.f_name}</p>
              <p>Last Name : {item.l_name}</p>
              <p>Email : {item.email}</p>
            </div>
          ))}
        </div>
      </MiddleContainer>
      <WhiteBoard />
    </>
  );
};

export default React.memo(StudentSheet);
