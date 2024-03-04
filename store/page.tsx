import { ReactNode, createContext } from "react";

export const ProjectContext = createContext([{}]);

type projectDataType = { children: ReactNode };

export function ProjectDataContext({ children }: projectDataType) {
  const ProjectData = [
    {
      id: 1,
      name: "Spotify",
      steck: ["TypeScript", "React", "Next.js", "Tailwind"],
      image: "/img-spotify.png",
      url: "https://spotify-application-stripe.vercel.app/",
      github: "https://github.com/kkangji/spotify-application-stripe",
      introduction:
        "Build a Layout Spotify Application with NextJs, React, Tailwind, I'll learn how to develop a complete music streaming application, replicating the popular features and functionalities of Spotify.",
    },
    {
      id: 2,
      name: "Journal Application",
      steck: ["TypeScript", "React", "Next.js", "Tailwind"],
      image: "/img-journal.png",
      url: "https://journal-application.vercel.app/",
      github: "https://github.com/kkangji/journal-application",
      introduction:
        "Build a note pages from notion-style editor, provides cover images, nested pages.",
    },
    {
      id: 3,
      name: "Weather App",
      steck: ["JavaScript"],
      image: "/img-weather.png",
      url: "",
      github: "",
      introduction: "",
    },
  ];

  return (
    <ProjectContext.Provider value={ProjectData}>
      {children}
    </ProjectContext.Provider>
  );
}
