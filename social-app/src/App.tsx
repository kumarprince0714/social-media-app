//App.tsx
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <div className="flex flex-col min-h-[100vh]">
            <Header />
            {/* <h1 className="justify-center items-center text-blue-800">
            Social App!
          </h1> */}
            <Homepage />
            <Footer />
          </div>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
