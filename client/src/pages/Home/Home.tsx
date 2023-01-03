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
			<section className="home">
				<h1 className="home__welcome">Benvingut/da, {user?.name}.</h1>
				{isFetching && <Spinner />}
				<div className="home__list">
					{!isFetching && spaceArray.map((space: Space) => <SpaceCard key={space.id} {...space} />)}
				</div>
				<CreateSpace />
			</section>
		</>
	);
};

export default Home;
