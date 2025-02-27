//RightSidebar.tsx
import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";

interface RightSidebarProps {
  onSearch: (query: string) => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ onSearch }) => {
  const navigate = useNavigate();
  const menuItems = [
    { label: "Groups", onClick: () => navigate(`/groups`) },
    { label: "Communities", onClick: () => navigate(`/communities`) },
  ];

  return (
    <>
      {" "}
      <div className="flex flex-col p-4 fixed top-[8%] right-0 min-h-[57vh] w-1/7 lg:w-1/6 ">
        <Searchbar onSearch={onSearch} />
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className=" text-gray-600 text-center hover:text-blue-800 cursor-pointer py-4 my-2 gap-2 font-bold"
          >
            {/* {item.label} */}
          </button>
        ))}
      </div>
    </>
  );
};

export default RightSidebar;
