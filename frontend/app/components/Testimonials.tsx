"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anna Kowalska",
    pet: "Właścicielka Maxa (Golden Retriever)",
    text: "Odkąd kupuję karmę w Zoogrodzie, Max jest pełen energii i ma piękną sierść. Jakość produktów jest rewelacyjna, a dostawa zawsze na czas!",
    rating: 5,
    initials: "AK",
  },
  {
    name: "Tomasz Nowak",
    pet: "Właściciel Mruczki (Kot perski)",
    text: "Mruczka jest bardzo wybredna, ale karma z Zoogrodu jej smakuje. Obsługa klienta na najwyższym poziomie — zawsze doradzą najlepszy produkt.",
    rating: 5,
    initials: "TN",
  },
  {
    name: "Karolina Wiśniewska",
    pet: "Właścicielka Burego i Łatki",
    text: "Świetne ceny i ogromny wybór. Podoba mi się, że 1% idzie na pomoc zwierzętom — kupuję z czystym sumieniem. Polecam każdemu właścicielowi pupila!",
    rating: 5,
    initials: "KW",
  },
  {
    name: "Marek Zieliński",
    pet: "Właściciel Reksa (Owczarek niemiecki)",
    text: "Legowisko ortopedyczne, które tu kupiłem, to strzał w dziesiątkę. Reks w końcu śpi spokojnie, a jego stawy dziękują. Jakość na medal!",
    rating: 5,
    initials: "MZ",
  },
  {
    name: "Ewa Kamińska",
    pet: "Właścicielka Kici i Puszka",
    text: "Drapak z Zoogrodu przetrwał dwóch kotów jednocześnie — to mówi samo za siebie! Świetna jakość i szybka dostawa. Na pewno wrócę po więcej.",
    rating: 4,
    initials: "EK",
  },
  {
    name: "Piotr Dąbrowski",
    pet: "Właściciel Lucka (Labrador)",
    text: "Zamówiłem zestaw zabawek dla Lucka i był zachwycony. Solidne materiały, Lucky nie zdołał ich zniszczyć w pierwszy dzień — co u niego jest rekordem!",
    rating: 5,
    initials: "PD",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Testimonials() {
  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Opinie
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-display text-foreground">
            Co mówią nasi klienci
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Dołącz do tysięcy zadowolonych właścicieli, którzy ufają Zoogrodowi.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg hover:shadow-black/5 transition-shadow"
            >
              <Quote className="w-8 h-8 text-primary-200 mb-4" />

              <p className="text-muted-foreground leading-relaxed text-sm">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex mt-4 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < t.rating
                        ? "text-accent-500 fill-accent-500"
                        : "text-gray-200 fill-gray-200"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-sm font-bold text-primary-700">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.pet}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
