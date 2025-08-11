function Item({ icon, title, text }:{ icon:string; title:string; text:string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-600">{text}</div>
      </div>
    </div>
  );
}

export default function WhyTripviu() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-xl md:text-2xl font-semibold">Why Tripviu?</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Item icon="🌙" title="Halal-friendly by design" text="Echte halal-features: halal food, alcohol-free opties, privacy-vriendelijke zwembaden, gebedsruimtes." />
          <Item icon="🔎" title="Curated & transparent" text="Duidelijke halal-scores per hotel. Geen vage claims — wel controleerbare kenmerken." />
          <Item icon="🛡️" title="Safe & fair" text="Veilige betalingen, geen verborgen kosten. Support die meedenkt met jouw waarden." />
        </div>
      </div>
    </section>
  );
}
