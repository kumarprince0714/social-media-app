//Homepage.tsx
import LeftSidebar from "./LeftSidebar";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";

const Homepage = () => {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <>
      {" "}
      <div className="flex flex-row justify-evenly">
        <LeftSidebar />
        <MainContent />
        <RightSidebar onSearch={handleSearch} />
      </div>
    </>
  );
};

export default Homepage;
