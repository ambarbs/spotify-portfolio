import { palette } from "./skills";
import type { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    id: "memory-game",
    name: "Memory Game",
    tagline: "Memory game of cards built with React, Redux and CSS",
    stack: ["React", "Redux", "CSS"],
    impact: "Fun learning project",
    link: "https://ambarbs.github.io/memory-game/",
    repo: "#",
    color: palette[0],
  },
  {
    id: "tic-tac-toe",
    name: "Tic Tac Toe",
    tagline: "Tic Tac Toe with React, Redux, Material UI",
    stack: ["React", "Redux", "MUI"],
    impact: "Deployed on Heroku",
    link: "https://tic-tac-toe-vs-comp.herokuapp.com/",
    repo: "#",
    color: palette[1],
  },
  {
    id: "chess",
    name: "Chess Online",
    tagline: "Multiplayer chess with Google Cloud backend",
    stack: ["React", "Redux", "Styled Components"],
    impact: "Play with friends online",
    link: "https://chess-me-if-you-can.herokuapp.com/",
    repo: "#",
    color: palette[2],
  },
  {
    id: "binary-clock",
    name: "Binary Clock",
    tagline: "Binary clock built with React",
    stack: ["React"],
    impact: "Interactive toy app",
    link: "https://binary-watch.herokuapp.com/",
    repo: "#",
    color: palette[3],
  },
];
