import { useState } from "react";
import Heading from "../UI/Heading";
import { buttonStyles,hoverLinkTransition } from './../../style';

const Contact = () => {
  const inputStyles = `w-full p-2 rounded-md border-2 border-gray hover:border-main focus:border-main focus:outline-none text-lg text-lowDark placeholder-gray dark:bg-lowDark dark:text-white`;

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const fetchFormData = async (formData) => {
      const response = await fetch("https://jude-ebeke-default-rtdb.firebaseio.com/message.json", {
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if(!response.ok) {
        alert("Sorry, could not send message!")
        throw new Error('Failed to send message')
      }
      const data = await response.json()

      console.info(data)
  }

  const contactFormHandler = (e) => {
    e.preventDefault()

    const formData = {
      name: userName,
      email: userEmail,
      subject: subject,
      message: userMessage,
    }

    try {
      fetchFormData(formData)
    } catch (error) {
      console.error(error)
    }


  }

  return (
    <section className="section pb-10 dark:bg-dark dark:text-white" id="contact" data-aos="fade-up" data-aos-duration="2000">
        <Heading headingTitle="CONTACT" />
        <form className="w-full flex flex-col justify-center items-center lg:items-start gap-y-6" onSubmit={contactFormHandler}>
          <div className="w-full flex flex-col lg:flex-row gap-6">
            <input type="text" name="name" className={inputStyles} onChange={(e)=>{setUserName(e.target.value)}} value={userName}  placeholder="Your Name" required />
            <input type="email" name="email" className={inputStyles} onChange={(e)=>{setUserEmail(e.target.value)}} value={userEmail} placeholder="Your Email" required />
          </div>
            <input type="text"name="subject" className={inputStyles} onChange={(e)=>{setSubject(e.target.value)}} value={subject} placeholder="Subject" />
            <textarea type="message" rows={5} className={inputStyles} onChange={(e)=>{setUserMessage(e.target.value)}} value={userMessage} placeholder="Message" required></textarea>
            <button type="submit" className={`${buttonStyles} ${hoverLinkTransition}`}>Send Message</button>
        </form>  
    </section>
  ) 
}

export default Contact;
