import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Diploma in Computer Science ",
    location: "Jhajjar",
    description:
      " I'm Done My Diploma From Goverment Polytechnic Jhajjar ",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Bachelor of Technology",
    location: "Panipat",
    description:
      "I'm an Undergraduate Student at Panipat Institute of Engineering & Technology (PIET). ",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2025",
  },

  {
    title: "Uniparels Private Limited",
    location: "Jhajjar",
    description:
      "I worked as a Intern full-stack developer . My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to do Internship opportunities.",
    icon: React.createElement(FaReact),
    date: "May 2020 - October 2020",
  },
] as const;

export const projectsData = [
  {
    title: "USTAIN Finance",
    description:
      "I worked as a Intern Web  developer on this  project . As a assignment they gave it to me test my Fornt end skill.",
    tags: ["React",  "MongoDB", "Tailwind", ],
    imageUrl: corpcommentImg,
  },
  {
    title: "My Portfolio",
    description:
      "I'm Created this a my Personal First Portfolio Website to tezt my skill",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "1 Inch",
    description:
      "Created this is as a Collge Porject While College Training",
    tags: ["React",  "Tailwind", ],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
