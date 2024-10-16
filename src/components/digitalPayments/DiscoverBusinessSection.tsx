import React from "react";
import { motion } from "framer-motion";
import BDPPaymentLottieData from "../../../public/assets/lottie/bdp-payment.json";
// import Lottie from "react-lottie";
import { Animate } from "../animations/ScrollAnimator";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
});

const lottieDefaultOptions = {
  loop: true,
  autoPlay: true,
  animationData: BDPPaymentLottieData,
};

const SingleItem = ({
  title,
  icon,
  description,
}: {
  title: string;
  icon: string;
  description: string;
}) => {
  return (
    <Animate.FadeUp className="bg-white rounded-[45px] p-5 w-full h-fit sm:h-[27rem]">
      <div className="flex flex-col justify-between   gap-2 w-full h-full ">
        <div className=" h-[140px] flex items-center ">
          <motion.img
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            src={`/assets/img/bdp/discover/${icon}`}
            className="h-full w-full"
          />
        </div>
        <div className=" h-full flex flex-col items-start">
          <div className="h-2/5  flex justify-center w-full items-center">
            <h1
              className="text-purple font-bold text-center  w-full  text-xl sm:text-2xl  "
              dangerouslySetInnerHTML={{ __html: title }}
            ></h1>
          </div>
          <p className=" h-full sm:block text-[#606060] text-center mt-2">
            {description}
          </p>
        </div>
      </div>
    </Animate.FadeUp>
  );
};
const DiscoverBusinessSection = () => {
  return (
    <section className="bg-white  pt-10 sm:pt-20" id="solutions">
      <div className="text-center h-[24rem] sm:h-[22rem] flex flex-col gap-10 justify-start items-center custom-container">
        <Animate.FadeUp className="text-3xl sm:text-4xl leading-10 sm:leading-[3.2rem] text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#6600CC] to-[#CC0166]  max-w-5xl">
          Do you want easy, fast, and secure transactions both online and
          offline?
        </Animate.FadeUp>

        <p className="paragraphText1 text-primary w-full max-w-2xl">
          Look no futher Broadspectrum Digital Payment is your final solution
          for your business need.
        </p>
      </div>
      <section className="bg-[url('https://res.cloudinary.com/diek2uivi/image/upload/v1689593106/bsl-website/bdp/mobile-purple-bg_e30uc4.svg')] md:bg-[url('https://res.cloudinary.com/diek2uivi/image/upload/v1689593107/bsl-website/bdp/purple-bg_ijgw50.svg')] h-[105rem] sm:h-[115rem] lg:h-[80rem] bg-cover  bg-no-repeat sm:-mt-[12rem] -mt-[2rem] w-full  pt-32 sm:py-[10rem] md:py-[27rem] z-20  ">
        <div className=" w-full text-white  custom-container flex flex-col gap-14  z-20 ">
          <Animate.FadeUp className="headerText3 text-center mt-8">
            Discover solutions for every business need
          </Animate.FadeUp>

          <div className="grid grid-cols-1  lg:grid-cols-3 gap-10 ">
            <SingleItem
              title="MOMO $ MPOS"
              icon="momo.svg"
              description="MPOS: Mobile device for accepting card payments on the go. Convenience and flexibility for businesses outside traditional locations. App/software paired with card reader for secure transactions."
            />
            <SingleItem
              title="Checkout API"
              icon="api.svg"
              description="Checkout API: Enables seamless integration of online payment processing into e-commerce platforms. Streamlined checkout experience and secure transaction handling."
            />
            <SingleItem
              title="Routing & Switching <br/> Services"
              icon="routing.svg"
              description="Routing and switching services in payments: Directing transaction flow and facilitating secure data transfer between entities for efficient and secure payment processing"
            />
          </div>
        </div>
      </section>
      <section className=" bg-white h-[50rem]  z-2  ">
        <div className="flex flex-col md:flex-row justify-between custom-container w-full items-center sm:gap-4 ">
          <div className="w-full   md:w-[60%] z-10">
            <Lottie
              options={lottieDefaultOptions}
              height={"100%"}
              width={"100%"}
              style={{ zIndex: -10 }}
            />
          </div>
          <div className="w-full md:w-[40%]  text-center md:text-left flex flex-col gap-8 ">
            <div className="flex items-center justify-center  ">
              <h1 className="text-3xl sm:text-5xl leading-10 sm:leading-tight text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#6600CC] to-[#CC0166] ">
                Custom Digital Payment solutions
              </h1>
            </div>

            <div className="text-[#606060] paragraphText px-1">
              Broadspectrum Digital Payments has the capability to develop
              custom payment solutions that address the unique requirements of
              banks, payment service providers and merchants. From in-app
              payments, hotel booking engines and online registration systems to
              tokenization , we’ve got you covered.
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default DiscoverBusinessSection;
