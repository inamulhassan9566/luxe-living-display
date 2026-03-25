import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { agents } from "@/data/mockData";
import { Target, Eye, Shield, Award, Users, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const values = [
  { icon: Shield, title: "Trust & Integrity", desc: "We build lasting relationships through transparency and honest dealings." },
  { icon: Award, title: "Excellence", desc: "Our commitment to quality sets us apart in the luxury real estate market." },
  { icon: Users, title: "Client-First", desc: "Your goals and satisfaction are at the heart of everything we do." },
  { icon: Clock, title: "Dedication", desc: "Available around the clock to serve your real estate needs." },
];

const AboutPage = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative container-main px-4 lg:px-8 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">About Us</h1>
        <p className="text-primary-foreground/70 mt-4 text-lg max-w-xl mx-auto">Redefining luxury real estate since 2002</p>
      </div>
    </section>

    {/* Intro */}
    <section className="section-padding">
      <div className="container-main grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading title="Our Story" centered={false} />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            PremiumEstates was founded with a singular vision: to elevate the real estate experience for discerning clients. Over two decades, we've grown from a boutique agency into a trusted name in luxury property brokerage, serving clients across the nation's most prestigious markets.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our success is built on a foundation of deep market expertise, personalized service, and an unwavering commitment to our clients' best interests.
          </p>
        </div>
        <img src={heroBg} alt="Our offices" loading="lazy" className="rounded-2xl shadow-xl" width={1920} height={1080} />
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding light-section">
      <div className="container-main grid md:grid-cols-2 gap-10">
        <div className="bg-card p-8 rounded-xl border border-border/50">
          <Target className="w-10 h-10 text-primary mb-4" />
          <h3 className="font-heading text-2xl font-bold">Our Mission</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">To deliver exceptional real estate services that exceed expectations, creating lasting value for our clients through expertise, innovation, and integrity.</p>
        </div>
        <div className="bg-card p-8 rounded-xl border border-border/50">
          <Eye className="w-10 h-10 text-primary mb-4" />
          <h3 className="font-heading text-2xl font-bold">Our Vision</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">To be the most trusted and respected luxury real estate brand, recognized for setting the standard in client satisfaction and property excellence.</p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading title="Why Choose Us" subtitle="What sets PremiumEstates apart from the competition" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {values.map((v) => (
            <div key={v.title} className="text-center p-6 rounded-xl card-hover border border-border/50">
              <div className="w-14 h-14 mx-auto rounded-xl gradient-primary flex items-center justify-center">
                <v.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="font-ui font-semibold mt-4">{v.title}</h4>
              <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section-padding light-section">
      <div className="container-main">
        <SectionHeading title="Meet Our Team" subtitle="Expert agents dedicated to your success" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {agents.map((a) => (
            <div key={a.id} className="bg-card rounded-xl overflow-hidden border border-border/50 card-hover text-center">
              <img src={a.image} alt={a.name} loading="lazy" className="w-full h-56 object-cover" />
              <div className="p-5">
                <h4 className="font-ui font-semibold text-lg">{a.name}</h4>
                <p className="text-sm text-primary font-ui">{a.specialization}</p>
                <p className="text-xs text-muted-foreground mt-1">{a.experience} years experience</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
