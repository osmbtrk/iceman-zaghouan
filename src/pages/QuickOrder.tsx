import { useState } from "react";
import { ShoppingCart, Send } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const QuickOrder = () => {
  const [product, setProduct] = useState("glacons");
  const [quantity, setQuantity] = useState("");
  const [packaging, setPackaging] = useState("");

  const glaconsPackaging = ["1.5 KG", "5 KG", "10 KG"];
  const pileePackaging = ["2 KG", "5 KG", "10 KG", "50 KG"];
  const currentPackaging = product === "glacons" ? glaconsPackaging : pileePackaging;

  const handleOrder = () => {
    const productName = product === "glacons" ? "Glaçons" : "Glace pilée";
    const pack = packaging || currentPackaging[0];
    const qty = quantity || "1";
    const message = `Bonjour, je souhaite commander ${productName} (${pack}) - Quantité: ${qty} sacs.`;

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
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
                    onClick={() => {
                      setProduct("glacons");
                      setPackaging("");
                    }}
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
                    onClick={() => {
                      setProduct("pilee");
                      setPackaging("");
                    }}
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
                <label className="block text-sm font-medium text-foreground mb-2">Conditionnement</label>
                <div className="flex flex-wrap gap-2">
                  {currentPackaging.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPackaging(p)}
                      className={`px-4 py-2.5 rounded-xl font-heading font-bold text-sm transition-all ${
                        (packaging || currentPackaging[0]) === p
                          ? "bg-gradient-ice text-primary ice-shadow"
                          : "bg-muted text-muted-foreground hover:bg-accent"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Quantité (nombre de sacs)</label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Ex: 10"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-secondary outline-none transition-all"
                />
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
