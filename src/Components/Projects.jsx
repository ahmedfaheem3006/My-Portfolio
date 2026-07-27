import { useState, useEffect } from "react";
import MainTitle from "./MainTitle";
import ProjectBox from "./ProjectBox";
import { TbArrowBackUp } from "react-icons/tb";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaLink, FaCode } from "react-icons/fa";
import dataOfProjects from "./dataOfProjects";

const Projects = ({ AllBtn = false, moreBtn = true, backBtn = false }) => {
  const [activeBtn, setActiveBtn] = useState("fav");
  const [projects, setProjects] = useState(
    dataOfProjects.filter((p) => p.status === "favourite")
  );
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  function getAllProjects() {
    setActiveBtn("All");
    setProjects(dataOfProjects);
  }

  function getFavProjects() {
    setActiveBtn("fav");
    setProjects(dataOfProjects.filter((p) => p.status === "favourite"));
  }

  function handleFilter(tech) {
    setActiveBtn(tech);
    setProjects(dataOfProjects.filter((p) => p.tech === tech));
  }

  const projectsMap = projects.map((item) => {
    return <ProjectBox key={item.id} item={item} onSelect={setSelectedProject} />;
  });

  return (
    <div className="py-[100px]" id="Projects">
      <MainTitle
        title={"Portfolio"}
        p={"Here you will see my projects ... Enjoy"}
      />

      <div className="container relative">
        {/* Modern Pill-Shaped Tab Container */}
        <div className="w-full flex justify-center mb-14">
          <ul className="flex items-center justify-center flex-wrap gap-2 p-1.5 rounded-2xl md:rounded-full bg-gray-200/40 dark:bg-neutral-900/60 border border-gray-300/20 dark:border-white/5 shadow-lg backdrop-blur-md max-w-full">
            {backBtn ? (
              <li className="bg-bgGradient absolute left-2 -top-12 sm:top-1 w-9 h-9 rounded-full grid place-items-center sm:left-10 shadow-lg">
                <Link className="text-white text-2xl" to={"/"}>
                  <TbArrowBackUp />
                </Link>
              </li>
            ) : (
              ""
            )}
            
            {AllBtn ? (
              <li
                onClick={getAllProjects}
                className="relative cursor-pointer px-5 py-2.5 rounded-full text-[0.95rem] sm:text-md font-semibold transition-all duration-300 group"
              >
                {activeBtn === "All" && (
                  <motion.span
                    layoutId="active-tab-indicator"
                    className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500 rounded-full shadow-[0_4px_15px_rgba(239,68,68,0.35)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 transition-colors duration-300 ${activeBtn === "All" ? "text-white" : "text-gray-600 dark:text-gray-400 group-hover:text-orange-500"}`}>
                  All
                </span>
              </li>
            ) : (
              ""
            )}

            {/* Favorite */}
            <li
              onClick={getFavProjects}
              className="relative cursor-pointer px-5 py-2.5 rounded-full text-[0.95rem] sm:text-md font-semibold transition-all duration-300 group"
            >
              {activeBtn === "fav" && (
                <motion.span
                  layoutId="active-tab-indicator"
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500 rounded-full shadow-[0_4px_15px_rgba(239,68,68,0.35)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className={`relative z-10 transition-colors duration-300 ${activeBtn === "fav" ? "text-white" : "text-gray-600 dark:text-gray-400 group-hover:text-orange-500"}`}>
                Favorite
              </span>
            </li>

            {/* html , css ,js */}
            <li
              onClick={() => handleFilter("html , css ,js")}
              className="relative cursor-pointer px-5 py-2.5 rounded-full text-[0.95rem] sm:text-md font-semibold transition-all duration-300 group"
            >
              {activeBtn === "html , css ,js" && (
                <motion.span
                  layoutId="active-tab-indicator"
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500 rounded-full shadow-[0_4px_15px_rgba(239,68,68,0.35)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className={`relative z-10 transition-colors duration-300 ${activeBtn === "html , css ,js" ? "text-white" : "text-gray-600 dark:text-gray-400 group-hover:text-orange-500"}`}>
                HTML, CSS, JS
              </span>
            </li>

            {/* Angular */}
            <li
              onClick={() => handleFilter("Angular")}
              className="relative cursor-pointer px-5 py-2.5 rounded-full text-[0.95rem] sm:text-md font-semibold transition-all duration-300 group"
            >
              {activeBtn === "Angular" && (
                <motion.span
                  layoutId="active-tab-indicator"
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500 rounded-full shadow-[0_4px_15px_rgba(239,68,68,0.35)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className={`relative z-10 transition-colors duration-300 ${activeBtn === "Angular" ? "text-white" : "text-gray-600 dark:text-gray-400 group-hover:text-orange-500"}`}>
                Angular
              </span>
            </li>

            {/* React */}
            <li
              onClick={() => handleFilter("React")}
              className="relative cursor-pointer px-5 py-2.5 rounded-full text-[0.95rem] sm:text-md font-semibold transition-all duration-300 group"
            >
              {activeBtn === "React" && (
                <motion.span
                  layoutId="active-tab-indicator"
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500 rounded-full shadow-[0_4px_15px_rgba(239,68,68,0.35)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className={`relative z-10 transition-colors duration-300 ${activeBtn === "React" ? "text-white" : "text-gray-600 dark:text-gray-400 group-hover:text-orange-500"}`}>
                React
              </span>
            </li>

            {/* .NET */}
            <li
              onClick={() => handleFilter(".NET")}
              className="relative cursor-pointer px-5 py-2.5 rounded-full text-[0.95rem] sm:text-md font-semibold transition-all duration-300 group"
            >
              {activeBtn === ".NET" && (
                <motion.span
                  layoutId="active-tab-indicator"
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500 rounded-full shadow-[0_4px_15px_rgba(239,68,68,0.35)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className={`relative z-10 transition-colors duration-300 ${activeBtn === ".NET" ? "text-white" : "text-gray-600 dark:text-gray-400 group-hover:text-orange-500"}`}>
                .NET
              </span>
            </li>

            {/* node js */}
            <li
              onClick={() => handleFilter("node js")}
              className="relative cursor-pointer px-5 py-2.5 rounded-full text-[0.95rem] sm:text-md font-semibold transition-all duration-300 group"
            >
              {activeBtn === "node js" && (
                <motion.span
                  layoutId="active-tab-indicator"
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500 rounded-full shadow-[0_4px_15px_rgba(239,68,68,0.35)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className={`relative z-10 transition-colors duration-300 ${activeBtn === "node js" ? "text-white" : "text-gray-600 dark:text-gray-400 group-hover:text-orange-500"}`}>
                Node.js
              </span>
            </li>

            {/* full stack */}
            <li
              onClick={() => handleFilter("full stack")}
              className="relative cursor-pointer px-5 py-2.5 rounded-full text-[0.95rem] sm:text-md font-semibold transition-all duration-300 group"
            >
              {activeBtn === "full stack" && (
                <motion.span
                  layoutId="active-tab-indicator"
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500 rounded-full shadow-[0_4px_15px_rgba(239,68,68,0.35)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className={`relative z-10 transition-colors duration-300 ${activeBtn === "full stack" ? "text-white" : "text-gray-600 dark:text-gray-400 group-hover:text-orange-500"}`}>
                Full Stack
              </span>
            </li>
          </ul>
        </div>

        {/* Project Cards Grid */}
        <div
          className={`grid ${
            projects.length === 0
              ? "grid-cols-1 place-items-center"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          }`}
        >
          {projects.length === 0 ? (
            <div className="text-center text-xl font-bold py-10">
              No projects found in this category.
            </div>
          ) : (
            projectsMap
          )}
        </div>

        {moreBtn ? (
          <Link
            to={"/allprojects"}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className=" bg-bgGradient w-[120px] text-center leading-[40px] h-[40px] text-white transition-all duration-300 hover:hover:shadow-[0_0_40px_5px_rgba(255,68,0,0.292)] hover:w-[140px] mt-14 mx-auto block rounded-lg shadow-md font-semibold"
          >
            See More
          </Link>
        ) : (
          ""
        )}
      </div>

      {/* Interactive Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/75 backdrop-blur-md z-[999] flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-100 dark:bg-[#151515] border border-gray-300/40 dark:border-white/10 w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl relative my-8 max-h-[90vh] flex flex-col"
            >
              {/* Header Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-gray-200/50 dark:bg-white/10 hover:bg-orange-500 hover:text-white transition-all rounded-full p-2 text-xl z-30 text-gray-800 dark:text-white flex items-center justify-center cursor-pointer shadow-md"
              >
                <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" height="1em" width="1em">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Scrollable Body */}
              <div className="overflow-y-auto p-6 md:p-8 flex flex-col gap-6 scrollbar-thin">
                <img
                  src={selectedProject.projectImage}
                  alt={selectedProject.name}
                  className="w-full rounded-2xl aspect-[16/9] object-cover shadow-lg border border-gray-300/20 dark:border-white/5"
                />

                <div className="flex flex-col gap-2">
                  <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white">
                    {selectedProject.name}
                  </h2>
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full capitalize text-orange-600 bg-orange-500/10 dark:text-orange-400 dark:bg-orange-500/5 border border-orange-500/10 dark:border-orange-500/5">
                      {selectedProject.tech}
                    </span>
                    {selectedProject.status === "favourite" && (
                      <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full text-amber-600 bg-amber-500/10 dark:text-amber-400 dark:bg-amber-500/5 border border-amber-500/10 dark:border-amber-500/5">
                        ⭐ Favorite
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Description */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400 border-b border-gray-200/50 dark:border-white/5 pb-2">
                    Project Overview
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-[1.05rem] leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Features */}
                {selectedProject.features && (
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400 border-b border-gray-200/50 dark:border-white/5 pb-2">
                      Key Features
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 flex flex-col gap-2 pl-2">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="leading-relaxed">{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack Pills */}
                {selectedProject.techStack && (
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400 border-b border-gray-200/50 dark:border-white/5 pb-2">
                      Technologies Applied
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {selectedProject.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-200 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 px-3.5 py-1.5 rounded-full text-sm font-semibold border border-gray-300/30 dark:border-neutral-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <a
                    href={selectedProject.linkProject}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-orange-600 to-red-500 hover:shadow-lg hover:shadow-red-500/20 text-white font-bold py-3.5 rounded-xl text-center transition-all flex items-center justify-center gap-2 text-lg"
                  >
                    <FaLink /> Live Demo
                  </a>
                  <a
                    href={selectedProject.linkProjectGH}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-800 hover:bg-slate-900 border border-white/10 text-white font-bold py-3.5 rounded-xl text-center transition-all flex items-center justify-center gap-2 text-lg"
                  >
                    <FaCode /> View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
