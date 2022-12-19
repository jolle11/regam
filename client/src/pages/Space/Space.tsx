import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CreateDay, DaysCounter, SingleDay } from "../../components";
import { useFetchDaysQuery } from "../../features/days/daysApiSlice";
import { useUpdateSpaceMutation } from "../../features/spaces/spacesApiSlice";
import "./Space.scss";
import { useState } from "react";

const Space = () => {
	const space = useAppSelector((state) => state.space);
	const dispatch = useAppDispatch();
	const [handleUpdate] = useUpdateSpaceMutation();

	const [isEdited, setIsEdited] = useState<boolean>(false);
	const [editableName, setEditableName] = useState<string>(space.name);

	const { data = [], isFetching } = useFetchDaysQuery(space);

	return (
		<>
			<div>
				<h1>{space.name}</h1>
				{/*TODO: Figure out where is the best place to use update space (???component, dropdown, space page???)*/}
				{/* <input
					defaultValue={space.name}
					onChange={(e: React.FormEvent<HTMLInputElement>) => {
						setEditableName(e.currentTarget.value || "");
						setIsEdited(false);
					}}
				/>
				<button
					disabled={editableName !== space.name && isEdited}
					onClick={() => {
						handleUpdate({ id: space.id, name: editableName });
						setIsEdited(true);
					}}
				>
					Actualitzar espai
				</button> */}
			</div>
			{/*TODO: Figure out how to count the days inside the counter*/}
			{/* <DaysCounter /> */}
			<CreateDay />
			<div className="space__days">
				{!isFetching && data.map((day) => <SingleDay key={day.id} {...day} />)}
			</div>
		</>
	);
};

export default Space;
