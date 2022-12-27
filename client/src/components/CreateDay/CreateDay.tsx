import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useSetDayMutation } from "../../features/days/daysApiSlice";
import {
	reset,
	setComment,
	setFertilizer,
	setTransplant,
	setWater,
} from "../../features/days/daysSlice";
import "./CreateDay.scss";
import moment from "moment";
import { FormEvent } from "react";

const CreateDay = () => {
	const dispatch = useAppDispatch();

	const space = useAppSelector((state) => state.space.id);
	const { water, fertilizer, transplant, comment } = useAppSelector((state) => state.day);

	const [handleCreate] = useSetDayMutation();

	return (
		<form className="createday">
			<p className="createday__today">Avui</p>
			<div className="createday__icons">
				{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<p
					className={`createday__icon ${water === false ? "createday__icon--greyScale" : ""}`}
					onClick={() => {
						dispatch(setWater(!water));
					}}
				>
					💧
				</p>
				{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<p
					className={`createday__icon ${fertilizer === false ? "createday__icon--greyScale" : ""}`}
					onClick={() => {
						dispatch(setFertilizer(!fertilizer));
					}}
				>
					🔋
				</p>
				{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<p
					className={`createday__icon ${transplant === false ? "createday__icon--greyScale" : ""}`}
					onClick={() => {
						dispatch(setTransplant(!transplant));
					}}
				>
					🪴
				</p>
			</div>

			<textarea
				className="createday__comment"
				value={comment}
				placeholder='Escriu el teu comentari'
				onChange={(e: React.FormEvent<HTMLInputElement>) =>
					dispatch(setComment(e.currentTarget.value || ""))
				}
			/>

			<button
				className="createday__button"
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
