import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-title">AR Manager</div>
							<div className="work-subtitle">
								The Property Recruitment Company · Full-time{" "}
							</div>
							<div className="work-duration">
								Apr 2022 - Present{" "}
							</div>
						</div>

						<div className="work">
							<div className="work-title">Finance Assistant</div>
							<div className="work-subtitle">
								THE AVENUES TRUST GROUP{" "}
							</div>
							<div className="work-duration">
								Jun 2018 - Mar 2022 · 3 yrs 10 mos
							</div>
						</div>

						<div className="work">
							<div className="work-title">Accounts Assistant</div>
							<div className="work-subtitle">
								OLATUNDE ASHAOLU & CO LTD{" "}
							</div>
							<div className="work-duration">
								Jan 2018 - Feb 2018 · 2 mos{" "}
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
