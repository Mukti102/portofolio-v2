// app/projects/[slug]/page.tsx        ← contoh di App Router
"use client";

import React, { useEffect, useState } from "react";
import { RxArrowTopRight } from "react-icons/rx";
import { GrGithub } from "react-icons/gr";
import Header from "@/components/ui/Header";
import Loading from "@/components/ui/Loading";
import Caraosel from "@/components/ui/Caraosel";
import Button from "@/components/ui/Button";
import { Project } from "@/types/types";
import { api } from "@/lib/api";
import { stripHtmlAndDecode } from "@/utils/cn";
import Markdown from "markdown-to-jsx";

interface ProjectPageProps {
  params: { slug: string };
}

const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {
  const { slug } = params; // ✅ 1. pakai param slug

  const [project, setProject] = useState<any | null>(null); // ✅ 2. satu project
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /* -------------------------------------------------- */
  /* GET DATA                                           */
  /* -------------------------------------------------- */
  useEffect(() => {
    async function fetchProject() {
      try {
        const { data } = await api.get<Project>(`/projects/${slug}`);
        setProject(data);
      } catch (err: any) {
        setError(err.message ?? "Gagal memuat data");
      } finally {
        setLoading(false);
      }
    }
    fetchProject();
  }, [slug]);
  /* -------------------------------------------------- */

  if (loading) return <Loading />;
  if (error) return <p className="py-10 text-center text-red-500">{error}</p>;
  if (!project)
    return <p className="py-10 text-center">Project tidak ditemukan.</p>;

  console.log(project);

  /* -------------------------------------------------- */
  /* VIEW                                               */
  /* -------------------------------------------------- */
  return (
    <div className="min-h-screen">
      <Header
        tag="Detail Projects"
        title={"Project"}
        subtitle={project?.title ?? ""}
        gradient="bg-gradient-to-r from-rose-400 to-pink-500"
      />

      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Gallery */}
        <section className="rounded-xl border border-slate-500 bg-gradient-dark p-5 shadow-xl">
          <Caraosel slider={project?.image_slider ?? []} />
        </section>

        {/* Tombol aksi */}
        <div className="mt-6 flex flex-wrap gap-4">
          {project?.demo && (
            <Button
              href={project?.demo}
              props="bg-glass text-primary hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
              icon={<RxArrowTopRight className="h-5 w-5" />}
            >
              Live Demo
            </Button>
          )}
          {project.github && (
            <Button
              href={project.github}
              props="bg-glass text-white hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
              icon={<GrGithub className="h-5 w-5" />}
            >
              Source Code
            </Button>
          )}
        </div>

        {/* Deskripsi */}
        <article className="prose prose-h1:text-white prose-h2:text-white prose-h3:text-white prose-p:text-white prose-li:text-white prose-a:text-white prose-strong:text-white prose-blockquote:text-white prose-code:text-white mt-8 max-w-none rounded-2xl border border-slate-600 bg-gradient-dark p-5">
          <Markdown>{project?.description ?? ""}</Markdown>
        </article>
      </div>
    </div>
  );
};

export default ProjectPage;
