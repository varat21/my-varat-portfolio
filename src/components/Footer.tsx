export function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container-edit flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Varat Thapa. All rights reserved.</p>
        <p>Designed &amp; built in Kathmandu.</p>
      </div>
    </footer>
  );
}
