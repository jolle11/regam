import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { setSpace } from "../../features/spaces/spaceSlice";

import { Space } from "../../ts";

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
		navigate(`/space/${space.name}`);
	};

	return (
		<div>
			<button onClick={handleDropdown}>Spaces</button>
			{isOpen && (
				<>
					<button>New Space</button>
					<ul>
						{spaceArray.map((space: Space) => (
							<li key={space.id} onClick={() => handleSpaceSwitch(space)}>
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
