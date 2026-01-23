export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input type="text" className="w-full p-2 border border-border rounded-md bg-background" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input type="email" className="w-full p-2 border border-border rounded-md bg-background" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea className="w-full p-2 border border-border rounded-md bg-background h-32"></textarea>
        </div>
        <button type="submit" className="w-full py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">
          Send Message
        </button>
      </form>
    </div>
  );
}
