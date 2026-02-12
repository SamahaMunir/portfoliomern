import { motion } from "framer-motion";
import { MapPin, Calendar, ExternalLink, Briefcase } from "lucide-react";
import type { Experience } from "../types/experience";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

      {/* Timeline Items */}
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                className="relative"
              >
                {/* Outer Ring */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.2, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full bg-primary blur-md"
                />
                
                {/* Inner Dot */}
                <div className="relative w-4 h-4 rounded-full bg-primary border-4 border-background" />
              </motion.div>
            </div>

            {/* Content Card */}
            <div className={`w-full md:w-[calc(50%-3rem)] ml-20 md:ml-0 ${
              index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
            }`}>
              <motion.div
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 card-hover"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {exp.logo ? (
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-bold">{exp.position}</h3>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 hover:underline"
                        >
                          {exp.company}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        exp.company
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.startDate} - {exp.endDate}
                      </span>
                      <span className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                {exp.achievements.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-0.5">▸</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.03 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1 text-xs font-medium bg-secondary rounded-full border border-border"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}