import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Spinner } from "../../components";
import { login, reset } from "../../features/auth/authSlice";
import "./Login.scss";
import { useEffect, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface FormData {
	email: string;
	password: string;
}

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const [formData, setFormData] = useState<FormData>({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const { user, isLoading, isError, isSuccess, message } = useAppSelector((state) => state.auth);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		if (isSuccess || user) {
			navigate("/");
		}

		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();

		const userData = { email, password };

		dispatch(login(userData));
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			<section className="heading">
				<h1>
					<FaSignInAlt /> Login
				</h1>
				<p>Introdueix el teu correu i controla els teus racons verds</p>
			</section>
			<section className="form">
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							id="email"
							name="email"
							value={email}
							placeholder="Introdueix el teu correu"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							className="form-control"
							id="password"
							name="password"
							value={password}
							placeholder="Introdueix el teu password"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-block">
							Login
						</button>
					</div>
				</form>
			</section>
		</>
	);
};

export default Login;
