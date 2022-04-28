import IMG1 from "../assets/portfolio1.jpg";
import IMG2 from "../assets/portfolio2.jpg";
import IMG3 from "../assets/portfolio3.jpg";
import IMG4 from "../assets/portfolio4.jpg";
import IMG5 from "../assets/portfolio5.png";
import IMG6 from "../assets/portfolio6.jpg";
import Article from "./PortArticle";

const Portifolio=()=>{
    return(
        <section id="portfolio">
           <h5>My Rect Work</h5>
           <h2>Portifolio</h2>

           <div className="container portifolio__container">   
           <Article image={IMG1} title="This is a title" github={'https://gitbub.com'} demo={''}/>         
           <Article image={IMG2} title="This is a title" github={'https://gitbub.com'} demo={''}/>                  <Article image={IMG1} title="This is a title" github={'https://gitbub.com'} demo={''}/>         
           <Article image={IMG3} title="This is a title" github={'https://gitbub.com'} demo={''}/>         
           <Article image={IMG4} title="This is a title" github={'https://gitbub.com'} demo={''}/>         
           <Article image={IMG5} title="This is a title" github={'https://gitbub.com'} demo={''}/>         
           <Article image={IMG6} title="This is a title" github={'https://gitbub.com'} demo={''}/>      
           </div>
       
        </section>
    )
    }    
    export default Portifolio;