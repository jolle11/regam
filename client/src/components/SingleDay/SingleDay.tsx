import React from "react";

import { Day } from "../../ts";

import "./SingleDay.scss";

const SingleDay = ({ id, space, date, water, fertilizer, transplant, comment }: Day) => {
	return (
		<div className="day">
			<p className="">{date}</p>
			{water && <p className="">💧</p>}
			{fertilizer && <p className="">🔋</p>}
			{transplant && <p className="">⛏️</p>}
			<p className="">Edit</p>
			<p className="">Delete</p>
			<p className="">{comment}</p>
		</div>
	);
};

export default SingleDay;
