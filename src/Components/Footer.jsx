import { RiFacebookFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdPlace } from "react-icons/md";
import { MdBusiness } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animation from "../../public/animation lottie/Animation - footer.json";
const Footer = () => {
  let links = [
    { id: 1, href: "#Hero", name: "Home" },
    { id: 2, href: "#About", name: "About" },
    { id: 3, href: "#Services", name: "Services" },
    { id: 4, href: "#Projects", name: "Portfolio" },
  ];
  return (
    <>
      <footer className="mt-[100px] dark:bg-[#1d1d1d] bg-[#e5e5e5] py-[50px]">
        <div className="container grid grid-cols-1 place-items-center text-center md:text-start  md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 items-start">
          <div className="flex flex-col gap-4 md:gap-3 items-center md:items-start w-full">
            <h2 className="text-[50px] font-bold text-slate-900 dark:text-white leading-none">Faheem</h2>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <motion.a
                target="_blank"
                href="https://github.com/ahmedfaheem3006"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { delay: 0.2 },
                }}
                className="w-[40px] h-[40px] rounded-lg bg-[#c9c9c9] dark:bg-[#2E2E2E] text-gray-600 dark:text-white hover:text-white grid place-items-center transition-all duration-300 cursor-pointer dark:hover:bg-[#6e5494] hover:bg-[#6e5494]">
                <FaGithub size={20} />
              </motion.a>
              <motion.a
                target="_blank"
                href="https://wa.me/+2001220708037"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { delay: 0.4 },
                }}
                className="w-[40px] h-[40px] rounded-lg bg-[#c9c9c9] dark:bg-[#2E2E2E] text-gray-600 dark:text-white hover:text-white grid place-items-center transition-all duration-300 cursor-pointer hover:bg-[#25d366] dark:hover:bg-[#25d366]">
                <FaWhatsapp size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ahmed-faheem302/"
                target="_blank"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { delay: 0.6 },
                }}
                className="w-[40px] h-[40px] rounded-lg bg-[#c9c9c9] dark:bg-[#2E2E2E] text-gray-600 dark:text-white hover:text-white grid place-items-center transition-all duration-300 cursor-pointer dark:hover:bg-[#0a66c2] hover:bg-[#0a66c2]">
                <FaLinkedinIn size={20} />
              </motion.a>
              <motion.a
                href="https://web.facebook.com/ahmed.fahem.12764"
                target="_blank"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { delay: 0.8 },
                }}
                className="w-[40px] h-[40px] rounded-lg bg-[#c9c9c9] dark:bg-[#2E2E2E] text-gray-600 dark:text-white hover:text-white grid place-items-center transition-all duration-300 cursor-pointer dark:hover:bg-[#1877f2] hover:bg-[#1877f2]">
                <RiFacebookFill size={20} />
              </motion.a>
            </div>
            <p className="text-gray-500 dark:text-gray-400 max-w-full italic font-medium mt-1">
              "Crafting high-performance .NET architectures, responsive interfaces, and intelligent Generative AI integrations designed to scale."
            </p>
          </div>
          <ul className="flex flex-col   gap-2  w-full mt-12">
            {links.map((item) => {
              return (
                <li
                  key={item.id}
                  className="border-b border-[#c9c9c9] dark:border-[#393939] text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:pl-[10px] transition-all duration-300 w-full ">
                  <a
                    className="text-lg flex items-center justify-center md:justify-start gap-2 mb-3 "
                    href={item.href}>
                    <MdKeyboardDoubleArrowRight
                      size={22}
                      className="text-orange-600 font-bold"
                    />
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4">
              <MdPlace className="text-orange-600 text-[35px] flex-shrink-0" />
              <div className="flex flex-col items-center md:items-start">
                <span className="text-[13px] uppercase tracking-wider text-orange-600 font-bold block mb-0.5">Location</span>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  Egypt, Cairo, Nasr City
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4">
              <MdBusiness size={28} className="text-orange-600 flex-shrink-0 mt-0.5" />
              <div className="flex flex-col items-center md:items-start">
                <span className="text-[13px] uppercase tracking-wider text-orange-600 font-bold block mb-1.5">Availability</span>
                <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
                  <span className="px-2.5 py-0.5 text-[12px] font-bold rounded bg-[#c9c9c9] dark:bg-[#2E2E2E] text-slate-800 dark:text-white">Full-time</span>
                  <span className="px-2.5 py-0.5 text-[12px] font-bold rounded bg-[#c9c9c9] dark:bg-[#2E2E2E] text-slate-800 dark:text-white">Part-time</span>
                  <span className="px-2.5 py-0.5 text-[12px] font-bold rounded bg-[#c9c9c9] dark:bg-[#2E2E2E] text-slate-800 dark:text-white">Remote</span>
                  <span className="px-2.5 py-0.5 text-[12px] font-bold rounded bg-[#c9c9c9] dark:bg-[#2E2E2E] text-slate-800 dark:text-white">Freelance</span>
                  <span className="px-2.5 py-0.5 text-[12px] font-bold rounded bg-green-500/20 text-green-600 border border-green-500/30 flex items-center gap-1 animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    Open to Work
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4">
              <FaPhoneAlt size={22} className="text-orange-600 flex-shrink-0 mt-0.5" />
              <div className="flex flex-col items-center md:items-start">
                <span className="text-[13px] uppercase tracking-wider text-orange-600 font-bold block mb-0.5">Contact Numbers</span>
                <ul className="font-semibold text-gray-700 dark:text-gray-300">
                  <li>+201220708037</li>
                  <li>+201044626277</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Lottie
              className="w-1/2  mx-auto md:w-full "
              animationData={animation}
            />
          </div>
        </div>
      </footer>
      <p className="border-t border-[#ccc] dark:border-[#393939] font-bold text-[20px] dark:bg-[#1d1d1d] bg-[#e5e5e5] py-[25px] text-center">
        Made With 🧡 By <span className="text-orange-600">Ahmed Faheem</span>
      </p>
    </>
  );
};

export default Footer;
