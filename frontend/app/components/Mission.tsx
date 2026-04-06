"use client";

import { motion } from "framer-motion";
import { Heart, PawPrint, Users, TrendingUp } from "lucide-react";

const stats = [
  { value: "1%", label: "Zysku na pomoc zwierzętom", icon: Heart },
  { value: "500+", label: "Zwierząt, którym pomogliśmy", icon: PawPrint },
  { value: "2 500+", label: "Zadowolonych klientów", icon: Users },
  { value: "5 lat", label: "Doświadczenia", icon: TrendingUp },
];

export default function Mission() {
  return (
    <section id="misja" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image / visual side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary-100 via-primary-50 to-accent-50 flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <Heart className="w-20 h-20 text-primary-400 mx-auto mb-4" />
                <p className="text-primary-600 font-medium text-lg">
                  Zdjęcie z akcji pomocy
                </p>
                <p className="text-primary-400 text-sm mt-1">960 × 720px</p>
              </div>

              {/* Decorative paw prints */}
              <PawPrint className="absolute top-6 right-8 w-8 h-8 text-primary-200 rotate-12" />
              <PawPrint className="absolute bottom-10 left-6 w-6 h-6 text-primary-200 -rotate-20" />
            </div>

            {/* Floating stat card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl shadow-black/10 p-5"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary-600 fill-primary-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold font-display text-foreground">
                    1%
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Zysku na pomoc
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
              Nasza misja
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-display text-foreground leading-tight">
              Od pomocy zwierzętom
              <br />
              do <span className="text-primary-600">Zoogrodu</span>
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Zoogród nie powstał jako typowy sklep. Wszystko zaczęło się od
                pasji i chęci pomocy zwierzętom w potrzebie. Przez lata
                pomagaliśmy schroniskom, organizowaliśmy zbiórki i szukaliśmy
                domów dla porzuconych pupili.
              </p>
              <p>
                Z tej pasji narodził się pomysł na sklep, który nie tylko oferuje
                najlepsze produkty dla czworonogów, ale również aktywnie wspiera
                zwierzęta w potrzebie.{" "}
                <strong className="text-foreground">
                  1% całego zysku Zoogrodu przekazujemy na pomoc zwierzętom
                </strong>{" "}
                — bo wierzymy, że każdy zakup może zmieniać świat na lepsze.
              </p>
              <p>
                Kupując u nas, nie tylko zapewniasz swojemu pupilowi to, co
                najlepsze — ale również pomagasz tym, które dopiero szukają
                swojego domu.
              </p>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-2xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/25 active:scale-[0.98]"
            >
              <Heart className="w-4 h-4" />
              Dowiedz się więcej o naszej misji
            </a>
          </motion.div>
        </div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-muted"
              >
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <p className="text-3xl font-bold font-display text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
