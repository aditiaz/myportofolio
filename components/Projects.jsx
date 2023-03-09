import React from "react";
import ProjectItem from "./ProjectItem";

import propertyImg from "../public/assets/projects/portHousy.png";
import onlineCinemaImg from "../public/assets/projects/canvaCinema.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Projects</p>
        <h2 className="py-4">What &apos;ve built</h2>
        <div className="grid md:grid-cols-2 gap-8 ">
          <ProjectItem title="Housy" backgroundImg={propertyImg} projectUrl="/housy" />
          <ProjectItem
            title="Online Cinema"
            backgroundImg={onlineCinemaImg}
            projectUrl="/onlineCinema"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
