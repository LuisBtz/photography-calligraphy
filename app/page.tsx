import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import GallerySection from "@/components/gallery-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contact-section"
import BlogSection from "@/components/blog-section"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navigation />
      <main className="pt-20">
        <HeroSection />
        <GallerySection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}
