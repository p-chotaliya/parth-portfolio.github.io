import React from "react";
import Parth_resume from "./Parth_Resume.pdf";

import {
  ADDRESS,
  EMAIL_ID,
  FIRST_NAME,
  GITHUB_USERNAME,
  LAST_NAME,
  LINKEDIN_USERNAME,
  RESUME_PATH,
  TWITTER_ID,
} from "../root.link";
const Contact = () => {
  return (
    <section className="my-28" id="contact">
      <header className="text-2xl font-bold pl-8 pt-10">
        <h2 className="rounded-lg p-4 glow" style={{ maxWidth: "fit-content" }}>
          Contact
        </h2>
      </header>
      <div className="flex flex-wrap ">
        <div className="md:mx-6 flex-row flex-wrap md:flex-row justify-between md:w-1/2 w-full">
          <div className="md:w-6/12 md:px-0 p-5 my-5">
            <p className="text-base font-thin">
              I'd love to hear your thoughts!
            </p>
            <div>
              <p className="font-bold">
                {FIRST_NAME} {LAST_NAME}
              </p>
              <p className="font-thin">{ADDRESS}</p>
              <a
                href={`mailto: ${EMAIL_ID}`}
                className="border-b-2 mt-3 inline-block border-gray-500"
              >
                {EMAIL_ID}
              </a>
            </div>
            <a
              className="border-b-2 mt-3 inline-block border-gray-500"
              href={Parth_resume}
              download="Parth-Resume"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <div className="flex flex-row flex-wrap mt-7">
              <div className="mr-4">
                <a
                  href={`https://www.linkedin.com/in/${LINKEDIN_USERNAME}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
                    <img
                      src="./images/icons/linkedin.svg"
                      alt=""
                      width="24px"
                      height="24px"
                      className="mr-1"
                    />
                    LinkedIn
                  </span>
                </a>
              </div>

              <div className="mr-4">
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
                    <img
                      src="./images/icons/github.svg"
                      alt=""
                      width="24px"
                      height="24px"
                      className="mr-1"
                    />
                    GitHub
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className=" md:bottom-56  max-w-xs md:max-w-sm"
          onClick={() => window.scroll(0, 0)}
        >
          <picture>
            <source
              srcSet="./images/rocket-320.webp 320w, ./images/rocket.webp 768w"
              type="image/webp"
            />
            <source
              srcSet="./images/rocket.png"
              sizes="(min-width: 768px) 50vw, 100vw"
              type="image/png"
            />
            <img
              width="500px"
              height="500px"
              loading="lazy"
              alt="red rocket flying"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Contact;
