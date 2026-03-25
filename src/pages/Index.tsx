import { Link } from "react-router-dom";
import { Search, Home, DollarSign, TrendingUp, MessageCircle, Star, ArrowRight, Bed, Bath, Maximize, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PropertyCard from "@/components/PropertyCard";
import SectionHeading from "@/components/SectionHeading";
import { properties, testimonials, services } from "@/data/mockData";
import heroBg from "@/assets/hero-bg.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const iconMap: Record<string, any> = { Home, DollarSign, Building: Home, TrendingUp };

const HomePage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.querySelectorAll(".hero-anim"), { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power3.out" });
    }
  }, []);

  useEffect(() => {
    if (!featuredRef.current) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          gsap.fromTo(e.target.querySelectorAll(".card-anim"), { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power2.out" });
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });
    observer.observe(featuredRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Luxury property" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="hero-anim opacity-0 text-primary-foreground/80 font-ui text-sm tracking-widest uppercase mb-4">Premium Real Estate Agency</p>
          <h1 className="hero-anim opacity-0 font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            Find Your Dream<br /><span className="text-primary">Property</span>
          </h1>
          <p className="hero-anim opacity-0 text-primary-foreground/70 text-lg md:text-xl mt-6 max-w-2xl mx-auto font-body">
            Discover luxury homes, premium apartments, and exclusive investment opportunities curated just for you.
          </p>

          {/* Search Bar */}
          <div className="hero-anim opacity-0 mt-10 bg-background/95 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="text-left">
                <label className="text-xs font-ui font-medium text-muted-foreground mb-1 block">Location</label>
                <input type="text" placeholder="City or ZIP" className="w-full px-3 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground" />
              </div>
              <div className="text-left">
                <label className="text-xs font-ui font-medium text-muted-foreground mb-1 block">Budget</label>
                <select className="w-full px-3 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground bg-background">
                  <option>Any Price</option>
                  <option>$500K - $1M</option>
                  <option>$1M - $2M</option>
                  <option>$2M - $5M</option>
                  <option>$5M+</option>
                </select>
              </div>
              <div className="text-left">
                <label className="text-xs font-ui font-medium text-muted-foreground mb-1 block">Property Type</label>
                <select className="w-full px-3 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground bg-background">
                  <option>All Types</option>
                  <option>Villa</option>
                  <option>Apartment</option>
                  <option>Penthouse</option>
                  <option>Commercial</option>
                  <option>Condo</option>
                </select>
              </div>
              <div className="flex items-end">
                <Button className="w-full" size="lg">
                  <Search className="w-4 h-4 mr-2" />Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section ref={featuredRef} className="section-padding">
        <div className="container-main">
          <SectionHeading title="Featured Listings" subtitle="Explore our handpicked selection of premium properties" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {properties.slice(0, 6).map((p) => (
              <div key={p.id} className="card-anim opacity-0">
                <PropertyCard property={p} />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/listings">
              <Button variant="outline" size="lg">View All Listings <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding light-section">
        <div className="container-main">
          <SectionHeading title="Our Services" subtitle="Comprehensive real estate solutions tailored to your needs" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] || Home;
              return (
                <div key={i} className="bg-card p-6 rounded-xl border border-border/50 card-hover text-center">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-ui font-semibold text-lg mt-4">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container-main grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading title="Why Choose PremiumEstates?" centered={false} />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              With over two decades of experience in luxury real estate, we've built a reputation for excellence, integrity, and outstanding results. Our team of expert agents combines market knowledge with personalized service to deliver exceptional outcomes.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[{ n: "500+", l: "Properties Sold" }, { n: "15+", l: "Years Experience" }, { n: "98%", l: "Client Satisfaction" }, { n: "50+", l: "Expert Agents" }].map((s) => (
                <div key={s.l}>
                  <p className="text-3xl font-heading font-bold text-primary">{s.n}</p>
                  <p className="text-sm text-muted-foreground font-ui">{s.l}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-block mt-8">
              <Button size="lg">Learn More <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </Link>
          </div>
          <div className="relative">
            <img src={heroBg} alt="About Premium Estates" loading="lazy" className="rounded-2xl shadow-2xl w-full" width={1920} height={1080} />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl gradient-primary opacity-20" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding light-section">
        <div className="container-main">
          <SectionHeading title="What Our Clients Say" subtitle="Trusted by hundreds of satisfied homeowners and investors" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-card p-6 rounded-xl border border-border/50 card-hover">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic">"{t.content}"</p>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <p className="font-ui font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-primary text-center">
        <div className="container-main">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Ready to Find Your Dream Home?</h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Book a free consultation with our expert agents and start your journey today.
          </p>
          <Link to="/contact" className="inline-block mt-8">
            <Button variant="outline-hero" size="xl">
              <MessageCircle className="w-5 h-5 mr-2" />Book Property Consultation
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
