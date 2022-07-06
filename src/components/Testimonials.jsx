import { MdFormatQuote } from "react-icons/md";
import stars from "../images/five-stars.png";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// export default function Testimonials() {
//   return (
//     <Swiper
//       // install Swiper modules
//       modules={[Navigation]}
//       navigation={true}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       ...
//     </Swiper>
//   );
// }

export default function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { ease: "easeInOut", duration: 0.6, delay: 0.1 },
      }}
      viewport={{ once: true }}
      // exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <header className="section-header">
        <p>Testimonials</p>
        <h2>Just ask our clients</h2>
      </header>
      <div className="reviews">
        <Swiper
          speed={700}
          spaceBetween={100}
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
        >
          <SwiperSlide>
            {" "}
            <div className="review">
              <MdFormatQuote className="quote-icon" />
              <img src={stars} alt="5 stars" className="stars"></img>
              <p className="review-text">
                AMAZING, PASSIONATE, CARING attorney! I heard really great
                things about Ali Crocker Russell and so I recommended her to my
                brother to help him with some of his family's immigration
                problems. She was about to get my in law out of immigration jail
                and got him his green card. Ali is aggressive in the courtroom
                but so nice outside. I'll always recommend her to for any
                immigration issues because she is the best.
              </p>
              <p className="review-author">- Sherrie M.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="review">
              <MdFormatQuote className="quote-icon" />
              <img src={stars} alt="5 stars" className="stars"></img>
              <p className="review-text">
                Best attorneys out there they help me get my drug and gun charge
                dismissed and help me get out of immigration with a bond glad my
                sister in law knew about these people other attorney said it was
                a lost case that they would send me back to mexico but these
                people fought for me thank you guys
              </p>
              <p className="review-author">- Jose I.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="review">
              <MdFormatQuote className="quote-icon" />
              <img src={stars} alt="5 stars" className="stars"></img>
              <p className="review-text">
                Ali Crocker is the best. She handled my husband's immigration
                case really good and I'm happy I went with her. Right now she is
                handling my dad's divorce case and I love her. She is very
                aggressive and is very affordable, she offers payment plans.
                Thank you Ali for everything you have done on our cases. Don't
                think it twice and hire Ali, you won't regret it.
              </p>
              <p className="review-author">- Cindy R.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="review">
              <MdFormatQuote className="quote-icon" />
              <img src={stars} alt="5 stars" className="stars"></img>
              <p className="review-text">
                This firm did an amazing job at helping my family through their
                immigration and criminal issues. The staff was always informing
                me of what was happening in my case and everyone was always
                helpful when I would call. Ali Crocker is a very caring and
                passionate person and fought hard for my families case. I will
                continue to recommend people to come to her for any legal
                issues.
              </p>
              <p className="review-author">- Carlos R.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="review">
              <MdFormatQuote className="quote-icon" />
              <img src={stars} alt="5 stars" className="stars"></img>
              <p className="review-text">
                Great professional place!! Recommend to any one with criminal
                and immigration issues.
              </p>
              <p className="review-author">- Sergio T.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.section>
  );
}
