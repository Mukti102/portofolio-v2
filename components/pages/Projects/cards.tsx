"use client";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { teachStack } from "@/data/projects/projects";
import { getColorClass, stripHtmlAndDecode} from "@/utils/cn";
import { BASE_URL_IMAGE } from "@/lib/api";

function CardProjects({ project }: { project: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      key={project.id}
      className="bg-gradient-to-br pb-14 relative from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg overflow-hidden hover:transform  transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
    >
      {/* Project Image */}
      <div className="relative h-[10rem] overflow-hidden">
        <Image
          alt={project.name}
          width={400}
          height={256}
          src={`${BASE_URL_IMAGE}${project?.thumbnail}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Project Content */}
      <div className="p-3">
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-gray-400 text-xs leading-relaxed mb-4">
          {stripHtmlAndDecode(project.description || "", 100)}...
        </p>
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project?.techstack?.map((tech, index) => (
            <span
              key={index}
              className={`px-2 py-1 bg-glass text-xs font-medium rounded-full border text-primary`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex absolute bottom-4 right-4 justify-end 9t-4">
          <Link
            href={`/Projects/${project.description}`}
            className="bg px-3 bg-primary text-white rounded-lg mt-5 text-sm px-3 py-2"
          >
            Preview
          </Link>
        </div>{" "}
      </div>
    </div>
  );
}

export default CardProjects;
