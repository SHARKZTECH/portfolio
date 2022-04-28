import {BsPatchCheckFill} from "react-icons/bs"

const Article=({h4,level})=>{
    return(
        <article className="experience__details">
        <BsPatchCheckFill className="experince_details-icon"/>
        <div>
        <h4>{h4}</h4>
        <small className="text-light">{level}</small>
        </div>
      </article>
    );
}
export default Article;