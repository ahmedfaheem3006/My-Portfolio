import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Assets imports
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/java.png";
import boot from "../assets/bootstrap.png";
import tail from "../assets/Tailwind CSS 1.svg";
import react from "../assets/ReactIMG.png";
import redux from "../assets/redux.svg";
import framer from "../assets/framer-motion 1.svg";
import programming from "../assets/C++.svg";
import sass from "../assets/Sass_Logo_Color 1.svg";
import ts from "../assets/ts.svg";
import vscode from "../assets/vscode.png";
import figma from "../assets/Figma.svg";
import git from "../assets/branch_9294547.png";
import github from "../assets/GitHub.svg";
import postman from "../assets/postmanIMG.svg";

// New Assets
import logoCsharp from "../assets/Logo_C_sharp.svg.webp";
import logoDotnet from "../assets/Microsoft_.NET_logo.svg.webp";
import logoAngular from "../assets/Angular_gradient_logo.png";
import logoPhp from "../assets/PHP-logo.svg.webp";
import logoPostgres from "../assets/Postgresql_elephant.svg.webp";
import logoPython from "../assets/Python-logo-notext.svg.webp";
import logoMongo from "../assets/mongodb.svg";
import logoSqlGeneric from "../assets/sql-database-generic.svg";
import logoSqlite from "../assets/sqlite.svg";
import logoEfCore from "../assets/EFcore.svg";
import logoApi from "../assets/API.svg";
import logoAzure from "../assets/Microsoft_Azure.svg.webp";
import logoCopilot from "../assets/copilot-icon.webp";
import logoCursor from "../assets/cursor-ai-code-icon.webp";
import logoClaude from "../assets/Claude_AI_symbol.svg.webp";
import logoClaudeCode from "../assets/claude code.svg";
import logoNodejs from "../assets/nodejs-icon.svg";
import logoExpress from "../assets/express.png";

const About = () => {
  const [type, setType] = useState("languages");

  const categories = [
    { id: "languages", label: "Languages" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "databases", label: "Databases" },
    { id: "tools", label: "Tools" }
  ];

  const skillsData = {
    languages: [
      { name: "C#", asset: logoCsharp },
      { name: "JavaScript (ES6+)", asset: js },
      { name: "TypeScript", asset: ts },
      { name: "SQL", asset: logoSqlGeneric },
      { name: "Python", asset: logoPython },
      { name: "PHP", asset: logoPhp },
      { name: "C++", asset: programming }
    ],
    frontend: [
      { name: "Angular", asset: logoAngular },
      { name: "React", asset: react },
      { name: "HTML5", asset: html },
      { name: "CSS3", asset: css },
      { name: "Tailwind CSS", asset: tail },
      { name: "Bootstrap", asset: boot },
      { name: "Redux", asset: redux },
      { name: "Framer Motion", asset: framer },
      { name: "Sass", asset: sass }
    ],
    backend: [
      { name: "ASP.NET Core", asset: logoDotnet },
      { name: "EF Core", asset: logoEfCore },
      { name: "RESTful APIs", asset: logoApi },
      { name: "Node.js", asset: logoNodejs },
      { name: "Express.js", asset: logoExpress },
      { name: "Clean Architecture", textLogo: "Clean\nArch" },
      { name: "Repository Pattern", textLogo: "Repo\nPat" },
      { name: "Unit of Work", textLogo: "UoW" },
      { name: "SignalR", textLogo: "SignalR" },
      { name: "JWT Authentication", textLogo: "JWT" }
    ],
    databases: [
      { name: "SQL Server", asset: logoSqlGeneric },
      { name: "PostgreSQL", asset: logoPostgres },
      { name: "SQLite", asset: logoSqlite },
      { name: "MongoDB", asset: logoMongo }
    ],
    tools: [
      { name: "Git", asset: git },
      { name: "GitHub", asset: github },
      { name: "Postman", asset: postman },
      { name: "VS Code", asset: vscode },
      { name: "Figma", asset: figma },
      { name: "Azure DevOps Basics", asset: logoAzure },
      { name: "GitHub Copilot", asset: logoCopilot },
      { name: "Cursor", asset: logoCursor },
      { name: "Claude", asset: logoClaude },
      { name: "Claude Code", asset: logoClaudeCode }
    ]
  };

  const renderIcon = (skill) => {
    if (skill.textLogo) {
      const maxLineLen = Math.max(...skill.textLogo.split('\n').map(l => l.length));
      const fontSize = maxLineLen <= 3 ? "text-[16px]" : maxLineLen <= 6 ? "text-[12.5px]" : "text-[10.5px]";
      return (
        <div className="flex flex-col items-center justify-center text-center px-1 select-none">
          {skill.textLogo.split('\n').map((line, idx) => (
            <span key={idx} className={`text-main font-bold ${fontSize} leading-tight uppercase tracking-wider group-hover:scale-95 transition-transform duration-300`}>
              {line}
            </span>
          ))}
        </div>
      );
    }

    return (
      <img
        loading="lazy"
        className="w-[48px] h-[48px] group-hover:w-[42px] group-hover:h-[42px] transition-all duration-300 object-contain rounded"
        src={skill.asset}
        alt={skill.name}
      />
    );
  };

  return (
    <div id="About" className="mt-[100px] lg:mt-[196px] mb-[100px]">
      <div className="container text-center md:text-start grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <motion.div
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
            transition: {
              duration: 0.8,
            },
          }}
          className="space-y-4 md:space-y-6">
          <h3 className="text-main font-bold text-3xl">About Me</h3>
          <h2 className="text-[22px] w-full md:text-[32px] lg:text-[40px] md:leading-[54.6px]">
            What Are My Programming
            <span className="ml-1 text-main">
              Skills
            </span>
          </h2>
          <p
            className="text-xl sm:text-[24px] text-gray-700
           dark:text-gray-400 leading-[31.2px]">
            Here’s what I’ve mastered throughout my coding journey.
          </p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1 p-1 bg-gray-200 dark:bg-[#2E2E2E] rounded-[24px] w-fit max-w-full mx-auto md:mx-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setType(cat.id)}
                className={`${
                  type === cat.id ? "bg-bgGradient shadow-md text-white" : "text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5"
                } text-[14px] sm:text-base font-semibold px-4 py-1.5 rounded-[20px] transition-all duration-300 capitalize`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
            transition: {
              duration: 0.8,
            },
          }}
          className="grid parentOfSkills grid-cols-4 lg:grid-cols-5 place-content-center gap-4 mt-6 lg:mt-0"
        >
          <AnimatePresence mode="popLayout">
            {skillsData[type].map((skill) => {
              return (
                <motion.div
                  layout
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.3,
                      stiffness: 120,
                      damping: 5,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0,
                    transition: {
                      duration: 0.15
                    }
                  }}
                  key={skill.name}
                  title={skill.name}
                  className="dark:bg-[#2E2E2E] bg-[#cbcbcb] group grid place-items-center border-2 border-transparent rounded w-[70px] h-[70px] hover:border-2 hover:shadow-[0px_0px_20px_orange] hover:shadow-orange-600 transition-all duration-300 hover:rounded-full hover:border-orange-600 cursor-pointer"
                >
                  {renderIcon(skill)}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
