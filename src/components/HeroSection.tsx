import { MessageCircle, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt=""
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Simple, even dark overlay for clean readability over the mountain photo */}
      <div className="absolute inset-0 bg-navy-deep/70" />
    </div>

    <div className="relative container mx-auto px-4 text-center pt-20">
      <img
        src={logo}
        alt="Iceman Zaghouan"
        className="mx-auto h-48 md:h-64 w-auto mb-8 drop-shadow-2xl animate-float"
      />

      <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-ice-light max-w-3xl mx-auto mb-5">
        Production et livraison de glace en{" "}
        <span className="text-accent">Tunisie</span>
      </h1>

      <p className="text-base md:text-lg text-ice-glow/80 max-w-xl mx-auto mb-10">
        Glaçons et glace pilée de qualité supérieure pour professionnels
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          to="/commander"
          className="flex items-center gap-2 bg-gradient-ice text-primary font-heading font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          <ShoppingCart className="w-5 h-5" />
          Commander
        </Link>
        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-ice-light/30 text-ice-light font-heading font-semibold px-7 py-3 rounded-full hover:bg-ice-light/10 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
