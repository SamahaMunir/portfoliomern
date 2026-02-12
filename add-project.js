const project = {
  title: "Fluenti - AI Speech Therapy Platform",
  description: "Comprehensive AI-powered platform combining interactive story-building games for speech therapy with emotional support sessions. Serves both children and adults using cutting-edge AI technology for personalized therapeutic experiences.",
  technologies: ["React", "Node.js", "MongoDB", "Python Flask", "Google Gemini", "OpenAI", "Groq", "TypeScript", "WebSocket"],
  imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
  githubUrl: "https://github.com/FYPFluenti/Fluenti",
  liveUrl: "https://fluenti-app.onrender.com/",
  featured: true
};

fetch('http://localhost:3000/api/projects', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(project)
})
  .then(res => res.json())
  .then(data => {
    console.log('Project added successfully:', data);
    process.exit(0);
  })
  .catch(err => {
    console.error('Error adding project:', err);
    process.exit(1);
  });
