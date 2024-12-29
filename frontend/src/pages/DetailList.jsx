import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function DetailList() {
  const [userForm, setUserForm] = useState([]);
  const deleteDetail = (_id) => {
    console.log(_id);
    axios
      .delete("http://localhost:4000/detail/delete-details/" + _id)
      .then(() => {
        console.log("Data successfully deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/detail/")
      .then((res) => {
        setUserForm(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userForm]);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Student name</th>
            <th scope="col">Date of birth</th>
            <th scope="col">Phone number</th>
            <th scope="col">Email</th>
            <th scope="col">Blood group</th>
            <th scope="col">Father name</th>
            <th scope="col">Occupation</th>
            <th scope="col">Religion</th>
            <th scope="col">Caste</th>
            <th scope="col">HSC mark</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userForm.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.sname}</td>
                <td>{user.dob}</td>
                <td>{user.pno}</td>
                <td>{user.email}</td>
                <td>{user.bg}</td>
                <td>{user.fname}</td>
                <td>{user.ocp}</td>
                <td>{user.rel}</td>
                <td>{user.caste}</td>
                <td>{user.hscmark}</td>
                <td>
                  <Link
                    className="btn btn-primary btn-sm me-2"
                    to={"/edit-details/" + user._id}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteDetail(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default DetailList;
