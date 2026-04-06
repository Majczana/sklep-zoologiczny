"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart, PawPrint, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[10%] w-20 h-20 rounded-full bg-primary-100 opacity-60"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-[5%] w-32 h-32 rounded-full bg-accent-100 opacity-40"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-[20%] w-16 h-16 rounded-full bg-primary-200 opacity-50"
        />
        {/* Paw prints scattered */}
        {[
          { top: "15%", left: "8%", rotate: -15, delay: 0 },
          { top: "60%", left: "85%", rotate: 30, delay: 1 },
          { top: "75%", left: "15%", rotate: -30, delay: 2 },
          { top: "20%", left: "75%", rotate: 15, delay: 0.5 },
        ].map((paw, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ delay: 1 + paw.delay, duration: 0.5 }}
            className="absolute"
            style={{ top: paw.top, left: paw.left }}
          >
            <PawPrint
              className="w-12 h-12 text-primary-400"
              style={{ transform: `rotate(${paw.rotate}deg)` }}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <Heart className="w-4 h-4 fill-primary-500 text-primary-500" />
              1% zysku przekazujemy na pomoc zwierzętom
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight text-foreground"
            >
              Wszystko dla{" "}
              <span className="text-primary-600">Twojego</span>{" "}
              <span className="relative">
                pupila
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute bottom-1 left-0 h-3 bg-accent-200 -z-10 rounded-sm"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              Najlepsza karma, akcesoria i zabawki dla psów i kotów. Zoogród
              narodził się z miłości do zwierząt — bo każdy pupil zasługuje na to,
              co najlepsze.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#produkty"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-primary-600 text-white font-semibold text-base hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/25 active:scale-[0.98]"
              >
                Odkryj produkty
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#misja"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border-2 border-border text-foreground font-semibold text-base hover:border-primary-300 hover:bg-primary-50 transition-all active:scale-[0.98]"
              >
                Nasza historia
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex items-center gap-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-accent-500 fill-accent-500"
                    />
                  ))}
                </div>
                <span className="font-medium">4.9/5</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <span>Darmowa dostawa od 150 zł</span>
              <div className="hidden sm:block h-4 w-px bg-border" />
              <span className="hidden sm:block">Szybka wysyłka 24h</span>
            </motion.div>
          </div>

          {/* Hero image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main image placeholder */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <PawPrint className="w-24 h-24 text-primary-400 mx-auto mb-4" />
                  <p className="text-primary-600 font-medium text-lg">
                    Zdjęcie pupila
                  </p>
                  <p className="text-primary-400 text-sm mt-1">800 × 800px</p>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg shadow-black/5 p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center">
                  <Star className="w-5 h-5 text-accent-600 fill-accent-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Bestseller
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Karma premium
                  </p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg shadow-black/5 p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary-600 fill-primary-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    +2 500
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Zadowolonych klientów
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
