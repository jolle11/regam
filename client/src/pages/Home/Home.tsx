import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CreateSpace } from "../../components";
import { setSpaceArray } from "../../features/spaces/spaceArraySlice";
import { setSpace } from "../../features/spaces/spaceSlice";
import { useFetchSpacesQuery } from "../../features/spaces/spacesApiSlice";
import { Space } from "../../ts";
import "./Home.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { user } = useAppSelector((state) => state.auth);
	const space = useAppSelector((state) => state.space);
	const spaceArray = useAppSelector((state) => state.spaceArray);

	const { data = [], isFetching } = useFetchSpacesQuery([]);

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
				<CreateSpace />
				<p>The space you selected is: {space.name}</p>
			</section>
		</>
	);
};

export default Home;
