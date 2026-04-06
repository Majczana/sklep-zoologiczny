"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, PawPrint } from "lucide-react";

const posts = [
  {
    title: "Jak wybrać najlepszą karmę dla psa? Poradnik dla początkujących",
    excerpt:
      "Wybór odpowiedniej karmy to jedna z najważniejszych decyzji dla zdrowia Twojego psa. Sprawdź, na co zwrócić uwagę.",
    category: "Psy",
    readTime: "5 min",
    color: "bg-primary-100 text-primary-700",
  },
  {
    title: "10 zabawek, które pokochają koty — ranking 2026",
    excerpt:
      "Twój kot się nudzi? Przygotowaliśmy ranking najlepszych zabawek, które rozbudzą jego instynkt łowcy.",
    category: "Koty",
    readTime: "4 min",
    color: "bg-accent-100 text-accent-700",
  },
  {
    title: "Pielęgnacja sierści — jak dbać o futro pupila zimą",
    excerpt:
      "Zima to trudny czas dla sierści psa i kota. Dowiedz się, jak odpowiednio zadbać o futro swojego zwierzaka.",
    category: "Porady",
    readTime: "6 min",
    color: "bg-violet-100 text-violet-700",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16"
        >
          <div>
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
              Blog
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-display text-foreground">
              Porady dla opiekunów
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl">
              Dzielimy się wiedzą, żebyś mógł zapewnić swojemu pupilowi jak
              najlepszą opiekę.
            </p>
          </div>
          <a
            href="#"
            className="text-primary-600 font-semibold hover:text-primary-700 transition-colors whitespace-nowrap"
          >
            Wszystkie artykuły →
          </a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {posts.map((post) => (
            <motion.a
              key={post.title}
              href="#"
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group block"
            >
              {/* Image placeholder */}
              <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mb-5 overflow-hidden">
                <PawPrint className="w-12 h-12 text-gray-300 group-hover:scale-110 transition-transform" />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${post.color}`}
                >
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-lg font-semibold font-display text-foreground group-hover:text-primary-600 transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>

              <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all">
                Czytaj dalej <ArrowRight className="w-4 h-4" />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
