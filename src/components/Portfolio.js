import IMG1 from "../assets/mobile_.png";
import IMG2 from "../assets/spotify.png";
import IMG3 from "../assets/mobile3.png";
import IMG4 from "../assets/lp.png";
import IMG5 from "../assets/mobile5.png";
import IMG6 from "../assets/social.png";
import Article from "./PortArticle";

const Portifolio=()=>{
    return(
        <section id="portfolio">
           <h5>My Rect Work</h5>
           <h2>Portifolio</h2>

           <div className="container portifolio__container">   
           <Article image={IMG1} title="CSFreelanceForce" github={'https://github.com/SHARKZTECH'} demo={'https://www.csfreelanceforce.com/'}/>         
           <Article image={IMG2} title="Spotify Redesign" github={'https://github.com/SHARKZTECH/spotify-c-v2'} demo={' https://sharkztech.github.io/spotify-c-v2/'}/>                           
           <Article image={IMG3} title="React Recipe App" github={'https://github.com/SHARKZTECH/redux4-react-recpie-v2'} demo={'https://sharkztech.github.io/redux4-react-recpie-v2/'}/>         
           <Article image={IMG4} title={"NFT MarketPlace"} github={"https://github.com/SHARKZTECH/lp"} demo={'https://sharkztech.github.io/lp/'}/>         
           <Article image={IMG5} title="C To M" github={'https://github.com/SHARKZTECH/c_to_m'} demo={'https://sharkztech.github.io/c_to_m/'}/>         
           <Article image={IMG6} title="Social Platform" github={'https://github.com/SHARKZTECH/Social-Platfrom-MERN'} demo={'https://social-sharkztech.vercel.app'}/>      
           </div>
       
        </section>
    )
    }    
    export default Portifolio;