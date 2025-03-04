import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import Header from "../Header";
import Homepage from "../Homepage";
import ProfilePage from "../ProfilePage";
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
              <Route path="/" element={<Homepage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
            <Footer />
          </div>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
};

export default Layout;
