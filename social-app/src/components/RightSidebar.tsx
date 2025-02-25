//RightSidebar.tsx
import { useNavigate } from "react-router-dom";

const RightSidebar = () => {
  const navigate = useNavigate();
  const menuItems = [
    { label: "Groups", onClick: () => navigate(`/groups`) },
    { label: "Communities", onClick: () => navigate(`/communities`) },
  ];

  return (
    <>
      {" "}
      <div className="flex flex-col p-4 fixed top-20 right-0 h-[57vh] w-[25vw] lg:w-[18vw] bg-blue-300">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className=" text-gray-600 hover:text-blue-500 py-4 text-center my-2 gap-2"
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default RightSidebar;
