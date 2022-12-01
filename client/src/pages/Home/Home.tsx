import { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { setSpace } from "../../features/spaces/spaceSlice";
import { setSpaceArray } from "../../features/spaces/spaceArraySlice";

import { useFetchSpacesQuery } from "../../features/spaces/spacesApiSlice";

import "./Home.scss";

import { Day, Space } from "../../ts";

const Home = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { user } = useAppSelector((state) => state.auth);
	const space = useAppSelector((state) => state.space);
	const spaceArray = useAppSelector((state) => state.spaceArray);

	const { data = [], isFetching, refetch } = useFetchSpacesQuery([]);

	useEffect(() => {
		dispatch(setSpaceArray(data));
	}, [data]);

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
					spaceArray.map((space: Space) => (
						<div key={space.id}>
							<h3>{space.name}</h3>
							<button onClick={() => dispatch(setSpace(space))}>Set as current space</button>
						</div>
					))}
				<p>The space you selected is: {space.name}</p>
				<button onClick={() => console.log(spaceArray)}>test</button>
				<button onClick={() => refetch()}>refetch</button>
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
