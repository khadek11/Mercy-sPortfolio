import React, { useState } from "react";
import { Row, Form, Container, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import Thumbnail from "../../Assets/THUMBNAIL.gif";
import Image from "../../Assets/img/textureupscaled.webp";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/movvqbya", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <Container className="containerForm pt-[130px] md:pt-[100px]">
        <Particle />
        <Row className="flex flex-col-reverse md:flex-row">
          <Col md={6}>
            <Form
              onSubmit={handleSubmit}
              className="contactform w-[100%] md:w-[85%]"
            >
              <h2 className="purple">Contact Me</h2>
              <div className="input-box">
                <label for="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <label for="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>

              <div className="input-box textare-box">
                <label for="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your message"
                  required
                  value={formState.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button disabled={isSubmitting} className="w-full submittButton">
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-600">Message sent successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600">
                  Failed to send message. Please try again.
                </p>
              )}
            </Form>
          </Col>
          <Col
            md={6}
            className="flex justify-center items-center block md:hidden"
          >
            <img
              src={Thumbnail}
              alt="thumbnail"
              className="thumbnail
                 w-[100px] h-[100px] mb-[20px] items-center block md:hidden"
            ></img>
          </Col>
          <Col md={6} className=" hidden md:block">
            <Row>
              <Col md={4} className="pt-[30px]">
                <img
                  src={Thumbnail}
                  alt="thumbnail"
                  className="thumbnaill
                 w-[250px] h-[200px] mb-[20px] items-center hidden md:block"
                ></img>
                <img
                  src={Thumbnail}
                  alt="thumbnail"
                  className="thumbnaill
                 w-[250px] h-[200px] mb-[20px] items-center hidden md:block"
                ></img>
              </Col>
              <Col md={7}>
                <img src={Image} alt="Image " className=""></img>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
