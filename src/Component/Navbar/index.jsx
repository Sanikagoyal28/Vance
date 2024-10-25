import { UserAuth } from "../../context/AuthContext";
import logo from "../../assets/logo.svg";
import download from "../../assets/download.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  console.log(user);

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-black w-full h-20 absolute top-0 left-0 text-white py-5 shadow-md border-b flex justify-between px-6 sm:px-10">
        <div className="w-[70%] sm:w-4/5 justify-between flex sm:px-8 items-center">
          <Link to="/" className="">
            <img src={logo} className="w-28" />
          </Link>
          <button className="rounded-full bg-[#81EBAB] text-black w-40 justify-center py-3 text-sm gap-x-1 items-center px-4 hidden sm:flex">
            Download App
            <img src={download} />
          </button>
        </div>
        <div className="flex gap-x-4 items-center">
          <div className="flex flex-col items-center">
            <Link to="/rate-alert-dashboard">
              <img src={user?.photoURL} className="rounded-full w-10 h-10" />
            </Link>
            {/* <span className="text-sm">{user?.displayName}</span> */}
          </div>
          {user?.displayName ? (
            <button
              onClick={handleSignOut}
              className="underline text-[#81EBAB]"
            >
              Logout
            </button>
          ) : (
            <Link to="/dashboard">Sign in</Link>
          )}
        </div>
      </div>
    </>
  );
}
