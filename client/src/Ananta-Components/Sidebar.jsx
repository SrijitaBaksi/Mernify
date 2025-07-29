import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaChevronDown, FaChevronRight, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import api from "../utils/apiRequest";

export default function Sidebar({ selectedTech }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout: clearAuthContext } = useAuth(); // ✅ moved here (correct usage)

  const [collapsed, setCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const sidebarContent = {
    "React.js": [
      { label: "Introduction", path: "/ananta-dashboard/react/introduction" },
      { label: "Connect Tailwind with react", path: "/ananta-dashboard/react/connectTailwind" },
      { label: "Render HTML", path: "/ananta-dashboard/react/renderHtml" },
      { label: "React Class Components", path: "/ananta-dashboard/react/classComponents" },
      { label: "React Components", path: "/ananta-dashboard/react/reactComponents" },
      { label: "React Props", path: "/ananta-dashboard/react/reactProps" },
      { label: "React Events", path: "/ananta-dashboard/react/reactEvents" },
      { label: "React Conditionals", path: "/ananta-dashboard/react/reactConditionals" },
      { label: "React Lists", path: "/ananta-dashboard/react/reactLists" },
      { label: "React Router", path: "/ananta-dashboard/react/reactRouter" },
      { label: "React Memo", path: "/ananta-dashboard/react/reactMemo" },
      {
        label: "Hooks",
        subItems: [
          { label: "Hooks Definition", path: "/ananta-dashboard/react/hooks/hooksDefine" },
          { label: "useState", path: "/ananta-dashboard/react/hooks/useState" },
          { label: "useEffect", path: "/ananta-dashboard/react/hooks/useEffect" },
          {label: "useContext", path: "/ananta-dashboard/react/hooks/useContext"},
          {label: "useRef", path: "/ananta-dashboard/react/hooks/useRef"},
          {label: "useReducer", path: "/ananta-dashboard/react/hooks/useReducer"},
          {label: "useCallBack", path: "/ananta-dashboard/react/hooks/useCallBack"},
        ]
      }
    ],
    "Node.js": [
      { label: "Intro to Node", path: "/ananta-dashboard/react/node/intro" },
      { label: "File System", path: "/ananta-dashboard/react/node/fs" }
    ],
    "Express.js": [
      { label: "Intro to Express", path: "/ananta-dashboard/react/express/intro" },
      { label: "Middlewares", path: "/ananta-dashboard/react/express/middleware" }
    ],
    "MongoDB": [
      { label: "Mongo Basics", path: "/ananta-dashboard/react/mongodb/basics" },
      { label: "Aggregation", path: "/ananta-dashboard/react/mongodb/aggregation" }
    ]
  };

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
      clearAuthContext(); // ✅ clear context state
      navigate("/login", { replace: true }); // ✅ redirect to login
    } catch (err) {
      console.log("Logout Failed", err);
    }
  };

  const navItems = sidebarContent[selectedTech] || [];

  return (
    <>
      <button
        className="md:hidden p-2 fixed top-4 left-4 bg-gray-800 text-white z-50 rounded"
        onClick={() => setCollapsed(!collapsed)}
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white w-64 h-screen fixed md:static z-40 transition-all duration-300 ${collapsed ? "left-0" : "-left-64"}`}
      >
        <nav className="px-4 pt-6 overflow-y-auto scrollbar-hide h-[calc(100vh-60px)]">
          {navItems.map((item, idx) => {
            const isParentActive = item.subItems && item.subItems.some((sub) => location.pathname === sub.path);
            const isOpen = openDropdown === idx;

            return (
              <div key={idx} className="mb-1">
                {item.subItems ? (
                  <>
                    <div
                      onClick={() => setOpenDropdown(isOpen ? null : idx)}
                      className={`flex justify-between mb-2 items-center py-2 px-4 rounded cursor-pointer ${
                        isParentActive ? "bg-gray-700" : "hover:bg-gray-800"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isOpen ? <FaChevronDown /> : <FaChevronRight />}
                    </div>
                    {isOpen && (
                      <div className="ml-4">
                        {item.subItems.map((sub, i) => (
                          <NavLink
                            key={i}
                            to={sub.path}
                            className={({ isActive }) =>
                              `block py-1 px-4 text-sm rounded ${
                                isActive ? "bg-gray-700" : "hover:bg-gray-800"
                              }`
                            }
                            onClick={() => setCollapsed(true)}
                          >
                            {sub.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-2 px-4 rounded ${
                        isActive ? "bg-gray-700" : "hover:bg-gray-800"
                      }`
                    }
                    onClick={() => setCollapsed(true)}
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 hover:bg-gray-800 cursor-pointer">
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 cursor-pointer hover:text-red-500"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </div>

      {/* Logout Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-xl w-80 text-center">
            <h2 className="text-xl font-semibold mb-4">Don't go 😢</h2>
            <p className="mb-4">Are you sure you want to leave us like this?</p>
            <div className="flex justify-between gap-4">
              <button
                onClick={handleLogout}
                className="bg-red-500 cursor-pointer hover:bg-red-600 text-white px-4 py-2 rounded w-full"
              >
                Final Bye 👋
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 cursor-pointer hover:bg-gray-400 px-4 py-2 rounded w-full"
              >
                Back 🙃
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
