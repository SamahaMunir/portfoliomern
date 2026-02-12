import { motion } from "framer-motion";
import { MapPin, Calendar, ExternalLink, Briefcase, ChevronRight, Award } from "lucide-react";
import type { Experience } from "../types/experience";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Vertical Line - Hidden on mobile */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent -translate-x-1/2" />

      {/* Timeline Items */}
      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative flex flex-col md:flex-row gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline Dot - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                className="relative"
              >
                {/* Pulsing ring */}
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full bg-primary"
                />
                
                {/* Inner dot */}
                <div className="relative w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50" />
              </motion.div>
            </div>

            {/* Content Card */}
            <div className={`w-full md:w-[calc(50%-2rem)] ${
              index % 2 === 0 ? "md:text-right" : "md:text-left"
            }`}>
              <motion.div
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-background via-background to-primary/5 border-2 border-border hover:border-primary/50 transition-all duration-300 p-8"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  {/* Header */}
                  <div className="mb-6">
                    {/* Company Logo/Icon */}
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                      {exp.logo ? (
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-14 h-14 rounded-xl object-cover border-2 border-border"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center border-2 border-primary/20">
                          <Briefcase className="w-7 h-7 text-primary" />
                        </div>
                      )}
                    </div>

                    {/* Position */}
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {exp.position}
                    </h3>
                    
                    {/* Company */}
                    <div className={`flex items-center gap-2 text-primary font-semibold text-lg mb-3 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 hover:underline"
                        >
                          {exp.company}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        exp.company
                      )}
                    </div>

                    {/* Meta Info */}
                    <div className={`flex flex-wrap gap-4 text-base text-muted-foreground ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.startDate} - {exp.endDate}
                      </span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-muted-foreground">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  {exp.achievements.length > 0 && (
                    <div className="mb-6">
                      <h4 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                        <Award className="w-5 h-5 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + i * 0.05 }}
                            className={`flex items-start gap-3 text-base ${index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""}`}
                          >
                            <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div>
                    <h4 className={`text-sm font-semibold text-muted-foreground mb-3 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      TECH STACK
                    </h4>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + i * 0.03 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-4 py-2 text-sm font-medium bg-secondary hover:bg-primary/10 rounded-lg border border-border hover:border-primary/30 transition-all cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}