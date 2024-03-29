import { socialLinks } from "../localstore/LocalData";
import { hoverLinkTransition, secondHeadingStyles, infoParaStyles } from "../../style";

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

  return (
    <footer className="section pt-10 bg-lowMain dark:bg-lowDark dark:text-white" data-aos="fade-down" data-aos-duration="3000">
        <h2 className={secondHeadingStyles}>Jude Ebeke</h2>
        <p className={`${infoParaStyles} text-center`}>Thank you for visiting my website! Feel free to reach out to me for collaborations, project inquiries, or just to say hello. Stay connected through my social media channels to get updates on my latest work. I look forward to connecting with you and exploring new opportunities together. Have a great day!</p>
        <h4 className="font-normal text-xl text-mildMain mb-4">&copy; Jude Ebeke {currentYear}</h4>
        <ul className="flex gap-x-10 gap-y-5 my-8 flex-wrap justify-center items-center">
          {socialLinks.map((link) => {
            return <li className={`text-xl bg-main p-2 rounded-full text-white hover:bg-mildMain hover:text-white ${hoverLinkTransition}`} key={link.id}><a href={link.socialNetwork} target='_blank' rel="noreferrer">{link.socialIcons}</a></li>;
          })}
        </ul>
    </footer>
  )
}

export default Footer
