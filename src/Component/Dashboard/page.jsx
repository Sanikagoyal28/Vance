import megaphone from "../../assets/megaphone.svg";
import { UserAuth } from "../../context/AuthContext";
import google from "../../assets/Google.svg";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

export default function Dashboard() {
  const navigate = useNavigate();

  const { googleSignIn, user } = UserAuth();

  useEffect(() => {
    if (user) {
      navigate("/rate-alert-dashboard");
    }
  }, [user, navigate]);

  async function handleGoogleAuth() {
    try {
      await googleSignIn();
      if (user) {
        navigate("/rate-alert-dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-black w-full min-h-[100vh] text-white">
        <div className="w-80 sm:w-96 text-center mt-40 mb-32">
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

          <button
            className="rounded-full bg-[#333333] py-3 w-full my-9 flex items-center justify-center gap-x-1"
            onClick={handleGoogleAuth}
          >
            <img src={google} className="w-5 h-5" />
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
