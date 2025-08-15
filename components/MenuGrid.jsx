const items = [
  { title: "Sesame Tofu Bowl", kcal: 520, protein: 24, img: "/dish-1.png" },
  { title: "Green Goddess Salad", kcal: 410, protein: 18, img: "/dish-2.png" },
  { title: "Coconut Curry Vegetables", kcal: 480, protein: 12, img: "/dish-3.png" },
  { title: "Smoky Chickpea Wrap", kcal: 560, protein: 20, img: "/dish-4.png" },
];

export default function MenuGrid() {
  return (
    <section id="menu" className="container-default py-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl md:text-4xl font-bold">On the menu</h2>
        <a href="#menu-all" className="link-muted font-semibold">See full menu →</a>
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((x) => (
          <article key={x.title} className="card">
            <img src={x.img} alt={x.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{x.title}</h3>
              <div className="mt-2 text-sm text-slate-500">
                {x.kcal} kcal • {x.protein}g protein
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
