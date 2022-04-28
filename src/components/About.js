import ME from "../assets/mee1.png"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
const About=()=>{
return(
    <section id="about">
        <h5>Ge To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
               <img src={ME}  className="about__me-image"/>
            </div>
            <div className="about__content">
              <div className="about__cards">
              <article className="about__card">
                      <FaAward className="about__icon"/>
                    <h5>Experience</h5>
                    <small>3+ Years working</small>
               </article> 
               <article className="about__card">
                      <FiUsers className="about__icon"/>
                    <h5>Clients</h5>
                    <small>200+ worldwide</small>
                </article> 
                 <article className="about__card">
                      <VscFolderLibrary className="about__icon"/>
                    <h5>Projects</h5>
                    <small>30+ completed</small>
                </article>
              </div>
              <p>lorem By using remove.bg you agree to the use of 
                  cookies. You can find details on how we use cookies 
                  in our Cookie Policy.
              </p>
              <a href="#contact" className="btn btn-primary"> Let's Talk</a>
            </div>
        </div>

   </section>
);
}

export default About;