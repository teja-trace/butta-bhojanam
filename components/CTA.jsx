export default function CTA() {
  return (
    <section id="get-started" className="py-20">
      <div className="container-default">
        <div className="card p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Ready to eat better?</h3>
            <p className="mt-2 text-slate-600">Start your flexible plan and get free delivery on your first order.</p>
          </div>
          <a href="#plans" className="btn-primary">Choose your plan</a>
        </div>
      </div>
    </section>
  );
}
