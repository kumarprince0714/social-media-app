import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="fixed left-0 top-0 z-10 w-full bg-[#5858FA] h-[89px] flex items-center px-4">
        <Link to="/">
          <h2 className="text-4xl text-white font-bold">Social App</h2>
        </Link>
      </div>
    </>
  );
};

export default Header;
