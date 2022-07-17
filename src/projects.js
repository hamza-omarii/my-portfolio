import {
  SiStyledcomponents,
  SiJquery,
  SiMysql,
  SiJavascript,
} from "react-icons/si";
import {
  FaLaravel,
  /*  FaPhp, */
  FaBootstrap,
  FaReact,
  FaSass,
  FaCss3Alt,
} from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";

import sehity from "./images/projectspic/sehityjo.png";
import agency from "./images/projectspic/AgencyDesign.png";
import lara from "./images/projectspic/lara-portfolio.png";
import typetestgame from "./images/projectspic/type-test game.png";
import cruds from "./images/projectspic/cruds.png";
import todolist from "./images/projectspic/todo-list.png";
import purplebuzz from "./images/projectspic/PurpleBuzzBootstrap.png";

const projects = [
  {
    id: 1,
    type: "laravel",
    tools: [
      <FaLaravel size={40} />,
      <FaBootstrap size={40} />,
      <SiJquery size={40} />,
      <SiMysql size={40} />,
    ],
    name: "sehity jo",
    link_demo: "https://sehityjo.000webhostapp.com/en",
    link_code: "https://github.com/hamza-omarii/SehityJO",
    image: sehity,
  },
  {
    id: 2,
    type: "react",
    tools: [<FaReact size={40} />, <SiStyledcomponents size={40} />],
    name: "agency design",
    link_demo: "https://agencydesign.netlify.app/",
    link_code: "https://github.com/hamza-omarii/Agency-Design-React",
    image: agency,
  },
  {
    id: 3,
    type: "react",
    tools: [<FaReact size={40} />, <FaSass size={40} />],
    name: "lara portfolio",
    link_demo: "https://laraportfolio.netlify.app/",
    link_code:
      "https://github.com/hamza-omarii/Lara-Portfolio-React/tree/main/src",
    image: lara,
  },
  {
    id: 4,
    type: "vanilla_js",
    tools: [
      <AiOutlineHtml5 size={40} />,
      <SiJavascript size={35} />,
      <FaCss3Alt size={40} />,
    ],
    name: "type test game",
    link_demo: "https://typetestgame.netlify.app/",
    link_code: "https://github.com/hamza-omarii/TypeTestGame-JS",
    image: typetestgame,
  },
  {
    id: 5,
    type: "vanilla_js",
    tools: [
      <AiOutlineHtml5 size={40} />,
      <SiJavascript size={35} />,
      <FaCss3Alt size={40} />,
    ],
    name: "CRUDS",
    link_demo: "https://crudsjs.netlify.app/",
    link_code: "https://github.com/hamza-omarii/CRUDS-VanillaJS",
    image: cruds,
  },
  {
    id: 6,
    type: "vanilla_js",
    tools: [
      <AiOutlineHtml5 size={40} />,
      <SiJavascript size={35} />,
      <FaCss3Alt size={40} />,
    ],
    name: "todo list",
    link_demo: "https://todolistvanillajs.netlify.app/",
    link_code: "https://github.com/hamza-omarii/TodoList-VanillaJS",
    image: todolist,
  },
  {
    id: 7,
    type: "bootstrap",
    tools: [<FaBootstrap size={40} />, <FaCss3Alt size={40} />],
    name: "purplebuzz",
    link_demo: "https://purplebuzzbootstrap.netlify.app/",
    link_code: "https://github.com/hamza-omarii/PurpleBuzzBootstrap",
    image: purplebuzz,
  },
];
export default projects;
