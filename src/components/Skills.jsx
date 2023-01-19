import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Redux from "../assets/redux.png";
import Git from "../assets/git.png";
import Ts from "../assets/ts.png";
import Node from "../assets/node2.png";
import Mongo from "../assets/mongodb.png";
import Sql from "../assets/sql.png";
import Scss from "../assets/scss.png";
import Motion from "../assets/motion.png";
import Mui from "../assets/mui.png";

const Skills = () => {
  const skills = [
    {
      src: HTML,
      p: "HTML",
    },
    {
      src: CSS,
      p: "CSS",
    },
    {
      src: Scss,
      p: "SCSS",
    },
    {
      src: JavaScript,
      p: "JavaScript",
    },
    {
      src: ReactImg,
      p: "React js",
    },
    {
      src: Redux,
      p: "Redux (toolkit)",
    },
    {
      src: Ts,
      p: "TypeScript",
    },
    {
      src: Git,
      p: "Git",
    },
    {
      src: GitHub,
      p: "GitHub",
    },
    {
      src: Node,
      p: "Node js",
    },
    {
      src: Mongo,
      p: "Mongo db",
    },
    {
      src: Sql,
      p: "MySQL",
    },
    {
      src: Tailwind,
      p: "Tailwind css",
    },
    {
      src: Motion,
      p: "Framer Motion",
    },
    {
      src: Mui,
      p: "Material UI",
    },
  ];

  return (
    <div name="skills" className="w-full   bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skills.map(item => (
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img
                className={`w-20 mx-auto pt-3  ${
                  item.p === "Node js" ? "pt-10" : ""
                } `}
                src={item.src}
                alt="HTML icon"
              />
              <p className="my-4">{item.p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
