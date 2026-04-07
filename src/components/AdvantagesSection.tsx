import { Truck, Award, CalendarCheck, Snowflake } from "lucide-react";

const advantages = [
  { icon: Truck, title: "Livraison rapide", desc: "Partout à Zaghouan et environs" },
  { icon: Award, title: "Qualité garantie", desc: "Glace pure et cristalline" },
  { icon: CalendarCheck, title: "Disponible tous les jours", desc: "7j/7, toute l'année" },
  { icon: Snowflake, title: "Fraîcheur maximale", desc: "Production quotidienne" },
];

const AdvantagesSection = () => (
  <section className="py-20 bg-muted">
    <div className="container mx-auto px-4">
      <h2 className="font-heading font-black text-3xl md:text-4xl text-center text-foreground mb-14">
        Nos Avantages
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {advantages.map((a) => (
          <div key={a.title} className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-ice mb-4 group-hover:scale-110 transition-transform">
              <a.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-1">{a.title}</h3>
            <p className="text-muted-foreground text-sm">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AdvantagesSection;
