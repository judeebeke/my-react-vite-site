
import Heading from "../UI/Heading";
import {
  infoParaStyles,
  thirdHeadingStyles,
  buttonStyles,
  fourthHeadingStyles,
  hoverLinkTransition,
} from "../../style";
import resume from "../assets/resume/myresume.pdf";
import { certificates } from "../localstore/LocalData";

const Resume = () => {
    return (
    <section className="section bg-lowMain dark:bg-lowDark dark:text-white" id="resume" data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-sine">
      <Heading headingTitle="RESUME" />
      <a href={resume} download>
        <button className={`${buttonStyles} ${hoverLinkTransition} p-3`}>
          Download CV
        </button>
      </a>
      <aside className="flex flex-col justify-center items-center border-r-2 border-l-2 w-9/12 border-main border-solid">
        <h3 className={thirdHeadingStyles}>Summary</h3>
        <div className="px-4">
          <h4 className={fourthHeadingStyles}>Jude Ebeke</h4>
          <p className={`${infoParaStyles}`}>
          To take a challenging role as Front End Web Developer in a highly technical company where I could utilize my skills in Web Design, and Front-End Web Development and use these skills in providing quality service to the company.
          </p>
        </div>
      </aside>
      <section className="flex flex-col items-center justify-centermt-4">
      <h3 className={thirdHeadingStyles}>Certificates</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-between items-center">
        {certificates.map((cert) => {
          return (
            <figure key={cert.id} className="flex flex-col gap-y-2 ">
              <img
                src={cert.cert}
                loading="lazy"
                className="w-[6rem] h-auto object-contain lg:w-64"
                alt={cert.title}
              />
              <p className="font-bold text-base">{cert.title}</p>
            </figure>
          );
        })}
      </div>
        </section>
    </section>
  );
};

export default Resume;
