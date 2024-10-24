import megaphone from "../../assets/megaphone.svg";
import { UserAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const { googleSignIn } = UserAuth();

  async function handleGoogleAuth() {
    try {
      await googleSignIn();
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-black w-full min-h-[100vh] text-white">
        <div className="w-96 text-center mt-40 mb-32">
          <div
            className="rounded-full"
            style={{ background: "radial-gradient(circle, #4602D9, #111111)" }}
          >
            <img src={megaphone} className="w-36 m-auto" />
          </div>
          <p className="font-bold text-3xl mb-6">
            Access <br />
            rate alert dashboard
          </p>
          <p className="font-normal text-base opacity-70">
            Stay updated with real-time currency rates and manage your alerts.
          </p>

          <button className="rounded-full bg-gray-700 py-3 w-full my-9" onClick={handleGoogleAuth}>
            Sign in with google
          </button>
          <p className="text-sm w-4/5 m-auto">
            <span className="opacity-40">
              By creating an account or signing you agree to our{" "}
            </span>
            <span className="underline opacity-70 cursor-poiner">
              Terms and Conditions
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

// gradient ?
