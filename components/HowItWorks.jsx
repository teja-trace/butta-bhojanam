const steps = [
  { 
    n: 1, 
    t: "Pick your plan", 
    d: "Choose meals per week and any dietary preferences.",
    img: "/how-step3.png"
  },
  { 
    n: 2, 
    t: "We cook & deliver", 
    d: "Chef-crafted meals arrive fresh, chilled for maximum flavor.",
    img: "/how-step1.png"
  },
  { 
    n: 3, 
    t: "Heat & enjoy", 
    d: "Ready in minutes—no prep, no mess. Skip or cancel anytime.",
    img: "/how-step2.png"
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-brand-light/60 py-16">
      <div className="container-default">
        <h2 className="text-3xl md:text-4xl font-bold text-center">How it works</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {steps.map(s => (
            <div 
              key={s.n} 
              className="relative group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 text-center"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-brand flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {s.n}
              </div>

              {/* Step Image */}
              <img 
                src={s.img} 
                alt={s.t} 
                className="mx-auto h-28 w-28 object-contain mt-4 group-hover:scale-105 transition-transform duration-300"
              />

              {/* Title */}
              <h3 className="mt-6 font-semibold text-xl text-brand-dark">{s.t}</h3>

              {/* Description */}
              <p className="mt-3 text-slate-600 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
