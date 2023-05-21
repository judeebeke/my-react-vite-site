import Heading from "../UI/Heading";
import { buttonStyles,hoverLinkTransition } from './../../style';

const Contact = () => {
  const inputStyles = `w-full p-2 rounded-md border-2 border-gray hover:border-main focus:border-main focus:outline-none text-lg text-lowDark placeholder-gray dark:bg-lowDark dark:text-white`
  return (
    <section className="section pb-10 dark:bg-dark dark:text-white" id="contact" data-aos="fade-up" data-aos-duration="2000">
        <Heading headingTitle="CONTACT" />
        <form className="w-full flex flex-col justify-center items-center lg:items-start gap-y-6">
          <div className="w-full flex flex-col lg:flex-row gap-6">
            <input type="text" name="name" className={inputStyles}  placeholder="Your Name" required />
            <input type="email" name="email" className={inputStyles} placeholder="Your Email" required />
          </div>
            <input type="text"name="subject" className={inputStyles} placeholder="Subject" />
            <textarea type="message" rows={5} className={inputStyles} placeholder="Message" required></textarea>
            <button type="submit" className={`${buttonStyles} ${hoverLinkTransition}`}>Send Message</button>
        </form>  
    </section>
  ) 
}

export default Contact;
