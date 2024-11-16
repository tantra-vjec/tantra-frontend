import React from "react";
import Navbar from "../../components/navbar/Navbar";
import teamMembers from "../../data/contributors/credit";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const Credits = () => {
  return (
    <div>
      <Navbar />
      <section id="credits" className="text-[white] font-[Quicksand] h-screen">
        <div className="flex items-center justify-center min-h-screen bg-[#090E41] pt-24 pb-48">
          <div className="container max-w-7xl px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h1 className="text-gray-100 text-4xl font-bold font-mono mb-8">
                  Meet the Team
                </h1>
                <p className="text-gray-300 text-lg font-light font-mono">
                  With over 0+ years of combined experience, we've got a
                  well-seasoned team at the helm.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="w-full md:w-6/12 lg:w-4/12 pb-16 sm:mb-6 px-6 sm:px-6 lg:px-4 mx-auto"
                >
                  <div className="flex flex-col">
                    <div className="mx-auto">
                      <img
                        className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src={member.image}
                        alt={member.name}
                      />
                    </div>
                    <div className="text-center mt-6">
                      <h1 className="text-gray-100 text-xl font-bold mb-1 font-sans">
                        {member.name}
                      </h1>
                      <div className="text-gray-100 arca font-light mb-2">
                        {member.title}
                      </div>
                      <div className="flex items-center justify-center opacity-100 transition-opacity duration-300 space-x-4">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center rounded-full scale-125 h-10 w-10"
                        >
                          <LinkedInIcon
                            className="text-indigo-500"
                            fontSize="medium"
                          />
                        </a>
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center rounded-full scale-125 h-10 w-10"
                        >
                          <GitHubIcon
                            className="text-gray-100"
                            fontSize="medium"
                          />
                        </a>
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center rounded-full h-10 w-10 scale-125"
                        >
                          <InstagramIcon
                            className="text-pink-600"
                            fontSize="medium"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Credits;
