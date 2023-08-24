import { useState } from "react";
import PropTypes from 'prop-types';

import { flexStyle } from "../../style";
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
  const [currentViewProject, setCurrentViewProject] = useState(0);

  const viewProjectDetailsHandler = (bool, id) => {
    setViewProject(bool);
    setCurrentViewProject(id);
  };

  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
    }

    const Mobile = ({ children }) => {
      const isMobile = useMediaQuery({ maxWidth: 767 })
      return isMobile ? children : null
      }

    Default.propTypes = {
      children: PropTypes.node.isRequired,
    };

    Mobile.propTypes = {
      children: PropTypes.node.isRequired,
    };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-20">
      {webProjectImage.map((data) => {
        return (
          <figure
            key={data.id}
            className="relative max-w-lg max-h-lg text-white lg:w-80"
          >
            <Default>
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
                    title="View Details"
                  >
                    <AiOutlineEye />
                  </button>
                  <div className={`${flexStyle} gap-x-12 mt-3`}>
                    <a href={data.url} target="_blank" rel="noreferrer" title="Visit Website">
                      <AiOutlineLink />
                    </a>
                    <a href={data.github} target="_blank" rel="noreferrer" title="GitHub Repository">
                      <AiOutlineGithub />
                    </a>
                  </div>
                </>
            </div>
              }
              </Default>
            <Mobile>
              {!viewProjectDetails && (<div
              className={`absolute bottom-0 left-0 w-full h-auto font-bold text-center text-2xl flex justify-start pl-3 py-3 items-end gap-x-6 bg-gradient-to-b from-transparent to-dark opacity-70 transition-all ease-linear duration-300`}
              >
                <button
                  onClick={() => {
                    viewProjectDetailsHandler(true, data.id);
                  }}
                  title="View Details"
                >
                  <AiOutlineEye />
                </button>
                <a
                  href={data.url}
                  target="_blank"
                  rel="noreferrer"
                  title="Visit Website"
                >
                  <AiOutlineLink />
                </a>
                <a
                  href={data.github}
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub Repository"
                >
                  <AiOutlineGithub />
                </a>
              </div>)}
            </Mobile>
            {data.id === currentViewProject && setViewProject && (
              <div
                className={`${
                  viewProjectDetails ? "flex flex-col" : "hidden"
                } absolute top-0 left-0 w-full h-full p-4 text-base font-medium overflow-auto transition-all ease-linear duration-300 opacity-90 text-dark dark:text-white bg-white dark:bg-dark`}
                
              >
                <span className="w-full flex justify-between text-white text-lg bg-lowDark items-center px-2 py-1">
                  <p>{data.title}</p>
                  <button
                    onClick={() => {
                      viewProjectDetailsHandler(false, 0);
                    }}
                    className="text-2xl text-white"
                  >
                    <AiOutlineEyeInvisible />
                  </button>
                </span>
                <p className="pt-1">
                  <strong>Description: </strong>
                  {data.description}
                  <br />
                  <br />
                  <strong>Improvements: </strong> {data.improvement}
                  <br />
                  <button
                    onClick={() => {
                      viewProjectDetailsHandler(false, 0);
                    }}
                    className="text-2xl bg-lowDark p-1 text-white text-center"
                  >
                    <AiOutlineEyeInvisible />
                  </button>
                </p>
              </div>
            )}
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
