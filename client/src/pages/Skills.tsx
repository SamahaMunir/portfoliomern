import { motion } from "framer-motion";
import { Code2, Database, Server, Wrench, Brain, Zap } from "lucide-react";
import { Lightbulb, Users, MessageSquare, Clock, GitBranch, Eye, FileText, Handshake } from "lucide-react";
export default function Skills() {
  
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "hsl(160, 84%, 39%)",
      skills: [
        { name: "React.js", level: 95, experience: "3+ years" },
        { name: "TypeScript", level: 90, experience: "2+ years" },
        { name: "JavaScript (ES6+)", level: 95, experience: "3+ years" },
        { name: "HTML5 & CSS3", level: 95, experience: "3+ years" },
        { name: "Tailwind CSS", level: 90, experience: "2+ years" },
        { name: "Framer Motion", level: 85, experience: "1+ year" },
        { name: "Angular", level: 75, experience: "1+ year" },
      ],
    },
    {
      icon: Server,
      title: "Backend Development",
      color: "hsl(221, 83%, 53%)",
      skills: [
        { name: "Node.js", level: 90, experience: "3+ years" },
        { name: "Express.js", level: 90, experience: "3+ years" },
        { name: "Python", level: 80, experience: "2+ years" },
        { name: "Flask", level: 75, experience: "1+ year" },
        { name: "REST APIs", level: 95, experience: "3+ years" },
        { name: "GraphQL", level: 70, experience: "1+ year" },
      ],
    },
    {
      icon: Database,
      title: "Database & Storage",
      color: "hsl(142, 71%, 45%)",
      skills: [
        { name: "MongoDB", level: 90, experience: "3+ years" },
        { name: "MySQL", level: 80, experience: "2+ years" },
        { name: "PostgreSQL", level: 75, experience: "1+ year" },
        { name: "Redis", level: 70, experience: "1+ year" },
      ],
    },
    {
      icon: Brain,
      title: "AI & Integration",
      color: "hsl(280, 67%, 60%)",
      skills: [
        { name: "Google Gemini AI", level: 85, experience: "1+ year" },
        { name: "OpenAI API", level: 85, experience: "1+ year" },
        { name: "Groq LLM", level: 80, experience: "1+ year" },
        { name: "AI Prompt Engineering", level: 85, experience: "1+ year" },
      ],
    },
    {
      icon: Wrench,
      title: "Tools & DevOps",
      color: "hsl(24, 95%, 53%)",
      skills: [
        { name: "Git & GitHub", level: 95, experience: "3+ years" },
        { name: "Docker", level: 75, experience: "1+ year" },
        { name: "Postman", level: 90, experience: "2+ years" },
        { name: "VS Code", level: 95, experience: "3+ years" },
        { name: "Vercel/Render", level: 85, experience: "2+ years" },
      ],
    },
    {
      icon: Zap,
      title: "Other Technologies",
      color: "hsl(48, 96%, 53%)",
      skills: [
        { name: "WebSocket", level: 80, experience: "1+ year" },
        { name: "JWT Authentication", level: 90, experience: "2+ years" },
        { name: "Stripe API", level: 75, experience: "1+ year" },
        { name: "Chart.js", level: 80, experience: "1+ year" },
        { name: "CryptoJS", level: 75, experience: "1+ year" },
        { name: "Bootstrap", level: 85, experience: "2+ years" },
        { name: "Material-UI", level: 80, experience: "1+ year" },
      ],
    },
  ];

  

const softSkills = [
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Team Collaboration", icon: Users },
  { name: "Communication", icon: MessageSquare },
  { name: "Time Management", icon: Clock },
  { name: "Agile Methodology", icon: GitBranch },
  { name: "Code Review", icon: Eye },
  { name: "Technical Documentation", icon: FileText },
  { name: "Client Relations", icon: Handshake },
];

 const certifications = [
  {
    title: "Bachelor of Science in Computer Science",
    issuer: "Bahria University",
    date: "2022 - 2026",
  },
  {
    title: "MERN Stack Development",
    issuer: "Self-taught through projects",
    date: "2021 - Present",
  },
  {
    title: "AI Integration Specialist",
    issuer: "Fluenti FYP Project",
    date: "2024",
  },
];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Gradient Background */}
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
                <span className="gradient-text">Skills & Expertise</span>
              </h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                Comprehensive technical skills gained through real-world projects, freelance work, and academic excellence
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technical Skills - Minimal Design */}
<div className="container mx-auto px-4 py-20">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="mb-16"
  >
    <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
      Technical Skills
    </h2>
    <p className="text-center text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
      Technologies I use to build modern, scalable applications
    </p>
  </motion.div>

  <div className="max-w-5xl mx-auto space-y-20">
    {skillCategories.map((category, categoryIndex) => (
      <motion.div
        key={category.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: categoryIndex * 0.1 }}
        className="space-y-8"
      >
        {/* Category Header */}
        <div className="flex items-center gap-4">
          <div className="p-3 glass rounded-lg border border-border">
            <category.icon className="w-6 h-6 text-muted-foreground" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">{category.title}</h3>
            <p className="text-sm text-muted-foreground">{category.skills.length} technologies</p>
          </div>
        </div>

        {/* Skills List */}
        <div className="space-y-6 pl-0 md:pl-16">
          {category.skills.map((skill, skillIndex) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
              className="group"
            >
              {/* Skill Info */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-base md:text-lg font-medium group-hover:text-[hsl(160,84%,39%)] transition-colors">
                  {skill.name}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground">
                    {skill.experience}
                  </span>
                  <span className="text-sm font-semibold text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Minimal Progress Bar */}
              <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1, 
                    delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    ease: "easeOut"
                  }}
                  className="h-full bg-[hsl(160,84%,39%)] rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider Line */}
        {categoryIndex < skillCategories.length - 1 && (
          <div className="w-full h-px bg-border mt-12" />
        )}
      </motion.div>
    ))}
  </div>
</div>
     {/* Soft Skills */}
<div className="container mx-auto px-4 py-20">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="mb-16"
  >
    <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
      Soft Skills
    </h2>
    <p className="text-center text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
      Professional skills that drive successful project delivery
    </p>
  </motion.div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
    {softSkills.map((skill, index) => (
      <motion.div
        key={skill.name}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
        whileHover={{ 
          y: -5, 
          boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)" 
        }}
        className="glass rounded-lg p-6 text-center border border-border hover:border-[hsl(160,84%,39%)]/30 transition-all cursor-default"
      >
        <p className="text-sm md:text-base font-medium">{skill.name}</p>
      </motion.div>
    ))}
  </div>
</div>
     {/* Certifications & Education */}
<div className="container mx-auto px-4 py-20">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="mb-16"
  >
    <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
      Education & Achievements
    </h2>
    <p className="text-center text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
      Academic background and professional development
    </p>
  </motion.div>

  <div className="max-w-4xl mx-auto space-y-6">
    {certifications.map((cert, index) => (
      <motion.div
        key={cert.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ 
          y: -5,
          boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)"
        }}
        className="glass rounded-lg p-6 border border-border hover:border-[hsl(160,84%,39%)]/50 transition-all"
      >
        <div className="flex items-start gap-4">
          <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-bold mb-2">{cert.title}</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-1">{cert.issuer}</p>
            <p className="text-xs md:text-sm text-muted-foreground">{cert.date}</p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</div>
    </div>
  );
}

     
       
