import React from "react";
import { animate, motion } from "framer-motion";
import { Animate } from "../animations/ScrollAnimator";

const AboutSection = () => {
  return (
    <motion.section
      className=" bg-white py-20 "
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // whileFocus={}
    >
      <div className="text-center custom-container flex flex-col justify-between gap-10 sm:gap-20 ">
        <h1 className="text-purple font-medium text-xl  tracking-widest">
          A SUBSIDIARY OF BROADSPECTRUM
        </h1>

        <div className="flex  justify-left mt-10  ">
          <Animate.FadeUp className="text-3xl sm:text-5xl leading-10 sm:leading-tight text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#6600CC] to-[#CC0166] ">
            <h1 className="headerText1">About Us</h1>
          </Animate.FadeUp>
        </div>

        <div className="">
          <Animate.FadeUp className="text-[#000000] paragraphText1 text-left">
            Fully integrated enhanced EPS provider with a 3-tier solution in
            EMI, Switching and UPG Broadspectrum Digital Payment Ltd (BDP) is an
            enhanced payment services provider and is licensed and regulated by
            the Central Bank of Ghana. BDP has deployed a 3- tier electronic
            solution covering payments, financial transactions switching and
            Electronic Money issuing solutions. BDP products offerings include
            Issuance of Electronic Wallets, Digital Banking, utility services,
            Remittances – Send and receive Cash, Airtime, and Internet Data
            top-up, Utility/Bill pay, Bank Direct –Bank 2 Wallet, Wallet 2 Bank,
            Bulk payment processing. B2B Payment Solutions development & Build –
            Apps and USSD solutions. BDP has deployed the widest power revenue
            collection application for the Northern Electricity Development
            Company covering Nine (9) regions of Ghana and serving over 1.5
            million households.
          </Animate.FadeUp>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
