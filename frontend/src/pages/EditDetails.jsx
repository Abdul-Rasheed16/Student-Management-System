import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function EditDetails() {
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
  let params = useParams();
  let navigate = useNavigate();
  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };
  const onUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/detail/update-details/" + params.id, {
        sname: userForm.sname,
        dob: userForm.dob,
        pno: userForm.pno,
        email: userForm.email,
        bg: userForm.bg,
        fname: userForm.fname,
        ocp: userForm.ocp,
        rel: userForm.rel,
        caste: userForm.caste,
        hscmark: userForm.hscmark,
      })
      .then((res) => {
        console.log({ status: res.status });
        navigate("/detail-list");
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/detail/get-details/" + params.id)
      .then((res) => {
        setUserForm({
          sname: res.data.data.sname,
          dob: res.data.data.dob,
          pno: res.data.data.pno,
          email: res.data.data.email,
          bg: res.data.data.bg,
          fname: res.data.data.fname,
          ocp: res.data.data.ocp,
          rel: res.data.data.rel,
          caste: res.data.data.caste,
          hscmark: res.data.data.hscmark,
        });
      });
  }, []);
  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onUpdate}>
          <div className="mb-3">
            <label className="form-label">Student Name</label>
            <input
              type="text"
              className="form-control"
              name="sname"
              id="sname"
              value={userForm.sname}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Date of birth</label>
            <input
              type="date"
              className="form-control"
              name="dob"
              id="dob"
              value={userForm.dob}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone number</label>
            <input
              type="text"
              className="form-control"
              name="pno"
              id="pno"
              value={userForm.pno}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              value={userForm.email}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Blood group</label>
            <input
              type="text"
              className="form-control"
              name="bg"
              id="bg"
              value={userForm.bg}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Father Name</label>
            <input
              type="text"
              className="form-control"
              name="fname"
              id="fname"
              value={userForm.fname}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Occupation</label>
            <input
              type="text"
              className="form-control"
              name="ocp"
              id="ocp"
              value={userForm.ocp}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Religion</label>
            <input
              type="text"
              className="form-control"
              name="rel"
              id="rel"
              value={userForm.rel}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Caste</label>
            <input
              type="text"
              className="form-control"
              name="caste"
              id="caste"
              value={userForm.caste}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">HSC Mark</label>
            <input
              type="text"
              className="form-control"
              name="hscmark"
              id="hscmark"
              value={userForm.hscmark}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditDetails;
