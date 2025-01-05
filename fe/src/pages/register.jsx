import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser, resetStatus } from '../store/authSlice.jsx';
import Swal from 'sweetalert2';


const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { status, error, success } = useSelector((state) => state.auth);
    const loading = status === 'loading';

    useEffect(() => {
        if (success) {
            Swal.fire({
                title: 'Success!',
                text: success,
                icon: 'success',
                confirmButtonText: 'OK',
            }).then(() => {
                navigate('/');
            });
        }
        if (error) {
            Swal.fire({
                title: 'Error!',
                text: error,
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    }, [success, error, navigate]);

    useEffect(() => {
        // Cleanup on unmount
        return () => {
            dispatch(resetStatus());
        };
    }, [dispatch]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(formData));
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <div className="w-full max-w-sm p-6 bg-gray-800 rounded-xl shadow-md">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-semibold text-gray-100 mb-6">Register</h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-400"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
    
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-400"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
    
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-400"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
    
                    <button
                        type="submit"
                        className={`w-full py-3 px-4 text-white font-semibold rounded-lg ${
                            loading
                                ? 'bg-gray-600 cursor-not-allowed'
                                : 'bg-indigo-600 hover:bg-indigo-700'
                        }`}
                        disabled={loading}
                    >
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <span className="text-sm text-gray-400">Already have an account?</span>
                    <Link
                        to="/"
                        className="text-sm font-medium text-indigo-500 hover:text-indigo-400 ml-1"
                    >
                        Login here
                    </Link>
                </div>
            </div>
        </div>
    );
};    
export default Register;