import { Box, Modal } from "@mui/material";
import UK from "../../assets/UK.svg";

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
  const { open, setOpen } = props;

  return (
    <>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style} className="w-[30%] outline-none">
          <div className="bg-[#333333] rounded-lg shadow-lg py-4 w-full flex flex-col justify-center items-center px-8">
            <p className="text-white font-semibold mb-5">Set Rate Alert!</p>

            <img src={UK} className="w-12 h-12 mb-2" />
            <p className="text-white font-medium flex items-center gap-x-1 mb-6">
              UK <span className="opacity-50 text-xs">(GBP)</span>
            </p>

            <div className="flex flex-col w-full mb-4">
              <label className="text-sm text-[#D5D6DE] mb-2">Title</label>
              <input
                type="text"
                className="bg-[#4F4F4F] rounded-xl px-2 py-3 text-white text-sm w-full"
                placeholder="Send money home"
              />
            </div>

            <div className="flex flex-col w-full mb-4">
              <label className="text-sm text-[#D5D6DE] mb-2">
                Rate Alert Value
              </label>
              <input
                type="text"
                className="bg-[#4F4F4F] rounded-xl px-2 py-3 text-white text-sm w-full"
                placeholder="Send money home"
              />
            </div>

            <button className="rounded-full bg-[#81EBAB] font-bold w-full py-3 text-sm my-2">
              Set Alert{" "}
              <span className="bg-black text-[#81EBAB] rounded text-center px-1">
                +
              </span>
            </button>

            <button className="text-sm opacity-60 text-white cursor-pointer my-2">
              Cancel
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
