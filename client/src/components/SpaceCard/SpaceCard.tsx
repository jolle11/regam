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
		<div className="spacecard">
			<h3 className="spacecard__title">{space.name}</h3>
			<div className="spacecard__group">
				<button
					className="spacecard__button"
					onClick={() => {
						dispatch(setSpace(space));
						navigate(`/space/${space.name}`);
					}}
				>
					Anar
				</button>
				<button
					className="spacecard__button"
					onClick={() => {
						setToggleSpaceActions(!toggleSpaceActions);
						setEditableName("");
					}}
				>
					{toggleSpaceActions ? "Cancel·lar" : "Editar nom"}
				</button>
			</div>
			{toggleSpaceActions && (
				<div className="spacecard__actions">
					<input
						className="spacecard__input"
						onChange={(e: React.FormEvent<HTMLInputElement>) => {
							setEditableName(e.currentTarget.value || "");
							setIsEdited(false);
						}}
					/>
					<div className="spacecard__group">
						<button
							className="spacecard__button spacecard__button--update"
							disabled={isEdited}
							onClick={() => {
								if (editableName === "") {
									return;
								}
								handleUpdate({ id: space.id, name: editableName });
								setIsEdited(true);
							}}
						>
							Actualitzar espai
						</button>
						<button
							className="spacecard__button spacecard__button--delete"
							// TODO: Add two step deletion
							onClick={() => {
								handleDelete(space.id);
							}}
						>
							Eliminar espai
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default SpaceCard;
