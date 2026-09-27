import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Solar.css";

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

/* Orbit rings: radius as a fraction of the stage size, seconds per full turn, direction */
const RINGS = [
  { r: 0.22, dur: 26, dir: 1 },
  { r: 0.34, dur: 38, dir: -1 },
  { r: 0.45, dur: 54, dir: 1 },
];

/* How many planets live on each ring, inner rings stay less crowded */
const splitRings = (n) => {
  if (n <= 4) return [n];
  if (n <= 8) {
    const inner = Math.round(n * 0.4);
    return [inner, n - inner];
  }
  const a = Math.round(n * 0.25);
  const b = Math.round(n * 0.33);
  return [a, b, n - a - b];
};

/* 1 ring sits in the middle, 2 rings use the inner + outer, 3 rings use them all */
const ringSlots = (used) => {
  if (used === 1) return [1];
  if (used === 2) return [0, 2];
  return [0, 1, 2];
};

const CATEGORIES = [
  { id: "languages", label: "Languages" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "databases", label: "Databases" },
  { id: "tools", label: "Tools" },
];

const SKILLS = {
  languages: [
    { name: "C#", asset: logoCsharp },
    { name: "JavaScript (ES6+)", asset: js },
    { name: "TypeScript", asset: ts },
    { name: "SQL", asset: logoSqlGeneric },
    { name: "Python", asset: logoPython },
    { name: "PHP", asset: logoPhp },
    { name: "C++", asset: programming },
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
    { name: "Sass", asset: sass },
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
    { name: "JWT Authentication", textLogo: "JWT" },
  ],
  databases: [
    { name: "SQL Server", asset: logoSqlGeneric },
    { name: "PostgreSQL", asset: logoPostgres },
    { name: "SQLite", asset: logoSqlite },
    { name: "MongoDB", asset: logoMongo },
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
    { name: "Claude Code", asset: logoClaudeCode },
  ],
};

const About = () => {
  const [type, setType] = useState("languages");
  const [active, setActive] = useState(null);
  const [pinned, setPinned] = useState(null);

  const stageRef = useRef(null);
  const planetRefs = useRef(new Map());
  const sizeRef = useRef(0);
  const elapsedRef = useRef(0);
  const pausedRef = useRef(false);

  const currentCategory = CATEGORIES.find((c) => c.id === type);
  const skills = SKILLS[type];

  /* Flatten the skills into ring + starting angle, recomputed only when the category changes */
  const layout = useMemo(() => {
    const counts = splitRings(skills.length);
    const slots = ringSlots(counts.length);
    const nodes = [];
    let cursor = 0;
    counts.forEach((count, i) => {
      const ring = slots[i];
      for (let k = 0; k < count; k++) {
        nodes.push({
          skill: skills[cursor + k],
          ring,
          base: (k / count) * 360 + i * 23,
        });
      }
      cursor += count;
    });
    return nodes;
  }, [skills]);

  const activeRings = useMemo(
    () => new Set(layout.map((n) => n.ring)),
    [layout]
  );

  /* Track the stage size so orbit radii stay proportional on every screen */
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const measure = () => {
      sizeRef.current = stage.clientWidth;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(stage);
    return () => ro.disconnect();
  }, []);

  /* Drive the orbits from a single rAF loop: no CSS phase drift, pauses cleanly */
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;
    let last = 0;
    let visible = true;

    const place = () => {
      const size = sizeRef.current;
      const seconds = elapsedRef.current / 1000;
      layout.forEach(({ skill, ring, base }) => {
        const el = planetRefs.current.get(skill.name);
        if (!el) return;
        const cfg = RINGS[ring];
        const deg = base + cfg.dir * seconds * (360 / cfg.dur);
        const rad = (deg * Math.PI) / 180;
        const r = cfg.r * size;
        el.style.transform = `translate3d(${(Math.cos(rad) * r).toFixed(
          2
        )}px, ${(Math.sin(rad) * r).toFixed(2)}px, 0)`;
      });
    };

    const tick = (now) => {
      if (last && !pausedRef.current && !reduced) elapsedRef.current += now - last;
      last = now;
      place();
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (raf) return;
      last = 0;
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    /* Only spend frames while the system is actually on screen */
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      },
      { rootMargin: "120px" }
    );
    io.observe(stage);
    place();
    if (visible) start();

    return () => {
      io.disconnect();
      stop();
    };
  }, [layout]);

  const setPlanetRef = useCallback(
    (name) => (el) => {
      if (el) planetRefs.current.set(name, el);
      else planetRefs.current.delete(name);
    },
    []
  );

  const hold = (skill) => {
    pausedRef.current = true;
    setActive(skill);
  };
  const release = () => {
    if (!pinned) pausedRef.current = false;
    setActive(pinned);
  };

  const togglePin = (skill) => {
    const next = pinned && pinned.name === skill.name ? null : skill;
    setPinned(next);
    setActive(next || skill);
    pausedRef.current = Boolean(next);
  };

  const switchCategory = (id) => {
    setType(id);
    setPinned(null);
    setActive(null);
    pausedRef.current = false;
  };

  const cycleCategory = () => {
    const i = CATEGORIES.findIndex((c) => c.id === type);
    switchCategory(CATEGORIES[(i + 1) % CATEGORIES.length].id);
  };

  const renderIcon = (skill) => {
    if (skill.textLogo) {
      const maxLineLen = Math.max(
        ...skill.textLogo.split("\n").map((l) => l.length)
      );
      const fontSize =
        maxLineLen <= 3
          ? "text-[15px]"
          : maxLineLen <= 6
          ? "text-[11px]"
          : "text-[9.5px]";
      return (
        <span className="flex flex-col items-center justify-center text-center leading-none select-none">
          {skill.textLogo.split("\n").map((line, idx) => (
            <span
              key={idx}
              className={`text-main font-bold ${fontSize} leading-tight uppercase tracking-wider`}
            >
              {line}
            </span>
          ))}
        </span>
      );
    }
    return (
      <img
        loading="lazy"
        className="solar-planet-img"
        src={skill.asset}
        alt={skill.name}
      />
    );
  };

  return (
    <div id="About" className="mt-[100px] lg:mt-[196px] mb-[100px]">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* ---------- Copy + controls ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
          viewport={{ once: true }}
          className="space-y-5 text-center lg:text-start order-1 lg:order-1"
        >
          <h3 className="text-main font-bold text-3xl">About Me</h3>
          <h2 className="text-[22px] w-full md:text-[32px] lg:text-[40px] md:leading-[54.6px]">
            My Programming Skills, In
            <span className="ml-1 text-main">Orbit</span>
          </h2>
          <p className="text-xl sm:text-[24px] text-gray-700 dark:text-gray-400 leading-[31.2px]">
            Pick a system below. The star at the center becomes that category,
            and every skill I&apos;ve mastered starts circling it.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1 p-1 bg-gray-200 dark:bg-[#2E2E2E] rounded-[24px] w-fit max-w-full mx-auto lg:mx-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => switchCategory(cat.id)}
                className={`${
                  type === cat.id
                    ? "bg-bgGradient shadow-md text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5"
                } text-[14px] sm:text-base font-semibold px-4 py-1.5 rounded-[20px] transition-all duration-300 capitalize`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Readout for the focused planet */}
          <div className="solar-readout">
            <span
              className={`solar-readout-dot ${active ? "is-live" : ""}`}
              aria-hidden="true"
            />
            <span className="min-w-0">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={active ? active.name : "idle"}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="block"
                >
                  <span className="solar-readout-name">
                    {active ? active.name : "Explore the system"}
                  </span>
                  <span className="solar-readout-hint">
                    {active
                      ? `${currentCategory.label} orbit · ${skills.length} bodies`
                      : `Hover or tap a planet · ${skills.length} bodies in orbit`}
                  </span>
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
        </motion.div>

        {/* ---------- The solar system ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.9 } }}
          viewport={{ once: true }}
          className="order-2 lg:order-2 flex justify-center"
        >
          <div ref={stageRef} className="solar-stage">
            <span className="solar-nebula" aria-hidden="true" />
            <span className="solar-stars" aria-hidden="true" />
            <span className="solar-comet" aria-hidden="true" />

            {/* Orbit paths */}
            {RINGS.map((ring, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`solar-ring ${
                  activeRings.has(i) ? "is-active" : ""
                }`}
                style={{ width: `${ring.r * 200}%`, height: `${ring.r * 200}%` }}
              />
            ))}

            {/* The star */}
            <button
              type="button"
              onClick={cycleCategory}
              className="solar-sun"
              title="Click the star to jump to the next system"
            >
              <span className="solar-sun-flare" aria-hidden="true" />
              <span className="solar-sun-surface" aria-hidden="true" />
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={type}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.35 }}
                  className="solar-sun-label"
                >
                  <span className="solar-sun-title">
                    {currentCategory.label}
                  </span>
                  <span className="solar-sun-sub">{skills.length} skills</span>
                </motion.span>
              </AnimatePresence>
            </button>

            {/* Planets, the whole system blooms out of the star on every switch */}
            <AnimatePresence initial={false}>
              <motion.div
                key={type}
                className="solar-orbit-layer"
                initial={{ scale: 0.12, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.12, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {layout.map(({ skill }) => {
                  const isActive = active && active.name === skill.name;
                  const isPinned = pinned && pinned.name === skill.name;
                  return (
                    <div
                      key={skill.name}
                      ref={setPlanetRef(skill.name)}
                      className={`solar-planet ${isActive ? "is-active" : ""}`}
                    >
                      <button
                        type="button"
                        className={`solar-planet-body ${
                          isPinned ? "is-pinned" : ""
                        }`}
                        onMouseEnter={() => hold(skill)}
                        onMouseLeave={release}
                        onFocus={() => hold(skill)}
                        onBlur={release}
                        onClick={() => togglePin(skill)}
                        title={skill.name}
                        aria-label={skill.name}
                      >
                        {renderIcon(skill)}
                      </button>
                      <span className="solar-planet-tag">{skill.name}</span>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
