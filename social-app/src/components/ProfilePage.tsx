import LeftSidebar from "./LeftSidebar";
import ProfileDetails from "./ProfileDetails";
import RightSidebar from "./RightSidebar";

const ProfilePage = () => {
  return (
    <>
      <div className="flex flex-row justify-evenly mt-[8vh]">
        <LeftSidebar />
        <ProfileDetails />
        <RightSidebar />
      </div>
    </>
  );
};

export default ProfilePage;
