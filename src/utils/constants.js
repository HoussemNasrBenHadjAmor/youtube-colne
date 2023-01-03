import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { PuzzlePieceIcon } from "@heroicons/react/24/outline";
import { MusicalNoteIcon } from "@heroicons/react/24/outline";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { FilmIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";

export const categories = [
  { name: "New", Icon: HomeIcon, path: "/" },
  { name: "React", Icon: CodeBracketIcon, path: "/category/react" },
  { name: "Music", Icon: MusicalNoteIcon, path: "/category/music" },
  { name: "Film", Icon: FilmIcon, path: "/category/film" },
  { name: "Gaming", Icon: PuzzlePieceIcon, path: "/category/gaming" },
  {
    name: "Education",
    Icon: DocumentDuplicateIcon,
    path: "category/education",
  },
];

export { default as logo } from "../../public/logo.png";
