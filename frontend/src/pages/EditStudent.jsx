import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function EditStudent() {
  const [userForm, setUserForm] = useState({
    sname: "",
    regno: "",
    dept: "",
    year: "",
    pno: "",
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
      .put("http://localhost:4000/student/update-student/" + params.id, {
        sname: userForm.sname,
        regno: userForm.regno,
        dept: userForm.dept,
        year: userForm.year,
        pno: userForm.pno,
      })
      .then((res) => {
        console.log({ status: res.status });
        navigate("/student-list");
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/student/get-student/" + params.id)
      .then((res) => {
        setUserForm({
          sname: res.data.data.sname,
          regno: res.data.data.regno,
          dept: res.data.data.dept,
          year: res.data.data.year,
          pno: res.data.data.pno,
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
            <label className="form-label">Register Number</label>
            <input
              type="text"
              className="form-control"
              name="regno"
              id="regno"
              value={userForm.regno}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Department</label>
            <input
              type="text"
              className="form-control"
              name="dept"
              id="dept"
              value={userForm.dept}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Year</label>
            <input
              type="text"
              className="form-control"
              name="year"
              id="year"
              value={userForm.year}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
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
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditStudent;
