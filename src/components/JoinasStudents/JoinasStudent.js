import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Joinstudent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    stud_name: "",
    email: "",
    dob: "",
    board: "",
    contact: "",
    presentaddress: "",
    location: "",
    class: "",
    subject: "",
    password: "",
    confirmPassword: "",
    additionalOptions: [],
  });

  const locationOptions = {
    Hubballi: [
      "OldHubballi",
      "Vidyanagar",
      "Keshwapur",
      "Gokul road",
      "Unkal",
      "SaiNagar",
      "Lingaraj Nagar",
      "Akshay Park",
      "Akshay Colony",
      "Manjunath Nagar",
      "Deshpande Nagar",
      "Navanagar",
    ],
    Dharwad: [
      "Malamaddi",
      "Kalyan Nagar",
      "Shivagiri",
      "CBNagar",
      "Saptapur",
      "RaniChennamma Nagar",
      "SaiNagar",
      "Sampige Nagar",
      "ShriNagar",
      "Basava Nagar",
      "Navoday Nagar",
      "Nisarga Layout",
      "Madihal",
      "Mrutyunjay Nagar",
    ],
    Gadag: [
      "Mulgund Naka",
      "Hatalgeri Naka",
      "Sambapur Road",
      "Hudko Colony",
      "Puttaraj Nagar",
      "Mudhol",
    ],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const { name } = e.target;
    setFormData((prevFormData) => {
      const updatedOptions = checked
        ? [...prevFormData[name], value]
        : prevFormData[name].filter((item) => item !== value);

      return {
        ...prevFormData,
        [name]: updatedOptions,
      };
    });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Form Submitted:", formData);
    alert("Registration successful!");
    navigate("/navbar");
  };

  return (
    <div
    className="container"
    style={{
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px",
      gap: "20px",
      minHeight: "100vh",
      backgroundColor: "white", // Page background color
      marginTop: "120px", // Adjust based on your navbar height
    }}
  >
  
    
      {/* Right Form Section */}
      <div
        className="form-wrapper"
        style={{
          flex: 3,
          padding: "20px",
          backgroundColor: "#E6E6FA", // Light purple with a hint of lilac
          borderRadius: "10px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          maxWidth: "900px",
          height: "auto",
          marginTop:"-60px",
        }}
      >
        <h1>Register as Student</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="stud_name"
            value={formData.stud_name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            placeholder="Date of Birth"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Board"
            name="board"
            value={formData.board}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Contact"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Present Address"
            name="presentaddress"
            value={formData.presentaddress}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Class"
            name="class"
            value={formData.class}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          <select
            name="location"
            value={formData.location}
            onChange={handleSelectChange}
            required
          >
            <option value="">Select a Location</option>
            <option value="Hubballi">Hubballi</option>
            <option value="Dharwad">Dharwad</option>
            <option value="Gadag">Gadag</option>
          </select>
          {formData.location && locationOptions[formData.location] && (
            <div>
              <p>Additional Options for {formData.location}:</p>
              {locationOptions[formData.location].map((option) => (
                <label key={option}>
                  <input
                    type="checkbox"
                    name="additionalOptions"
                    value={option}
                    checked={formData.additionalOptions.includes(option)}
                    onChange={handleCheckboxChange}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>

      {/* Left Image Section */}
      <div
        className="image-section"
        style={{
          flex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
        }}
      >
        <img
          src="https://pictographic.azureedge.net/thumbnails/notion/ibGxZdQrGo4WyfZK69k0.png"
          alt="Student Illustration"
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
};

export default Joinstudent;