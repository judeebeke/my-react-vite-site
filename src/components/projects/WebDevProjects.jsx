import { useRef, useState } from "react";
import PropTypes from 'prop-types';

import { flexStyle, hoverLinkTransition } from "../../style";
import {
  AiOutlineLink,
  AiOutlineGithub,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { webProjectImage } from "../localstore/LocalData";
import { useMediaQuery } from "react-responsive";

const WebDevProjects = () => {
  const [viewProjectDetails, setViewProject] = useState(false);
  const [viewOverlay, setViewOverlay] = useState(false);
  const [currentViewProject, setCurrentViewProject] = useState('');
  const [currentViewOverlay, setCurrentViewOverlay] = useState('');

  const viewProjectDetailsHandler = (id) => {
    if(id !== currentViewProject && viewProjectDetails === true ) {
      setViewProject(true);
      setCurrentViewProject(id);
      return;
    }

    setViewProject(prev => !prev);
    setCurrentViewProject(id);
    return;
  }

  const viewOverlayHandler = (id) => {
    if(id !== currentViewOverlay && viewOverlay === true ) {
      setViewOverlay(true);
      setCurrentViewOverlay(id);
      return;
    }

  setViewOverlay(prev => !prev);
  setCurrentViewOverlay(id);
  return;
};

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-20 mt-16">
     {webProjectImage.map((data, index) => {
       return (<div key={data.id} className="w-full">
        <div className="relative cursor-pointer" 
        onMouseEnter={() => {
                      viewOverlayHandler(data.id);
                    }}
        onMouseLeave={() => {
          viewOverlayHandler("");
        }}
                >
            <img
              src={data.image}
              loading="lazy"
              className="w-full h-auto min-h-[5rem] min-w-[80%] object-cover"
              alt="My Graphics Projects"
            />
            <div className={`absolute bottom-0 left-0 w-full z-10 bg-gradient-to-t from-main h-16 ${data.id === currentViewOverlay && viewOverlay ? "visible" : "invisible"} ${hoverLinkTransition} `}>
             <h5 className="font-bold text-sm text-white px-5 mt-8 hidden md:block z-20">{data.title}</h5>
            </div>
        </div>
          <div className="w-full">
            <div className="w-5/6 flex justify-start items-center gap-x-7 my-2 text-xl">
               <a href={data.url} className={`hover:text-main ${hoverLinkTransition}`} target="_blank" rel="noreferrer" title="Visit Website">
                      <AiOutlineLink />
                    </a>
              <a href={data.github} className={`hover:text-main ${hoverLinkTransition}`} target="_blank" rel="noreferrer" title="GitHub Repository">
                      <AiOutlineGithub />
                    </a>
            </div>
            {data.id === currentViewProject && viewProjectDetails && <div className="text-justify text-base font-serif font-medium w-full pb-2">
              <h5 className="font-bold text-base text-main block md:hidden">{data.title}</h5>
              <p className="pt-1">
                  <strong>Description: </strong>
                  {data.description}
                  <br />
                  <br />
                  <strong>Improvements: </strong> {data.improvement}
                  <br />
                </p>
            </div> }
            <button 
              className="bg-main text-white p-2 rounded font-normabl text-sm"  
              onClick={() => {
                      viewProjectDetailsHandler(data.id);
                      (handleCardFocusClick())
                    }}
                    >{data.id === currentViewProject && viewProjectDetails ? "Hide Details" : "See Details"}</button>
          </div>
      </div>) })}
    </div>
  );
}

export default WebDevProjects;
