import { Link } from "wouter";

export default function Navbar() {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold text-primary">Your Name</a>
        </Link>
        <ul className="flex gap-6">
          <li><Link href="/"><a className="hover:text-primary transition">Home</a></Link></li>
          <li><Link href="/projects"><a className="hover:text-primary transition">Projects</a></Link></li>
          <li><Link href="/contact"><a className="hover:text-primary transition">Contact</a></Link></li>
        </ul>
      </div>
    </nav>
  );
}
