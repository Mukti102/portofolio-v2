import ProjectDetail from "@/components/pages/Projects/ProjectDetail";
import { api } from "@/lib/api";

export async function generateStaticParams() {
  const { data } = await api.get("/projects");
  return data.map((p: any) => ({ slug: p.slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { data: project } = await api.get(`/projects/${params.slug}`);

  // Jika project tak ditemukan, lempar notFound()
  if (!project) { throw new Error("Not found"); }

  return <ProjectDetail project={project} />; // kirim prop ke komponen client
}
