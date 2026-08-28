import { motion } from "framer-motion";
import { ExternalLink, Github, Star, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";

export default function Projects() {
  // wouter does not scroll to hash targets on navigation, so do it here.
  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id) return;

    // Let the entrance animations lay out before measuring.
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Flagship production project
  const intikhab = {
    _id: "intikhab-e-zauj",
    title: "Intikhab-e-Zauj",
    subtitle: "Falah Khandan Center — Guided Matrimonial Platform",
    description:
      "A production, staff-mediated matrimonial platform built end-to-end for Falah Khandan Center. Combines a transparent rule-based matching engine (hard filters plus weighted 100-point scoring) with a RAG-powered AI insights layer that assists staff without replacing human judgment. Privacy is enforced at the API: server-side photo access control with per-consent reveal, plus on-device face verification on upload.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "RAG", "Multi-LLM", "Cloudinary", "Vercel", "Render"],
    outcome:
      "Live in production — digitized 900+ profiles, replacing a manual, paper-based matchmaking workflow.",
    imageUrl: "/projects/intikhab.jpg",
    liveUrl: "https://intikhab-e-zauj.org",
  };

  // Featured project (FYP)
  const fluentiFYP = {
    _id: "fluenti-fyp",
    title: "Fluenti - AI Speech Therapy Platform",
    description: "Comprehensive AI-powered platform combining interactive story-building games for speech therapy with emotional support sessions. Serves both children and adults using cutting-edge AI technology for personalized therapeutic experiences.",
    technologies: ["React", "Node.js", "MongoDB", "Python Flask", "Google Gemini", "OpenAI", "Groq", "TypeScript", "WebSocket"],
    outcome:
      "[PLACEHOLDER — add a real outcome, e.g. 'Final-year project serving story-based therapy for children and adults.' Replace with a true metric if available.]",
    imageUrl: "/projects/fluenti img.PNG",
    githubUrl: "https://github.com/FYPFluenti/Fluenti",
    liveUrl: "https://fluenti-app.onrender.com/",
    featured: true,
  };

  // Your other notable projects
  const otherProjects = [
     {
      _id: "ecomate",
      title: "EcoMate",
      description: "Environmental awareness application tracking carbon footprint, sustainability metrics, and eco-friendly habits with data visualization and personalized recommendations.",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      githubUrl: "https://github.com/SamahaMunir/EcoMate",
      liveUrl: null,
      imageUrl: "/projects/ecomate.PNG",
      stats: "Green Tech",
    },
    {
      _id: "portfolio-mern",
      title: "Personal Portfolio",
      description: "Modern portfolio website built with MERN stack featuring smooth animations, responsive design, and dark mode showcasing professional experience and technical skills.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/SamahaMunir/portfoliomern",
      liveUrl: "https://samahamunir.com",
      imageUrl: "/projects/portfolio.png",
      stats: "Full Stack",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Gradient Background - Same as Experience */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 -z-10" />

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            {/* Empty space for consistency */}
            <div className="h-10" />

            {/* Title */}
            <div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                <span className="gradient-text">My Projects</span>
              </h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                Showcasing real projects I've built and deployed, from AI-powered healthcare platforms to full-stack web applications
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Flagship Project */}
      <div id={intikhab._id} className="container mx-auto px-4 pb-20 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative border-2 border-[hsl(160,84%,39%)] rounded-lg p-8 glass">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <a
                href={intikhab.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group/shot"
              >
                <div className="relative overflow-hidden rounded-lg border border-border">
                  <img
                    src={intikhab.imageUrl}
                    alt={`${intikhab.title} landing page`}
                    loading="lazy"
                    className="w-full h-64 object-cover object-top group-hover/shot:scale-105 transition-transform duration-500"
                  />
                </div>
              </a>

              <div>
                <span className="text-xs font-semibold tracking-[0.2em] text-[hsl(160,84%,39%)]">
                  FLAGSHIP PROJECT
                </span>

                <h2 className="text-3xl font-bold mt-2 mb-1 gradient-text">{intikhab.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">{intikhab.subtitle}</p>

                <p className="text-muted-foreground mb-3 leading-relaxed">{intikhab.description}</p>

                <p className="text-sm italic text-muted-foreground mb-6 leading-relaxed">{intikhab.outcome}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {intikhab.technologies.map((tech: string) => (
                    <span key={tech} className="text-xs bg-[hsl(160,84%,39%)]/20 text-[hsl(160,84%,39%)] px-3 py-1 rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(64, 217, 164, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    href={intikhab.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all"
                  >
                    <ExternalLink className="w-5 h-5" /> View Live
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

     {/* Featured Project */}
<div className="container mx-auto px-4 py-20">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="max-w-6xl mx-auto"
  >
    <div className="relative border-2 border-[hsl(160,84%,39%)] rounded-lg p-8 glass">
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
          <p className="text-muted-foreground mb-3 leading-relaxed">{fluentiFYP.description}</p>

          <p className="text-sm italic text-muted-foreground mb-6 leading-relaxed">{fluentiFYP.outcome}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {fluentiFYP.technologies.map((tech: string) => (
              <span key={tech} className="text-xs bg-[hsl(160,84%,39%)]/20 text-[hsl(160,84%,39%)] px-3 py-1 rounded-full font-medium">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(64, 217, 164, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href={fluentiFYP.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-secondary/50 hover:bg-secondary/70 border border-border rounded-lg font-medium transition-all"
            >
              <Github className="w-5 h-5" /> View Code
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(64, 217, 164, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              href={fluentiFYP.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all"
            >
              <ExternalLink className="w-5 h-5" /> Live Demo
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
</div>

      {/* Other Projects Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Other Projects
          </h2>
          <p className="text-center text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Additional work from academic projects and freelance development
          </p>
        </motion.div>

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
                  <div className="relative overflow-hidden rounded-xl border-2 border-border group-hover:border-[hsl(160,84%,39%)]/50 transition-all duration-300">
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
                    <h3 className="text-2xl md:text-3xl font-bold group-hover/title:text-[hsl(160,84%,39%)] transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover/title:text-[hsl(160,84%,39%)] transition-colors" />
                  </a>

                  {/* Description */}
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

                  {/* Technologies - EMERALD */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.technologies?.map((tech: string) => (
                      <span 
                        key={tech} 
                        className="px-4 py-1.5 text-sm font-medium bg-[hsl(160,84%,39%)]/10 text-[hsl(160,84%,39%)] rounded-full border border-[hsl(160,84%,39%)]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    {project.githubUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(64, 217, 164, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-secondary/50 hover:bg-secondary/70 border border-border rounded-lg font-medium transition-all"
                      >
                        <Github className="w-5 h-5" /> View Code
                      </motion.a>
                    )}

                    {project.liveUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(64, 217, 164, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all"
                      >
                        <ExternalLink className="w-5 h-5" /> Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}