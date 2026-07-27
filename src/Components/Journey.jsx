import img1 from "../assets/edu.png";
import img2 from "../assets/design-tool_2062942.png";
import img3 from "../assets/exp.png";
import img4 from "../assets/job.png";
import img5 from "../assets/ReactIMG.png";
import logoITI from "../assets/ITI_Romve.png";
import logoDEPI from "../assets/DEPI-removebg-preview.png";
import MainTitle from "./MainTitle";
import { motion } from "framer-motion";

const Journey = () => {
  const journeyData = [
    {
      title: "Education",
      subtitle: "Bachelor of Engineering",
      date: "2020 - 2025",
      location: "Suez Canal University — Ismailia, Egypt",
      points: [
        "Major: Electrical Engineering (Control and Computer Systems)",
        <span>GPA: <span className="text-slate-800 dark:text-green-400 font-bold">3.32</span> out of <span className="text-slate-800 dark:text-green-400 font-bold">4.00</span></span>
      ],
      img: img1
    },
    {
      title: (
        <span>
          Full Stack .NET <span className="text-slate-800 dark:text-green-400 font-bold">&</span> Generative AI Intern
        </span>
      ),
      subtitle: "Information Technology Institute (ITI)",
      date: "Jan 2026 – Jul 2026",
      location: "Egypt",
      points: [
        "Building backend applications and RESTful APIs using ASP.NET Core and C#.",
        "Developing responsive front-end interfaces using Angular and TypeScript.",
        "Applying OOP, SOLID principles, and clean code practices in full stack development."
      ],
      img: logoITI
    },
    {
      title: (
        <span>
          Generative AI Intern <span className="text-slate-800 dark:text-green-400 font-bold">|</span> Team Leader
        </span>
      ),
      subtitle: "Digital Egypt Pioneers Initiative (DEPI)",
      date: "Jun 2025 – Dec 2025",
      location: "Egypt",
      points: [
        <span>Won <span className="text-slate-800 dark:text-green-400 font-bold">1st</span> Place for Best Graduation Project across the Generative AI track.</span>,
        "Led the development of 'AI-Powered VR Home Visualization & Customization System'.",
        "Implemented RAG, Speech-to-Text (STT), Text-to-Speech (TTS), and chatbot assistance."
      ],
      img: logoDEPI
    },
    {
      title: "Responsive Design",
      subtitle: "Html-Css-Js",
      desc: "I built a strong foundation in Front-End development through my college studies and summer training with top programmers in the field.",
      img: img2
    },
    {
      title: "Software Developer",
      subtitle: "Roshdy Group",
      date: "Sep 2025 – Jan 2026",
      location: "Cairo, Egypt",
      points: [
        "Developed and maintained features for an e-commerce platform specialized in smart home products.",
        "Built responsive front-end interfaces and integrated APIs to support data workflows.",
        "Worked with SQL databases for efficient data storage, retrieval, and management."
      ],
      img: img4
    },
    {
      title: "Full Stack Development Intern",
      subtitle: "Hybridly",
      date: "May 2025 – Sep 2025",
      location: "Remote",
      points: [
        "Collaborated within an Agile team to build responsive web applications using modern technologies.",
        "Contributed to the design and implementation of RESTful APIs for authentication and data.",
        "Participated in sprint planning, daily stand-ups, and iterative delivery of features."
      ],
      img: img4
    },
    {
      title: "Freelance Web Developer",
      subtitle: "Self-Employed",
      date: "Jan 2023 – Present",
      location: "Remote",
      points: [
        "Delivered custom responsive websites for small business clients based on requirements.",
        "Built front-end interfaces using HTML, CSS, Tailwind CSS, and JavaScript.",
        "Developed back-end functionality and integrated databases using Node.js and MongoDB."
      ],
      img: img4
    },
    {
      title: "Full Stack .NET Development",
      subtitle: "+3 Years",
      desc: "I have over three years of experience in full stack .NET development and programming, during which I've successfully implemented large-scale projects.",
      img: img3
    }
  ];

  return (
    <div className="my-[150px]" spellCheck="false" data-languagetool-ignore="true" data-gramm="false">
      <MainTitle
        title={"My Journey"}
        p={"A timeline of my professional growth, technical milestones, and software engineering experience."}
      />
      <div className="mt-[50px] mx-auto md:m-0 relative after:absolute after:w-[5px] after:top-0 after:h-full dark:after:bg-[#2E2E2E] after:bg-[#b6b6b6] after:left-[31px] md:after:left-1/2 after:ml-[-3px] after:z-[-1]" spellCheck="false" data-languagetool-ignore="true" data-gramm="false">
        <div className="container" spellCheck="false" data-languagetool-ignore="true" data-gramm="false">
          {journeyData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: isLeft ? -80 : 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    stiffness: 85,
                    damping: 14,
                    delay: 0.1,
                  },
                }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative group ${
                  isLeft
                    ? "leftContainer pl-[80px] pr-[25px] md:px-[50px] md:py-[10px] w-full md:w-1/2 mb-10 md:mb-0"
                    : "rightContainer pl-[80px] pr-[25px] md:px-[50px] md:py-[10px] w-full md:w-1/2 mb-10 left-0 md:mb-0 md:left-1/2"
                }`}
              >
                <img
                  loading="lazy"
                  className={`absolute border-[3px] border-[#969696] dark:border-[#484848] group-hover:scale-[1.2] group-hover:shadow-[0_0_40px_0_rgba(100,57,199,.2)] group-hover:border-[3px] group-hover:border-[#f4280dc5] transition-all duration-300 w-[50px] h-[50px] object-contain rounded-full p-1 top-[22px] z-10 bg-white ${
                    isLeft
                      ? "left-[-25px] md:left-auto md:right-[-25px]"
                      : "left-[-25px]"
                  }`}
                  src={item.img}
                  alt={typeof item.title === "string" ? item.title : "Journey Item"}
                />

                <div 
                  spellCheck="false"
                  data-gramm="false"
                  className="px-[30px] transition-all duration-300 border-2 border-[#f4280d]/30 dark:border-[#484848] hover:border-2 dark:hover:border-[#f4280dc5] hover:border-[#f4280dc5] py-[20px] bg-[#e5e5e5] dark:bg-[#2E2E2E] rounded-lg text-[13px] md:text-[15px] left-0 select-none"
                >
                  <h2 className="text-[24px] sm:text-3xl font-bold leading-tight">{item.title}</h2>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-3">
                    <small className="text-[15px] text-main font-bold">
                      {item.subtitle}
                    </small>
                    {item.date && (
                      <span className="hidden sm:inline text-slate-800 dark:text-green-400 font-bold">•</span>
                    )}
                    {item.date && (
                      <span className="text-[13px] text-slate-800 dark:text-green-400 font-bold">
                        {item.date}
                      </span>
                    )}
                  </div>

                  {item.location && (
                    <div className="text-[13px] text-gray-700 dark:text-gray-300 font-bold mb-2 -mt-1 italic">
                      {item.location}
                    </div>
                  )}

                  {item.desc && (
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item.desc}
                    </p>
                  )}

                  {item.points && (
                    <ul className="list-disc pl-4 space-y-1.5 text-gray-700 dark:text-gray-300 text-left">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="leading-relaxed">
                          {pt}
                        </li>
                      ))}
                    </ul>
                  )}

                  <span className={
                    isLeft
                      ? "h-0 w-0 sm:group-hover:border-l-[#f4280dc5] dark:md:border-r-transparent group-hover:border-r-[#f4280dc5] sm:group-hover:border-r-transparent transition-all duration-300 absolute top-[35px] z-[1] border-[15px] border-transparent border-r-[#e5e5e5] dark:border-r-[#2E2E2E] md:border-r-transparent md:border-l-[#e5e5e5] md:dark:border-l-[#2E2E2E] left-[50.5px] md:left-auto md:right-[21px]"
                      : "h-0 w-0 group-hover:border-r-[#f4280dc5] transition-all duration-300 absolute top-[35px] z-[1] border-[15px] border-transparent border-r-[#e5e5e5] dark:border-r-[#2E2E2E] left-[50.5px] md:left-[22px]"
                  }></span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Journey;
