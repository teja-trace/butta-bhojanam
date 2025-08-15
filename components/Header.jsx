export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container-default flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2 font-bold text-slate-900">
          {/* <span className="inline-block h-8 w-8 rounded-full bg-brand" /> */}
          <img
  className="object-cover w-[150px] h-[40px]"
  src="/bb-logo.png"
  alt="butta-bhojanam-logo"
/>

          {/* <span>Butta Bhojanam</span> */}
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a className="link-muted" href="#menu">On The Menu</a>
          <a className="link-muted" href="#how">How It Works</a>
          <a className="link-muted" href="#story">Our Story</a>
          <a className="link-muted" href="#sustainability">Sustainability</a>
        </nav>
        <div className="flex items-center gap-4">
          <a className="link-muted" href="#login">Log In</a>
          <a className="btn-primary" href="#get-started">Order</a>
        </div>
      </div>
    </header>
  );
}
