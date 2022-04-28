const Article=({image,title,github,demo})=>{
    return(
        <article className="portifolio__item">
        <div className="portifolio__item-image">
            <img src={image} alt="img"/>
        </div>
            <h3>{title}</h3>
            <div className="portifolio__item-cta">
            <a href={github} className="btn" target="_blank">Github</a>
            <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
            </div>
    </article>
    );
}
export default Article;