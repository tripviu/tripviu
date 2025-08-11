function Item({ icon, title, text }:{ icon:string; title:string; text:string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-xl">{icon}</div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-sm text-gray-600">{text}</div>
      </div>
    </div>
  );
}

export default function USPBar() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <Item icon="🕋" title="Halal-first" text="Filters voor voedsel, privacy & gebedsvoorzieningen." />
        <Item icon="🌍" title="Wereldwijd" text="Topsteden, strandresorts en hidden gems." />
        <Item icon="⭐" title="Betrouwbare reviews" text="Echte ervaringen, helder en eerlijk." />
        <Item icon="💳" title="Veilig betalen" text="Geen verborgen kosten. Heldere prijzen." />
      </div>
    </section>
  );
}
