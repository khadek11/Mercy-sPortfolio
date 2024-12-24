import React from "react";
import { Row, Form, Container, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import Thumbnail from "../../Assets/THUMBNAIL.gif"




export default function Contact(){
    

    return(
        <>
        <Container className="containerForm">
        <Particle />
            <Row>
            <Col md={6}>
            <Form action="https://formspree.io/f/movvqbya" method="POST" className="contactform">
                <h2 className="purple">Contact Me</h2>
                <div className="input-box">    
                    <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="input-box">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Your email" required />
                </div>
                
                <div className="input-box textare-box">
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="5"  placeholder="Your message"  required></textarea>
                </div>
                

                <Button type="submit" className="submittButton">Send</Button>
            </Form>
            </Col>
            <Col md={6}>
      <img src={Thumbnail} alt="thumbnail" className="thumbnail">
      </img>
           </Col>
          
           </Row>
           </Container>

       
        </>
    )
}