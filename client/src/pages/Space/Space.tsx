import { useAppSelector } from "../../app/hooks";

import { CreateDay, DaysCounter, SingleDay } from "../../components";

import { useFetchDaysQuery } from "../../features/days/daysApiSlice";

import "./Space.scss";

const Space = () => {
	const space = useAppSelector((state) => state.space);

	const { data = [], isFetching } = useFetchDaysQuery(space);

	return (
		<>
			{/*TODO: Make title editable onclick*/}
			{/*TODO: Autoupdate when click outside || show update button*/}
			<h1>{space.name}</h1>
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
