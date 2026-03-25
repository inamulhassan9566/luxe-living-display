import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/mockData";
import { Home, DollarSign, Building2, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, any> = { Home, DollarSign, Building: Building2, TrendingUp };

const ServicesPage = () => (
  <Layout>
    <section className="section-padding light-section">
      <div className="container-main">
        <SectionHeading title="Our Services" subtitle="End-to-end real estate solutions for buyers, sellers, and investors" />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] || Home;
            return (
              <div key={i} className="bg-card p-8 rounded-xl border border-border/50 card-hover flex gap-6">
                <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold">{s.title}</h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed text-sm">{s.description}</p>
                  <Link to="/contact" className="inline-flex items-center gap-1 text-primary font-ui text-sm font-medium mt-4 hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center gradient-primary rounded-2xl p-12">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground">Need a Custom Solution?</h2>
          <p className="text-primary-foreground/80 mt-3 max-w-lg mx-auto">Contact our team for personalized real estate advisory tailored to your unique needs.</p>
          <Link to="/contact" className="inline-block mt-6">
            <Button variant="outline-hero" size="lg">Get in Touch</Button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default ServicesPage;
