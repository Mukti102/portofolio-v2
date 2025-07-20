import React, { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaTiktok,
} from "react-icons/fa";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import Marquee from "react-fast-marquee";
import CardProjects from "../Projects/cards";
import { Project, TechStack } from "@/types/types";
import { api } from "@/lib/api";
import Loading from "@/components/ui/Loading";

function Hero() {
  /* ------------------------ AOS init ------------------------ */

  /* --------------------- local component state -------------- */
  const [projects, setProjects] = useState<Project[]>([]);
  const [techs, setTechs] = useState<TechStack[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /* ---------------------------- fetch ----------------------- */
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const [projectsRes, techsRes] = await Promise.all([
          api.get<Project[]>("/last-projects"),
          api.get<TechStack[]>("/techstack"),
        ]);

        setProjects(projectsRes.data);
        setTechs(techsRes.data);
      } catch (err: any) {
        setError(err.message ?? "Gagal memuat data");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  /* ---------- pilih skill list: dari API atau fallback ------- */
  const skillList = techs.length ? techs : [];

  /* --------------------------- UI --------------------------- */
  if (loading) return <Loading/>;
  if (error)   return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <>
      {/* hero */}
      <div className="grid md:grid-cols-2 gap-6 p-5 md:p-8 rounded-xl w-full glow bg-gradient-dark z-50">
        {/* Text Section */}
        <div className="space-y-4">
          <h1 className="font-black text-transparent bg-gradient-to-br from-blue-500 via-cyan-500 to-cyan-600 bg-clip-text text-3xl md:text-5xl lg:text-6xl">
            Abdul Mukti
          </h1>

          <span className="block text-lg md:text-xl font-semibold text-gray-200">
            And I am{" "}
            <TypeAnimation
              sequence={[
                "Student", 1000,
                "FrontEnd Developer", 1000,
                "Web Developer", 1000,
                "Graphic Designer", 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>

          <p className="text-gray-300 font-medium leading-relaxed max-w-xl">
            I am an expert in <span className="text-primary">Front‑End Development</span> dan{" "}
            <span className="text-primary">Full‑stack Web Development</span>.
            Mari kolaborasi agar proyek Anda memperoleh hasil terbaik.
          </p>

          <a
            href="/cv/abdul-mukti.pdf"  /* ganti dengan lokasi CV sebenarnya */
            download
            className="inline-block bg-primary px-4 py-3 text-white rounded-md text-sm mt-4"
          >
            Download CV
          </a>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex flex-wrap gap-4 justify-end">
          {[
            { icon: <FaGithub />, link: "https://github.com/Mukti102" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/mukti_040/" },
            { icon: <FaTiktok />, link: "https://www.tiktok.com/@mkt_code" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/abdul-mukti-41b876264/" },
          ].map(({ icon, link }, idx) => (
            <a
              key={idx}
              href={link}
              target="_blank"
              className="bg-glass h-max text-gray-200 p-2 text-xl rounded-md hover:bg-white/10 transition"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* tech stack */}
      <section className="py-10 w-[60rem]">
        <h2 className="text-2xl font-bold text-white mb-4 text-center md:text-left">
          Skills
        </h2>

        {/* Marquee #1 */}
        <div className="overflow-hidden  px-2 md:px-4">
          <Marquee speed={30} className="gap-6 py-2">
            {skillList.map((item, i) => (
              <button
                key={i}
                className="flex items-center gap-2 min-w-[90px] hover:scale-105 transition bg-glass px-3 py-2 rounded-full mr-3"
              >
                <img src={item.icon} alt={item.name} className="w-4 h-4" />
                <span className="text-sm text-white font-medium">
                  {item.name}
                </span>
              </button>
            ))}
          </Marquee>
        </div>

        {/* Marquee #2 (reverse) */}
        <div className="overflow-hidden px-2 md:px-4 mt-2">
          <Marquee direction="right" speed={30} className="gap-6 py-2">
            {skillList.map((item, i) => (
              <button
                key={i}
                className="flex items-center gap-2 min-w-[90px] hover:scale-105 transition bg-glass px-3 py-2 rounded-full mr-3"
              >
                <img src={item.icon} alt={item.name} className="w-4 h-4" />
                <span className="text-sm text-white font-medium">
                  {item.name}
                </span>
              </button>
            ))}
          </Marquee>
        </div>
      </section>

      {/* latest projects */}
      <section className="py-10">
        <header className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Latest Projects</h2>
          <p className="text-gray-400">Recent work and contributions</p>
        </header>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <CardProjects key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Hero;
