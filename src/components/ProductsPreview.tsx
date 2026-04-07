import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import glaconsImg from "@/assets/glacons.jpg";
import glacePileeImg from "@/assets/glace-pilee.jpg";

const products = [
  {
    name: "Glaçons",
    desc: "Glaçons cristallins de qualité supérieure, parfaits pour les boissons et la conservation.",
    img: glaconsImg,
  },
  {
    name: "Glace Pilée",
    desc: "Glace pilée fine et fraîche, idéale pour les poissonneries et les cocktails.",
    img: glacePileeImg,
  },
];

const ProductsPreview = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-heading font-black text-3xl md:text-4xl text-center text-foreground mb-4">
        Nos Produits
      </h2>
      <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
        Une gamme de glace pour tous vos besoins professionnels
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {products.map((p) => (
          <div
            key={p.name}
            className="group rounded-2xl overflow-hidden bg-card ice-shadow hover:scale-[1.02] transition-all duration-300"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-2">{p.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
              <Link
                to="/produits"
                className="inline-flex items-center gap-1 text-secondary font-semibold text-sm hover:gap-2 transition-all"
              >
                En savoir plus <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsPreview;
