import { motion } from "framer-motion";
import { Briefcase, Award, Rocket, Download } from "lucide-react";
import ExperienceTimeline from "../components/ExperienceTimeline";
import ExperienceStats from "../components/ExperienceStats";
import SkillBadge from "../components/SkillBadge";
import type { Experience } from "../types/experience";

// Sample experience data
const experiences: Experience[] = [
  {
    id: "1",
    company: "Tech Innovators Inc.",
    position: "Senior Full Stack Engineer",
    location: "San Francisco, CA (Remote)",
    type: "Full-time",
    startDate: "Jan 2022",
    endDate: "Present",
    description: "Leading development of enterprise-scale web applications serving 1M+ users. Architecting microservices infrastructure and mentoring junior developers.",
    achievements: [
      "Reduced application load time by 60% through performance optimization",
      "Led migration from monolithic to microservices architecture",
      "Implemented CI/CD pipeline reducing deployment time by 80%",
      "Mentored team of 5 junior developers, improving code quality by 40%",
    ],
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker", "Kubernetes", "TypeScript"],
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=100&h=100&fit=crop",
    companyUrl: "https://example.com",
  },
  {
    id: "2",
    company: "StartupXYZ",
    position: "Full Stack Developer",
    location: "New York, NY",
    type: "Full-time",
    startDate: "Mar 2020",
    endDate: "Dec 2021",
    description: "Built and launched multiple client-facing applications from concept to production. Collaborated with design and product teams to deliver exceptional user experiences.",
    achievements: [
      "Developed 10+ production-ready web applications",
      "Increased user engagement by 150% through UX improvements",
      "Integrated payment systems processing $2M+ annually",
      "Reduced bug reports by 70% through comprehensive testing",
    ],
    technologies: ["React", "Express", "PostgreSQL", "Redux", "Stripe", "Heroku"],
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
  },
  {
    id: "3",
    company: "Digital Solutions Co.",
    position: "Frontend Developer",
    location: "Austin, TX",
    type: "Full-time",
    startDate: "Jun 2018",
    endDate: "Feb 2020",
    description: "Specialized in creating responsive, accessible web interfaces. Worked closely with UX designers to implement pixel-perfect designs.",
    achievements: [
      "Improved website accessibility score from 65% to 98%",
      "Implemented responsive design supporting 15+ device types",
      "Reduced CSS bundle size by 40% through optimization",
      "Created reusable component library used across 20+ projects",
    ],
    technologies: ["React", "JavaScript", "CSS3", "HTML5", "Sass", "Webpack"],
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop",
  },
  {
    id: "4",
    company: "Freelance",
    position: "Full Stack Developer",
    location: "Remote",
    type: "Freelance",
    startDate: "Jan 2017",
    endDate: "May 2018",
    description: "Worked with diverse clients ranging from startups to established businesses. Delivered custom web solutions tailored to specific business needs.",
    achievements: [
      "Successfully completed 25+ client projects",
      "Maintained 5-star rating with 100% client satisfaction",
      "Built e-commerce platforms generating $500K+ in sales",
      "Developed custom CMS solutions for content management",
    ],
    technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "jQuery", "Bootstrap"],
    logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=100&h=100&fit=crop",
  },
];

// Skills data
const topSkills = [
  { name: "React.js", level: "Expert" as const, icon: "⚛️" },
  { name: "Node.js", level: "Expert" as const, icon: "🟢" },
  { name: "MongoDB", level: "Advanced" as const, icon: "🍃" },
  { name: "TypeScript", level: "Advanced" as const, icon: "🔷" },
  { name: "Express.js", level: "Expert" as const, icon: "🚂" },
  { name: "PostgreSQL", level: "Advanced" as const, icon: "🐘" },
  { name: "AWS", level: "Intermediate" as const, icon: "☁️" },
  { name: "Docker", level: "Advanced" as const, icon: "🐳" },
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
            8+ years of crafting exceptional digital experiences across diverse industries.
            From startups to enterprise solutions, delivering impact through code.
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
            Download Full Resume
          </motion.a>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4">
        <ExperienceStats />
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
            A chronological journey through my professional experience and key milestones
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
            Technologies and tools I've mastered throughout my career
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

      {/* Certifications Section */}
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
              <h2 className="text-3xl font-bold">Certifications & Awards</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "AWS Certified Solutions Architect",
                  issuer: "Amazon Web Services",
                  date: "2023",
                },
                {
                  title: "MongoDB Certified Developer",
                  issuer: "MongoDB University",
                  date: "2022",
                },
                {
                  title: "React Developer Certification",
                  issuer: "Meta (Facebook)",
                  date: "2021",
                },
                {
                  title: "Best Innovation Award",
                  issuer: "Tech Innovators Inc.",
                  date: "2023",
                },
              ].map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 p-4 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                  </div>
                </motion.div>
              ))}
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
            Let's Build Something Amazing
          </h2>
          <p className="text-lg text-muted-foreground">
            I'm always interested in hearing about new projects and opportunities.
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