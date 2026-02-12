import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  icon?: string;
  index: number;
}

export default function SkillBadge({ name, level, icon, index }: SkillBadgeProps) {
  const levelColors = {
    Beginner: "from-gray-500 to-gray-600",
    Intermediate: "from-blue-500 to-blue-600",
    Advanced: "from-purple-500 to-purple-600",
    Expert: "from-orange-500 to-red-500",
  };

  const levelDots = {
    Beginner: 1,
    Intermediate: 2,
    Advanced: 3,
    Expert: 4,
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="group"
    >
      <div className="glass rounded-lg p-4 border border-border/50 hover:border-primary/50 transition-all duration-300">
        <div className="flex items-center gap-3 mb-2">
          {icon && <span className="text-2xl">{icon}</span>}
          <div className="flex-1">
            <div className="font-semibold">{name}</div>
            <div className="text-xs text-muted-foreground">{level}</div>
          </div>
        </div>

        {/* Level Indicator */}
        <div className="flex gap-1">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 + i * 0.1 }}
              className={`h-1 flex-1 rounded-full ${
                i < levelDots[level]
                  ? `bg-gradient-to-r ${levelColors[level]}`
                  : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}