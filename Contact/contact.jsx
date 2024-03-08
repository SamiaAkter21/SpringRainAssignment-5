import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
    return ( 
        <section id="contact" className="contact">
        <div className="">
            <div className="about-header flex">
                <div className="line"></div>
                <h1 className="middle">Contact Me</h1>
                <div className="line"></div>
            </div>
            <div className="about-content">
                <p className="font">I am currently seeking employment, and I would appreciate it if you could contact me with any available job oppurtunities.</p>

                <button id="msg" onClick={contactFunction}>Want to Contact?</button>
            </div>
            <form action="#" id="form" className="form" autocomplete="off">
                <div className="form-control">
                    <label for="username">Name</label>
                    <input type="text" placeholder="Enter Your Name" id="username" required/>
                </div>
                <div className="form-control">
                    <label for="email">Email</label>
                    <input type="email" placeholder="Enter Your Email" id="email" required/>
                </div>
                <div className="form-control">
                    <label for="message">Message</label><br/>
                    <textarea type="Message" placeholder="Write Details...." id="Message" required></textarea>
                </div>
                
                <button className="send">Send Message</button>
            </form>
            <br/>
        </div>
    </section>
    );
}
 
const contactFunction = () => {
    var x = document.getElementById("form");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.querySelector('#msg').textContent = "Close the Form";
    } else {
      x.style.display = "none";
      document.querySelector('#msg').textContent = "Want to Contact?"
    }
}

export default Contact;
