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
import { useEffect, useState } from "react";
import axios from "axios";
import UK from "../../assets/UK.svg";
import { db } from "../../firebase";
import { collection, query, onSnapshot, doc } from "firebase/firestore";

export default function RateAlert() {
  const [open, setOpen] = useState(false);
  const [currency, setCurrency] = useState("GBP");
  const [graphData, setGraphData] = useState([]);
  const [latestrate, setLatestrate] = useState(0);
  const [alerts, setAlerts] = useState([]);

  function handleCurrency(e) {
    setCurrency(e.target.value);
  }

  useEffect(() => {
    async function getGraphData() {
      await axios
        .get(
          `https://web-api.vance.club/public/api/currency-converter/forex?code=${currency}INR%3DX&timeline=1M`
        )
        .then((res) => {
          setGraphData(res.data);
          var rate = res.data[res.data.length - 1].adjClose;
          setLatestrate(parseFloat(rate).toFixed(2));
        })
        .catch((err) => {});
    }
    getGraphData();
  }, [currency]);

  useEffect(() => {
    const q = query(collection(db, "alerts"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      var prev_alerts = [];
      querySnapshot.forEach((doc) => {
        prev_alerts.push({ ...doc.data(), id: doc.id });
      });

      setAlerts(prev_alerts);
    });

    return () => unsub();
  }, []);

  console.log(alerts);

  return (
    <>
      <div className="bg-black w-full h-full">
        <div className="mt-16 py-8 flex flex-col justify-center items-center m-auto w-4/5 sm:w-[460px] max-w-xl">
          <p className="font-semibold text-3xl text-white">
            Rate alert dashboard
          </p>

          <div className="bg-[#222222] rounded-3xl px-5 py-4 mt-8 w-full">
            <select
              className="bg-[#393939] rounded-lg p-2 w-32 mb-4"
              onChange={(e) => {
                handleCurrency(e);
              }}
            >
              <option value="GBP">
                <img src={UK} className="w-4 h-4" /> UK (GBP)
              </option>
              <option value="AED">UAE (AED)</option>
            </select>

            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={graphData}>
                <CartesianGrid strokeDasharray="4 4" stroke="#393939" />
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="resDate"
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => value.split(" ")[0]}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  domain={["dataMin", "dataMax"]}
                  tickFormatter={(value) => value.toFixed(2)}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-indigo-600 text-white p-2 rounded">
                          <p>{payload[0].payload.resDate}</p>
                          <p>{parseFloat(payload[0].value).toFixed(4)} INR</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="adjClose"
                  stroke="#10B981"
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>

            <div className="mt-5 flex justify-between">
              <p className="text-white font-bold text-3xl">₹{latestrate}</p>

              <button
                className="rounded-2xl bg-[#81EBAB] hover:bg-emerald-500 font-bold w-32 py-3 text-sm"
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
          <div className="w-full">
            <div className="flex mt-20 mb-4 justify-between">
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
                    backgroundColor: "#7265EE", // for active
                    color: "white",
                    fontWeight: "bold",
                  },
                  "& .MuiPaginationItem-root": {
                    color: "white", // for inactive
                  },
                  "& .MuiPaginationItem-root:hover": {
                    backgroundColor: "#333333", // for hover
                    color: "white",
                  },
                }}
              />
            </div>

            {alerts.length > 0 ? (
              alerts.map((data) => {
                return <Alert key={data.id} data={data} />;
              })
            ) : (
              <p>No previous alerts</p>
            )}
          </div>
        </div>
      </div>

      <AlertModal open={open} setOpen={setOpen} currency={currency} />
    </>
  );
}

// alert rate notify - firebase 5
// navbar 3
// testing
// loader
