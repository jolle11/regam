import React, { useState } from "react";

import { Day, Space } from "../../ts";

import "./SingleDay.scss";

import { useUpdateDayMutation, useDeleteDayMutation } from "../../features/days/daysApiSlice";

const SingleDay = ({ id, space, date, water, fertilizer, transplant, comment }: Day) => {
	const [handleUpdate] = useUpdateDayMutation();
	const [handleDelete] = useDeleteDayMutation();

	const [updateWater, setUpdateWater] = useState<boolean>(water);
	const [updateFertilizer, setUpdateFertilizer] = useState<boolean>(fertilizer);
	const [updateTransplant, setUpdateTransplant] = useState<boolean>(transplant);
	const [updateComment, setUpdateComment] = useState<string>(comment);

	return (
		<div className="day">
			<p className="">{date}</p>
			<p
				className={`${updateWater === false ? "greyScale" : ""}`}
				onClick={() => {
					setUpdateWater(!updateWater);
				}}
			>
				💧
			</p>
			<p
				className={`${updateFertilizer === false ? "greyScale" : ""}`}
				onClick={() => {
					setUpdateFertilizer(!updateFertilizer);
				}}
			>
				🔋
			</p>
			<p
				className={`${updateTransplant === false ? "greyScale" : ""}`}
				onClick={() => {
					setUpdateTransplant(!updateTransplant);
				}}
			>
				🪴
			</p>
			<button
				className=""
				onClick={() =>
					handleUpdate({
						space,
						id,
						date,
						water: updateWater,
						fertilizer: updateFertilizer,
						transplant: updateTransplant,
						comment: updateComment,
					})
				}
			>
				Update
			</button>
			<button className="" onClick={() => handleDelete([space, id])}>
				Delete
			</button>

			<button
				className=""
				onClick={() => {
					setUpdateComment(updateComment);
					console.log({ date, water, fertilizer, transplant, updateComment });
				}}
			>
				Show actual values
			</button>
			{/* TODO: Setup comment updates */}
			<textarea className="">{updateComment}</textarea>
		</div>
	);
};

export default SingleDay;
