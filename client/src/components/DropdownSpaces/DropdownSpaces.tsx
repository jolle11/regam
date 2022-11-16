import { useState } from "react";
import { Link } from "react-router-dom";

const DropdownSpaces = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<button onClick={handleDropdown}>Spaces</button>
			{isOpen && (
				<>
					<button>New Space</button>
					<ul>
						{/* TODO: Map de spaces */}
						{/* <Link to={`/spaces/${space.name}`}></Link> */}
					</ul>
				</>
			)}
		</div>
	);
};

export default DropdownSpaces;
