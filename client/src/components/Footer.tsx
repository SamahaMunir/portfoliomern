export default function Footer() {
  return (
    <footer className="border-t border-border mt-20 py-8 text-center text-sm text-muted-foreground">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Software Engineer Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}
