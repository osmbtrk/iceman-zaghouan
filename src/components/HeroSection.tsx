import { MessageCircle, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-navy/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent" />
    </div>

    <div className="relative container mx-auto px-4 text-center pt-20">
      <img
        src={logo}
        alt="Iceman Zaghouan"
        className="mx-auto h-48 md:h-64 w-auto mb-8 animate-float drop-shadow-2xl"
      />

      <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-6xl leading-tight text-ice-light max-w-4xl mx-auto mb-4">
        Production et livraison de glace en{" "}
        <span className="text-gradient-ice">Tunisie</span>
      </h1>

      <p className="text-lg md:text-xl text-ice-glow/80 max-w-2xl mx-auto mb-10">
        Glaçons et glace pilée de qualité supérieure pour professionnels
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/commander"
          className="flex items-center gap-2 bg-gradient-ice text-primary font-heading font-bold text-lg px-8 py-4 rounded-full hover:opacity-90 transition-all hover:scale-105 ice-shadow"
        >
          <ShoppingCart className="w-5 h-5" />
          Commander maintenant
        </Link>
        <a
          href={`https://wa.me/21625252050?text=${encodeURIComponent("Bonjour, je souhaite commander de la glace.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 frost-glass text-ice-light font-heading font-bold text-lg px-8 py-4 rounded-full hover:bg-secondary/20 transition-all"
        >
          <MessageCircle className="w-5 h-5" />
          Contact WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
