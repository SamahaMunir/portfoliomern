import { Link } from "wouter";

export default function Navbar() {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold text-primary cursor-pointer">Your Name</span>
        </Link>
        <ul className="flex gap-6">
          <li><Link href="/"><span className="hover:text-primary transition cursor-pointer">Home</span></Link></li>
          <li><Link href="/projects"><span className="hover:text-primary transition cursor-pointer">Projects</span></Link></li>
          <li><Link href="/contact"><span className="hover:text-primary transition cursor-pointer">Contact</span></Link></li>
        </ul>
      </div>
    </nav>
  );
}
