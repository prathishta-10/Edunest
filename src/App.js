import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home"; // Assuming Home is another component in the Home folder
import Footer from "./components/Footer";
import Jointutor from "./components/JoinasTutor/JoinasTutor";
import Joinstudent from "./components/JoinasStudents/JoinasStudent";
import StudentLogin from "./components/StudentLogin/StudentLogin";
import TutorLogin from "./components/TutorLogin/TutorLogin";
import Findtutor from "./components/FindTutor/FindTutor";
import Findstudent from "./components/FindStudent/FindStudent";  // New component for Find Student
import TutorDetails from "./components/TutorDetails/TutorDetails";  // Import TutorDetails component
import StudentDetails from "./components/StudentDetails/StudentDetails"; // Import StudentDetails component

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/JoinasTutor" element={<Jointutor />} />
          <Route path="/JoinasStudent" element={<Joinstudent />} />
          <Route path="/FindTutor" element={<Findtutor />} />
          <Route path="/FindStudent" element={<Findstudent />} />  {/* Route for Find Student */}
          <Route path="/tutor-details/:id" element={<TutorDetails />} />  {/* Route for Tutor Details */}
          <Route path="/student-details/:id" element={<StudentDetails />} />  {/* Route for Student Details */}
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/tutor-login" element={<TutorLogin />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
