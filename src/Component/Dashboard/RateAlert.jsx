import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import Alert from "./Alert";
import Pagination from "@mui/material/Pagination";
import AlertModal from "./AlertModal";
import { useState } from "react";

export default function RateAlert() {
  const data = [
    { year: "1Y", value: 2 },
    { year: "2Y", value: 5 },
    { year: "3Y", value: 10 },
    { year: "4Y", value: 15 },
    { year: "5Y", value: 20 },
    { year: "6Y", value: 25.75 },
    { year: "7Y", value: 32 },
    { year: "8Y", value: 40 },
    { year: "9Y", value: 50 },
    { year: "10Y", value: 62 },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-black w-full h-full">
        <div className="mt-16 py-8 flex flex-col justify-center items-center w-2/5 m-auto">
          <p className="font-semibold text-3xl text-white">
            Rate alert dashboard
          </p>

          <div className="bg-[#222222] rounded-3xl px-5 py-4 mt-8">
            <select className="bg-[#393939] rounded-lg p-2 w-32 mb-4">
              <option>UK</option>
              <option>INR</option>
            </select>
            {/* <ResponsiveContainer width="100%" height="100%"> */}
            <AreaChart width={450} height={300} data={data}>
              <CartesianGrid strokeDasharray="4 4" stroke="#393939" />
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="year" axisLine={false} tickLine={false} />
              <YAxis
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `${value}L`}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-indigo-600 text-white p-2 rounded">
                        {payload[0].value.toFixed(2)}L
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#10B981"
                fillOpacity={1}
                fill="url(#colorValue)"
              />
            </AreaChart>
            {/* </ResponsiveContainer> */}

            <div className="mt-5 flex justify-between">
              <p className="text-white font-bold text-3xl">₹84.00</p>

              <button
                className="rounded-2xl bg-[#81EBAB] font-bold w-32 py-3 text-sm"
                onClick={() => {
                  setOpen(true);
                }}
              >
                Set Alert{" "}
                <span className="bg-black text-[#81EBAB] rounded text-center px-1">
                  +
                </span>
              </button>
            </div>
          </div>

          {/* previous alerts */}
          <div className="flex mt-20 mb-4 justify-between w-full">
            <p className="font-semibold text-xl text-white opacity-70">
              Previous alerts
            </p>
            <Pagination
              count={10}
              siblingCount={0}
              boundaryCount={1}
              shape="rounded"
              color="[#7265EE]"
              sx={{
                "& .Mui-selected": {
                  backgroundColor: "#7265EE", // Change active page background color
                  color: "white", // Change active page text color
                  fontWeight: "bold", // Optional: Make the text bold
                },
                "& .MuiPaginationItem-root": {
                  color: "white", // Change inactive page text color
                },
                "& .MuiPaginationItem-root:hover": {
                  backgroundColor: "#333333", // Change hover background for inactive
                  color: "white", // Change hover text color for inactive
                },
              }}
            />
          </div>

          <Alert />
          <Alert />
        </div>
      </div>

      <AlertModal open={open} setOpen={setOpen} />
    </>
  );
}
