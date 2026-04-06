import { PawPrint, Heart, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Sklep: [
    { label: "Karma dla psów", href: "#" },
    { label: "Karma dla kotów", href: "#" },
    { label: "Akcesoria", href: "#" },
    { label: "Zabawki", href: "#" },
    { label: "Nowości", href: "#" },
  ],
  Informacje: [
    { label: "O nas", href: "#misja" },
    { label: "Nasza misja", href: "#misja" },
    { label: "Blog", href: "#blog" },
    { label: "Regulamin", href: "#" },
    { label: "Polityka prywatności", href: "#" },
  ],
  "Obsługa klienta": [
    { label: "Kontakt", href: "#kontakt" },
    { label: "Dostawa i zwroty", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Reklamacje", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center">
                <PawPrint className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold font-display">
                Zoo<span className="text-primary-400">gród</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-6">
              Nowoczesny sklep zoologiczny z misją. Oferujemy najlepsze produkty
              dla psów i kotów, przekazując 1% zysku na pomoc zwierzętom.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+48123456789"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +48 123 456 789
              </a>
              <a
                href="mailto:kontakt@zoogrod.pl"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                kontakt@zoogrod.pl
              </a>
              <p className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                ul. Zwierzęca 12, 00-001 Warszawa
              </p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Zoogród. Wszystkie prawa zastrzeżone.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Stworzone z{" "}
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> dla
            zwierząt
          </p>
        </div>
      </div>
    </footer>
  );
}
