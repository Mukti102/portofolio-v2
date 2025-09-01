// app/projects/[slug]/page.tsx
import ProjectDetail from "@/components/pages/Projects/ProjectDetail";
import { api } from "@/lib/api";
import { notFound } from "next/navigation";

// Pre-generate static params untuk semua slug project
export async function generateStaticParams() {
  try {
    const { data } = await api.get("/projects");
    return data.map((p: any) => ({
      slug: p.slug,
    }));
  } catch (error) {
    console.error("Error fetching projects in generateStaticParams:", error);
    return [];
  }
}

// Page component
export default async function Page({ params }: { params: { slug: string } }) {
  try {
    const { data: project } = await api.get(`/projects/${params.slug}`);

    if (!project) {
      notFound();
    }

    return <ProjectDetail project={project} />;
  } catch (error) {
    console.error("Error fetching project:", error);
    notFound(); // jika error atau 404, arahkan ke halaman not found
  }
}
