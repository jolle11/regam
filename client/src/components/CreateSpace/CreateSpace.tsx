import { useSetSpaceMutation } from "../../features/spaces/spacesApiSlice";
import "./CreateSpace.scss";
import { useState } from "react";

const CreateSpace = () => {
	const [handleCreate] = useSetSpaceMutation();
	const [newSpace, setNewSpace] = useState<string>("");

	return (
		<div>
			<p>Nou espai</p>
			<input
				type="text"
				onChange={(e: React.FormEvent<HTMLInputElement>) =>
					setNewSpace(e.currentTarget.value || "")
				}
			/>
			<button onClick={() => handleCreate({ name: newSpace })}>Crear</button>
		</div>
	);
};

export default CreateSpace;
