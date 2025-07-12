import api from "../utils/apiRequest";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    dashboard: 'srijita-dashboard',
  });

  const navigate = useNavigate();
  const { login: setAuthUser } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/signup', formData);
      console.log("Signup successful:", res.data);
      setAuthUser(res.data.user); 
      navigate(`/${formData.dashboard}`);
    } catch (err) {
      console.error("Signup error:", err.response?.data || err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-xl bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label htmlFor="username" className="block text-md font-medium text-gray-700">Username</label>
            <input
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-md font-medium text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              type="email"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-md font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              type="password"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="dashboard" className="block text-md font-medium text-gray-700">Select Dashboard</label>
            <select
              id="dashboard"
              name="dashboard"
              value={formData.dashboard}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="ananta-dashboard">Ananta Dashboard</option>
              <option value="srijita-dashboard">Srijita Dashboard</option>
              <option value="manna-dashboard">Manna Dashboard</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 text-lg transition duration-200"
          >
            Sign Up
          </button>

          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline font-medium">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
