import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const mutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await fetch("https://formspree.io/f/mreavyna", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send message");
      return res.json();
    },
    onSuccess: () => {
      alert("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    },
    onError: () => {
      alert("Failed to send message. Please try again or email me directly at samimunir196@gmail.com");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div className="container mx-auto px-4 py-20 max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-4">Get In Touch</h1>
        <p className="text-center text-muted-foreground mb-12">
          Have a question or want to work together? Drop me a message!
        </p>
      </motion.div>
      
      <motion.form 
        onSubmit={handleSubmit} 
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div>
          <label className="block mb-2 font-medium">Name</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition"
            placeholder="john@example.com"
          />
        </div>
        
        <div>
          <label className="block mb-2 font-medium">Message</label>
          <textarea
            required
            rows={6}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
            placeholder="Your message here..."
          />
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(64, 217, 164, 0.3)" }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={mutation.isPending}
          className="w-full bg-primary text-primary-foreground p-4 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Sending..." : "Send Message"}
        </motion.button>

        {mutation.isError && (
          <p className="text-red-500 text-center text-sm">
            Failed to send. Please email me directly at samimunir196@gmail.com
          </p>
        )}
      </motion.form>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-4">Or reach me directly:</p>
        <div className="flex flex-col items-center gap-2">
          <a 
            href="mailto:samimunir196@gmail.com"
            className="text-primary hover:underline"
          >
            samimunir196@gmail.com
          </a>
          <a 
            href="https://linkedin.com/in/samaha-munir-b52834318"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
}