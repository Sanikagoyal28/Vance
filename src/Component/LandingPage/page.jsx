import appStore from "../../assets/appstore.svg";
import playstore from "../../assets/playstore.svg";
import phone from "../../assets/phone.svg";
import Navbar from "../Navbar";
import blackPhone from "../../assets/blackPhone.svg";
import purplePhone from "../../assets/purplePhone.svg";
import redPhone from "../../assets/redPhone.svg";
import joline from "../../assets/jolinePopup.png";
import hardik from "../../assets/HardikPopup.png";
import MP from "../../assets/MpPopup.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function LandingPage() {
  const [phoneImg, setPhoneImg] = useState(phone);
  const [bgcolor, setBgcolor] = useState("bg-white");
  const containerRef = useRef(null);
  const phoneRef = useRef(null);

  const { scrollY } = useScroll();

  const phoneScale = useTransform(scrollY, [80, 150, 180], [1, 1.1, 1.2]);
  const phoneY = useTransform(scrollY, [100, 200], [0, -50]);
  const phoneOpacity = useTransform(scrollY, [80, 140], [0.5, 1]);
  const textOpacity = useTransform(scrollY, [80, 120], [1, 0]);
  const text2Opacity = useTransform(scrollY, [80, 150], [0, 1]);
  const x = useTransform(scrollY, [80, 120], [-100, 0]);
  const imageScale = useTransform(
    scrollY,
    [0, 140, 200, 300, 350],
    [0, 1.2, 1, 0.7, 0.6]
  );

  const imageOpacity = useTransform(
    scrollY,
    [0, 140, 200, 350],
    [0, 1, 0.8, 0.4]
  );

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    scrollY.onChange((currentY) => {
      if (currentY < 50) {
        setPhoneImg(phone);
        setBgcolor("bg-white");
      } else if (currentY < 150) {
        setPhoneImg(blackPhone);
        setBgcolor("bg-white");
      } else if (currentY < 270) {
        setPhoneImg(purplePhone);
        setBgcolor("bg-[#4602D9]");
      } else {
        setPhoneImg(redPhone);
        setBgcolor("bg-[#FF3A44BF]");
      }
    });
  }, [scrollY]);

  return (
    <>
      <Navbar />
      <div ref={containerRef} className={`min-h-[120vh] ${bgcolor} h-screen`}>
        {/* <div className="absolute inset-0 bg-gradient-to- from-red-900/50 to-black z-0"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxsaW5lIHgxPSIwIiB5PSIwIiB4Mj0iMCIgeTI9IjQwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIiBvcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] z-10"></div> */}
        <motion.div
          className="text-center flex flex-col justify-center items-center py-32 w-3/4 m-auto z-15"
          style={{
            opacity: textOpacity,
          }}
        >
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
        </motion.div>

        <motion.div
          className="text-center flex flex-col justify-center items-center py-32 w-1/2 m-auto absolute top-0 left-1/4 z-15"
          style={{
            opacity: text2Opacity,
            x,
          }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <p className="font-bold text-5xl mb-4">
            Always know when it’s a good time to transfer with
          </p>
          <p className="font-medium text-lg text-gray-600">
            Whether you're sending money home, paying for services in a
            different currency, or managing investments - Set a desired rate,
            and we'll notify you when it's time to make your move.{" "}
          </p>

          <div className="flex flex-row gap-x-4 mt-4">
            <img src={appStore} className="w-40" />
            <img src={playstore} className="w-40" />
          </div>
        </motion.div>

        <div className="">
          <motion.div
            ref={phoneRef}
            style={{
              scale: phoneScale,
              y: phoneY,
              opacity: phoneOpacity,
            }}
            className="w-[450px] rounded-[40px] overflow-hidden absolute left-[38%] bottom-[-400px] z-20"
          >
            <img src={phoneImg} className="my-auto" />
          </motion.div>

          <motion.img
            src={joline}
            variants={boxVariant}
            // initial="hidden"
            // animate={control}
            className="w-72 opacity-40 fixed top-32 left-72 z-10 overflow-hidden"
            // style={{ scale: imageScale}}
          />

          <motion.img
            src={joline}
            className="w-80 fixed top-[204px] left-56 opacity-100"
            // style={{ scale: imageScale }}
          />

          <motion.img
            src={MP}
            className="w-80 opacity-60 fixed top-72 left-48"
            // style={{ scale: imageScale, opacity: imageOpacity }}
          />

          <motion.img
            src={hardik}
            className="w-80 fixed top-[370px] left-56 opacity-100"
            // style={{ scale: imageScale }}
          />
          <motion.img
            src={joline}
            variants={boxVariant}
            className="w-64 opacity-40 fixed top-[470px] left-72 z-10 overflow-hidden"
            // style={{ scale: imageScale}}
          />
          <motion.img src={MP} className="w-72 fixed top-24 right-52 opacity-30" />
          <motion.img src={MP} className="w-80 fixed top-[172px] right-40 opacity-80" />

          <motion.img src={hardik} className="w-[350px] opacity-100 fixed top-64 right-32" />

          <motion.img src={joline} className="w-80 opacity-40 fixed top-[355px] right-52" />

          <motion.img src={hardik} className="shadow-md w-64 fixed right-60 opacity-20" />
        </div>
      </div>
    </>
  );
}
