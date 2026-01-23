import React from 'react';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <header className="border-b border-border p-4 mb-8">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">Portfolio</h1>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <a href="#" className="hover:text-primary transition-colors">About</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4">
        <Home />
      </main>
    </div>
  );
}

export default App;
