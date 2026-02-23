import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star, ArrowUpRight } from "lucide-react";

async function fetchProjects() {
  const res = await fetch("/api/projects");
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}

export default function Projects() {
  const { data: dbProjects, isLoading, isError } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    retry: 1,
    staleTime: 5000,
  });

  // Featured project (FYP)
  const fluentiFYP = {
    _id: "fluenti-fyp",
    title: "Fluenti - AI Speech Therapy Platform",
    description: "Comprehensive AI-powered platform combining interactive story-building games for speech therapy with emotional support sessions. Serves both children and adults using cutting-edge AI technology for personalized therapeutic experiences.",
    technologies: ["React", "Node.js", "MongoDB", "Python Flask", "Google Gemini", "OpenAI", "Groq", "TypeScript", "WebSocket"],
    imageUrl: "/projects/fluenti img.PNG",
    githubUrl: "https://github.com/FYPFluenti/Fluenti",
    liveUrl: "https://fluenti-app.onrender.com/",
    featured: true,
  };

  // Your other notable projects
  const otherProjects = [
    {
      _id: "portfolio-mern",
      title: "Personal Portfolio",
      description: "Modern portfolio website built with MERN stack featuring smooth animations, responsive design, and dark mode showcasing professional experience and technical skills.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/SamahaMunir/portfoliomern",
      liveUrl: null,
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      stats: "Full Stack",
    },
    {
      _id: "web-encryption-tool",
      title: "Web Text Encryption Tool",
      description: "Secure text encryption and decryption tool with multiple cipher algorithms including AES encryption, password protection, and secure key generation for data privacy.",
      technologies: ["JavaScript", "CryptoJS", "HTML5", "CSS3"],
      githubUrl: "https://github.com/SamahaMunir/web-text-encryption-tool",
      liveUrl: null,
      imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop",
      stats: "Security",
    },
    {
      _id: "webcrawler-angular",
      title: "Web Crawler",
      description: "Intelligent web scraping application built with Angular that extracts and analyzes web data, parses HTML content, and provides structured data output for analysis.",
      technologies: ["Angular", "TypeScript", "Node.js", "Cheerio"],
      githubUrl: "https://github.com/SamahaMunir/WebCrawler-Angular",
      liveUrl: null,
      imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
      stats: "Data Scraping",
    },
    {
      _id: "ecommerce-platform",
      title: "E-Commerce Store",
      description: "Full-featured online store with product catalog, shopping cart, payment gateway integration, order management, and admin dashboard with real-time inventory tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      githubUrl: "https://github.com/MehakYahya/EcommerceStore",
      liveUrl: null,
      imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      stats: "Collaborative",
    },
    {
      _id: "ecomate",
      title: "EcoMate",
      description: "Environmental awareness application tracking carbon footprint, sustainability metrics, and eco-friendly habits with data visualization and personalized recommendations.",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      githubUrl: "https://github.com/SamahaMunir/EcoMate",
      liveUrl: null,
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
      stats: "Green Tech",
    },
  ];

  // Don't block rendering just for database projects
  // if (isLoading) {
  //   return <div className="container mx-auto px-4 py-20 text-center">Loading...</div>;
  // }

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      
      {/* Featured Project */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20"
      >
        <div className="relative border-2 border-primary rounded-lg p-8 glass">
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

      {/* Other Projects - Minimal Design Inspired by Image */}
      <div className="space-y-16 max-w-5xl mx-auto">
        {otherProjects.map((project: any, index: number) => (
          <motion.div
            key={project._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
              {/* Project Image */}
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden rounded-xl border-2 border-border group-hover:border-primary/50 transition-all duration-300">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </a>

              {/* Project Content */}
              <div className="space-y-4">
                {/* Title with Link */}
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 group/title"
                >
                  <h3 className="text-2xl md:text-3xl font-bold group-hover/title:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover/title:text-primary transition-colors" />
                </a>

                {/* Description - One Line */}
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Stats Badge */}
                {project.stats && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-medium">{project.stats}</span>
                  </div>
                )}

                {/* Technologies - Cyan Pills */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.technologies?.map((tech: string) => (
                    <span 
                      key={tech} 
                      className="px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Database projects if any */}
        {dbProjects?.map((project: any, index: number) => (
          <motion.div
            key={project._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (otherProjects.length + index) * 0.1 }}
            className="group"
          >
            <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
              <div className="relative overflow-hidden rounded-xl border-2 border-border">
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/5" />
              </div>

              <div className="space-y-4">
                <a 
                  href={project.githubUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 group/title"
                >
                  <h3 className="text-2xl md:text-3xl font-bold group-hover/title:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover/title:text-primary transition-colors" />
                </a>

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  {project.technologies?.map((tech: string) => (
                    <span 
                      key={tech} 
                      className="px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}