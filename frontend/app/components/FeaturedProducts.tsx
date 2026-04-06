"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Star, Heart, PawPrint } from "lucide-react";

const products = [
  {
    name: "Karma Premium Wołowina",
    brand: "NaturDog",
    price: "89,99 zł",
    oldPrice: "109,99 zł",
    rating: 4.8,
    reviews: 124,
    badge: "Bestseller",
    badgeColor: "bg-accent-500",
    animal: "Pies",
  },
  {
    name: "Karma Łosoś & Ryż",
    brand: "FelixCat",
    price: "74,99 zł",
    oldPrice: null,
    rating: 4.9,
    reviews: 89,
    badge: "Nowość",
    badgeColor: "bg-primary-500",
    animal: "Kot",
  },
  {
    name: "Smycz automatyczna 5m",
    brand: "WalkPro",
    price: "59,99 zł",
    oldPrice: "79,99 zł",
    rating: 4.7,
    reviews: 56,
    badge: "-25%",
    badgeColor: "bg-rose-500",
    animal: "Pies",
  },
  {
    name: "Legowisko ortopedyczne L",
    brand: "ComfyPet",
    price: "149,99 zł",
    oldPrice: null,
    rating: 4.9,
    reviews: 203,
    badge: "Top",
    badgeColor: "bg-violet-500",
    animal: "Pies / Kot",
  },
  {
    name: "Drapak wieża 120cm",
    brand: "CatSpace",
    price: "199,99 zł",
    oldPrice: "249,99 zł",
    rating: 4.6,
    reviews: 67,
    badge: "-20%",
    badgeColor: "bg-rose-500",
    animal: "Kot",
  },
  {
    name: "Zestaw zabawek dla psa",
    brand: "PlayTime",
    price: "45,99 zł",
    oldPrice: null,
    rating: 4.8,
    reviews: 142,
    badge: "Hit",
    badgeColor: "bg-accent-500",
    animal: "Pies",
  },
  {
    name: "Szampon łagodzący 500ml",
    brand: "PetCare",
    price: "34,99 zł",
    oldPrice: null,
    rating: 4.5,
    reviews: 38,
    badge: null,
    badgeColor: null,
    animal: "Pies / Kot",
  },
  {
    name: "Karma kurczak grain-free",
    brand: "NaturDog",
    price: "94,99 zł",
    oldPrice: "119,99 zł",
    rating: 4.9,
    reviews: 176,
    badge: "-21%",
    badgeColor: "bg-rose-500",
    animal: "Pies",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function FeaturedProducts() {
  return (
    <section id="produkty" className="py-24 bg-muted">
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
              Polecane
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-display text-foreground">
              Wybrane dla Twojego pupila
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl">
              Najczęściej wybierane produkty przez naszych klientów i ich
              czworonożnych przyjaciół.
            </p>
          </div>
          <a
            href="#"
            className="text-primary-600 font-semibold hover:text-primary-700 transition-colors whitespace-nowrap"
          >
            Zobacz wszystkie →
          </a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-shadow"
            >
              {/* Image placeholder */}
              <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <PawPrint className="w-12 h-12 text-gray-300" />
                {product.badge && (
                  <span
                    className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-bold text-white rounded-lg ${product.badgeColor}`}
                  >
                    {product.badge}
                  </span>
                )}
                <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-rose-500 transition-colors opacity-0 group-hover:opacity-100">
                  <Heart className="w-4.5 h-4.5" />
                </button>
                <span className="absolute bottom-3 left-3 text-xs font-medium text-muted-foreground bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-md">
                  {product.animal}
                </span>
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  {product.brand}
                </p>
                <h3 className="mt-1 text-sm font-semibold text-foreground line-clamp-2 min-h-[2.5rem]">
                  {product.name}
                </h3>

                <div className="flex items-center gap-1.5 mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(product.rating)
                            ? "text-accent-500 fill-accent-500"
                            : "text-gray-200 fill-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-foreground">
                      {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                  <button className="w-9 h-9 rounded-xl bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700 transition-colors active:scale-95">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
