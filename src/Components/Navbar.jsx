import { Link } from "react-scroll";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { SlMenu } from "react-icons/sl";
import { motion } from "framer-motion";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import Logo from "../assets/logo_faheem_without_BG.png";

const Navbar = () => {
  let [mode, setMode] = useState();
  let [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    if (window.localStorage.getItem("mode") == null) {
      document.body.classList.add("dark");
      setMode("dark");
    } else {
      document.body.classList.add(window.localStorage.getItem("mode"));
      setMode(window.localStorage.getItem("mode"));
    }
  }, []);
  function handleMode(e) {
    if (e == "dark") {
      document.body.classList.add("dark");
      localStorage.setItem("mode", "dark");
      setMode("dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("mode", "light");
      setMode("light");
    }
  }
  return (
    <header className="dark:bg-[#1d1d1d] bg-[#e5e5e5] header shadow-md shadow-[#f4280d1a] py-2 fixed top-0 left-0 w-full z-[999]">
      <div className="container flex items-center relative justify-between flex-wrap">
        {/* logo */}
        <a
          className="cursor-pointer "
          onClick={() => {
            scrollTo({ top: 0 });
          }}>
          <motion.img
            initial={{
              rotate: -180,
              opacity: 0,
            }}
            animate={{
              rotate: 0,
              opacity: 1,
              transition: {
                duration: 1,
              },
            }}
            src={Logo}
            alt="Logo"
            className="h-[70px] sm:h-[70px] object-contain"
          />
        </a>
        {/* links on laptop */}
        <ul className="hidden items-center gap-[30px] md:flex">
          <motion.li
            className="relative group"
            initial={{
              translateY: 40,
              opacity: 0,
            }}
            animate={{
              translateY: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.1,
            }}>
            <Link
              activeClass="active"
              to="Hero"
              spy={true}
              smooth={true}
              offset={-85}
              duration={100}
              className="text-[1.3rem] transition-all  duration-300  cursor-pointer">
              Home
            </Link>
            <HiDotsHorizontal
              size={20}
              className=" text-orange-500 absolute opacity-0 -bottom-8 group-hover:opacity-[1] group-hover:-bottom-4  transition-all duration-500 left-1/2 translate-x-[-50%]"
            />
          </motion.li>
          <motion.li
            className="relative group"
            initial={{
              translateY: 40,
              opacity: 0,
            }}
            animate={{
              translateY: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
            }}>
            <Link
              activeClass="active"
              to="About"
              smooth={true}
              spy={true}
              offset={-85}
              duration={100}
              className="text-[1.3rem]   transition-all duration-300 cursor-pointer">
              About me
            </Link>
            <HiDotsHorizontal
              size={20}
              className=" text-orange-500 absolute opacity-0 -bottom-8 group-hover:opacity-[1] group-hover:-bottom-4  transition-all duration-500 left-1/2 translate-x-[-50%]"
            />
          </motion.li>
          <motion.li
            className="relative group"
            initial={{
              translateY: 40,
              opacity: 0,
            }}
            animate={{
              translateY: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.7,
            }}>
            <Link
              activeClass="active"
              to="Services"
              smooth={true}
              offset={-85}
              spy={true}
              duration={100}
              className="text-[1.3rem] transition-all duration-300 cursor-pointer">
              Services
            </Link>
            <HiDotsHorizontal
              size={20}
              className=" text-orange-500 absolute opacity-0 -bottom-8 group-hover:opacity-[1] group-hover:-bottom-4  transition-all duration-500 left-1/2 translate-x-[-50%]"
            />
          </motion.li>
          <motion.li
            className="relative group"
            initial={{
              translateY: 40,
              opacity: 0,
            }}
            animate={{
              translateY: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1,
            }}>
            <Link
              activeClass="active"
              to="Projects"
              smooth={true}
              offset={-85}
              spy={true}
              duration={100}
              className="text-[1.3rem] transition-all duration-300 cursor-pointer">
              Portfolio
            </Link>
            <HiDotsHorizontal
              size={20}
              className=" text-orange-500 absolute opacity-0 -bottom-8 group-hover:opacity-[1] group-hover:-bottom-4  transition-all duration-500 left-1/2 translate-x-[-50%]"
            />
          </motion.li>
          <motion.li
            className="relative group"
            initial={{
              translateY: 40,
              opacity: 0,
            }}
            animate={{
              translateY: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1.2,
            }}>
            <Link
              activeClass="active"
              to="Certification"
              smooth={true}
              offset={-85}
              spy={true}
              duration={100}
              className="text-[1.3rem] transition-all duration-300 cursor-pointer">
              Certification
            </Link>
            <HiDotsHorizontal
              size={20}
              className=" text-orange-500 absolute opacity-0 -bottom-8 group-hover:opacity-[1] group-hover:-bottom-4  transition-all duration-500 left-1/2 translate-x-[-50%]"
            />
          </motion.li>
        </ul>
        {/* btns and dark on laptop */}
        <div className="hidden items-center gap-8 md:flex">
          <motion.button
            onClick={() => {
              document.getElementById("contact").scrollIntoView({
                smooth: true,
              });
            }}
            initial={{
              opacity: 0,
              translateY: 40,
            }}
            animate={{
              opacity: 1,
              translateY: 0,
            }}
            transition={{
              duration: 0.1,
              delay: 1.3,
            }}
            className="border-2 border-orange-600 py-[2px] rounded px-[25px] text-[1.2rem] relative z-10 before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-bgGradient hover:before:w-full before:z-[-1] before:transition-all hover:scale-[1.1] hover:border-none before:rounded hover:text-white transition-all duration-500 before:duration-500 ">
            Contact
          </motion.button>
          <motion.div
            initial={{
              translateY: 40,
              opacity: 0,
            }}
            animate={{
              translateY: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1.6,
            }}
            className="bg-bgGradient text-white  cursor-pointer w-[35px] h-[35px] rounded-lg grid place-items-center">
            {mode == "dark" ? (
              <MdOutlineLightMode
                onClick={() => {
                  handleMode("light");
                }}
                size={25}
                className="transition-all p-[1px] duration-100 hover:scale-[1.1] "
              />
            ) : (
              <MdOutlineDarkMode
                onClick={() => {
                  handleMode("dark");
                }}
                size={25}
                className="transition-all p-[1px] duration-100 hover:scale-[1.1] "
              />
            )}
          </motion.div>
        </div>
        {/* links on phone */}
        <div className="flex md:hidden">
          {/* open and close the orange overlay */}
          {openNav ? (
            <>
              <div className="flex  md:hidden bg-gradient-to-b from-orange-600/40 to-orange-200/40 backdrop-blur-sm w-full h-screen absolute top-16 left-0 -z-10"></div>
            </>
          ) : (
            ""
          )}
          {/* toggle icon and dark mode icon */}
          <div className="flex items-center gap-3">
            {openNav ? (
              <IoIosCloseCircleOutline
                onClick={() => {
                  setOpenNav((prev) => !prev);
                }}
                className="w-[30px] h-[30px] text-black dark:text-white hover:text-orange-600 transition-all duration-200 cursor-pointer"
              />
            ) : (
              <SlMenu
                onClick={() => {
                  setOpenNav((prev) => !prev);
                }}
                className="w-[25px] h-[25px]  text-black dark:text-white hover:text-orange-600 transition-all duration-200 cursor-pointer"
                size={20}
              />
            )}
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                type: "spring",
                stiffness: 820,
              }}
              className="bg-bgGradient text-white  cursor-pointer w-[35px] h-[35px] rounded-lg grid place-items-center">
              {mode == "dark" ? (
                <MdOutlineLightMode
                  onClick={() => {
                    handleMode("light");
                  }}
                  size={25}
                  className="transition-all p-[1px] duration-100 hover:scale-[1.1] "
                />
              ) : (
                <MdOutlineDarkMode
                  onClick={() => {
                    handleMode("dark");
                  }}
                  size={25}
                  className="transition-all p-[1px] duration-100 hover:scale-[1.1] "
                />
              )}
            </motion.div>
          </div>
          {openNav ? (
            <motion.ul
              initial={{
                opacity: 0,
                top: -200,
              }}
              animate={{
                opacity: 1,
                top: "150%",
                transition: {
                  type: "spring",
                  duration: 1,
                },
              }}
              className="flex items-center  flex-col py-8 absolute top-[150%] left-[15px] rounded-2xl  mobileNav bg-[#eee]  dark:bg-[#1b1b1b] gap-[30px] md:hidden">
              <motion.li
                initial={{
                  translateY: 40,
                  opacity: 0,
                }}
                animate={{
                  translateY: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.1,
                }}
                className="w-[95%] text-center  ">
                <Link
                  onClick={() => setOpenNav(false)}
                  activeClass="active"
                  to="Hero"
                  spy={true}
                  smooth={true}
                  offset={-85}
                  duration={100}
                  className="text-[1.3rem]   transition-all duration-300  cursor-pointer">
                  Home
                </Link>
              </motion.li>
              <motion.li
                initial={{
                  translateY: 40,
                  opacity: 0,
                }}
                animate={{
                  translateY: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.4,
                }}
                className=" text-center ">
                <Link
                  onClick={() => setOpenNav(false)}
                  activeClass="active"
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-85}
                  duration={100}
                  className="text-[1.3rem] transition-all duration-300 cursor-pointer">
                  About me
                </Link>
              </motion.li>
              <motion.li
                initial={{
                  translateY: 40,
                  opacity: 0,
                }}
                animate={{
                  translateY: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.7,
                }}>
                <Link
                  onClick={() => setOpenNav(false)}
                  activeClass="active"
                  to="Services"
                  spy={true}
                  smooth={true}
                  offset={-85}
                  duration={100}
                  className="text-[1.3rem] transition-all duration-300 cursor-pointer">
                  Services
                </Link>
              </motion.li>
              <motion.li
                initial={{
                  translateY: 40,
                  opacity: 0,
                }}
                animate={{
                  translateY: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 1,
                }}>
                <Link
                  onClick={() => setOpenNav(false)}
                  activeClass="active"
                  to="Projects"
                  spy={true}
                  smooth={true}
                  offset={-85}
                  duration={100}
                  className="text-[1.3rem] transition-all duration-300 cursor-pointer">
                  Portfolio
                </Link>
              </motion.li>
              <motion.li
                initial={{
                  translateY: 40,
                  opacity: 0,
                }}
                animate={{
                  translateY: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 1.2,
                }}>
                <Link
                  onClick={() => setOpenNav(false)}
                  activeClass="active"
                  to="Certification"
                  spy={true}
                  smooth={true}
                  offset={-85}
                  duration={100}
                  className="text-[1.3rem] transition-all duration-300 cursor-pointer">
                  Certification
                </Link>
              </motion.li>
              <motion.button
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 1.3,
                }}
                onClick={() => {
                  setOpenNav(false);
                  document.getElementById("contact").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className=" py-[4px] rounded-full px-[30px] text-white  text-[1.2rem] bg-bgGradient   hover:scale-[1.1]   transition-all duration-300 ">
                Contact
              </motion.button>
            </motion.ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
