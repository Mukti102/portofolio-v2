"use client"
import Button from "@/components/ui/Button";
import Caraosel from "@/components/ui/Caraosel";
import Header from "@/components/ui/Header";
import Loading from "@/components/ui/Loading";
import { Project } from "@/types/types";
import Markdown from "markdown-to-jsx";
import { useState } from "react";
import { GrGithub } from "react-icons/gr";
import { RxArrowTopRight } from "react-icons/rx";

export default function ProjectDetail({ project }: { project: any }) {
  // optional: kalau mau refresh data via SWR/ useEffect
  const [data, setData] = useState(project);

  if (!project)
    return <p className="py-10 text-center">Project tidak ditemukan.</p>;

  return (
    <div className="min-h-screen">
      <Header
        tag="Detail Projects"
        title={"Project"}
        subtitle={data?.title ?? ""}
        gradient="bg-gradient-to-r from-rose-400 to-pink-500"
      />

      <div className="mx-auto max-w-7xl px-1 md:px-4 py-8">
        {/* Gallery */}
          <Caraosel slider={data?.image_slider ?? []} />

        {/* Tombol aksi */}
        <div className="mt-6 flex flex-wrap gap-4">
          {data?.demo && (
            <Button
              href={data?.demo}
              props="bg-glass text-primary hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
              icon={<RxArrowTopRight className="h-5 w-5" />}
            >
              Live Demo
            </Button>
          )}
          {data.github && (
            <Button
              href={data.github}
              props="bg-glass text-white hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
              icon={<GrGithub className="h-5 w-5" />}
            >
              Source Code
            </Button>
          )}
        </div>

        {/* Deskripsi */}
        <article className="prose prose-h1:text-white prose-h2:text-white prose-h3:text-white prose-p:text-white prose-li:text-white prose-a:text-white prose-strong:text-white prose-blockquote:text-white prose-code:text-white mt-8 max-w-none rounded-2xl border border-slate-600 bg-gradient-dark p-5">
          <Markdown>{data?.description ?? ""}</Markdown>
        </article>
      </div>
    </div>
  );
}
