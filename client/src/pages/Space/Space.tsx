import { useAppSelector } from "../../app/hooks";
import { CreateDay, DaysCounter, SingleDay } from "../../components";
import { useFetchDaysQuery } from "../../features/days/daysApiSlice";
import "./Space.scss";
import { useEffect, useState } from "react";

const Space = () => {
	const space = useAppSelector((state) => state.space);

	const [lastWater, setLastWater] = useState<string[]>([]);
	const [lastFertilizer, setLastFertilizer] = useState<string[]>([]);
	const [lastTransplant, setLastTransplant] = useState<string[]>([]);

	const { data = [], isFetching } = useFetchDaysQuery(space);

	data.map((day) => {
		if (day.water === true) {
			lastWater.push(day.date);
		}
		if (day.fertilizer === true) {
			lastFertilizer.push(day.date);
		}
		if (day.transplant === true) {
			lastTransplant.push(day.date);
		}
	});

	useEffect(() => {
		setLastWater([]);
		setLastFertilizer([]);
		setLastTransplant([]);
	}, [isFetching]);

	return (
		<>
			<div>
				<h1>{space.name}</h1>
			</div>
			{/* {data.map((day) => {
				if (day.water === true) {
					lastWater.push(day.date);
				} else if (day.fertilizer === true) {
					lastFertilizer.push(day.date);
				} else if (day.transplant === true) {
					lastTransplant.push(day.date);
				}
			})} */}
			<DaysCounter
				water={lastWater.slice(-1).toString()}
				fertilizer={lastFertilizer.slice(-1).toString()}
				transplant={lastTransplant.slice(-1).toString()}
			/>
			<CreateDay />
			<div className="space__days">
				{!isFetching && data.map((day) => <SingleDay key={day.id} {...day} />)}
			</div>
		</>
	);
};

export default Space;
