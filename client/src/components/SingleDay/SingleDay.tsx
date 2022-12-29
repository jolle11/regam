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
		<div className="singleday">
			<p className="singleday__date">{date}</p>
			<p
				className={`singleday__icon ${updateWater === false ? "singleday__icon--greyScale" : ""}`}
				onClick={() => {
					setUpdateWater(!updateWater);
				}}
			>
				💧
			</p>
			<p
				className={`singleday__icon ${
					updateFertilizer === false ? "singleday__icon--greyScale" : ""
				}`}
				onClick={() => {
					setUpdateFertilizer(!updateFertilizer);
				}}
			>
				🔋
			</p>
			<p
				className={`singleday__icon ${
					updateTransplant === false ? "singleday__icon--greyScale" : ""
				}`}
				onClick={() => {
					setUpdateTransplant(!updateTransplant);
				}}
			>
				🪴
			</p>
			<button
				className="singleday__button"
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
				className="singleday__button"
				onClick={() => {
					handleDelete([space, id]);
				}}
			>
				🗑️
			</button>
			<textarea
				className="singleday__textarea"
				defaultValue={comment}
				onChange={(e: React.FormEvent<HTMLInputElement>) => {
					setUpdateComment(e.currentTarget.value);
				}}
			/>
		</div>
	);
};

export default SingleDay;
