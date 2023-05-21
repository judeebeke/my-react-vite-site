import { useState } from 'react';

import { flexStyle } from '../../style';
import { AiOutlineLink, AiOutlineGithub, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { webProjectImage } from "../localstore/LocalData";

const WebDevProjects = () => {
  const [viewProjectDetails, setViewProject] = useState(false);

  const viewProjectDetailsHandler = (bool) => {
    setViewProject(bool);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-20">
      {webProjectImage.map((data) => {
        return (
            <figure key={data.id}  className="relative max-w-lg max-h-lg h-48 text-dark lg:w-80">
              <div className={`absolute top-0 left-0 w-full h-full ${viewProjectDetails ? "p-4 text-base font-medium overflow-auto": `font-bold text-center text-3xl ${flexStyle} flex-col gap-y-6`} opacity-0 transition-all ease-linear duration-300 hover:opacity-70 focus:opacity-70 hover:bg-white focus:bg-white`} onMouseLeave={()=>{viewProjectDetailsHandler(false)}}>
                {viewProjectDetails ? <div>
                  <span className='w-full flex justify-between text-white text-lg bg-lowDark items-center px-2 py-1'>
                    <p>{data.title}</p>
                    <button onClick={()=>{viewProjectDetailsHandler(false)}}><AiOutlineEyeInvisible /></button>
                  </span>
                  <p className='pt-1'><strong>Description: </strong>{data.description}
                    <br/><br />
                    <strong>Improvements: </strong> {data.improvement}
                  </p>
                </div> : 
                <>
                <button onClick={()=>{viewProjectDetailsHandler(true)}}><AiOutlineEye /></button>
                <div className={`${flexStyle} gap-x-10`}>
                <a href={data.url} target='_blank' rel="noreferrer"><AiOutlineLink /></a>
                <a href={data.github} target='_blank' rel="noreferrer"><AiOutlineGithub /></a>
                </div>
                </>
                }
              </div>
              <img
                src={data.image}
                className="w-full h-full object-cover"
                alt="My Graphics Projects"
              />
            </figure>
          );
        })}
    </div>
  )
}

export default WebDevProjects;
