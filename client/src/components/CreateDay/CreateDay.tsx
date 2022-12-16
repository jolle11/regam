import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useSetDayMutation } from "../../features/days/daysApiSlice";
import {
	reset,
	setComment,
	setFertilizer,
	setTransplant,
	setWater,
} from "../../features/days/daysSlice";
import "./Createday.scss";
import moment from "moment";
import { FormEvent } from "react";

const CreateDay = () => {
	const dispatch = useAppDispatch();

	const space = useAppSelector((state) => state.space.id);
	const day = useAppSelector((state) => state.day);

	const [handleCreate] = useSetDayMutation();

	return (
		<form className="day">
			<p>Avui</p>
			{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<p
				className={`${day.water === false ? "greyScale" : ""}`}
				onClick={() => {
					dispatch(setWater(!day.water));
				}}
			>
				💧
			</p>
			{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<p
				className={`${day.fertilizer === false ? "greyScale" : ""}`}
				onClick={() => {
					dispatch(setFertilizer(!day.fertilizer));
				}}
			>
				🔋
			</p>
			{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<p
				className={`${day.transplant === false ? "greyScale" : ""}`}
				onClick={() => {
					dispatch(setTransplant(!day.transplant));
				}}
			>
				🪴
			</p>

			<textarea
				className=""
				value={day.comment}
				onChange={(e: React.FormEvent<HTMLInputElement>) =>
					dispatch(setComment(e.currentTarget.value || ""))
				}
			/>

			<button
				className=""
				onClick={(e: FormEvent) => {
					e.preventDefault();
					handleCreate({
						space,
						date: moment().format("DD/MM/YYYY"),
						water: day.water,
						fertilizer: day.fertilizer,
						transplant: day.transplant,
						comment: day.comment,
					});
					dispatch(reset());
				}}
			>
				Afegir
			</button>
		</form>
	);
};

export default CreateDay;
