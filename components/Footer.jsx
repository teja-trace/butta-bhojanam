export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200">
      <div className="container-default py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-semibold mb-3">Company</div>
          <ul className="space-y-2">
            <li><a className="link-muted" href="#about">About</a></li>
            <li><a className="link-muted" href="#careers">Careers</a></li>
            <li><a className="link-muted" href="#press">Press</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Support</div>
          <ul className="space-y-2">
            <li><a className="link-muted" href="#faq">FAQs</a></li>
            <li><a className="link-muted" href="#contact">Contact</a></li>
            <li><a className="link-muted" href="#shipping">Shipping</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Explore</div>
          <ul className="space-y-2">
            <li><a className="link-muted" href="#menu">Menu</a></li>
            <li><a className="link-muted" href="#plans">Plans & Pricing</a></li>
            <li><a className="link-muted" href="#blog">Blog</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Get updates</div>
          <form className="flex gap-2" action="/api/subscribe" method="post">
            <input name="email" type="email" placeholder="Email address" className="flex-1 rounded-full border border-slate-300 px-4" required />
            <button className="btn-primary" type="submit">Subscribe</button>
          </form>
          <p className="text-slate-500 mt-2">No spam, unsubscribe anytime.</p>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="container-default py-6 text-xs text-slate-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Butta Bhojanam</span>
          <div className="flex gap-4">
            <a className="link-muted" href="#privacy">Privacy</a>
            <a className="link-muted" href="#terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
