import { motion } from "framer-motion";
import { Briefcase, Code2, Award, TrendingUp } from "lucide-react";

interface Stat {
  icon: any;
  value: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    icon: Briefcase,
    value: "3+",
    label: "Years Experience",
    description: "Software Development",
  },
  {
    icon: Code2,
    value: "15+",
    label: "Projects Built",
    description: "Production Ready",
  },
  {
    icon: Award,
    value: "12+",
    label: "Technologies",
    description: "Modern Stack",
  },
  {
    icon: TrendingUp,
    value: "100%",
    label: "Success Rate",
    description: "Client Satisfaction",
  },
];

export default function ExperienceStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-background via-background to-primary/5 border-2 border-border hover:border-primary/50 transition-all duration-300 p-8">
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Icon */}
            <div className="relative mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
            </div>

            {/* Value */}
            <div className="relative">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}