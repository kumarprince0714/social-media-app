//LeftSidebar.tsx

import { useNavigate, useParams, useLocation } from "react-router-dom";
import { RiHomeLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { PiBookmarkSimpleLight } from "react-icons/pi";
import { IoListSharp } from "react-icons/io5";
import { MdOutlineGroups } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdAddCard } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import { RiAddBoxFill } from "react-icons/ri";

const LeftSidebar = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const { username } = useParams<{ username: string }>();

  // Building a prefix for routes. If username is not defined, use an empty string.
  const userPrefix = username ? `/${username}` : "";

  const menuItems = [
    {
      label: "Home",
      icon: <RiHomeLine />,
      onClick: () => navigate(userPrefix),
      path: userPrefix || "/",
    },
    {
      label: "Notifications",
      icon: <IoMdNotificationsOutline />,
      onClick: () => navigate(`${userPrefix}/notifications`),
      path: `${userPrefix}/notifications`,
    },
    {
      label: "Messages",
      icon: <TiMessages />,
      onClick: () => navigate(`${userPrefix}/messages`),
      path: `${userPrefix}/messages`,
    },
    {
      label: "Bookmarks",
      icon: <PiBookmarkSimpleLight />,
      onClick: () => navigate(`${userPrefix}/bookmarks`),
      path: `${userPrefix}/bookmarks`,
    },
    {
      label: "Lists",
      icon: <IoListSharp />,
      onClick: () => navigate(`${userPrefix}/lists`),
      path: `${userPrefix}/lists`,
    },
    {
      label: "Groups",
      icon: <MdOutlineGroups />,
      onClick: () => navigate(`${userPrefix}/groups`),
      path: `${userPrefix}/groups`,
    },
    {
      label: "Subscriptions",
      icon: <MdOutlineSubscriptions />,
      onClick: () => navigate(`${userPrefix}/subscriptions`),
      path: `${userPrefix}/subscriptions`,
    },
    {
      label: "Add Card",
      icon: <MdAddCard />,
      onClick: () => navigate(`${userPrefix}/payments`),
      path: `${userPrefix}/payments`,
    },
    {
      label: "My Profile",
      icon: <IoPersonOutline />,
      onClick: () => navigate(`${userPrefix}/profile`),
      path: `${userPrefix}/profile`,
    },
    {
      label: "More",
      icon: <CiCircleMore />,
      onClick: () => navigate(`${userPrefix}/more`),
      path: `${userPrefix}/more`,
    },
  ];

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  return (
    <>
      {" "}
      <div className="flex flex-col p-4 fixed top-[8%] left-0 h-auto w-1/7 lg:w-[18vw] bg-white">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className={`text-gray-500 ml-2 hover:text-gray-600 cursor-pointer py-4 gap-1 font-bold text-left 
              ${isActive(item.path) ? "text-[#1308A8]" : ""}
            `}
          >
            <div className="flex items-center gap-1">
              <span
                title={item.label}
                className={`flex flex-shrink-0 mt-1 
                ${isActive(item.path) ? "text-[#1308A8]" : ""}
              `}
              >
                {item.icon}&nbsp;
              </span>
              <span
                className={`whitespace-nowrap overflow-hidden flex-grow hidden lg:inline 
              ${isActive(item.path) ? "text-[#1308A8]" : ""}
            `}
              >
                {item.label}
              </span>
            </div>
          </button>
        ))}
        <button className="hidden lg:flex items-center justify-center text-white rounded-sm ml-2 mt-2 bg-[#1308A8] w-25 h-9 cursor-pointer">
          + New Post
        </button>
        <button title="New Post">
          <RiAddBoxFill className="lg:hidden flex items-center justify-center text-gray-500 rounded-sm ml-1 mt-2 w text-2xl -8 h-8 cursor-pointer" />
        </button>
      </div>
    </>
  );
};

export default LeftSidebar;
