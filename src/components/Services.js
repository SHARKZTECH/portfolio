import {BiCheck} from "react-icons/bi"
const Services=()=>{
    return(
        <section id="services">
            <h5>What I offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>UI desinging</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>UX desinging</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Responsive Designing</p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Frontend Design</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Frontend Development</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Backend Development</p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Web Development</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Cyber Security</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Tech</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
    }
    
    export default Services;