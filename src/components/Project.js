import React from "react";
import projects from "../projectData";
import { GITHUB_USERNAME } from "../root.link";

const Project = () => {
  return (
    <div id="Projects">
      <section className="my-28 px-5" id="projects">
        <header className="text-2xl font-bold pl-8 pt-10">
          <h2
            className="rounded-lg p-4 glow"
            style={{ maxWidth: "fit-content" }}
          >
            Projects
          </h2>
        </header>
        <div className="p-4 my-7  md:flex flex-wrap">
          {projects.map((project, index) => (
            <div
              className="rounded-lg bg-gray-700 p-4 shadow-lg mb-6 md:w-1/2 mt-6 " // Added mt-6 for top margin
              key={index}
            >
              <h3 className="uppercase font-bold text-lg">{project.title}</h3>
              <p className="mt-6">{project.description}</p>
              <div className="flex mt-6 space-x-3 pb-2 md:flex-wrap flex-wrap">
                {project.tools.map((disc, index) => (
                  <span
                    className="border border-gray-500 px-2 py-1 rounded-lg mt-2 text-sm"
                    key={index}
                  >
                    {disc}
                  </span>
                ))}
              </div>
              <div className=" mt-6 w-auto flex space-x-5 relative ">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <img
                    src="./images/icons/github.svg"
                    alt="link to github page"
                    width="24px"
                    height="24px"
                  />
                </a>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img
                    src="./images/icons/external-link.svg"
                    alt="link to live website"
                    width="24px"
                    height="24px"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="mx-5">
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noreferrer"
          className="bg-gray block shadow-lg uppercase border border-gray-500 rounded-lg text-center my-12 p-2 max-w-xs m-auto"
        >
          <span>See more on Github</span>
        </a>
      </div>
    </div>
  );
};

export default Project;
