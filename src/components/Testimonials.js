import AVTR1 from "../assets/avatar1.jpg"
import AVTR2 from "../assets/avatar2.jpg"
import AVTR3 from "../assets/avatar3.jpg"
import AVTR4 from "../assets/avatar4.jpg"
import Article from "./TestArticle"
// import Swiper core and required modules
import { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials=()=>{
    return(
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonial__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{clickable:true}}
            >
               <SwiperSlide>
                  <Article avatar={AVTR1} name='Renny Tech' review={'My prjct was completed on time.I highly recomend him'}/>
                </SwiperSlide>
                 <SwiperSlide>
                  <Article avatar={AVTR2} name='Jeddy Tech' review={'My prjct was completed on time.I highly recomend him'}/>
                </SwiperSlide>
                 <SwiperSlide>
                  <Article avatar={AVTR3} name='Kenny Tech' review={'My prjct was completed on time.I highly recomend him'}/>
                </SwiperSlide>
                 <SwiperSlide>
                  <Article avatar={AVTR4} name='Jacks Tech' review={'My prjct was completed on time.I highly recomend him'}/>
                </SwiperSlide>
             
            </Swiper>
           
        </section>
    )
    }
    
    export default Testimonials;