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
    Intermediate: "from-blue-500 to-cyan-500",
    Advanced: "from-purple-500 to-pink-500",
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
      whileHover={{ y: -5, scale: 1.02, boxShadow: "0 10px 30px rgba(64, 217, 164, 0.3)" }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-background via-background to-[hsl(160, 70%, 50%)]/5 border-2 border-border hover:border-[hsl(160, 70%, 50%)]/50 transition-all duration-300 p-6">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(160, 70%, 50%)]/0 to-[hsl(160, 70%, 50%)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            {icon && <span className="text-3xl">{icon}</span>}
            <div className="flex-1">
              <div className="font-bold text-lg mb-1">{name}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{level}</div>
            </div>
          </div>

          {/* Level Indicator */}
          <div className="flex gap-1.5">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 + i * 0.1 }}
                className={`h-1.5 flex-1 rounded-full ${
                  i < levelDots[level]
                    ? `bg-gradient-to-r ${levelColors[level]}`
                    : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
