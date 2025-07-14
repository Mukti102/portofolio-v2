"use client";

import React, { useEffect, useState } from "react";
import CardProjects from "@/components/pages/Projects/cards";
import Header from "@/components/ui/Header";
import { api } from "@/lib/api"; // pastikan foldernya /lib, bukan /Lib
import { Project } from "@/types/types";
import Loading from "@/components/ui/Loading";


export default function ProjectPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProjects() {
      try {
        const { data } = await api.get<Project[]>("/projects");
        setProjects(data);
      } catch (err: any) {
        setError(err.message ?? "Gagal memuat data");
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  if (loading) {
    return <Loading/>
  }

  if (error) {
    return <p className="text-center py-10 text-red-500">{error}</p>;
  }

  return (
    <div className="py-0">
      <Header
        tag="Experience"
        title="Projects"
        subtitle="Excellence"
        gradient="bg-gradient-to-r from-blue-400 to-cyan-500"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <CardProjects key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
