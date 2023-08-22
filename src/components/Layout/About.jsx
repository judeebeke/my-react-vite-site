import Heading from '../UI/Heading';
import { sectionParaStyles, infoParaStyles, thirdHeadingStyles } from '../../style';
import mypicture from "../assets/images/mypassport.jpg"
import { personalData } from '../localstore/LocalData';
import "aos/dist/aos.css";
import { RxCaretRight } from 'react-icons/rx';

const About = () => {
  return (
    <section className='section bg-lowMain dark:bg-lowDark dark:text-white' id="about" data-aos="zoom-in" data-aos-duration="2000">
        <Heading headingTitle="ABOUT" />
        <p className={sectionParaStyles}>Welcome to my portfolio! I&apos;m a multidisciplinary professional experienced in frontend development and graphics design. With +1 year in the industry, I bring a blend of technical skills and creative vision.
<br/>
<br/>
In frontend development, I craft interactive web apps using HTML, CSS, and JavaScript. Proficient in React and Tailwind CSS, I focus on detail, clean code, and responsive design.
<br/>
<br/>

For graphics design, I&apos;m passionate about visual storytelling and create captivating designs. CorelDraw and Adobe Photoshop are my tools for turning ideas into stunning visuals.
<br/>
<br/>
</p>
        <div className='flex flex-wrap justify-center items-center gap-8 content-between mt-6 lg:flex-nowrap lg:items-start lg:justify-between'>
            <img src={mypicture} className='w-full h-9/12 lg:w-80' alt="Jude Ebeke" data-aos="fade-down" data-aos-duration="3000" data-aos-easing="ease-in-sine" />
            <div data-aos="fade-right" data-aos-duration="3500" data-aos-offset="300" data-aos-easing="ease-in-sine">
              <h3 className={thirdHeadingStyles}>Graphics Designer & Web Developer.</h3>
              <p className={infoParaStyles}>I&apos;m a skilled professional with expertise in frontend web development and graphics design. I specialize in creating engaging web experiences with clean code and a user-centric approach.</p>
              <div>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6'>
                {personalData.map(data => {
                  return (
                    <li key={data.id} className='text-xl flex flex-wrap'><span className='text-main text-3xl'><RxCaretRight  /></span> <strong className="pr-2">{data.type}:</strong>{data.value}</li>
                  )
                })}
                </ul>
              </div>
              <p className={`${infoParaStyles} pt-4`}>Additionally, I bring ideas to life through captivating visuals and impactful designs. Let&apos;s collaborate to transform your vision into a remarkable digital presence.</p>
            </div>
        </div>
    </section>
  )
}

export default About
