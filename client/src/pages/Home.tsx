import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function Home() {
  const skills = [
    'TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 
    'Tailwind CSS', 'Next.js', 'PostgreSQL', 'Docker', 'AWS'
  ];

  return (
    <div className="container mx-auto px-4 py-16 space-y-24">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Your Name
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
            Full Stack Software Engineer
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I build scalable, modern web applications with a focus on performance and user experience. 
            Currently specializing in the MERN stack and modern cloud architecture.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex gap-4"
        >
          <Link href="/projects">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-all">
              View Work <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-8 py-3 border border-border rounded-full font-medium hover:bg-accent transition-all">
              Contact Me
            </button>
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex gap-6 text-muted-foreground pt-4"
        >
          <a href="#" className="hover:text-primary transition-colors"><Github className="w-6 h-6" /></a>
          <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-6 h-6" /></a>
          <a href="#" className="hover:text-primary transition-colors"><Mail className="w-6 h-6" /></a>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="space-y-8">
        <h3 className="text-3xl font-bold text-center">Technical Skills</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
              className="px-4 py-2 bg-accent/50 border border-border rounded-lg text-sm font-medium"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>
    </div>
  );
}
