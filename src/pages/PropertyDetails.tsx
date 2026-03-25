import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { properties, agents } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Maximize, Phone, Mail, ArrowLeft, Check } from "lucide-react";
import { useState } from "react";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === Number(id));
  const [activeImg, setActiveImg] = useState(0);

  if (!property) return (
    <Layout>
      <div className="section-padding text-center container-main">
        <h1 className="font-heading text-3xl font-bold">Property Not Found</h1>
        <Link to="/listings"><Button className="mt-6">Back to Listings</Button></Link>
      </div>
    </Layout>
  );

  const agent = agents.find((a) => a.id === property.agentId)!;
  const formatPrice = (p: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(p);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-main">
          <Link to="/listings" className="inline-flex items-center gap-2 text-sm font-ui text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />Back to Listings
          </Link>

          {/* Gallery */}
          <div className="grid lg:grid-cols-3 gap-4 mb-10">
            <div className="lg:col-span-2 rounded-2xl overflow-hidden aspect-[16/10]">
              <img src={property.images[activeImg]} alt={property.title} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-rows-3 gap-4">
              {property.images.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(i)} className={`rounded-xl overflow-hidden border-2 transition-colors ${i === activeImg ? "border-primary" : "border-transparent"}`}>
                  <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-ui font-medium bg-primary text-primary-foreground">{property.type}</span>
                  <span className="px-3 py-1 rounded-full text-xs font-ui font-medium bg-light-bg text-primary">{property.status}</span>
                </div>
                <h1 className="font-heading text-3xl md:text-4xl font-bold">{property.title}</h1>
                <p className="flex items-center gap-2 text-muted-foreground mt-2 font-ui"><MapPin className="w-4 h-4" />{property.location}</p>
                <p className="text-3xl font-heading font-bold text-primary mt-4">{formatPrice(property.price)}</p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {property.bedrooms > 0 && (
                  <div className="p-4 rounded-xl bg-light-bg text-center">
                    <Bed className="w-5 h-5 mx-auto text-primary" />
                    <p className="font-ui font-semibold mt-2">{property.bedrooms}</p>
                    <p className="text-xs text-muted-foreground">Bedrooms</p>
                  </div>
                )}
                <div className="p-4 rounded-xl bg-light-bg text-center">
                  <Bath className="w-5 h-5 mx-auto text-primary" />
                  <p className="font-ui font-semibold mt-2">{property.bathrooms}</p>
                  <p className="text-xs text-muted-foreground">Bathrooms</p>
                </div>
                <div className="p-4 rounded-xl bg-light-bg text-center">
                  <Maximize className="w-5 h-5 mx-auto text-primary" />
                  <p className="font-ui font-semibold mt-2">{property.area}</p>
                  <p className="text-xs text-muted-foreground">Sq Ft</p>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold mb-3">Description</h2>
                <p className="text-muted-foreground leading-relaxed">{property.description}</p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold mb-3">Features</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {property.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm font-ui">
                      <Check className="w-4 h-4 text-primary" />{f}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Agent Card */}
              <div className="bg-card rounded-xl border border-border/50 p-6">
                <h3 className="font-ui font-semibold mb-4">Listed by</h3>
                <div className="flex items-center gap-4 mb-4">
                  <img src={agent.image} alt={agent.name} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <p className="font-ui font-semibold">{agent.name}</p>
                    <p className="text-xs text-muted-foreground">{agent.specialization}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <a href={`tel:${agent.phone}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="w-4 h-4" />{agent.phone}
                  </a>
                  <a href={`mailto:${agent.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />{agent.email}
                  </a>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="bg-card rounded-xl border border-border/50 p-6">
                <h3 className="font-ui font-semibold mb-4">Send Inquiry</h3>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Your Name" className="w-full px-3 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  <input type="email" placeholder="Email" className="w-full px-3 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  <input type="tel" placeholder="Phone" className="w-full px-3 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  <textarea placeholder="Message" rows={4} className="w-full px-3 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
                  <Button className="w-full">Send Inquiry</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PropertyDetails;
