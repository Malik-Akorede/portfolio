import React, { useState, useEffect } from "react";
import Project from "./project";
import INFO from "../../data/user";
import "./styles/allProjects.css";
import DisplayProjects from "./displayProjects";
import toggleDashboardAnimation from "./animations";

const AllProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {


    toggleDashboardAnimation(); //add animation
	
	setTimeout(() => {
		toggleDashboardAnimation(); //remove animation

	}, 50);

	setTimeout(() => {
		 setSelectedProject(project);
	}, 600);
  };

  useEffect(() => {
    // Call handleProjectClick(INFO['projects'][0]) on initial render
    handleProjectClick(INFO['projects'][0]);
  }, []); // Empty dependency array ensures it runs only once after initial render


  

  return (
    <div className="all-projects-container">
      {INFO.projects.map((project, index) => (
        <div
          className="all-projects-project"
          key={index}
          onClick={() => handleProjectClick(project)}
        >

          <Project
            logo={project.logo}
            title={project.title}
            description={project.description}
            linkText={project.linkText}
            link={project.link}
          />
        </div>
      ))}
      {selectedProject && <DisplayProjects project={selectedProject} />}
    </div>
  );
};

export default AllProjects;