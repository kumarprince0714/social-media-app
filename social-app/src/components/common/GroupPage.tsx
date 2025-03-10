import GroupComponent from "../GroupComponent";
import LeftSidebar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";

const GroupPage = () => {
  return (
    <>
      <div className="flex justify-evenly mt-[8vh]">
        <LeftSidebar />
        <GroupComponent />
        <RightSidebar />
      </div>
    </>
  );
};

export default GroupPage;
