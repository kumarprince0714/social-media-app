import LeftSidebar from "../LeftSidebar";
import BookmarkComponent from "./BookmarkComponent";

const BookmarkPage = () => {
  return (
    <>
      {" "}
      <div className="flex justify-evenly mt-[8vh] min-h-[100vh]">
        <LeftSidebar />
        <BookmarkComponent />
      </div>
    </>
  );
};

export default BookmarkPage;
