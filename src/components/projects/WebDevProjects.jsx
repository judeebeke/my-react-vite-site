import { useState } from "react";

import { flexStyle } from "../../style";
import {
  AiOutlineLink,
  AiOutlineGithub,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { webProjectImage } from "../localstore/LocalData";

const WebDevProjects = () => {
  const [viewProjectDetails, setViewProject] = useState(false);
  const [currentViewProject, setCurrentViewProject] = useState(0);

  const viewProjectDetailsHandler = (bool, id) => {
    setViewProject(bool);
    setCurrentViewProject(id)
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-20">
      {webProjectImage.map((data) => {
        return (
          <figure
            key={data.id}
            className="relative max-w-lg max-h-lg text-white lg:w-80"
          >
           {!viewProjectDetails &&  <div
              className={`absolute top-0 left-0 w-full h-full font-bold text-center text-3xl ${flexStyle} flex-col gap-y-6 opacity-0 transition-all ease-linear duration-300 hover:opacity-70 focus:opacity-70 hover:bg-dark focus:bg-dark`}
              onMouseLeave={() => {
                viewProjectDetailsHandler(false, 0);
              }}
            >
              
                <>
                  <button
                    onClick={() => {
                      viewProjectDetailsHandler(true, data.id);
                    }}
                  >
                    <AiOutlineEye />
                  </button>
                  <div className={`${flexStyle} gap-x-12 mt-3`}>
                    <a href={data.url} target="_blank" rel="noreferrer">
                      <AiOutlineLink />
                    </a>
                    <a href={data.github} target="_blank" rel="noreferrer">
                      <AiOutlineGithub />
                    </a>
                  </div>
                </>
            </div>
              }
            {data.id === currentViewProject && <div className={`${viewProjectDetails ? "flex flex-col" : "hidden" } absolute top-0 left-0 w-full h-full p-4 text-base font-medium overflow-auto transition-all ease-linear duration-300 opacity-70 text-dark dark:text-white bg-white dark:bg-dark`}  onMouseLeave={() => {
                viewProjectDetailsHandler(false, 0);
              }}>
                  <span className='w-full flex justify-between text-white text-lg bg-lowDark items-center px-2 py-1'>
                    <p>{data.title}</p>
                    <button onClick={()=>{viewProjectDetailsHandler(false, 0)}}><AiOutlineEyeInvisible /></button>
                  </span>
                  <p className='pt-1'><strong>Description: </strong>{data.description}
                    <br/><br />
                    <strong>Improvements: </strong> {data.improvement}
                    <br />
                    <button onClick={()=>{viewProjectDetailsHandler(false, 0)}} className="text-2xl bg-lowDark p-1 text-white text-center"><AiOutlineEyeInvisible /></button>
                  </p>
                </div> }
            <img
              src={data.image}
              loading="lazy"
              className="w-full h-full object-cover"
              alt="My Graphics Projects"
            />
          </figure>
        );
      })}
    </div>
  );
};

export default WebDevProjects;
