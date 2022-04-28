import Article from "./ExpArticle"

const Experience=()=>{
    return(
        <section id="experience">
          <h5>What Skills I Have</h5>
          <h2>My Experience</h2>
          <div className="container experience__container">

             <div className="experience__frontend">
                 <h3>Frontend Development</h3>
                <div className="experience__content">
                <Article h4={'HTML'} level="experienced"/>
                <Article h4={'CSS'} level="intermediate"/>
                <Article h4={'JavaScript'} level="intermediate"/>
                <Article h4={'React'} level="experienced"/>
                <Article h4={'Next'} level="basics"/>
                <Article h4={'Bootstrap'} level="experienced"/>             
                </div>
             </div > 

             <div className="experince__backend">
             <h3>Backend Development</h3>
                <div className="experience__content">
                <Article h4={'Django'} level="experienced"/>
                <Article h4={'Flask'} level="intermediate"/>
                <Article h4={'PHP'} level="intermediate"/>
                <Article h4={'Node Js'} level="experienced"/>
                <Article h4={'MongoDB'} level="basics"/>
                <Article h4={'FireBase'} level="Intermediate"/>
               </div>               
             </div>

          </div>
        </section>
    )
}
export default Experience;