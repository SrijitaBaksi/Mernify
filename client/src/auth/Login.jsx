import api from "../utils/apiRequest";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import  {toast, ToastContainer} from "react-toastify"
import confetti from "canvas-confetti";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    dashboard: 'srijita-dashboard'
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login: setAuthUser } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Logging into your account");
    try {
      const res = await api.post('/auth/login', formData);
      console.log('Login successful:', res.data);
      setAuthUser(res.data.user);
      showWelcomeToast();
      navigate(`/${formData.dashboard}`, {replace: true});
      toast.update(toastId, {
        render: `Redirecting to ${formData.dashboard}`,
        type: "success",
        isLoading: false,
        autoClose: 2000
      })
      navigate(`/${formData.dashboard}/react`, {replace: true});
    } catch (err) {
       const errorMessage =
        err.response?.data?.message || // Case: { message: 'Invalid credentials' }
        (typeof err.response?.data === 'string' ? err.response.data : null) || // Case: string error
        err.message || // Fallback error
        "Logging in failed. Please try again"; // Final fallback
      console.error('Login error:', err.response?.data || err.message);
      toast.update(toastId, {
        render: errorMessage,
        autoClose: 2000,
        isLoading: false,
        type: "error"
      })
    }finally{
      setLoading(false);
    }
  };

  const showWelcomeToast = ()=>{
    toast.success("🎉 Yayyy! You came for stoody!",{
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    })

    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    
    const interval = setInterval(()=>{
      if(Date.now() > animationEnd){
        clearInterval(interval);
        return;
      }
      confetti({
        particleCount: 40,
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2, // shoot from top
        },
      });
    },250)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4 py-8">
      <div className="w-full max-w-xl bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-10 animate-fade-in-up transition-all duration-500 ease-in-out">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 tracking-tight">
          Login to <span className="text-blue-600">MERNIFY</span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="group relative">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>

          <div className="group relative">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>

          <div>
            <label htmlFor="dashboard" className="block text-sm font-semibold text-gray-700 mb-1">Select Dashboard</label>
            <select
              id="dashboard"
              name="dashboard"
              value={formData.dashboard}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              <option value="ananta-dashboard">Ananta Dashboard</option>
              <option value="srijita-dashboard">Srijita Dashboard</option>
              <option value="manna-dashboard">Manna Dashboard</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer py-3 rounded-xl bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transform hover:scale-[1.02] transition duration-300"
          >
            {loading ? "Logging in": "login"}
          </button>

          <p className="text-center text-gray-600 text-sm pt-2">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline font-medium">
              Sign up here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
