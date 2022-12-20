import { useAppDispatch } from "../../app/hooks";
import { setSpace } from "../../features/spaces/spaceSlice";
import {
	useDeleteSpaceMutation,
	useUpdateSpaceMutation,
} from "../../features/spaces/spacesApiSlice";
import { Space } from "../../ts";
import "./SpaceCard.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SpaceCard = (space: Space) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const [handleUpdate] = useUpdateSpaceMutation();
	const [handleDelete] = useDeleteSpaceMutation();

	const [toggleSpaceActions, setToggleSpaceActions] = useState<boolean>(false);
	const [isEdited, setIsEdited] = useState<boolean>(false);
	const [editableName, setEditableName] = useState<string>("");

	return (
		<div>
			<h3>{space.name}</h3>
			<button
				onClick={() => {
					dispatch(setSpace(space));
					navigate(`/space/${space.name}`);
				}}
			>
				Seleccionar espai
			</button>
			<button
				onClick={() => {
					setToggleSpaceActions(!toggleSpaceActions);
					setEditableName("");
				}}
			>
				{toggleSpaceActions ? "Cancellar" : "Editar espai"}
			</button>
			{toggleSpaceActions && (
				<>
					<input
						onChange={(e: React.FormEvent<HTMLInputElement>) => {
							setEditableName(e.currentTarget.value || "");
							setIsEdited(false);
						}}
					/>
					<button
						disabled={isEdited}
						onClick={() => {
							handleUpdate({ id: space.id, name: editableName });
							setIsEdited(true);
						}}
					>
						Actualitzar espai
					</button>
					<button
						// TODO: Add two step deletion
						onClick={() => {
							handleDelete(space.id);
						}}
					>
						Eliminar espai
					</button>
				</>
			)}
		</div>
	);
};

export default SpaceCard;
