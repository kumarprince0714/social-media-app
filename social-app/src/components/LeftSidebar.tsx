//LeftSidebar.tsx

import { useNavigate } from "react-router-dom";

const LeftSidebar = () => {
  const navigate = useNavigate();
  const menuItems = [
    { label: "Home", onClick: () => navigate(`/home`) },
    { label: "Notifications", onClick: () => navigate(`/notifications`) },
  ];

  return (
    <>
      {" "}
      <div className="flex flex-col p-4 fixed top-20 left-0 h-[57vh] w-[25vw] lg:w-[18vw] bg-amber-200">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className=" text-gray-600 text-center hover:text-blue-500 py-4 gap-2 my-2"
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default LeftSidebar;
