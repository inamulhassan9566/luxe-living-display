import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts } from "@/data/mockData";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPage = () => (
  <Layout>
    <section className="section-padding light-section">
      <div className="container-main">
        <SectionHeading title="Blog & Insights" subtitle="Stay informed with the latest real estate trends and expert advice" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-card rounded-xl overflow-hidden border border-border/50 card-hover group">
              <div className="overflow-hidden aspect-[16/10]">
                <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <span className="text-xs font-ui font-medium text-primary bg-light-bg px-2.5 py-1 rounded-full">{post.category}</span>
                <h3 className="font-heading text-xl font-bold mt-3 leading-tight">{post.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{post.author}</span>
                </div>
                <Button variant="link" className="px-0 mt-3">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default BlogPage;
