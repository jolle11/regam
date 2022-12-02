import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { DaysCounter, SingleDay } from "../../components";

import { useFetchDaysQuery } from "../../features/days/daysApiSlice";

import "./Space.scss";

const Space = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const space = useAppSelector((state) => state.space);

	const { data = [], isFetching, refetch } = useFetchDaysQuery(space);

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
			{console.log(data)}
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
