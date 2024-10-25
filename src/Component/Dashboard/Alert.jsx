import UK from "../../assets/UK.svg";
import UAE from "../../assets/UAE.png";
import { useEffect, useState } from "react";

export default function Alert(props) {
  const { data } = props;
  console.log(data);
  const [date, setDate] = useState({
    day: "",
    month: "",
    year: "",
  });
  const convertToDate = (seconds, nanoseconds) => {
    const date = new Date(seconds * 1000 + nanoseconds / 1e6);
    return {
      day: date.getUTCDate().toString().padStart(2, "0"),
      month: (date.getUTCMonth() + 1).toString().padStart(2, "0"),
      year: date.getUTCFullYear().toString().slice(-2),
    };
  };

  useEffect(() => {
    const formattedDate = convertToDate(
      data?.createdAt.seconds,
      data?.createdAt.nanoseconds
    );
    setDate(formattedDate);
  }, []);

  return (
    <>
      <div className="bg-[#222222] rounded-3xl p-6 my-4 w-full flex justify-between">
        <div className="flex flex-col">
          <p className="text-white opacity-60 capitalize">{data?.title}</p>
          <p className="text-white font-bold text-3xl mb-5">
            ₹{data?.targetRate}
          </p>

          {data?.currency === "GBP" ? (
            <p className="text-white font-medium flex items-center gap-x-1">
              {" "}
              <img src={UK} /> UK{" "}
              <span className="opacity-50 text-xs">(GBP)</span>
            </p>
          ) : (
            <p className="text-white font-medium flex items-center gap-x-1">
              {" "}
              <img src={UAE} /> UAE{" "}
              <span className="opacity-50 text-xs">(AED)</span>
            </p>
          )}
        </div>
        <div className="flex gap-x-2 items-center h-fit">
          <span className="text-white font-semibold bg-[#333333] rounded-md py-1 px-2 h-fit">
            {date?.day}
          </span>
          <span className="font-bold text-[#333333]">/</span>
          <span className="text-white font-semibold bg-[#333333] rounded-md py-1 px-2 h-fit">
            {date?.month}
          </span>
          <span className="font-bold text-[#333333]">/</span>
          <span className="text-white font-semibold bg-[#333333] rounded-md py-1 px-2 h-fit">
            {date?.year}
          </span>
        </div>
      </div>
    </>
  );
}
