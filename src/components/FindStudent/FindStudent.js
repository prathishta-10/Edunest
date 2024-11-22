import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./findstudent.css";
import uploadedImage from "../../Assets/undefined.png"; // Replace with the correct path to your image

const FindStudent = () => {
  const navigate = useNavigate();

  const studentsData = [
    {
      id: 1,
      student_name: "Aryan Patel",
      location: "Satellite, Ahmedabad",
      preferredTime: "Morning",
      classInfo: "ICSE 9th",
      tuitionId: "823100",
      subjects: "Maths and Science",
      description: "Looking for a tutor for ICSE 9th, Maths and Science.",
    },
    {
      id: 2,
      student_name: "Nikita Mehta",
      location: "Maninagar, Ahmedabad",
      preferredTime: "Evening",
      classInfo: "CBSE 6th",
      tuitionId: "823105",
      subjects: "English and History",
      description: "Need a tutor for CBSE 6th, English and History.",
    },
  ];

  const [searchTerm, setSearchTerm] = useState(""); // State to track the search input
  const [filteredStudents, setFilteredStudents] = useState(studentsData); // State to track filtered students

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = studentsData.filter((student) =>
      student.location.toLowerCase().includes(value)
    );
    

    setFilteredStudents(filtered);
  };

  const handleViewDetails = (id) => {
    navigate(`/student-details/${id}`);
  };

  const handleApply = (id) => {
    navigate(`/apply/student/${id}`);
  };

  return (
    <div className="students-page">
      {/* Image placed outside the main container */}
      <div className="image-container">
        <img
          src={uploadedImage}
          alt="Tutoring illustration"
          className="page-image"
        />
      </div>

      {/* Main container with the black background */}
      <div className="students-container">
        <h1 className="students-header">Find Students for Tutoring</h1>
        <p className="students-subheader">Explore part-time home tutoring opportunities.</p>

        {/* Search Bar */}
        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search by location..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        {/* Student Cards */}
        <div className="students-grid">
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <div key={student.id} className="student-card">
                <div className="student-info">
                  <h3 className="student-title">Looking for Tutor</h3>
                  <p><strong>Location:</strong> {student.location}</p>
                </div>
                <div className="student-details">
                  <p><strong>Preferred Time:</strong> {student.preferredTime}</p>
                  <p><strong>Class:</strong> {student.classInfo}</p>
                  <p><strong>Subjects:</strong> {student.subjects}</p>
                  <p><strong>Tuition ID:</strong> {student.tuitionId}</p>
                </div>
                <div>
                  <p><strong>Description:</strong> {student.description}</p>
                </div>
                <div className="student-card-footer">
                  <button
                    className="action-button view-details"
                    onClick={() => handleViewDetails(student.id)}
                  >
                    View Details
                  </button>
                  <button
                    className="action-button apply"
                    onClick={() => handleApply(student.id)}
                  >
                    Apply
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No students found for your search.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindStudent;
