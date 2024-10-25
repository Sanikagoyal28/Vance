import appStore from "../../assets/appstore.svg";
import playstore from "../../assets/playstore.svg";
import phone from "../../assets/phone.svg";
import Navbar from "../Navbar";

export default function LandingPage() {
  return (
    <>
    <Navbar />
      <div className="text-center flex flex-col justify-center items-center my-32">
        <p className="font-bold text-5xl mb-4">
          Send money to India at Google rates.
        </p>
        <p className="font-medium text-xl text-gray-600">
          Say goodbye to forex fees- get the best value for your transfers
        </p>

        <div className="flex flex-row gap-x-4 mt-10">
          <img src={appStore} className="w-40" />
          <img src={playstore} className="w-40" />
        </div>
      </div>

      <div className="absolute">
        <img
          src={phone}
          className="w-[500px] my-auto left-[35%] absolute opacity-40 filter"
        />
      </div>
    </>
  );
}

// badme 600
