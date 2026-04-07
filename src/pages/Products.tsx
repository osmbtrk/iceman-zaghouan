import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import glaconsImg from "@/assets/glacons.jpg";
import glacePileeImg from "@/assets/glace-pilee.jpg";

const products = [
  {
    name: "Glaçons",
    img: glaconsImg,
    desc: "Nos glaçons sont produits quotidiennement avec de l'eau purifiée pour garantir une transparence et une pureté exceptionnelles. Idéaux pour les boissons, la conservation alimentaire et les événements.",
    packaging: "Disponible en sacs de 2kg, 5kg et 10kg",
    uses: ["Restaurants & cafés", "Événements", "Épiceries", "Poissonneries"],
  },
  {
    name: "Glace Pilée",
    img: glacePileeImg,
    desc: "Notre glace pilée est finement broyée pour une utilisation polyvalente. Parfaite pour la présentation des produits de la mer, les cocktails et la conservation au froid.",
    packaging: "Disponible en sacs de 5kg, 10kg et 25kg",
    uses: ["Poissonneries", "Marchés", "Cocktails", "Conservation"],
  },
];

const Products = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="py-16 bg-gradient-navy">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading font-black text-4xl md:text-5xl text-ice-light mb-4">
          Nos <span className="text-gradient-ice">Produits</span>
        </h1>
        <p className="text-ice-glow/70 max-w-xl mx-auto">
          De la glace premium pour tous vos besoins professionnels
        </p>
      </div>
    </section>

    {/* Products */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 space-y-16">
        {products.map((p, i) => (
          <div
            key={p.name}
            className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center max-w-5xl mx-auto`}
          >
            <div className="md:w-1/2">
              <div className="rounded-2xl overflow-hidden ice-shadow">
                <img src={p.img} alt={p.name} loading="lazy" width={800} height={800} className="w-full h-auto" />
              </div>
            </div>
            <div className="md:w-1/2 space-y-4">
              <h2 className="font-heading font-black text-3xl text-foreground">{p.name}</h2>
              <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              <p className="text-sm font-semibold text-secondary">{p.packaging}</p>
              <div className="flex flex-wrap gap-2">
                {p.uses.map((u) => (
                  <span key={u} className="bg-muted text-muted-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                    {u}
                  </span>
                ))}
              </div>
              <Link
                to="/commander"
                className="inline-flex items-center gap-2 bg-gradient-ice text-primary font-heading font-bold px-6 py-3 rounded-full hover:opacity-90 transition-all mt-4"
              >
                <ShoppingCart className="w-4 h-4" />
                Commander
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Products;
