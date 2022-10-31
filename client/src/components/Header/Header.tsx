import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useNavigate, Link } from 'react-router-dom';
import './Header.scss';

import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';

import { logout, reset } from '../../features/auth/authSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    };

    return (
        <header>
            <div>
                <Link to="/">Rega'm</Link>
            </div>
            <ul>
                {user ? (
                    <li>
                        <button onClick={handleLogout}>
                            <FaSignOutAlt /> Logout
                        </button>
                    </li>
                ) : (
                    <>
                        <li>
                            <Link to="/login">
                                <FaSignInAlt /> Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/register">
                                <FaUser /> Register
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </header>
    );
};

export default Header;
