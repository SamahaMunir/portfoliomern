import { motion } from "framer-motion";
import { Briefcase, Code2, Award, TrendingUp } from "lucide-react";

interface Stat {
  icon: any;
  value: string;
  label: string;
  gradient: string;
}

const stats: Stat[] = [
  {
    icon: Briefcase,
    value: "8+",
    label: "Years Experience",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code2,
    value: "50+",
    label: "Projects Completed",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Award,
    value: "15+",
    label: "Technologies Mastered",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: TrendingUp,
    value: "100%",
    label: "Client Satisfaction",
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function ExperienceStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, index) => (
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
            {/* Icon */}
            <div className="relative mb-4 inline-block">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-20 blur-xl rounded-full`}
              />
              <div className={`relative w-12 h-12 rounded-full bg-gradient-to-r ${stat.gradient} flex items-center justify-center mx-auto`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Value */}
            <motion.div
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
              className="text-3xl md:text-4xl font-bold gradient-text mb-2"
            >
              {stat.value}
            </motion.div>

            {/* Label */}
            <div className="text-sm text-muted-foreground font-medium">
              {stat.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}