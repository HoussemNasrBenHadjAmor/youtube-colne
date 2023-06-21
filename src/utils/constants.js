import { CodeBracketIcon } from "@heroicons/react/24/outline";
// import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { PuzzlePieceIcon } from "@heroicons/react/24/outline";
import { MusicalNoteIcon } from "@heroicons/react/24/outline";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { FilmIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const theme = localStorage.getItem("dark_mode") === "true";

export const categories = [
  { name: "New", Icon: HomeIcon, path: "/" },
  { name: "React", Icon: CodeBracketIcon, path: "/category/reactjs" },
  { name: "Music", Icon: MusicalNoteIcon, path: "/category/music" },
  { name: "Film", Icon: FilmIcon, path: "/category/film" },
  { name: "Gaming", Icon: PuzzlePieceIcon, path: "/category/gaming" },
  {
    name: "Education",
    Icon: DocumentDuplicateIcon,
    path: "category/education",
  },
  {
    name: "About Us",
    Icon: InformationCircleIcon,
    path: "about-us",
  },
];

export { default as logo } from "../assets/logo.png";
