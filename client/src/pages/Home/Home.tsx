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
			</section>
		</>
	);
};

export default Home;
