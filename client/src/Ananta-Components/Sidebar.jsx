import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaChevronDown, FaChevronRight, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar({ selectedTech }) {
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const sidebarContent = {
    "React.js": [
      { label: "Introduction", path: "/ananta-dashboard/react/introduction" },
      {label: "Render HTML", path: "/ananta-dashboard/react/renderHtml"},
      {label: "React Components", path: "/ananta-dashboard/react/reactComponents"},
      {label: "React Props", path:"/ananta-dashboard/react/reactProps"},
      {label: "React Events", path: "/ananta-dashboard/react/reactEvents"},
      {label: "React Conditionals", path: "/ananta-dashboard/react/reactConditionals"},
      {label: "React Lists", path: "/ananta-dashboard/react/reactLists"},
      {label: "React Router", path: "/ananta-dashboard/react/reactRouter"},
      {label: "React Memo", path: "/ananta-dashboard/react/reactMemo"},
      {
        label: "Hooks",
        subItems: [
          { label: "useState", path: "/ananta-dashboard/react/hooks/useState" },
          { label: "useEffect", path: "/ananta-dashboard/react/hooks/useEffect" }
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

  const navItems = sidebarContent[selectedTech] || [];

  return (
    <>
      {/* Toggle Button (Mobile) */}
      <button
        className="md:hidden p-2 fixed top-4 left-4 bg-gray-800 text-white z-50 rounded"
        onClick={() => setCollapsed(!collapsed)}
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white w-64 h-screen fixed md:static z-40 transition-all duration-300 ${
          collapsed ? "left-0" : "-left-64"
        }`}
      >
        {/* <div className="text-green-500 p-6 text-xl font-bold">MERNify</div> */}
        <nav className="px-4 pt-6">
          {navItems.map((item, idx) => {
            const isParentActive =
              item.subItems &&
              item.subItems.some((sub) => location.pathname === sub.path);

            const isOpen = openDropdown === idx;

            return (
              <div key={idx} className="mb-1">
                {item.subItems ? (
                  <>
                    <div
                      onClick={() =>
                        setOpenDropdown(isOpen ? null : idx)
                      }
                      className={`flex justify-between items-center py-2 px-4 rounded cursor-pointer ${
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
                                isActive
                                  ? "bg-gray-700"
                                  : "hover:bg-gray-800"
                              }`
                            }
                            onClick={() => setCollapsed(true)} // close on mobile
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
          <button className="flex items-center gap-2 cursor-pointer hover:text-red-500">
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
