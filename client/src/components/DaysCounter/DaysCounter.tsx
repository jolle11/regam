import React from "react";

import "./DaysCounter.scss";

const DaysCounter = () => {
	return (
		<div className="counter">
			<div className="counter__title">Dies des de l'útim:</div>
			<div className="counter__subtitle counter__subtitle--rec">Rec</div>
			<div className="counter__subtitle counter__subtitle--fertilitzant">Fertilitzant</div>
			<div className="counter__subtitle counter__subtitle--transplant">Transplant</div>
			<div className="counter__number counter__number--rec">3</div>
			<div className="counter__number counter__number--fertilitzant">28</div>
			<div className="counter__number counter__number--transplant">105</div>
		</div>
	);
};

export default DaysCounter;
