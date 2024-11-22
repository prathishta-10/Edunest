import React from 'react';
import { useNavigate } from 'react-router-dom';
import './findtutor.css';
import defaultPic from '../../Assets/defaultpic.jpg';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Findtutor = () => {
  const navigate = useNavigate();

  const tutors = [
    {
      id: 1,
      tutor_name: 'John Doe',
      location: 'Ghuma, Ahmedabad',
      preferredTime: 'Evening',
      classInfo: 'ICSE 9th',
      tuitionId: '733100',
      subjects: 'Maths and Physics',
      description: 'Wanted home tutor for ICSE 9th, Maths and Physics',
      emailVerified: true,
      phoneVerified: false,
      email: 'johndoe@example.com',
      phone: '+919876543210',
    },
    {
      id: 2,
      tutor_name: 'Jane Smith',
      location: 'Motera, Ahmedabad',
      preferredTime: 'Morning',
      classInfo: 'IGCSE 5th',
      tuitionId: '732993',
      subjects: 'All Subjects',
      description: 'Wanted home tutor for 5th IGCSE, All Subjects',
      emailVerified: false,
      phoneVerified: true,
      email: 'janesmith@example.com',
      phone: '+919123456789',
    },
    // Additional tutor entries...
  ];

  const handleApply = (id) => {
    navigate(`/apply/${id}`);
  };

  const handleViewDetails = (id) => {
    navigate(`/tutor-details/${id}`);
  };

  return (
    <div className="findtutor-background">
      <div className="tutors-container">
        <h1>
          <span style={{ color: 'white' }}>Home Tuitions</span>
        </h1>
        <div className="tutors-grid">
          {tutors.map((tutor) => (
            <div key={tutor.id} className="tutor-card">
              <img src={defaultPic} alt="Tutor" className="tutor-photo" />
              <div className="tutor-card-header">
                <p>
                  <strong>Posted On:</strong> {new Date().toLocaleDateString()}
                </p>
              </div>
              <h2 className="tutor-title">Wanted Home Tutor For...</h2>
              <p className="tutor-location">
                <strong>{tutor.location}</strong>
              </p>
              <p className="tutor-preferred">
                <strong>Preferred:</strong> {tutor.preferredTime}
              </p>
              <p className="tutor-class">
                <strong>{tutor.classInfo}</strong> <strong>TuitionId:</strong> {tutor.tuitionId}
              </p>
              <p className="tutor-subjects">
                <strong>{tutor.subjects}</strong>
              </p>
              <div className="tutor-description">
                <p>{tutor.description}</p>
              </div>
              <div className="tutor-contact-info">
                <div className="contact-item">
                  <a href={`mailto:${tutor.email}`}>
                    <FaEnvelope
                      style={{
                        color: tutor.emailVerified ? 'green' : 'red',
                        marginRight: '8px',
                      }}
                    />
                  </a>
                  <span style={{ color: tutor.emailVerified ? 'green' : 'red' }}>
                    Email {tutor.emailVerified ? 'Verified' : 'Not Verified'}
                  </span>
                </div>
                <div className="contact-item">
                  <a href={`tel:${tutor.phone}`}>
                    <FaPhoneAlt
                      style={{
                        color: tutor.phoneVerified ? 'green' : 'red',
                        marginRight: '8px',
                      }}
                    />
                  </a>
                  <span style={{ color: tutor.phoneVerified ? 'green' : 'red' }}>
                    Phone {tutor.phoneVerified ? 'Verified' : 'Not Verified'}
                  </span>
                </div>
              </div>
              <div className="tutor-card-footer">
                <button
                  className="view-details-button"
                  onClick={() => handleViewDetails(tutor.id)}
                >
                  View Details
                </button>
                <button
                  className="apply-button"
                  onClick={() => handleApply(tutor.id)}
                >
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Findtutor;
