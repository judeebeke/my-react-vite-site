import Heading from "../UI/Heading";
import passport from "../assets/images/emeka.jpeg";
import { sectionParaStyles, flexStyle } from './../../style';
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im';

const Testimonial = () => {
    
  return (
    <section className="section bg-lowMain" data-aos="fade-zoom-in" data-aos-duration="2000" data-aos-delay="300" data-aos-offset="0" data-aos-easing="ease-in-back">
      <Heading headingTitle="TESTIMONIAL" />
        <figure className="flex flex-col justify-center items-center ">
            <div className={`${flexStyle} flex-col mb-4`}>
            <img src={passport} className="w-40 h-40 mb-2 border-2 p-2 border-main rounded-full object-cover xl:w-44 xl:h-44" alt="Timothy Iloba" />
            <h4 className="font-bold text-2xl text-main">Timothy Emeka Iloba</h4>
                <p className="font-normal text-lg text-mildMain">Software Engineer</p>
            </div>
            <div className="flex gap-x-2">
            <span className="text-3xl text-mildMain"><ImQuotesLeft /></span>
            <p className={`${sectionParaStyles} text-xl flex gap-x-3 flex-nowrap`}>Your frontend web development and graphics design skills are truly impressive. Your attention to detail, creativity, and ability to bring ideas to life are remarkable. Your dedication to delivering exceptional results is evident in every project you undertake. I have no doubt that you will continue to excel and make a significant impact in the industry.</p>
            <span className="text-3xl text-mildMain "><ImQuotesRight /></span>
            </div>
        </figure>
    </section>
  )
}

export default Testimonial;
