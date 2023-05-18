import Heading from '../UI/Heading';
import { sectionParaStyles, infoParaStyles, thirdHeadingStyles } from '../../style';
import mypicture from "../assets/images/mypassport.jpg"
import { personalData } from '../localstore/LocalData';
import "aos/dist/aos.css";

const About = () => {
  return (
    <section className='section bg-lowMain' id="about" data-aos="zoom-in" data-aos-duration="2000">
        <Heading headingTitle="ABOUT" />
        <p className={sectionParaStyles}>Welcome to my portfolio! I am a multidisciplinary professional with expertise in both frontend development and graphics design. With +1 years of experience in the industry, I bring a unique blend of technical skills and creative vision to my work.
<br/>
<br/>
As a frontend developer, I specialize in building interactive and user-friendly web applications. Using modern web technologies like HTML, CSS, and JavaScript, I create seamless digital experiences that engage and captivate users. I have a strong command over frontend frameworks and libraries such as React and Tailwind CSS, allowing me to develop robust and scalable solutions. Attention to detail, clean code, and responsive design are at the core of my development process.
<br/>
<br/>

In the realm of graphics design, I am passionate about visual storytelling and creating visually stunning designs. I have a keen eye for aesthetics and a deep understanding of design principles. Whether it&apos;s logo design, branding, or illustration, I strive to create captivating visuals that effectively communicate messages and leave a lasting impact. CorelDraw is my playground, where I bring ideas to life with creativity and precision, and I am alos conversant with other Design Softwares such as Adobe Photoshop.
<br/>
<br/>

With a collaborative approach, I work closely with clients to understand their goals and bring their visions to fruition. I am dedicated to delivering high-quality work that exceeds expectations and creates meaningful connections with audiences. Let&apos;s collaborate and bring your ideas to life with a perfect blend of technology and creativity</p>
        <div className='flex flex-wrap justify-center items-center gap-8 content-between mt-6 lg:flex-nowrap lg:items-start lg:justify-between'>
            <img src={mypicture} className='w-full h-9/12 lg:w-80' alt="Jude Ebeke" data-aos="fade-down" data-aos-duration="3000" data-aos-easing="ease-in-sine" />
            <div data-aos="fade-right" data-aos-duration="3500" data-aos-offset="300" data-aos-easing="ease-in-sine">
              <h3 className={thirdHeadingStyles}>Graphics Designer & Web Developer.</h3>
              <p className={infoParaStyles}>I&apos;m a skilled professional with expertise in frontend web development and graphics design. I specialize in creating engaging web experiences with clean code and a user-centric approach. Additionally, I bring ideas to life through captivating visuals and impactful designs. Let&apos;s collaborate to transform your vision into a remarkable digital presence.</p>
              <div>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6'>
                {personalData.map(data => {
                  return (
                    <li key={data.id} className='text-xl'><span className='text-main text-2xl'>&gt;</span> <strong>{data.type}:   </strong>{data.value}</li>
                  )
                })}
                </ul>
              </div>
              <p className={`${infoParaStyles} pt-4`}>A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba.</p>
            </div>
        </div>
    </section>
  )
}

export default About
