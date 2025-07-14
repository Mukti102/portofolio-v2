import { Carousel } from "flowbite-react";
import Markdown from "markdown-to-jsx";
import { RxArrowTopRight } from "react-icons/rx";
import { GrGithub } from "react-icons/gr";
import fs from "fs";
import path from "path";
import React from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Caraosel from "@/components/ui/Caraosel";
import Link from "next/link";
import Header from "@/components/ui/Header";

interface ProjectPageProps {
  params: { slug: string };
}


const ProjectPage: React.FC<ProjectPageProps> = async ({ params }) => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative  text-white">
        <Header
          tag="Detail Projects"
          title="Project"
          subtitle=""
          gradient="
                bg-gradient-to-r from-rose-400 to-pink-500
                  
                  "
        />
      </div>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-1 sm:px-6 lg:px-4 py-0">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Main Content */}
          <main className="lg:col-span-2 space-y-8">
            {/* Project Gallery */}
            <div className="bg-gradient-dark glow rounded-xl px-5 shadow-xl md:p-5 border border-slate-500">
              {/* <Caraosel project={project} /> */}
            </div>

            {/* Action Buttons */}
            {/* <div className="flex flex-wrap gap-4">
              <Button
                href={String(project?.link)}
                props="bg-glass text-primary hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                icon={<RxArrowTopRight className="w-5 h-5" />}
              >
                Live Demo
              </Button>
              <Button
                href={String(project?.github)}
                props="bg-glass text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                icon={<GrGithub className="w-5 h-5" />}
              >
                Source Code
              </Button>
            </div> */}

            {/* Project Description */}
            {/* <div className="bg-gradient-dark rounded-2xl glow p-8 border border-slate-600">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-200 mb-2">
                  About This Project
                </h2>
                <div className="w-16 h-1 bg-primary rounded-full"></div>
              </div>
              <article className="prose prose-slate prose-ul:text-slate-200 max-w-none prose-headings:text-slate-200 prose-p:text-slate-200 prose-p:leading-relaxed prose-a:text-purple-600 prose-a:no-underline hover:prose-a:text-purple-700 prose-code:bg-slate-100 prose-code:text-purple-600 prose-code:px-2 prose-code:py-1 prose-code:rounded">
                <Markdown>{content}</Markdown>
              </article>
            </div> */}
          </main>
        </div>
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  // return Projects.map((project) => ({
  //   slug: project.description,
  // }));
}

export default ProjectPage;
