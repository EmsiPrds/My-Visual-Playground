/* eslint-disable react-refresh/only-export-components */
import LogoLoop from "./animation-components/LogoLoop";

// Dev Logos Imports
import cpp from "../assets/Dev-Logos/cpp.svg";
import css from "../assets/Dev-Logos/css.svg";
import divi from "../assets/Dev-Logos/divi.svg";
import elementor from "../assets/Dev-Logos/elementor.svg";
import expressjs from "../assets/Dev-Logos/expressjs.svg";
import html from "../assets/Dev-Logos/html.svg";
import ionic from "../assets/Dev-Logos/ionic.svg";
import java from "../assets/Dev-Logos/java.svg";
import javascript from "../assets/Dev-Logos/Javascript.svg";
import mongodb from "../assets/Dev-Logos/Monggo.svg";
import mysql from "../assets/Dev-Logos/mysql.svg";
import nodejs from "../assets/Dev-Logos/nodejs.svg";
import php from "../assets/Dev-Logos/php.svg";
import python from "../assets/Dev-Logos/python.svg";
import react from "../assets/Dev-Logos/ReactLogo.svg";
import tailwind from "../assets/Dev-Logos/Tailwind.svg";
import typescript from "../assets/Dev-Logos/typescript.svg";
import webflow from "../assets/Dev-Logos/webflow.svg";
import wordpress from "../assets/Dev-Logos/WordPress.svg";

// Dev Tools Logos Imports
import chatgpt from "../assets/Dev-Tools-Logos/chatgpt.svg";
import cursor from "../assets/Dev-Tools-Logos/cursor.svg";
import git from "../assets/Dev-Tools-Logos/git.svg";
import github from "../assets/Dev-Tools-Logos/github.svg";
import n8n from "../assets/Dev-Tools-Logos/n8n.svg";
import netbeans from "../assets/Dev-Tools-Logos/netbeans.svg";
import npm from "../assets/Dev-Tools-Logos/npm.svg";
import virtualbox from "../assets/Dev-Tools-Logos/virtualbox.svg";
import vscode from "../assets/Dev-Tools-Logos/VsCode.svg";

// Design Tools Logos Imports
import xd from "../assets/Design-Tools-Logos/adobexd.svg";
import aftereffects from "../assets/Design-Tools-Logos/affter-effect.svg";
import canva from "../assets/Design-Tools-Logos/Canva.svg";
import capcut from "../assets/Design-Tools-Logos/capcut.svg";
import figma from "../assets/Design-Tools-Logos/Figma.svg";
import flash from "../assets/Design-Tools-Logos/flash.svg";
import ibispaintx from "../assets/Design-Tools-Logos/ibispaintx.svg";
import illustrator from "../assets/Design-Tools-Logos/Illustrator.svg";
import lightroom from "../assets/Design-Tools-Logos/lightroom.svg";
import photoshop from "../assets/Design-Tools-Logos/Photoshop.svg";
import premiere from "../assets/Design-Tools-Logos/premier.svg";
import sketchbook from "../assets/Design-Tools-Logos/sketchbook.svg";

export const devTech = [
  // Languages
  { src: html, alt: "HTML" },
  { src: css, alt: "CSS" },
  { src: javascript, alt: "JavaScript" },
  { src: typescript, alt: "TypeScript" },
  { src: java, alt: "Java" },
  { src: cpp, alt: "C++" },
  { src: python, alt: "Python" },
  { src: php, alt: "PHP" },

  // Libraries / Frameworks / Stacks
  { src: react, alt: "React" },
  { src: tailwind, alt: "TailwindCSS" },
  { src: ionic, alt: "Ionic" },
  { src: nodejs, alt: "Node.js" },
  { src: expressjs, alt: "Express.js" },

  // Databases
  { src: mongodb, alt: "MongoDB" },
  { src: mysql, alt: "MySQL" },

  // CMS / Web Platforms
  { src: wordpress, alt: "WordPress" },
  { src: elementor, alt: "Elementor" },
  { src: divi, alt: "Divi Theme" },
  { src: webflow, alt: "Webflow" },
];

export const devTools = [
  { src: chatgpt, alt: "ChatGPT" },
  { src: n8n, alt: "n8n" },
  { src: cursor, alt: "Cursor AI" },
  { src: npm, alt: "npm" },
  { src: git, alt: "Git" },
  { src: github, alt: "GitHub" },
  { src: vscode, alt: "VSCode" },
  { src: netbeans, alt: "NetBeans" },
  { src: virtualbox, alt: "VirtualBox" },
];

export const designTools = [
  { src: figma, alt: "Figma" },
  { src: canva, alt: "Canva" },
  { src: sketchbook, alt: "Sketchbook" },
  { src: ibispaintx, alt: "IbisPaint X" },

  { src: photoshop, alt: "Photoshop" },
  { src: illustrator, alt: "Illustrator" },
  { src: xd, alt: "Adobe XD" },
  { src: flash, alt: "Adobe Flash" },
  { src: lightroom, alt: "Lightroom" },

  { src: aftereffects, alt: "After Effects" },
  { src: premiere, alt: "Premiere" },
  { src: capcut, alt: "CapCut" },
];

interface SkillsProps {
  darkMode: boolean;
}

export default function Skills({ darkMode }: SkillsProps) {
  return (
    <section
      id="skills"
      className={`py-24 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
    >
      <div className="max-w-screen mx-50 h-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold font-bakbak mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Skills &{" "}
            <span className="bg-linear-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Tech Stacks
            </span>
          </h2>

          <p
            className={`text-lg text-poppins max-w-2xl mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Every project starts with understanding — not just what to build,
            but why it needs to exist. My process blends creativity,
            collaboration, and logic to ensure each design and solution aligns
            with purpose and impact.
          </p>
        </div>

        {/* LOGO LOOPS */}
        <div className="relative h-[400px] overflow-hidden space-y-6">
          {/* Horizontal loop */}
          <div className="flex flex-col justify-center space-y-20">
            <div className="w-7xl mx-auto">
              <LogoLoop
                logos={designTools}
                speed={50}
                direction="left"
                logoHeight={50}
                gap={50}
                scaleOnHover
                fadeOut
                fadeOutColor="#f3f4f6"
                ariaLabel="Technology partners"
              />
            </div>

            <div>
              <LogoLoop
                logos={devTech}
                speed={50}
                direction="right"
                logoHeight={50}
                gap={50}
                scaleOnHover
                fadeOut
                fadeOutColor="#f3f4f6"
                ariaLabel="Technology partners"
              />
            </div>

            <div className="w-7xl mx-auto">
              <LogoLoop
                logos={devTools}
                speed={50}
                direction="left"
                logoHeight={50}
                gap={50}
                scaleOnHover
                fadeOut
                fadeOutColor="#f3f4f6"
                ariaLabel="Technology partners"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
