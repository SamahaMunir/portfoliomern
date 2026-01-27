import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/experience", label: "Experience" },
    { path: "/skills", label: "Skills" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border backdrop-blur-md"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text cursor-pointer"
            >
              {"<SamahaMunir />"}
            </motion.a>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={`relative text-sm font-medium transition-colors hover:text-primary ${
                    location === item.path ? "text-primary" : ""
                  }`}
                >
                  {item.label}
                  {location === item.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-6 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </a>
              </Link>
            ))}
          </div>

          {/* Social Icons & Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://github.com/SamahaMunir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://www.linkedin.com/in/samaha-munir-b52834318/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  onClick={() => setIsOpen(false)}
                  className="block py-2 hover:text-primary transition"
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/SamahaMunir" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/samaha-munir-b52834318/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}