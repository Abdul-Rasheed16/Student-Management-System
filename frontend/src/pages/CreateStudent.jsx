import React, { useState } from "react";
import axios from "axios";

function CreateStudent() {
  const [userForm, setUserForm] = useState({
    sname: "",
    regno: "",
    dept: "",
    year: "",
    pno: "",
  });
  const inputsHandler = (e) => {
    setUserForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/student/create-student", userForm)
      .then((res) => {
        console.log(res.data);
        setUserForm({
          sname: "",
          regno: "",
          dept: "",
          year: "",
          pno: "",
        });
      });
  };
  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label"></label>
            <input
              type="text"
              className="form-control"
              name="sname"
              id="sname"
              placeholder="Student Name"
              value={userForm.sname}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label"></label>
            <input
              type="text"
              className="form-control"
              name="regno"
              id="regno"
              placeholder="Register Number"
              value={userForm.regno}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label"></label>
            <input
              type="text"
              className="form-control"
              name="dept"
              id="dept"
              placeholder="Department"
              value={userForm.dept}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label"></label>
            <input
              type="text"
              className="form-control"
              name="year"
              id="year"
              placeholder="Year"
              value={userForm.year}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label"></label>
            <input
              type="text"
              className="form-control"
              name="pno"
              id="pno"
              placeholder="Phone Number"
              value={userForm.pno}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Add student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CreateStudent;
