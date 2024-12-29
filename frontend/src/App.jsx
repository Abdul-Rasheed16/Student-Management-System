import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreateStudent from "./pages/CreateStudent";
import StudentList from "./pages/StudentList";
import EditStudent from "./pages/EditStudent";
import CreateDetails from "./pages/CreateDetails";
import EditDetails from "./pages/EditDetails";
import DetailList from "./pages/DetailList";
import Home from "./pages/Home";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <div>
      <MenuBar />
      <div className="container mt-5">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-student" element={<CreateStudent />} />
            <Route path="/edit-student/:id" element={<EditStudent />} />
            <Route path="/student-list" element={<StudentList />} />
            <Route path="/create-details" element={<CreateDetails />} />
            <Route path="/edit-details/:id" element={<EditDetails />} />
            <Route path="/detail-list" element={<DetailList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
