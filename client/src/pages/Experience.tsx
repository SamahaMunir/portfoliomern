import { motion } from "framer-motion";
import { Briefcase, Award, Rocket, Download, Code2 } from "lucide-react";
import ExperienceTimeline from "../components/ExperienceTimeline";
import SkillBadge from "../components/SkillBadge";
import type { Experience } from "../types/experience";

// YOUR ACTUAL EXPERIENCE DATA
const experiences: Experience[] = [
  {
    id: "1",
    company: "Final Year Project - Fluenti",
    position: "Full Stack Developer & AI Engineer",
    location: "Pakistan (Remote)",
    type: "Full-time",
    startDate: "July 2024",
    endDate: "Dec 2024",
    description: "Led development of Fluenti, an AI-powered speech therapy and emotional support platform serving children and adults. Built comprehensive full-stack application with React, Node.js, MongoDB, and Python Flask, integrating multiple AI services for personalized therapeutic experiences.",
    achievements: [
      "Architected and deployed full-stack MERN application with Python Flask microservice for AI therapy bot",
      "Integrated Google Gemini AI for story generation, OpenAI Whisper for speech-to-text, and Groq LLM for therapy responses",
      "Implemented real-time speech recognition and text-to-speech for interactive story-based therapy games",
      "Built crisis detection system using multi-layered AI analysis for emotional support sessions",
      "Developed secure authentication with JWT, 2FA using TOTP, and encrypted conversation storage",
      "Created progress tracking system with detailed analytics dashboards and psychological profiling",
      "Deployed on Render with CI/CD pipeline, achieving 99.9% uptime",
    ],
    technologies: [
      "React 18",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Python Flask",
      "Google Gemini AI",
      "OpenAI API",
      "Groq LLM",
      "WebSocket",
      "JWT Auth",
      "Tailwind CSS",
      "Framer Motion",
      "Docker",
    ],
    companyUrl: "https://fluenti-app.onrender.com/",
  },
  {
    id: "2",
    company: "Freelance Software Development",
    position: "MERN Stack Developer",
    location: "Pakistan (Remote)",
    type: "Freelance",
    startDate: "Jan 2023",
    endDate: "Present",
    description: "Providing end-to-end web development services specializing in MERN stack applications. Working with clients globally to deliver custom web solutions, from concept to deployment.",
    achievements: [
      "Delivered 10+ production-ready web applications for clients across various industries",
      "Specialized in responsive, user-friendly interfaces using React and modern CSS frameworks",
      "Implemented RESTful APIs with Node.js and Express, ensuring scalability and performance",
      "Integrated third-party services including payment gateways, email services, and cloud storage",
      "Maintained 100% client satisfaction rate with timely delivery and clear communication",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "TypeScript",
      "REST APIs",
      "Git",
      "Heroku",
      "Vercel",
    ],
  },
  {
    id: "3",
    company: "Academic Projects",
    position: "Software Engineering Student",
    location: "Pakistan",
    type: "Part-time",
    startDate: "2021",
    endDate: "2024",
    description: "Completed numerous academic projects demonstrating proficiency in full-stack development, database design, and software engineering principles. Focused on building practical applications solving real-world problems.",
    achievements: [
      "Built portfolio of 15+ projects showcasing diverse technical skills",
      "Collaborated with team members using Git for version control and Agile methodologies",
      "Gained hands-on experience with modern web technologies and best practices",
      "Presented projects and technical documentation to faculty and peers",
    ],
    technologies: [
      "JavaScript",
      "Python",
      "Java",
      "SQL",
      "MongoDB",
      "HTML/CSS",
      "Bootstrap",
      "Git/GitHub",
    ],
  },
];

// YOUR ACTUAL SKILLS
const topSkills = [
  { name: "React.js", level: "Expert" as const, icon: "⚛️" },
  { name: "Node.js", level: "Advanced" as const, icon: "🟢" },
  { name: "MongoDB", level: "Advanced" as const, icon: "🍃" },
  { name: "TypeScript", level: "Advanced" as const, icon: "🔷" },
  { name: "Express.js", level: "Advanced" as const, icon: "🚂" },
  { name: "Python", level: "Intermediate" as const, icon: "🐍" },
  { name: "AI Integration", level: "Advanced" as const, icon: "🤖" },
  { name: "REST APIs", level: "Expert" as const, icon: "🔌" },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass"
          >
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Professional Journey</span>
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Work Experience</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Recent Computer Science graduate specializing in full-stack development with the MERN stack. 
            Successfully delivered Fluenti, an AI-powered healthcare platform, and multiple freelance projects.
          </p>

          {/* Download Resume Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold shadow-lg"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </motion.a>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Code2,
              value: "15+",
              label: "Projects Completed",
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              icon: Briefcase,
              value: "3+",
              label: "Years Learning",
              gradient: "from-purple-500 to-pink-500",
            },
            {
              icon: Award,
              value: "12+",
              label: "Technologies",
              gradient: "from-orange-500 to-red-500",
            },
            {
              icon: Rocket,
              value: "1",
              label: "Deployed FYP",
              gradient: "from-green-500 to-emerald-500",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="glass rounded-xl p-6 text-center border border-border/50 hover:border-primary/50 transition-all duration-300">
                <div className="relative mb-4 inline-block">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-20 blur-xl rounded-full`}
                  />
                  <div className={`relative w-12 h-12 rounded-full bg-gradient-to-r ${stat.gradient} flex items-center justify-center mx-auto`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Career Timeline
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            From academic projects to production-ready AI platform - my journey in software engineering
          </p>
        </motion.div>

        <ExperienceTimeline experiences={experiences} />
      </div>

      {/* Top Skills Section */}
      <div className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Core Competencies
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Technologies I've mastered through hands-on project development
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {topSkills.map((skill, index) => (
            <SkillBadge
              key={skill.name}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Education & Certifications Section */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 md:p-12 border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Education & Achievements</h2>
            </div>

            <div className="space-y-6">
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 p-4 rounded-lg hover:bg-primary/5 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Bachelor of Science in Computer Science</h3>
                  <p className="text-sm text-muted-foreground">Bahria University</p>
                  <p className="text-xs text-muted-foreground mt-1">2022 - 2026</p>
                  <p className="text-sm mt-2">
                    Final Year Project: <span className="text-primary font-medium">Fluenti - AI-Powered Speech Therapy Platform</span>
                  </p>
                </div>
              </motion.div>

              {/* Key Courses */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 p-4 rounded-lg hover:bg-primary/5 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Relevant Coursework</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {[
                      "Data Structures",
                      "Algorithms",
                      "Database Systems",
                      "Web Development",
                      "Software Engineering",
                      "AI & Machine Learning",
                    ].map((course) => (
                      <span
                        key={course}
                        className="text-xs px-3 py-1 bg-secondary rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 p-4 rounded-lg hover:bg-primary/5 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Notable Achievements</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                    <li>• Successfully deployed production-ready AI healthcare application</li>
                    <li>• Integrated 5+ AI services (Gemini, OpenAI, Groq) in single platform</li>
                    <li>• Maintained 100% client satisfaction in freelance projects</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 mt-20"
      >
        <div className="max-w-3xl mx-auto text-center glass rounded-2xl p-12 space-y-6">
          <Rocket className="w-16 h-16 mx-auto text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's Build Something Innovative Together
          </h2>
          <p className="text-lg text-muted-foreground">
            I'm excited to bring my skills to a dynamic team and contribute to meaningful projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold shadow-lg"
            >
              Get In Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/projects"
              className="px-8 py-4 glass rounded-lg font-semibold"
            >
              View My Work
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}