import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router


function Login() {
    const [formData, setFormData] = useState({
        usernameOrEmail: '',
        password: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm(formData);
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            // Proceed with login
            setIsSubmitting(true);
            setTimeout(() => {
                // Simulating login process
                console.log(formData);
                setIsSubmitting(false);
            }, 1000);
        }
    };

    const validateForm = (values) => {
        let errors = {};
        if (!values.usernameOrEmail.trim()) {
            errors.usernameOrEmail = 'Username or Email is required';
        }
        if (!values.password.trim()) {
            errors.password = 'Password is required';
        }
        return errors;
    };

    return (
        <>
            
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="bg-white p-8 rounded shadow-md w-96">
                    <h2 className="text-2xl font-semibold mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Username or Email</label>
                            <input
                                type="text"
                                name="usernameOrEmail"
                                value={formData.usernameOrEmail}
                                onChange={handleChange}
                                className={`w-full border rounded-md px-3 py-2 focus:outline-none ${formErrors.usernameOrEmail ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {formErrors.usernameOrEmail && <p className="text-red-500 text-xs mt-1">{formErrors.usernameOrEmail}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`w-full border rounded-md px-3 py-2 focus:outline-none ${formErrors.password ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {formErrors.password && <p className="text-red-500 text-xs mt-1">{formErrors.password}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                    <div className="mt-4 text-center">
                        <Link to="/signup" className="text-blue-500 hover:underline">Create New Account</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
