import { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/hooks";

import {
	useFetchSpacesQuery,
	useFetchSpaceMutation,
	useSetSpaceMutation,
	useUpdateSpaceMutation,
	useDeleteSpaceMutation,
} from "../../features/spaces/spacesApiSlice";

import {
	useFetchDaysQuery,
	useSetDayMutation,
	useUpdateDayMutation,
} from "../../features/days/daysApiSlice";

import "./Home.scss";

interface Space {
	id: string;
	name: string;
	days?: Day[];
}

interface Day {
	id: string;
	space: string;
	date: string;
	water: boolean;
	fertilizer: boolean;
	transplant: boolean;
	comments: string;
}

const Home = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { user } = useAppSelector((state) => state.auth);
	const { data = [], isFetching } = useFetchSpacesQuery([]);

	useEffect(() => {
		if (!user) {
			navigate("/login");
		}
	}, [user, navigate, dispatch]);

	return (
		<>
			<section>
				<h1>Benvingut/da {user?.name}</h1>
				{isFetching && <p>Carregant espais</p>}
				{!isFetching &&
					data.map((space: Space) => (
						<div key={space.id}>
							<h3>{space.name}</h3>
						</div>
					))}
				{console.log(data)}
				{/* <table>
					<tbody>
						<tr>
							<th>Dia</th>
							<th>R</th>
							<th>F</th>
							<th>T</th>
							<th>Comentaris</th>
						</tr>
						<tr>
							<td>29-11-2022</td>
							<td>💧</td>
							<td>🔋</td>
							<td>⛏️</td>
							<td>Totes regades menys els cactus</td>
						</tr>
					</tbody>
				</table> */}
			</section>
		</>
	);
};

export default Home;
