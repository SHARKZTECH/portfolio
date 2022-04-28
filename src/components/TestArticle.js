import { Swiper, SwiperSlide } from 'swiper/react';

const Article=({avatar,name,review})=>{
    return(
        <article className="testimonial">
        <div className="client__avatar">
           <img src={avatar} alt="img"/>
        </div>
           <h5 className="client__name">
               {name}
           </h5>
           <small className="client__review">
               {review}
           </small>
    </article>
    )
}
export default Article;