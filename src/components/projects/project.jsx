import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";




const Project = (props) => {
	const { logo, title, description, linkText, link } = props;

	return (
		<React.Fragment>
			<div className="project" data-value={title} id={title}>
					<div className="project-container">
						<div className="project-logo">
							{logo.map((element, index) => (
							<img key={index} src={element} alt={`logo-${index}`} />
							))}
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>

					</div>
			</div>
		</React.Fragment>
	);
};

const ProjectInfo = (props) => {
	const {title, description, linkText, link } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">
						<div className="project-title"><h2>{title}</h2></div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export {ProjectInfo};
export default Project;


