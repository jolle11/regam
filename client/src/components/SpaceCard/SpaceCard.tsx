import { useAppDispatch } from "../../app/hooks";
import { setSpace } from "../../features/spaces/spaceSlice";
import { Space } from "../../ts";
import "./SpaceCard.scss";

const SpaceCard = (space: Space) => {
	const dispatch = useAppDispatch();

	return (
		<div key={space.id}>
			<h3>{space.name}</h3>
			<button onClick={() => dispatch(setSpace(space))}>Set as current space</button>
		</div>
	);
};

export default SpaceCard;
