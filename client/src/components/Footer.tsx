import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Code2, Briefcase, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const expertise = [
    "Full Stack Development",
    "MERN Stack Applications",
    "RESTful API Design",
    "Database Architecture",
    "UI/UX Implementation",
    "Cloud Deployment",
  ];

  return (
    <footer className="relative border-t border-border/50 mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 -z-10" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          {/* Brand Section - 5 columns */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold gradient-text mb-4">
                {"<SamahaMunir />"}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Full Stack Software Engineer specializing in building exceptional digital 
                experiences with modern web technologies.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3 mb-6">
                {[
                  { icon: Github, href: "https://github.com/SamahaMunir", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/samaha-munir-b52834318", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:samimunir196@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-lg hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Download Resume */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg font-medium transition-all"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
            </motion.div>
          </div>

          {/* Expertise Section - 3 columns */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              Expertise
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {expertise.map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-primary">✓</span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Section - 4 columns */}
          <div className="md:col-span-4">
            <h4 className="font-semibold text-lg mb-6">Get In Touch</h4>
            
            {/* Contact Info */}
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Phone</p>
                  <a href="tel:+92-303-4116557" className="hover:text-primary transition-colors break-all font-medium">
                    +92-303-4116557
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg flex-shrink-0">📍</span>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Location</p>
                  <span className="font-medium">Lahore, Pakistan</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Status</p>
                  <motion.span 
                    className="font-medium text-green-500 flex items-center gap-2"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Open to exciting opportunities
                  </motion.span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-2 flex-wrap justify-center">
              <span>© {currentYear} Samaha Munir.</span>
              <span className="hidden sm:inline">Built with MERN Stack</span>
            </p>
            <p className="font-medium">
              Designed & Developed by <span className="gradient-text font-semibold">Samaha Munir</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}