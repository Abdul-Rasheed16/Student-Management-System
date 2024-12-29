import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function StudentList() {
  const [userForm, setUserForm] = useState([]);
  const deleteStudent = (_id) => {
    console.log(_id);
    axios
      .delete("http://localhost:4000/student/delete-student/" + _id)
      .then(() => {
        console.log("Data successfully deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/student/")
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
            <th scope="col">Student Name</th>
            <th scope="col">Register Number</th>
            <th scope="col">Department</th>
            <th scope="col">Year</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userForm.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.sname}</td>
                <td>{user.regno}</td>
                <td>{user.dept}</td>
                <td>{user.year}</td>
                <td>{user.pno}</td>
                <td>
                  <Link
                    className="btn btn-primary btn-sm me-2"
                    to={"/edit-student/" + user._id}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteStudent(user._id)}
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
export default StudentList;
