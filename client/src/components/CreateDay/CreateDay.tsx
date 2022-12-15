import { useAppSelector } from "../../app/hooks";
import { useSetDayMutation } from "../../features/days/daysApiSlice";
import "./Createday.scss";
import moment from "moment";
import { useState } from "react";

const CreateDay = () => {
	const space = useAppSelector((state) => state.space.id);

	const [handleCreate] = useSetDayMutation();

	const [water, setWater] = useState<boolean>(false);
	const [fertilizer, setFertilizer] = useState<boolean>(false);
	const [transplant, setTransplant] = useState<boolean>(false);
	const [comment, setComment] = useState<string>();

	return (
		<div className="day">
			<p
				className={`${water === false ? "greyScale" : ""}`}
				onClick={() => {
					setWater(!water);
				}}
			>
				💧
			</p>
			<p
				className={`${fertilizer === false ? "greyScale" : ""}`}
				onClick={() => {
					setFertilizer(!fertilizer);
				}}
			>
				🔋
			</p>
			<p
				className={`${transplant === false ? "greyScale" : ""}`}
				onClick={() => {
					setTransplant(!transplant);
				}}
			>
				🪴
			</p>

			<textarea
				className=""
				onChange={(e: React.FormEvent<HTMLInputElement>) => {
					setComment(e.currentTarget.value);
				}}
			/>
			<button
				className=""
				onClick={() => {
					handleCreate({
						space,
						date: moment().format("DD/MM/YYYY"),
						water,
						fertilizer,
						transplant,
						comment,
					});
				}}
			>
				Afegir
			</button>
		</div>
	);
};

export default CreateDay;
