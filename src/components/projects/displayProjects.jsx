import React from "react";
import "./styles/displayProjects.css";
import {ProjectInfo}  from  "./project";
import INFO from "../../data/user";
import toggleDashboardAnimation from "./animations";

const DisplayProjects = (props) => {
  const { project } = props;

  // Check if the project is defined
  if (!project) {
    return <div></div>;
  }

  return (
    <>
      <div className="dashBoardGrid" id="dashBoardGrid">
        <div className="dashBoardLayout" id="projectDetail">
          <div id="projectInfo">
              <ProjectInfo
                title={project.title}
                description={project.fullDetail}
                linkText={project.linkText}
                link={project.link}
              />
          </div>
        </div>
        <div className="dashBoardLayout" id="devices">
          <div className="dashBoardStats">
                <div class="obj" id="obj1">
                  <div id="webView" className="webView">
                    <img src={require(`./${project.webView}`)}/>
                  </div>
                </div>
          </div>
          <div className="dashBoardStats">
              <div class="obj" id="obj2">
                  <div id="mobileView" className="mobileView">
                    <img src={require(`./${project.mobileView}`)}/>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayProjects;


