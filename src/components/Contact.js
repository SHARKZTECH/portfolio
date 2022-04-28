import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import {MdOutlineEmail} from "react-icons/md"
import {RiMessageLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"

const Contact=()=>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vn6q8aa', 'template_odneyhi', form.current, 'T0WtOkxB7QRcgaE1q')
          .then((result) => {
              console.log(result.text);
              e.target.reset()
          }, (error) => {
              console.log(error.text);
          });

      };

    return(
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                <article className="contact__option">
                   <MdOutlineEmail className="contact__option-icon"/>
                  <h4>Email</h4>
                  <h5>sharkzreigns@gmail.com</h5>
                  <a href="mailto:sharkzreigns@gmail.com" target="_blank">Send a message</a>
               </article>
               <article className="contact__option">
                   <RiMessageLine className="contact__option-icon"/>
                  <h4>Messager</h4>
                  <h5>Sharkz Reigns</h5>
                  <a href="https://m.me/" target="_blank">Send a message</a>
               </article>
               <article className="contact__option">
                   <BsWhatsapp className="contact__option-icon"/>
                  <h4>Whatsapp</h4>
                  <h5>+2547......</h5>
                  <a href="https://api.whatsapp.com/send?phone=+254790454320" target="_blank">Send a message</a>
               </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                <input type={'text'} name="name" placeholder="Your Full Name"  required/>
                <input type={'email'} name="email" placeholder="Your email"  required/>
                <textarea name="message" cols={'30'} rows="10" placeholder="Your message" required></textarea>
                <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}
export default Contact;