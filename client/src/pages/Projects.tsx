import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

async function fetchProjects() {
  const res = await fetch("/api/projects");
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}

export default function Projects() {
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  if (isLoading) {
    return <div className="container mx-auto px-4 py-20 text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map((project: any, index: number) => (
          <motion.div
            key={project._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border border-border rounded-lg p-6 hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies?.map((tech: string) => (
                <span key={tech} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-3">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-1 text-sm hover:text-primary transition">
                  <Github className="w-4 h-4" /> Code
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-1 text-sm hover:text-primary transition">
                  <ExternalLink className="w-4 h-4" /> Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
