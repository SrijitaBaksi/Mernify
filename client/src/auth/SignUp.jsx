import api from "../utils/apiRequest";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import  {toast, ToastContainer} from "react-toastify"
import confetti from "canvas-confetti";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    dashboard: 'srijita-dashboard',
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
    const toastId = toast.loading("Creating your account...");
    try {
      const res = await api.post('/auth/signup', formData);
      setAuthUser(res.data.user);
      showWelcomeToast();
      navigate(`/${formData.dashboard}`);
      toast.update(toastId, {
        render: "Account created successfully! 🎉",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate(`/${formData.dashboard}/react`);
      }, 2000);
    } catch (err) {
      toast.update(toastId, {
        render: err.response?.data?.message || "Signup failed. Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-200 px-4 py-10">
      <div className="w-full max-w-xl bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10 animate-fade-in-up transition-all duration-500 ease-in-out">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 tracking-tight">
          Create Your <span className="text-blue-600">MERNIFY</span> Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="flex flex-col">
            <label htmlFor="username" className="text-sm font-semibold text-gray-700 mb-1 text-left">
              Username
            </label>
            <input
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-1 text-left">
              Email
            </label>
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

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-semibold text-gray-700 mb-1 text-left">
              Password
            </label>
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

          <div className="flex flex-col">
            <label htmlFor="dashboard" className="text-sm font-semibold text-gray-700 mb-1 text-left">
              Select Dashboard
            </label>
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
            className={`w-full py-3 rounded-xl font-semibold text-lg transition duration-300 ${
              loading
                ? "bg-blue-400 cursor-not-allowed text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white hover:scale-[1.02]"
            }`}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

          <p className="text-center text-gray-600 text-sm pt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline cursor-pointer font-medium">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
