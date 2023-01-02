import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setSpace } from "../../features/spaces/spaceSlice";
import { Space } from "../../ts";
import CreateSpace from "../CreateSpace/CreateSpace";
import "./DropdownSpaces.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const DropdownSpaces = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const spaceArray = useAppSelector((state) => state.spaceArray);

	const handleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleSpaceSwitch = (space: Space) => {
		dispatch(setSpace(space));
		setIsOpen(false);
		navigate(`/space/${space.name}`);
	};

	return (
		<div className="dropdown">
			<button className="dropdown__button" onClick={handleDropdown}>
				Espais
			</button>
			{isOpen && (
				<>
					<CreateSpace />
					<ul className="dropdown__list">
						{spaceArray.map((space: Space) => (
							<li
								className="dropdown__item"
								key={space.id}
								onClick={() => handleSpaceSwitch(space)}
							>
								{space.name}
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	);
};

export default DropdownSpaces;
