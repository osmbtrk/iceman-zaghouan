import { useState } from "react";
import { Phone, MapPin, MessageCircle, Send, Facebook, Instagram } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Nom: ${form.name}\nTéléphone: ${form.phone}\nMessage: ${form.message}`;
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-navy">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-black text-4xl md:text-5xl text-ice-light mb-4">
            Contactez-<span className="text-gradient-ice">nous</span>
          </h1>
          <p className="text-ice-glow/70 max-w-xl mx-auto">
            Nous sommes à votre disposition pour toute demande
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Informations</h2>
                <div className="space-y-4">
                  <a href="tel:+21625252050" className="flex items-center gap-3 text-foreground hover:text-secondary transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-gradient-ice flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Téléphone</p>
                      <p className="font-semibold">+216 25 252 050</p>
                    </div>
                  </a>
                  <a href="tel:+21626672144" className="flex items-center gap-3 text-foreground hover:text-secondary transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-gradient-ice flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Téléphone 2</p>
                      <p className="font-semibold">+216 26 672 144</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-ice flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Adresse</p>
                      <p className="font-semibold text-foreground">Zaghouan, Tunisie</p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] font-heading font-bold px-6 py-4 rounded-xl hover:opacity-90 transition-all w-full"
              >
                <MessageCircle className="w-5 h-5" />
                Écrire sur WhatsApp
              </a>

              <div className="frost-glass bg-gradient-navy rounded-2xl p-6">
                <p className="text-sm text-ice-glow/70 mb-1">Gérant</p>
                <p className="font-heading font-bold text-ice-light text-lg">Atef Ben Torkia</p>
              </div>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Envoyez un message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Nom</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Téléphone</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                    placeholder="+216 XX XXX XXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Votre message..."
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-ice text-primary font-heading font-bold py-4 rounded-xl hover:opacity-90 transition-all"
                >
                  <Send className="w-4 h-4" />
                  Envoyer via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
