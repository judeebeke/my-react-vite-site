import Heading from "../UI/Heading";
import { buttonStyles,hoverLinkTransition } from './../../style';

const Contact = () => {
  const inputStyles = `w-full p-2 rounded-md border-2 border-gray hover:border-main focus:border-main focus:outline-none text-lg text-lowDark placeholder-gray`
  return (
    <section className="section" id="contact" data-aos="fade-up" data-aos-duration="2000">
        <Heading headingTitle="CONTACT" />
        <form className="w-full flex flex-col justify-center items-center lg:items-start gap-y-6">
          <div className="w-full flex flex-col lg:flex-row gap-6">
            <input type="text" name="name" className={inputStyles}  placeholder="Your Name" />
            <input type="email" name="email" className={inputStyles} placeholder="Your Email" />
          </div>
            <input type="text"name="subject" className={inputStyles} placeholder="Subject" />
            <textarea rows={5} className={inputStyles}></textarea>
            <button className={`${buttonStyles} ${hoverLinkTransition}`}>Send Message</button>
        </form>  
    </section>
  ) 
}

export default Contact;
