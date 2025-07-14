"use client";
import React from "react";
import ai from "@/public/assets/ai.png";

import { Award, Code, Database, Globe, Users, Zap } from "lucide-react";
import Image from "next/image";
import GithubCalender from "@/components/ui/GithubCalender";
import TiktokProfile from "@/components/ui/TiktokProfile";

function About() {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      desc: "React, Next.js, TypeScript",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      desc: "Node.js, Python, PostgreSQL",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Solutions",
      desc: "Full-stack applications",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      desc: "Optimized & scalable code",
    },
  ];

  const certificates = [
    {
      title: "Full Stack Web Developer",
      issuer: "Tech Academy",
      year: "2024",
      color: "from-pink-500 to-purple-600",
    },
    {
      title: "React Advanced Certification",
      issuer: "React Institute",
      year: "2024",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Cloud Architecture",
      issuer: "AWS Academy",
      year: "2023",
      color: "from-green-500 to-teal-600",
    },
    {
      title: "UI/UX Design Professional",
      issuer: "Design School",
      year: "2023",
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-6 py-6 rounded-2xl bg-gradient-dark">
        <div className="flex-1 text-white mb-0 md:mb-0">
          <h1 className="text-2xl md:text-4xl font-black mb-3 leading-tight">
            I'm Ready To Be Hired For Your
            <span className="block text-primary">Next Project</span>
          </h1>
          <p className="text-sm md:text-base mb-4 md:mb-8 text-purple-100 leading-relaxed">
            I am an expert in Front End Development and Fullstack Web Developer,
            let's work together so that your project has good quality and good
            results.
          </p>
          <div className="flex items-center gap-3 mb-8">
            <div className="md:w-10 md:h-10 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Users className="md:w-6 md:h-6 w-4 h-4 text-white" />
            </div>
            <span className="md:text-base text-sm">@jinjjan_code</span>
          </div>
        </div>

        {/* 3D Character */}
        <div className="flex-1 w-max flex justify-center">
          <Image alt="ai" src={ai} height={300} width={300} />
        </div>
      </div>

      <div className="w-full flex justify-center  bg-[#0d1117] my-10 rounded-lg">
        <GithubCalender />
      </div>
      <div className="w-full p-7 bg-[#0d1117] my-10 rounded-xl">
        <TiktokProfile />
      </div>

      {/* About Content */}
      <div className="px-0 md:px-0 py-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-dark rounded-3xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">My Journey</h2>
              <p className="text-purple-100 leading-relaxed mb-4">
                With over 3 years of experience in web development, I specialize
                in creating modern, user-centric applications that solve
                real-world problems. My passion lies in transforming complex
                ideas into elegant, functional solutions.
              </p>
              <p className="text-purple-100 leading-relaxed">
                I believe in continuous learning and staying at the forefront of
                technology trends, ensuring that every project I work on
                leverages the latest tools and best practices.
              </p>
            </div>

            <div className="bg-gradient-dark rounded-3xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">What I Do</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <Code className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-purple-100">
                    Full Stack Development
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-purple-100">
                    Web Application Design
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center">
                    <Database className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-purple-100">Database Architecture</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-purple-100">
                    Performance Optimization
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-dark rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-white mb-4">{skill.icon}</div>
                <h3 className="text-white font-bold mb-2">{skill.title}</h3>
                <p className="text-purple-100 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
