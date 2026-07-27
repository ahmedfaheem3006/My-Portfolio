import MainTitle from "./MainTitle";
import htmlImg from "../assets/html.svg";
import cssImg from "../assets/css.svg";
import reactImg from "../assets/ReactIMG.png";
import angularImg from "../assets/Angular_gradient_logo.png";
import js from "../assets/java.png";
import dotnetImg from "../assets/Microsoft_.NET_logo.svg.webp";
import sqlImg from "../assets/sql-database-generic.svg";
import efImg from "../assets/EFcore.svg";
import archImg from "../assets/architucture.png";
import apiImg from "../assets/API.svg";
import { motion } from "framer-motion";

const Services = () => {
  const data = [
    {
      id: 1,
      images: [htmlImg, cssImg],
      title: "HTML & CSS",
      desc: "I am proficient in creating responsive and visually appealing websites using HTML and CSS.",
    },
    {
      id: 2,
      images: [js],
      title: "Java Script",
      desc: "I have a strong command of JavaScript and can develop interactive and dynamic web applications.",
    },
    {
      id: 3,
      images: [reactImg, angularImg],
      title: "React & Angular",
      desc: "Build modern, responsive, and high-performance user interfaces using React or Angular.",
    },
    {
      id: 4,
      images: [dotnetImg],
      title: "ASP.NET Core",
      desc: "Develop robust, secure, and lightning-fast backend applications and RESTful Web APIs using C#.",
    },
    {
      id: 5,
      images: [sqlImg, efImg],
      title: "SQL Server & EF Core",
      desc: "Design scalable relational databases and connect them efficiently using Entity Framework Core.",
    },
    {
      id: 6,
      images: [archImg, apiImg],
      title: "Clean Arch & Microservices",
      desc: "Structure backend systems using Clean Architecture, Repository patterns, and Microservices principles.",
    },
  ];

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = (centerY - y) / 10; // Vertical tilt
    const rotateY = (x - centerX) / 10; // Horizontal tilt

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div id="Services" className="my-[150px] relative">
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
        className="absolute w-[8px] blur-[4px] h-[8px] bg-bgGradient top-10 left-10 rounded-full "></motion.div>
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
        className="absolute blur-sm w-[10px] h-[10px] bg-green-600 bottom-0 left-2 rounded-full "></motion.div>
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
      
      <MainTitle title={"My Services"} p={"Here’s how I can help you."} />
      
      <div className="container grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => {
          const isOrange = index % 2 === 1;
          return (
            <motion.div
              key={item.id}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transformStyle: "preserve-3d", transition: "transform 0.1s ease-out" }}
              className={`even:bg-bgGradient even:text-white bg-[#b6b6b6] dark:bg-[#2E2E2E] flex items-center justify-center px-[17px] flex-col mx-auto text-center rounded-3xl w-[300px] h-[350px] relative before:w-[300px] before:absolute before:h-[350px] before:bg-teal-800 before:rounded-3xl before:z-[-1] before:transition-all before:duration-300 cardAnimate cursor-pointer`}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                  delay: 0.1,
                },
              }}>
              <div 
                className="flex items-center gap-3 transition-transform duration-300"
                style={{ transform: "translateZ(40px)" }}
              >
                {item.images.map((img, imgIdx) => (
                  <img
                    key={img}
                    loading="lazy"
                    className={`w-[50px] rounded-lg h-[50px] object-contain transition-all duration-300 ${
                      imgIdx === 0 ? "rotate-[10deg]" : "rotate-[-10deg]"
                    } group-hover:rotate-0`}
                    src={img}
                    alt={item.title}
                  />
                ))}
              </div>
              <h2 
                className="font-bold mt-4 mb-3 text-3xl transition-transform duration-300 text-slate-900 dark:text-white"
                style={{ transform: "translateZ(50px)" }}
              >
                {item.title}
              </h2>
              <p
                className={`${
                  isOrange
                    ? "text-white dark:text-white"
                    : "text-slate-900 dark:text-white"
                } text-center text-lg transition-transform duration-300 font-bold`}
                style={{ transform: "translateZ(30px)" }}
              >
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
