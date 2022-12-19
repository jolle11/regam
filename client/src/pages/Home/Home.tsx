import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CreateSpace, SpaceCard, Spinner } from "../../components";
import { setSpaceArray } from "../../features/spaces/spaceArraySlice";
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

	// To avoid infinite renderings we do this 👇
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
				{isFetching && <Spinner />}
				{!isFetching && spaceArray.map((space: Space) => <SpaceCard {...space} />)}
				<CreateSpace />
				<p>The space you selected is: {space.name}</p>
			</section>
		</>
	);
};

export default Home;
