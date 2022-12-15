import { useAppSelector } from "../../app/hooks";

import { DaysCounter, SingleDay } from "../../components";

import { useFetchDaysQuery } from "../../features/days/daysApiSlice";

import "./Space.scss";

const Space = () => {
	const space = useAppSelector((state) => state.space);

	const { data = [], isFetching } = useFetchDaysQuery(space);

	return (
		<>
			<h1>{space.name}</h1>
			<DaysCounter />
			<table>
				<tbody>
					<tr>
						<th>Dia</th>
						<th>R</th>
						<th>F</th>
						<th>T</th>
						<th>Accions</th>
						<th>Comentaris</th>
					</tr>
				</tbody>
			</table>
			{!isFetching &&
				data.map((day) => (
					<SingleDay
						key={day.id}
						id={day.id}
						space={day.space}
						date={day.date}
						water={day.water}
						fertilizer={day.fertilizer}
						transplant={day.transplant}
						comment={day.comment}
					/>
				))}
		</>
	);
};

export default Space;
