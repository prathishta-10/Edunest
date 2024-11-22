import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillPhone, AiFillMail } from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* About Section */}
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> Who We Are </span>
            </h1>
            <p className="home-about-body">
              Your Partner in Learning and Growth. We are a team of creative
              minds committed to providing you with the best resources and
              guidance on your educational journey. Our goal is to make learning
              a delightful and enriching experience. Our services encompass a
              wide range of subjects, from science to art, and everything in
              between. We're here to help you unlock your potential and achieve
              your goals.
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        {/* Why Choose Us Section */}
        <Row className="mt-5">
          <Col md={12} className="text-center">
            <h1>
              <span className="purple">Why HomeTutorSite.com?</span>
            </h1>
          </Col>
          <Col md={6} className="mt-4">
            <h3 style={{ color: 'white' }}>HomeTutorSite</h3>
            <ul style={{ color: 'white' }}>
              <li><strong>Low Charges:</strong> No commission from monthly tuition fees.</li>
              <li><strong>Fast & Reliable:</strong> 100% of tuition fees go to tutors.</li>
              <li><strong>Best Customer Service:</strong> A team of 25+ members provides support through multiple channels daily.</li>
              <li><strong>Refund Policy:</strong> Best-in-class 100% money-back refund policy.</li>
            </ul>
          </Col>
          <Col md={6} className="mt-4">
            <h3 style={{ color: 'white' }}>Local Tuition Agencies</h3>
            <ul style={{ color: 'white' }}>
              <li><strong>High Charges:</strong> They charge 50% of the first month and 20-30% of monthly tuition fees.</li>
              <li><strong>Slow & Unreliable:</strong> Limited tutors; the process is slow and commission-based.</li>
              <li><strong>Limited Customer Service:</strong> Managed by a single person with limited communication channels.</li>
              <li><strong>Refund Policy:</strong> No refunds entertained.</li>
            </ul>
          </Col>
        </Row>

        {/* Contact Us Section */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONTACT US</h1>
            <p>
              Feel free to <span className="purple">connect </span>with us
            </p>
          </Col>
        </Row>

        {/* Contact Us Box */}
        <Row className="justify-content-center">
          <Col md={6} className="contact-box">
            <h2>Contact Information</h2>
            <div className="contact-item">
              <AiFillMail className="contact-icon" />
              <p>Email: edunest24@gmail.com</p>
            </div>
            <div className="contact-item">
              <AiFillPhone className="contact-icon" />
              <p>Phone: +91 7349400222</p>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <p>Location: Your Location Address</p>
            </div>

            {/* Contact Form */}
            <h2>Send Us a Message</h2>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formPhone" className="mt-3">
                <Form.Label>Your Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter your phone number" />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mt-3">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Write your message here" />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-4">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Categories Section */}
<Row className="mt-5 categories-section">
  <Col md={3}>
    <h3 className="category-title" style={{ color: "white" }}>Tuitions By City</h3>
    <ul style={{ color: "white" }}>
      <li>Mumbai</li>
      <li>Delhi</li>
      <li>Bangalore</li>
      <li>Hyderabad</li>
      <li>Ahmedabad</li>
      <li>Chennai</li>
      <li>Kolkata</li>
      <li>Surat</li>
    </ul>
  </Col>
  <Col md={3}>
    <h3 className="category-title" style={{ color: "white" }}>Tuitions By Category</h3>
    <ul style={{ color: "white" }}>
      <li>Nursery/Preschool</li>
      <li>School</li>
      <li>Inter/Class XI - XII</li>
      <li>Arts</li>
      <li>Science</li>
      <li>Engineering & Technology</li>
      <li>Accounting & Commerce</li>
      <li>Computer/IT Courses</li>
    </ul>
  </Col>
  <Col md={3}>
    <h3 className="category-title" style={{ color: "white" }}>Tuitions By Course</h3>
    <ul style={{ color: "white" }}>
      <li>Nursery Level</li>
      <li>Kindergarten</li>
      <li>Class I</li>
      <li>Class II</li>
      <li>Class III</li>
      <li>Class IV</li>
      <li>Class V</li>
      <li>Class VI</li>
    </ul>
  </Col>
  <Col md={3}>
    <h3 className="category-title" style={{ color: "white" }}>Tuitions By Subject</h3>
    <ul style={{ color: "white" }}>
      <li>Maths part-time jobs</li>
      <li>Physics part-time jobs</li>
      <li>Chemistry part-time jobs</li>
      <li>English part-time jobs</li>
      <li>Computers part-time jobs</li>
      <li>Biology part-time jobs</li>
      <li>Accounting part-time jobs</li>
      <li>Economics part-time jobs</li>
    </ul>
  </Col>
</Row>
</Container>
</Container>
  );
}

export default Home2;
