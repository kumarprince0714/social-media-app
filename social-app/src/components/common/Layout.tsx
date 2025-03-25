//Layout.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import Header from "../Header";
import Homepage from "../Homepage";
import ProfilePage from "../ProfilePage";
import GroupPage from "./GroupPage";
import BookmarkPage from "../bookmarks/BookmarkPage";
import Footer from "../Footer";

const queryClient = new QueryClient();

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <div className="flex flex-col min-h-[100vh]">
            <Header />
            <Routes>
              <Route path="/:username" element={<Homepage />} />
              <Route path="/:username/profile" element={<ProfilePage />} />
              <Route path="/:username/groups" element={<GroupPage />} />
              <Route path="/:username/bookmarks" element={<BookmarkPage />} />
            </Routes>
            <Footer />
          </div>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
};

export default Layout;
