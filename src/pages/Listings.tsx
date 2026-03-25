import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import PropertyCard from "@/components/PropertyCard";
import SectionHeading from "@/components/SectionHeading";
import { properties } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

const ListingsPage = () => {
  const [typeFilter, setTypeFilter] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);
  const [bedroomFilter, setBedroomFilter] = useState("Any");
  const [priceRange, setPriceRange] = useState("Any");

  const filtered = useMemo(() => {
    let result = [...properties];
    if (typeFilter !== "All") result = result.filter((p) => p.type === typeFilter);
    if (bedroomFilter !== "Any") result = result.filter((p) => p.bedrooms >= Number(bedroomFilter));
    if (priceRange === "Under $1M") result = result.filter((p) => p.price < 1000000);
    else if (priceRange === "$1M - $2M") result = result.filter((p) => p.price >= 1000000 && p.price <= 2000000);
    else if (priceRange === "$2M - $5M") result = result.filter((p) => p.price >= 2000000 && p.price <= 5000000);
    else if (priceRange === "$5M+") result = result.filter((p) => p.price > 5000000);

    if (sortBy === "price-low") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high") result.sort((a, b) => b.price - a.price);
    else result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return result;
  }, [typeFilter, sortBy, bedroomFilter, priceRange]);

  const SelectBox = ({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) => (
    <div>
      <label className="text-xs font-ui font-medium text-muted-foreground mb-1 block">{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background text-foreground">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );

  return (
    <Layout>
      <section className="section-padding light-section">
        <div className="container-main">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <SectionHeading title="Active Listings" subtitle={`${filtered.length} properties available`} centered={false} />
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="self-start sm:self-auto">
              <SlidersHorizontal className="w-4 h-4 mr-2" />Filters
            </Button>
          </div>

          {showFilters && (
            <div className="mt-6 p-6 bg-card rounded-xl border border-border/50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up">
              <SelectBox label="Property Type" value={typeFilter} onChange={setTypeFilter} options={["All", "Villa", "Apartment", "Penthouse", "Commercial", "Condo"]} />
              <SelectBox label="Price Range" value={priceRange} onChange={setPriceRange} options={["Any", "Under $1M", "$1M - $2M", "$2M - $5M", "$5M+"]} />
              <SelectBox label="Bedrooms" value={bedroomFilter} onChange={setBedroomFilter} options={["Any", "1", "2", "3", "4", "5"]} />
              <SelectBox label="Sort By" value={sortBy} onChange={setSortBy} options={["newest", "price-low", "price-high"]} />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {filtered.map((p) => <PropertyCard key={p.id} property={p} />)}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-20 font-ui">No properties match your filters.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ListingsPage;
