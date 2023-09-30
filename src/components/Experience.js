import React from "react";
import workHistory from "../ExData";
import "./style.ex.css";

function Experience() {
  return (
    <div className="my-28 px-5" id="Experience">
      <header className="text-2xl font-bold pl-8 pt-10">
        <h2 className="rounded-lg p-4 glow" style={{ maxWidth: "fit-content" }}>
          Experience
        </h2>
      </header>

      {workHistory &&
        workHistory.map((work) => (
          <div className="rounded-lg bg-gray-700 p-4 shadow-lg mb-6">
            <h1 className="uppercase font-bold text-2xl pl-8 pt-6 flex">
              {work?.companyName}
              <span>
                {work?.link && (
                  <div className="w-auto flex space-x-5 ml-2 mt-1x relative">
                    <a href={work.link} target="_blank" rel="noreferrer">
                      <img
                        src="./images/icons/external-link.svg"
                        alt="link to live website"
                        width="24px"
                        height="24px"
                      />
                    </a>
                  </div>
                )}
              </span>
            </h1>
            <h4 className="uppercase font-bold text-base pl-8 pt-6">
              {work?.role}
            </h4>

            <div className="pl-8 pt-6">
              <h5 className="text-sm">{work.duration}</h5>
            </div>
            <div className="pl-8">
              {work?.workDes &&
                work.workDes.map((x) => (
                  <h4 className="text-base pt-2">
                    {" "}
                    <span className="text-2xl">-</span> {x}{" "}
                  </h4>
                ))}
            </div>
            <div className="flex flex-wrap space-x-3  pl-8 pt-6 md:flex-wrap">
              {work?.exposer &&
                work.exposer.map((ex, index) => (
                  <span
                    className="border border-gray-500 px-2 py-1 mt-3 ml-1 rounded-lg text-sm"
                    key={index}
                  >
                    {ex}
                  </span>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Experience;
