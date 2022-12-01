import React from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/hooks";

import "./Space.scss";

const Space = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const space = useAppSelector((state) => state.space);

	return (
		<>
			<h1>{space.name}</h1>
		</>
	);
};

export default Space;
