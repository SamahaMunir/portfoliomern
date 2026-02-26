import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import type { Experience } from "../types/experience";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Vertical Line - Hidden on mobile */}
      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-border" />

      {/* Timeline Items */}
      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative md:pl-16"
          >
            {/* Timeline Dot - GREY */}
            <div className="hidden md:block absolute left-0 top-2 w-3 h-3 rounded-full bg-muted-foreground border-4 border-background -translate-x-1/2" />

            <div className="group">
              {/* Date Range */}
              <div className="text-base md:text-lg text-muted-foreground mb-4 font-medium">
                {exp.startDate} — {exp.endDate}
              </div>

              {/* Position Title with Link */}
              <div className="mb-3">
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 group/link"
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-primary group-hover/link:underline">
                      {exp.position} · {exp.company.replace("Final Year Project - ", "")}
                    </h3>
                    <ArrowUpRight className="w-6 h-6 text-primary opacity-70 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                ) : (
                  <h3 className="text-2xl md:text-3xl font-bold text-primary">
                    {exp.position} · {exp.company}
                  </h3>
                )}
              </div>

              {/* Location & Type */}
              <div className="flex flex-wrap items-center gap-3 text-sm md:text-base text-muted-foreground mb-6">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {exp.location}
                </span>
                <span>•</span>
                <span>{exp.type}</span>
              </div>

              {/* Description - Single Paragraph */}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-4xl">
                {exp.description}
              </p>

              {/* Key Achievements - Condensed - GREY BULLETS */}
              {exp.achievements && exp.achievements.length > 0 && (
                <div className="mb-6 max-w-4xl">
                  <ul className="space-y-2 text-base md:text-lg text-muted-foreground">
                    {exp.achievements.slice(0, 3).map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-muted-foreground mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies - Cyan Pills */}
              <div className="flex flex-wrap gap-3">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm md:text-base font-medium bg-[hsl(160,84%,39%)]/10 text-[hsl(160,84%,39%)] rounded-full border border-[hsl(160,84%,39%)]/20 hover:bg-[hsl(160,84%,39%)]/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}