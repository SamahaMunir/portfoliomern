import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h2 className="text-3xl font-semibold text-primary">Welcome to Your Portfolio</h2>
      <p className="text-muted-foreground text-center max-w-md">
        This is a pre-configured MERN stack project ready for your personal content.
      </p>
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">
          Get Started
        </button>
        <button className="px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors">
          View Projects
        </button>
      </div>
    </div>
  );
}
