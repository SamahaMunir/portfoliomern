import { motion } from "framer-motion";
import { Code2, Database, Palette, Server, Wrench, Brain, Zap, Trophy } from "lucide-react";

export default function Skills() {
  // Your actual skills based on GitHub & LinkedIn
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
    { name: "Problem Solving", icon: "🧩" },
    { name: "Team Collaboration", icon: "🤝" },
    { name: "Communication", icon: "💬" },
    { name: "Time Management", icon: "⏰" },
    { name: "Agile Methodology", icon: "🔄" },
    { name: "Code Review", icon: "👀" },
    { name: "Technical Documentation", icon: "📝" },
    { name: "Client Relations", icon: "🤵" },
  ];

  const certifications = [
    {
      title: "Bachelor of Science in Computer Science",
      issuer: "Bahria University",
      date: "2022 - 2026",
      icon: "🎓",
    },
    {
      title: "MERN Stack Development",
      issuer: "Self-taught through projects",
      date: "2021 - Present",
      icon: "💻",
    },
    {
      title: "AI Integration Specialist",
      issuer: "Fluenti FYP Project",
      date: "2024",
      icon: "🤖",
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

      {/* Technical Skills */}
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
            Technologies I use to build scalable, modern applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="glass rounded-2xl p-8 border-2 border-border hover:border-[hsl(160,84%,39%)]/30 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <category.icon
                    className="w-6 h-6"
                    style={{ color: category.color }}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm md:text-base font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.experience}</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: category.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="glass rounded-xl p-6 text-center border-2 border-border hover:border-[hsl(160,84%,39%)]/50 transition-all cursor-default"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
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

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass rounded-2xl p-8 border-2 border-border hover:border-[hsl(160,84%,39%)]/50 transition-all text-center"
            >
              <div className="text-5xl mb-4">{cert.icon}</div>
              <h3 className="text-lg md:text-xl font-bold mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills Summary Stats */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto glass rounded-2xl p-12 border-2 border-[hsl(160,84%,39%)]/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "20+", label: "Technologies" },
              { value: "15+", label: "Projects Built" },
              { value: "3+", label: "Years Coding" },
              { value: "100%", label: "Commitment" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-[hsl(160,84%,39%)] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}