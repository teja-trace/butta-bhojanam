export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-brand/5 pointer-events-none" />
      <div className="container-default py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Healthy, chef-crafted meals<br/>delivered to your door.
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-xl">
            Plant-forward, nutritionally balanced dishes ready in minutes. Choose your plan, skip anytime.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#get-started" className="btn-primary">Get Started</a>
            <a href="#menu" className="inline-flex items-center rounded-full px-6 py-3 font-semibold border border-slate-300 hover:border-brand transition-colors">
              Explore Menu
            </a>
          </div>
          <div className="mt-6 text-sm text-slate-500">
            Free delivery on your first order • No commitments
          </div>
        </div>
        <div className="relative">
          <div className="card p-3">
            <img src="/hero.png" alt="Healthy bowls" className="rounded-xl w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
