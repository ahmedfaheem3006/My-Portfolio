import HeroImg from "../assets/Profile_logo_without_BG.png";
import { motion } from "framer-motion";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";

const Hero = () => {
  // array of social icons
  let dataSocial = [
    {
      id: 1,
      link: "https://web.facebook.com/ahmed.fahem.12764",
      icon: <FaFacebookF />,
      bgColor: "#1877f2",
      show: 2.7,
    },
    {
      id: 2,
      link: "https://github.com/ahmedfaheem3006",
      icon: <FaGithub />,
      bgColor: "#6e5494",
      show: 2.9,
    },
    {
      id: 3,
      link: "https://www.instagram.com/ahmed_faheem_66/",
      icon: <IoLogoInstagram />,
      bgColor: "#fe3e78",
      show: 3.1,
    },
    {
      id: 4,
      link: "https://wa.me/+2001220708037",
      icon: <FaWhatsapp />,
      bgColor: "#25d366",
      show: 3.3,
    },
    {
      id: 5,
      link: "https://www.linkedin.com/in/ahmed-faheem302/",
      icon: <FaLinkedinIn />,
      bgColor: "#0a66c2",
      show: 3.5,
    },
  ];
  let spanVar = {
    initial: {
      y: 40,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 2.3,
        staggerChildren: 0.05,
      },
    },
  };
  let smallSpan = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,

      transition: {
        duration: 2.9,
        repeat: Infinity,
      },
    },
  };
  let textOfAutoWriting = "A Full-Stack .Net Developer.";
  return (
    <div id="Hero" className="relative pb-10">
      {/* circles to ui */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute w-[18px] blur-md h-[18px] bg-bgGradient top-0 left-6  rounded-full "></motion.div>
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute blur-[5px] w-[10px] h-[10px]  bg-gradient-to-r from-violet-500 to-fuchsia-500 bottom-40 right-40 rounded-full "></motion.div>
      <motion.div
        animate={{
          x: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute blur-sm w-[10px] h-[10px] bg-rose-600 bottom-0 left-2 rounded-full "></motion.div>
      <motion.div
        animate={{
          x: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute blur w-[15px] h-[15px] bg-violet-600 top-4 right-5 rounded-full "></motion.div>
      {/* end circles */}
      <div className="container items-center  flex flex-col-reverse justify-center  lg:flex-row gap-5  mt-[124px] md:mt-[180px] ">
        {/* left  */}
        <div className="lg:w-1/2 w-full hero">
          <motion.h3
            initial={{
              y: 40,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 1.9,
              },
            }}
            className="text-gray-600 dark:text-gray-300 h3OfHero text-[24px]">
            Welcome To My Portfolio,
          </motion.h3>
          <motion.h2
            initial={{
              y: 40,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 2.1,
              },
            }}
            className="capitalize font-bold text-[28px] my-2 sm:my-4  md:text-[2.8rem] heroName ">
            hello i'm <span className="text-main">Ahmed Faheem</span>,
          </motion.h2>
          <motion.span
            className="capitalize font-bold autoWritingJop text-3xl md:text-[2.8rem] underline underColor sm:whitespace-nowrap"
            variants={spanVar}
            initial="initial"
            animate="animate">
            {textOfAutoWriting.split("").map((letter, index) => {
              return (
                <motion.span variants={smallSpan} key={index}>
                  {letter}
                </motion.span>
              );
            })}
          </motion.span>
          <motion.p
            initial={{
              y: 40,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 2.5,
              },
            }}
            className="text-gray-600 dark:text-gray-300 leading-relaxed sm:text-lg my-6">
            I am an Electrical Engineering graduate specializing in Control and
            Computer Systems, with a passion for software engineering and modern
            web development. I build responsive, scalable, and user-friendly
            applications using .NET, Angular, React, SQL, and modern web
            technologies while continuously improving my skills through
            real-world projects and lifelong learning.
          </motion.p>
          <motion.div
            initial={{
              y: 40,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 2.7,
              },
            }}
            className="flex items-center gap-2 mb-6 w-fit px-4 py-1.5 rounded-full border border-orange-500/20 dark:border-orange-500/40 bg-orange-500/5 dark:bg-orange-500/10 text-sm font-semibold tracking-wide"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-main uppercase font-bold text-xs sm:text-sm">
              Open to Work
            </span>
          </motion.div>
          <div className="flex items-center gap-3 mb-6 cursor-pointer">
            {dataSocial.map((item) => {
              return (
                <motion.a
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: item.show,
                    },
                  }}
                  whileHover={{
                    x: [0, -1, 1, 0, -1, 1, 0],
                    rotate: [1, 6, 1, -6, 1],
                    transition: {
                      duration: 0.4,
                      type: "mirror",
                      ease: "easeInOut",
                      repeat: Infinity,
                    },
                  }}
                  style={{ background: item.bgColor }}
                  className={`w-[35px] text-white  h-[35px] rounded-lg grid place-content-center text-2xl `}
                  href={item.link}
                  target="_blank"
                  key={item.id}>
                  <span>{item.icon}</span>
                </motion.a>
              );
            })}
          </div>
          <div className="flex items-center gap-4 flex-wrap mt-2">
            <motion.button
              onClick={() => {
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth",
                });
              }}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 3.7,
                },
              }}
              whileHover={{
                scale: 1.08,
                transition: {
                  duration: 0.5,
                  type: "spring",
                  stiffness: 220,
                  damping: 6,
                },
              }}
              className="flex cursor-pointer text-white group bg-bgGradient w-fit px-6 py-[8px] rounded-full items-center gap-2 text-lg capitalize font-medium shadow-md shadow-orange-500/20"
            >
              Contact Me
              <FaPaperPlane className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.button>
            <motion.a
              target="_blank"
              href={
                "https://drive.google.com/file/d/1EBSZe8n4bVEIYYab5L-A6mGdkLwJYYAZ/view"
              }
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 3.9,
                },
              }}
              whileHover={{
                scale: 1.08,
                transition: {
                  duration: 0.5,
                  type: "spring",
                  stiffness: 220,
                  damping: 6,
                },
              }}
              className="flex cursor-pointer text-orange-600 dark:text-orange-500 border-2 border-orange-600 dark:border-orange-500/60 hover:bg-bgGradient hover:text-white dark:hover:text-white hover:border-transparent dark:hover:border-transparent w-fit px-6 py-[6px] rounded-full items-center gap-2 text-lg capitalize font-medium transition-all duration-300 shadow-md shadow-black/5 dark:shadow-none"
            >
              Download CV
              <FaDownload className="text-lg" />
            </motion.a>
          </div>
          <Link
            to="About"
            smooth={true}
            spy={true}
            offset={-200}
            duration={500}
            className="absolute left-1/2 -translate-x-1/2 bottom-0 cursor-pointer hidden lg:block "
          >
            <FaAngleDoubleDown className="animate-bounce text-3xl text-orange-600 " />
          </Link>
        </div>

        {/* right */}
        <motion.img
          loading="lazy"
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
            transition: {
              duration: 1,
              delay: 1,
            },
          }}
          className="w-[270px] heroIphone  h-[270px] sm:w-[430px] lg:ml-auto sm:h-[430px] object-cover"
          src={HeroImg}
          alt="profile img for hero"
        />
      </div>
    </div>
  );
};

export default Hero;
