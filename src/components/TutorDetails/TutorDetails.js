import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To access the dynamic route params
import './tutordetails.css'; // Ensure this path is correct

const TutorDetails = () => {
  const { id } = useParams(); // This will get the ID from the URL
  const [tutor, setTutor] = useState(null);

  // Sample tutor data (this would usually come from an API or state)
  const tutors = [
    {
      id: 1,
      name: 'John Doe',
      location: 'Ghuma, Ahmedabad',
      preferredTime: 'Evening',
      classInfo: 'ICSE 9th',
      tuitionId: '733100',
      subjects: 'Maths and Physics',
      description: 'Wanted home tutor for ICSE 9th, Maths and Physics',
      email: 'johndoe@example.com',
      phone: '+919876543210',
      fee: 'Negotiable',
      gender: 'Any',
      preferredTimeForClass: 'Evening',
      pinCode: '380058',
      city: 'Ahmedabad',
      locationDetails: 'Ghuma',
    },
    {
      id: 2,
      name: 'Jane Smith',
      location: 'Motera, Ahmedabad',
      preferredTime: 'Morning',
      classInfo: 'IGCSE 5th',
      tuitionId: '732993',
      subjects: 'All Subjects',
      description: 'Wanted home tutor for 5th IGCSE, All Subjects',
      email: 'janesmith@example.com',
      phone: '+919123456789',
      fee: 'Negotiable',
      gender: 'Any',
      preferredTimeForClass: 'Morning',
      pinCode: '380005',
      city: 'Ahmedabad',
      locationDetails: 'Motera',
    },
  ];

  // Find the tutor by ID
  useEffect(() => {
    const tutorData = tutors.find(tutor => tutor.id === parseInt(id));
    setTutor(tutorData);
  }, [id]);

  if (!tutor) return <p>Loading...</p>; // You can show a loading spinner or message

  return (
    <div className="tutor-details-container">
      <h1 className="tutor-name">{tutor.name}'s Details</h1>
      <div className="tutor-details-card">
        <div className="tutor-info">
          <p><strong>Class Info:</strong> {tutor.classInfo}</p>
          <p><strong>Tuition ID:</strong> {tutor.tuitionId}</p>
          <p><strong>Subjects:</strong> {tutor.subjects}</p>
          <p><strong>Description:</strong> {tutor.description}</p>
          <p><strong>Location:</strong> {tutor.location}</p>
          <p><strong>City:</strong> {tutor.city}</p>
          <p><strong>Location Details:</strong> {tutor.locationDetails}</p>
          <p><strong>Pin Code:</strong> {tutor.pinCode}</p>
          <p><strong>Preferred Time for Class:</strong> {tutor.preferredTimeForClass}</p>
          <p><strong>Fee:</strong> {tutor.fee}</p>
          <p><strong>Gender Preference:</strong> {tutor.gender}</p>
          <p><strong>Email:</strong> {tutor.email}</p>
          <p><strong>Phone:</strong> {tutor.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default TutorDetails;
