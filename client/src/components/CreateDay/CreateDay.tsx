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
	const { water, fertilizer, transplant, comment } = useAppSelector((state) => state.day);

	const [handleCreate] = useSetDayMutation();

	return (
		<form className="day">
			<p>Avui</p>
			{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<p
				className={`${water === false ? "greyScale" : ""}`}
				onClick={() => {
					dispatch(setWater(!water));
				}}
			>
				💧
			</p>
			{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<p
				className={`${fertilizer === false ? "greyScale" : ""}`}
				onClick={() => {
					dispatch(setFertilizer(!fertilizer));
				}}
			>
				🔋
			</p>
			{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<p
				className={`${transplant === false ? "greyScale" : ""}`}
				onClick={() => {
					dispatch(setTransplant(!transplant));
				}}
			>
				🪴
			</p>

			<textarea
				className=""
				value={comment}
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
						water,
						fertilizer,
						transplant,
						comment,
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
