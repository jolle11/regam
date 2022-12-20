import { useSetSpaceMutation } from "../../features/spaces/spacesApiSlice";
import "./CreateSpace.scss";
import { FormEvent, useState } from "react";

const CreateSpace = () => {
	const [handleCreate] = useSetSpaceMutation();

	const [newSpace, setNewSpace] = useState<string>("");
	const [toggleCreateNewSpace, setToggleCreateNewSpace] = useState<boolean>(false);

	return (
		<form>
			<button
				onClick={(e: FormEvent) => {
					e.preventDefault();
					setToggleCreateNewSpace(!toggleCreateNewSpace);
				}}
			>
				{toggleCreateNewSpace ? "Cancellar" : "Crear nou espai"}
			</button>
			{toggleCreateNewSpace && (
				<>
					<input
						type="text"
						onChange={(e: React.FormEvent<HTMLInputElement>) =>
							setNewSpace(e.currentTarget.value || "")
						}
					/>
					<button
						onClick={(e: FormEvent) => {
							e.preventDefault();
							handleCreate({ name: newSpace });
							setToggleCreateNewSpace(false);
						}}
					>
						Crear
					</button>
				</>
			)}
		</form>
	);
};

export default CreateSpace;
