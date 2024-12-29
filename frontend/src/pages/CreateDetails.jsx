import React, { useEffect, useState } from "react";
import axios from "axios";

function CreateDetails() {
  const [userForm, setUserForm] = useState({
    sname: "",
    dob: "",
    pno: "",
    email: "",
    bg: "",
    fname: "",
    ocp: "",
    rel: "",
    caste: "",
    hscmark: "",
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
      .post("http://localhost:4000/detail/create-details", userForm)
      .then((res) => {
        console.log(res.data);
        setUserForm({
          sname: "",
          dob: "",
          pno: "",
          email: "",
          bg: "",
          fname: "",
          ocp: "",
          rel: "",
          caste: "",
          hscmark: "",
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
              type="date"
              className="form-control"
              name="dob"
              id="dob"
              placeholder="Date of birth"
              value={userForm.dob}
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
            <label className="form-label"></label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Email"
              value={userForm.email}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label"></label>
            <input
              type="text"
              className="form-control"
              name="bg"
              id="bg"
              placeholder="Blood Group"
              value={userForm.bg}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label"></label>
            <input
              type="text"
              className="form-control"
              name="fname"
              id="fname"
              placeholder="Father Name"
              value={userForm.fname}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label"></label>
            <input
              type="text"
              className="form-control"
              name="ocp"
              id="ocp"
              placeholder="Occupation"
              value={userForm.ocp}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label"></label>
            <input
              type="text"
              className="form-control"
              name="rel"
              id="rel"
              placeholder="Religion"
              value={userForm.rel}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label"></label>
            <input
              type="text"
              className="form-control"
              name="caste"
              id="caste"
              placeholder="Caste"
              value={userForm.caste}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label"></label>
            <input
              type="text"
              className="form-control"
              name="hscmark"
              id="hscmark"
              placeholder="HSC Mark"
              value={userForm.hscmark}
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
export default CreateDetails;
