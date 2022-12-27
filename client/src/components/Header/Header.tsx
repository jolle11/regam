import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout, reset } from "../../features/auth/authSlice";
import DropdownSpaces from "../DropdownSpaces/DropdownSpaces";
import "./Header.scss";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { user } = useAppSelector((state) => state.auth);

	const handleLogout = () => {
		dispatch(logout());
		dispatch(reset());
		navigate("/");
	};

	return (
		<header className="header">
			<Link to="/" className="header__title">
				Rega'm
			</Link>
			{user && <DropdownSpaces />}
			{user && (
				<ul className="header__list">
					<li className="header__item">
						<button onClick={handleLogout} className="header__button">
							<FaSignOutAlt /> Tancar sessió
						</button>
					</li>
				</ul>
			)}
			{!user && (
				<ul className="header__list">
					<li className="header__item">
						<Link to="/login" className="header__button">
							<FaSignInAlt /> Inicia sessió
						</Link>
					</li>
					<li className="header__item">
						<Link to="/register" className="header__button">
							<FaUser /> Registra't
						</Link>
					</li>
				</ul>
			)}
		</header>
	);
};

export default Header;
