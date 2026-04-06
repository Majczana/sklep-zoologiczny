"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, PawPrint, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-primary-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <PawPrint className="absolute top-10 left-[10%] w-16 h-16 text-primary-800 rotate-12" />
        <PawPrint className="absolute bottom-10 right-[10%] w-20 h-20 text-primary-800 -rotate-15" />
        <PawPrint className="absolute top-1/2 right-[30%] w-10 h-10 text-primary-800 rotate-45" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.15),_transparent_50%)]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-primary-800 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-primary-300" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
            Nie przegap okazji!
          </h2>
          <p className="mt-4 text-primary-200 text-lg max-w-lg mx-auto">
            Zapisz się do newslettera i otrzymuj informacje o promocjach,
            nowościach i porady dotyczące opieki nad pupilami.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-primary-800 text-primary-200"
            >
              <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium">
                Dziękujemy! Sprawdź swoją skrzynkę mailową.
              </span>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Twój adres e-mail"
                required
                className="flex-1 px-5 py-4 rounded-2xl bg-primary-800 text-white placeholder-primary-400 border border-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-4 rounded-2xl bg-accent-500 text-white font-semibold hover:bg-accent-600 transition-colors active:scale-[0.98] flex items-center justify-center gap-2"
              >
                Zapisz się
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-primary-400">
            Bez spamu. Możesz wypisać się w każdej chwili.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
