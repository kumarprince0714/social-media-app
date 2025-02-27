//Homepage.tsx
import LeftSidebar from "./LeftSidebar";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";

const Homepage = () => {
  return (
    <>
      {" "}
      <div className="flex flex-row justify-evenly">
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
      </div>
    </>
  );
};

export default Homepage;
