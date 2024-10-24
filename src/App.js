import "./App.css";
import Dashboard from "./Component/Dashboard/page";
import RateAlert from "./Component/Dashboard/RateAlert";
import LandingPage from "./Component/LandingPage/page";
import Navbar from "./Component/Navbar";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        {/* <LandingPage /> */}
        <Dashboard />
        {/* <RateAlert /> */}
      </AuthContextProvider>
    </>
  );
}

export default App;
