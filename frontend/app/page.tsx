import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import Mission from "./components/Mission";
import Testimonials from "./components/Testimonials";
import BlogSection from "./components/BlogSection";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Mission />
        <Testimonials />
        <BlogSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
