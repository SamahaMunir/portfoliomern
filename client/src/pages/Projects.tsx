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

  // Featured project (FYP)
  const fluentiFYP = {
    _id: "fluenti-fyp",
    title: "Fluenti - AI Speech Therapy Platform",
    description: "Comprehensive AI-powered platform combining interactive story-building games for speech therapy with emotional support sessions. Serves both children and adults using cutting-edge AI technology for personalized therapeutic experiences.",
    technologies: ["React", "Node.js", "MongoDB", "Python Flask", "Google Gemini", "OpenAI", "Groq", "TypeScript", "WebSocket"],
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    githubUrl: "https://github.com/FYPFluenti/Fluenti",
    liveUrl: "https://fluenti-app.onrender.com/",
    featured: true,
  };

  if (isLoading) {
    return <div className="container mx-auto px-4 py-20 text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      
      {/* Featured Project */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="relative border-2 border-primary rounded-lg p-8 glass">
          <div className="absolute -top-4 left-8 bg-background px-4 py-1 rounded-full border border-primary">
            <span className="text-sm font-semibold text-primary">⭐ Featured Project - Final Year Project</span>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src={fluentiFYP.imageUrl} 
                alt={fluentiFYP.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 gradient-text">{fluentiFYP.title}</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">{fluentiFYP.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {fluentiFYP.technologies.map((tech: string) => (
                  <span key={tech} className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={fluentiFYP.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg font-medium transition-all"
                >
                  <Github className="w-5 h-5" /> View Code
                </a>
                <a 
                  href={fluentiFYP.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all"
                >
                  <ExternalLink className="w-5 h-5" /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Other Projects */}
      <h2 className="text-2xl font-bold mb-6">Other Projects</h2>
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
