import UK from "../../assets/UK.svg"

export default function Alert() {
  return (
    <>
      <div className="bg-[#222222] rounded-3xl p-6 my-4 w-full flex justify-between">
        <div className="flex flex-col">
          <p className="text-white opacity-60">Name</p>
          <p className="text-white font-bold text-3xl mb-5">₹84.00</p>

          <p className="text-white font-medium flex items-center gap-x-1">
            {" "}
           <img src={UK} /> UK <span className="opacity-50 text-xs">(GBP)</span>
          </p>
        </div>
        <div className="flex gap-x-2 items-center h-fit">
          <span className="text-white font-semibold bg-[#333333] rounded-md py-1 px-2 h-fit">
            12
          </span>
          <span className="font-bold text-[#333333]">/</span>
          <span className="text-white font-semibold bg-[#333333] rounded-md py-1 px-2 h-fit">
            10
          </span>
          <span className="font-bold text-[#333333]">/</span>
          <span className="text-white font-semibold bg-[#333333] rounded-md py-1 px-2 h-fit">
            24
          </span>
        </div>
      </div>
    </>
  );
}
