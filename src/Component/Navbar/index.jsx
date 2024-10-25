import { UserAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user } = UserAuth();

  return (
    <>
      <div className="bg-black w-full absolute top-0 left-0 text-white py-5 shadow-md border-b flex justify-between px-10">
        vance
        {/* <p>{user ? user?.displayName : ""}</p> */}
      </div>
    </>
  );
}
