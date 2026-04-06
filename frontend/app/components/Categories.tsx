"use client";

import { motion } from "framer-motion";
import { Dog, Cat, Bone, Package, Heart, Sparkles } from "lucide-react";

const categories = [
  {
    name: "Karma dla psów",
    description: "Sucha, mokra i bezzbożowa karma premium",
    icon: Dog,
    color: "bg-primary-100 text-primary-700",
    count: "120+ produktów",
  },
  {
    name: "Karma dla kotów",
    description: "Najlepsza karma dla wymagających kociaków",
    icon: Cat,
    color: "bg-accent-100 text-accent-700",
    count: "85+ produktów",
  },
  {
    name: "Zabawki i gryzaki",
    description: "Godziny zabawy dla Twojego pupila",
    icon: Bone,
    color: "bg-rose-100 text-rose-700",
    count: "60+ produktów",
  },
  {
    name: "Akcesoria",
    description: "Smycze, obroże, legowiska i więcej",
    icon: Package,
    color: "bg-sky-100 text-sky-700",
    count: "95+ produktów",
  },
  {
    name: "Zdrowie i pielęgnacja",
    description: "Suplementy, szampony i opieka zdrowotna",
    icon: Heart,
    color: "bg-violet-100 text-violet-700",
    count: "40+ produktów",
  },
  {
    name: "Nowości",
    description: "Sprawdź co nowego w naszej ofercie",
    icon: Sparkles,
    color: "bg-emerald-100 text-emerald-700",
    count: "Nowe co tydzień",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Categories() {
  return (
    <section id="kategorie" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Kategorie
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-display text-foreground">
            Znajdź to, czego szuka Twój pupil
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Od najlepszej karmy po akcesoria — mamy wszystko, aby Twój pies lub
            kot był szczęśliwy i zdrowy.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.a
                key={cat.name}
                href="#"
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative p-6 rounded-2xl border border-border bg-white hover:shadow-xl hover:shadow-black/5 transition-shadow"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold font-display text-foreground mb-2">
                  {cat.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {cat.description}
                </p>
                <span className="text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  {cat.count}
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
