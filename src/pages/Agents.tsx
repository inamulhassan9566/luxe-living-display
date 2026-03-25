import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { agents } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Award } from "lucide-react";

const AgentsPage = () => (
  <Layout>
    <section className="section-padding light-section">
      <div className="container-main">
        <SectionHeading title="Our Agents" subtitle="Meet the professionals who make your real estate dreams a reality" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {agents.map((a) => (
            <div key={a.id} className="bg-card rounded-xl overflow-hidden border border-border/50 card-hover">
              <div className="relative">
                <img src={a.image} alt={a.name} loading="lazy" className="w-full h-64 object-cover" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-foreground/60 to-transparent p-4">
                  <h3 className="font-ui font-semibold text-primary-foreground text-lg">{a.name}</h3>
                  <p className="text-primary-foreground/80 text-sm">{a.specialization}</p>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Award className="w-4 h-4 text-primary" />{a.experience}y exp</span>
                  <span>{a.listings} listings</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{a.bio}</p>
                <div className="flex gap-2 pt-2">
                  <a href={`tel:${a.phone}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full"><Phone className="w-3.5 h-3.5 mr-1" />Call</Button>
                  </a>
                  <a href={`mailto:${a.email}`} className="flex-1">
                    <Button size="sm" className="w-full"><Mail className="w-3.5 h-3.5 mr-1" />Email</Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default AgentsPage;
