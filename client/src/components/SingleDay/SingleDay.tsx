import { useDeleteDayMutation, useUpdateDayMutation } from "../../features/days/daysApiSlice";
import { Day } from "../../ts";
import "./SingleDay.scss";
import React, { FormEvent, useState } from "react";

const SingleDay = (day: Day) => {
	const [handleUpdate] = useUpdateDayMutation();
	const [handleDelete] = useDeleteDayMutation();

	const { space, id, date, water, fertilizer, transplant, comment } = day;

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
				disabled={
					water === updateWater &&
					fertilizer === updateFertilizer &&
					transplant === updateTransplant &&
					comment === updateComment
						? true
						: false
				}
				onClick={() => {
					handleUpdate({
						space,
						id,
						date,
						water: updateWater,
						fertilizer: updateFertilizer,
						transplant: updateTransplant,
						comment: updateComment,
					});
				}}
			>
				Actualitza
			</button>
			<button
				className=""
				onClick={() => {
					handleDelete([space, id]);
				}}
			>
				Esborra
			</button>
			<textarea
				className=""
				defaultValue={comment}
				onChange={(e: React.FormEvent<HTMLInputElement>) => {
					setUpdateComment(e.currentTarget.value);
				}}
			/>
		</div>
	);
};

export default SingleDay;
