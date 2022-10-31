import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { register, reset } from '../../features/auth/authSlice';
import { Spinner } from '../../components/';

import './Register.scss';

interface FormData {
    name: string;
    email: string;
    password: string;
    verifyPassword: string;
}

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
        verifyPassword: '',
    });

    const { name, email, password, verifyPassword } = formData;

    const { user, isLoading, isError, isSuccess, message } = useAppSelector((state) => state.auth);

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (isSuccess || user) {
            navigate('/');
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
        if (password !== verifyPassword) {
            toast.error('Passwords do not match');
        } else {
            const userData = {
                name,
                email,
                password,
            };
            dispatch(register(userData));
        }
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Please create an account</p>
            </section>
            <section className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={name}
                            placeholder="Enter your name"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email"
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
                            placeholder="Enter your password"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="verifyPassword"
                            name="verifyPassword"
                            value={verifyPassword}
                            placeholder="Confirm password"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block">
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Register;
