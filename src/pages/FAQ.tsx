import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { faqs } from "@/data/mockData";
import { ChevronDown } from "lucide-react";

const categories = ["All", "Buying", "Selling", "Loans"];

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? faqs : faqs.filter((f) => f.category === activeCategory);

  return (
    <Layout>
      <section className="section-padding light-section">
        <div className="container-main max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" subtitle="Find answers to common real estate questions" />

          <div className="flex gap-2 mt-8 justify-center flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => { setActiveCategory(c); setOpenIndex(null); }}
                className={`px-4 py-2 rounded-full text-sm font-ui font-medium transition-colors ${
                  activeCategory === c ? "gradient-primary text-primary-foreground" : "bg-card border border-border text-foreground hover:border-primary/30"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 space-y-3">
            {filtered.map((faq, i) => (
              <div key={i} className="bg-card rounded-xl border border-border/50 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-ui font-medium text-foreground hover:text-primary transition-colors"
                >
                  {faq.question}
                  <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed animate-fade-in-up">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQPage;
