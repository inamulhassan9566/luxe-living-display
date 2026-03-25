import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => (
  <Layout>
    <section className="section-padding light-section">
      <div className="container-main">
        <SectionHeading title="Contact Us" subtitle="Get in touch with our team of experts" />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Form */}
          <div className="bg-card p-8 rounded-xl border border-border/50">
            <h3 className="font-heading text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <select className="w-full px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background text-foreground">
                <option>Select Subject</option>
                <option>Buying</option>
                <option>Selling</option>
                <option>Investment</option>
                <option>General Inquiry</option>
              </select>
              <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
              <Button size="lg" className="w-full">Send Message</Button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: "Office Address", value: "123 Luxury Avenue, Beverly Hills, CA 90210" },
                  { icon: Phone, label: "Phone", value: "(310) 555-0101" },
                  { icon: Mail, label: "Email", value: "info@premiumestates.com" },
                  { icon: Clock, label: "Hours", value: "Mon - Fri: 9AM - 6PM\nSat: 10AM - 4PM" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-light-bg flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-ui font-semibold text-sm">{item.label}</p>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-border/30 rounded-xl h-64 flex items-center justify-center">
              <p className="text-muted-foreground font-ui text-sm">Google Map Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ContactPage;
