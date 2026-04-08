import { Phone, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-gradient-navy text-ice-light">
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start gap-4">
          <img src={logo} alt="Iceman Zaghouan" className="h-16 w-auto" />
          <p className="text-sm text-ice-glow/70 max-w-xs">
            Production et livraison de glace de qualité supérieure à Zaghouan et ses environs.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-ice-glow/70">
            <li><a href="/" className="hover:text-accent transition-colors">Accueil</a></li>
            <li><a href="/produits" className="hover:text-accent transition-colors">Produits</a></li>
            <li><a href="/commander" className="hover:text-accent transition-colors">Commander</a></li>
            <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg mb-4">Contact</h4>
          <div className="space-y-3 text-sm">
            <a href="tel:+21625252050" className="flex items-center gap-2 text-ice-glow/70 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" /> +216 25 252 050
            </a>
            <a href="tel:+21626672144" className="flex items-center gap-2 text-ice-glow/70 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" /> +216 26 672 144
            </a>
            <div className="flex items-center gap-2 text-ice-glow/70">
              <MapPin className="w-4 h-4" /> Zaghouan, Tunisie
            </div>
            <div className="flex items-center gap-3 pt-3">
              <a href="https://www.facebook.com/profile.php?id=61574435980331" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-secondary/20 flex items-center justify-center text-ice-glow/70 hover:text-accent hover:bg-secondary/40 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/iceman_zg/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-secondary/20 flex items-center justify-center text-ice-glow/70 hover:text-accent hover:bg-secondary/40 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary/20 mt-10 pt-6 text-center text-xs text-ice-glow/50">
        © {new Date().getFullYear()} Iceman Zaghouan — Tous droits réservés
      </div>
    </div>
  </footer>
);

export default Footer;
