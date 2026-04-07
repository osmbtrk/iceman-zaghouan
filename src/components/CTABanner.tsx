import { Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CTABanner = () => (
  <section className="py-16 bg-gradient-ice relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary blur-3xl" />
    </div>
    <div className="container mx-auto px-4 text-center relative">
      <h2 className="font-heading font-black text-3xl md:text-4xl text-primary mb-4">
        Commandez maintenant
      </h2>
      <p className="text-primary/70 mb-8 max-w-lg mx-auto">
        Contactez-nous directement pour passer votre commande
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <a
          href="tel:+21625252050"
          className="flex items-center gap-2 bg-primary text-primary-foreground font-heading font-bold px-8 py-4 rounded-full hover:opacity-90 transition-all"
        >
          <Phone className="w-5 h-5" />
          +216 25 252 050
        </a>
        <a
          href="tel:+21626672144"
          className="flex items-center gap-2 bg-primary text-primary-foreground font-heading font-bold px-8 py-4 rounded-full hover:opacity-90 transition-all"
        >
          <Phone className="w-5 h-5" />
          +216 26 672 144
        </a>
      </div>
      <Link
        to="/commander"
        className="inline-flex items-center gap-2 bg-primary/10 text-primary font-heading font-bold px-8 py-4 rounded-full border-2 border-primary/30 hover:bg-primary/20 transition-all"
      >
        <MessageCircle className="w-5 h-5" />
        Commander via WhatsApp
      </Link>
    </div>
  </section>
);

export default CTABanner;
