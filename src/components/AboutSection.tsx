import { Factory, ShieldCheck, Truck } from "lucide-react";

const features = [
  { icon: Factory, title: "Production quotidienne", desc: "Notre usine produit de la glace fraîche chaque jour pour garantir la qualité." },
  { icon: ShieldCheck, title: "Fiabilité totale", desc: "Un service fiable sur lequel vous pouvez compter, 7 jours sur 7." },
  { icon: Truck, title: "Livraison rapide", desc: "Livraison directe à votre emplacement dans les meilleurs délais." },
];

const AboutSection = () => (
  <section className="py-20 bg-gradient-navy relative overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-accent blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-secondary blur-3xl" />
    </div>
    <div className="container mx-auto px-4 relative">
      <h2 className="font-heading font-black text-3xl md:text-4xl text-center text-ice-light mb-4">
        Pourquoi <span className="text-gradient-ice">Iceman</span> ?
      </h2>
      <p className="text-center text-ice-glow/60 mb-14 max-w-xl mx-auto">
        Le partenaire de confiance pour vos besoins en glace
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f) => (
          <div
            key={f.title}
            className="frost-glass rounded-2xl p-8 text-center hover:frost-glow transition-all duration-300 group"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-ice mb-6 group-hover:scale-110 transition-transform">
              <f.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-xl text-ice-light mb-3">{f.title}</h3>
            <p className="text-ice-glow/70 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
