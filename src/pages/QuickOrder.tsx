import { useState } from "react";
import { ShoppingCart, Send } from "lucide-react";

const QuickOrder = () => {
  const [product, setProduct] = useState("glacons");
  const [quantity, setQuantity] = useState("1");

  const handleOrder = () => {
    const productName = product === "glacons" ? "Glaçons" : "Glace Pilée";
    const text = `Bonjour, je souhaite commander :%0AProduit : ${productName}%0AQuantité : ${quantity} sac(s)`;
    window.open(`https://wa.me/21625252050?text=${text}`, "_blank");
  };

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-navy">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-black text-4xl md:text-5xl text-ice-light mb-4">
            Commande <span className="text-gradient-ice">Rapide</span>
          </h1>
          <p className="text-ice-glow/70 max-w-xl mx-auto">
            Sélectionnez votre produit et envoyez votre commande en un clic
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto bg-card rounded-2xl p-8 ice-shadow">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-ice flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-foreground">Nouvelle Commande</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Produit</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setProduct("glacons")}
                    className={`py-4 rounded-xl font-heading font-bold text-sm transition-all ${
                      product === "glacons"
                        ? "bg-gradient-ice text-primary ice-shadow"
                        : "bg-muted text-muted-foreground hover:bg-accent"
                    }`}
                  >
                    🧊 Glaçons
                  </button>
                  <button
                    type="button"
                    onClick={() => setProduct("pilee")}
                    className={`py-4 rounded-xl font-heading font-bold text-sm transition-all ${
                      product === "pilee"
                        ? "bg-gradient-ice text-primary ice-shadow"
                        : "bg-muted text-muted-foreground hover:bg-accent"
                    }`}
                  >
                    ❄️ Glace Pilée
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Quantité (sacs)</label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-secondary outline-none transition-all"
                >
                  {[1, 2, 3, 5, 10, 20, 50].map((n) => (
                    <option key={n} value={n}>
                      {n} sac{n > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleOrder}
                className="flex items-center justify-center gap-2 w-full bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] font-heading font-bold py-4 rounded-xl hover:opacity-90 transition-all text-lg"
              >
                <Send className="w-5 h-5" />
                Envoyer via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuickOrder;
