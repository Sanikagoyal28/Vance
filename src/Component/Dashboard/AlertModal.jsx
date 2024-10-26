import { Box, Modal } from "@mui/material";
import UK from "../../assets/UK.svg";
import UAE from "../../assets/UAE.png";
import { useState } from "react";
import { db } from "../../firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
  writeBatch,
} from "firebase/firestore";
import { UserAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "12px",
  border: 0,
};

export default function AlertModal(props) {
  const { open, setOpen, currency } = props;

  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const { user } = UserAuth();

  async function handleAlert(e) {
    e.preventDefault();

    try {
      // await addDoc(collection(db, "alerts"), {
      //   userId: user.uid,
      //   currency,
      //   title,
      //   targetRate: parseFloat(rate),
      //   createdAt: new Date(),
      //   isTriggered: false,
      // });

      const alertsRef = collection(db, "alerts");
      const alertsQuery = query(
        alertsRef,
        where("userId", "==", user.uid),
        where("currency", "==", currency),
        where("targetRate", ">=", parseFloat(rate)),
        where("isTriggered", "==", false)
      );
      const querySnapshot = await getDocs(alertsQuery);
      
      const updatePromises = querySnapshot.docs.map((alertDoc) => {
        const alertRef = doc(db, "alerts", alertDoc.id);
        return updateDoc(alertRef, { isTriggered: true });
      });

      await Promise.all(updatePromises);

      toast.success("New Alert added");

      handleClose();
    } catch (error) {
    }
  }

  function handleClose() {
    setOpen(false);
    setRate("");
    setTitle("");
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={style}
          className="xl:w-1/3 md:w-1/2 sm:w-3/5 w-4/5 max-w-xl outline-none"
        >
          <div className="bg-[#333333] rounded-lg shadow-lg py-4 w-full flex flex-col justify-center items-center px-8">
            <p className="text-white font-semibold mb-5">Set Rate Alert!</p>

            {currency === "GBP" ? (
              <img src={UK} className="w-12 h-12 mb-2" />
            ) : (
              <img src={UAE} className="w-12 h-12 mb-2" />
            )}
            <p className="text-white font-medium flex items-center gap-x-1 mb-6">
              {currency === "GBP" ? "UK" : "UAE"}{" "}
              <span className="opacity-50 text-xs">({currency})</span>
            </p>

            <form onSubmit={handleAlert} className="w-full">
              <div className="flex flex-col w-full mb-4">
                <label className="text-sm text-[#D5D6DE] mb-2">Title</label>
                <input
                  type="text"
                  className="bg-[#4F4F4F] rounded-xl px-2 py-3 text-white outline-none text-sm w-full"
                  placeholder="Send money home"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  required
                />
              </div>

              <div className="flex flex-col w-full mb-4">
                <label className="text-sm text-[#D5D6DE] mb-2">
                  Rate Alert Value
                </label>
                <input
                  type="text"
                  className="bg-[#4F4F4F] rounded-xl px-2 py-3 text-white text-sm w-full outline-none"
                  placeholder="₹ 100"
                  value={rate}
                  onChange={(e) => {
                    setRate(e.target.value);
                  }}
                  required
                />
              </div>

              <button
                className="rounded-full bg-[#81EBAB] hover:bg-emerald-400 font-bold w-full py-3 text-sm my-2"
                type="submit"
              >
                Set Alert{" "}
                <span className="bg-black text-[#81EBAB] rounded text-center px-1">
                  +
                </span>
              </button>

              <button
                className="text-sm opacity-60 text-white cursor-pointer my-2 flex justify-center w-full"
                onClick={handleClose}
              >
                Cancel
              </button>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
}
