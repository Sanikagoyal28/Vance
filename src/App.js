import { ToastContainer } from "react-toastify";
import "./App.css";
import Dashboard from "./Component/Dashboard/page";
import RateAlert from "./Component/Dashboard/RateAlert";
import LandingPage from "./Component/LandingPage/page";
import Navbar from "./Component/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rate-alert-dashboard" element={<RateAlert />} />
        </Routes>
        </BrowserRouter>
      </AuthContextProvider>

      <ToastContainer />
    </>
  );
}

export default App;


// dashboard me 2 issues
