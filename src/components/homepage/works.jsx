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
						{/* <div className="work">
							<div className="work-title">Junior Front-End Developer</div>
							<div className="work-subtitle">
								Akovision{" "}
							</div>
							<div className="work-duration">
								Apr 2023 - Present
							</div>
						</div> */}
						<div className="work">
							<div className="work-title">Business Systems Admin</div>
							<div className="work-subtitle">
								THE AVENUES TRUST GROUP{" "}
							</div>
							<div className="work-duration">
								Jan 2022 - Jan 2023 · 1 yr
							</div>
						</div>
						<div className="work">
							<div className="work-title">AR Manager</div>
							<div className="work-subtitle">
								The Property Recruitment Company · Part Time{" "}
							</div>
							<div className="work-duration">
								Apr 2022 - Mar 2023 . 1 yr
							</div>
						</div>

						<div className="work">
							<div className="work-title">Finance Assistant</div>
							<div className="work-subtitle">
								THE AVENUES TRUST GROUP{" "}
							</div>
							<div className="work-duration">
								Jun 2018 - Jan 2022 · 3 yrs 7 mos
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
