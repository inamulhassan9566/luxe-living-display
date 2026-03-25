import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { properties } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2, Eye, Search } from "lucide-react";
import { Link } from "react-router-dom";

const AdminProperties = () => {
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const filtered = properties.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) || p.location.toLowerCase().includes(search.toLowerCase())
  );

  const formatPrice = (p: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(p);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="font-heading text-2xl font-bold">Properties</h1>
          <Button onClick={() => setShowForm(!showForm)}><Plus className="w-4 h-4 mr-2" />Add Property</Button>
        </div>

        {/* Add Property Form */}
        {showForm && (
          <div className="bg-background rounded-xl border border-border/50 p-6 animate-fade-in-up">
            <h3 className="font-ui font-semibold mb-4">Add New Property</h3>
            <form className="grid sm:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
              <input placeholder="Property Title" className="px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input placeholder="Price" type="number" className="px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input placeholder="Location" className="px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <select className="px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background text-foreground">
                <option>Villa</option><option>Apartment</option><option>Penthouse</option><option>Commercial</option><option>Condo</option>
              </select>
              <input placeholder="Bedrooms" type="number" className="px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input placeholder="Bathrooms" type="number" className="px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input placeholder="Area (sqft)" type="number" className="px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <div className="flex items-end">
                <Button type="button" variant="outline" className="mr-2" onClick={() => setShowForm(false)}>Cancel</Button>
                <Button>Save Property</Button>
              </div>
              <textarea placeholder="Description" rows={3} className="sm:col-span-2 px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
            </form>
          </div>
        )}

        {/* Search */}
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search properties..." className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
        </div>

        {/* Table */}
        <div className="bg-background rounded-xl border border-border/50 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left p-4 font-ui font-semibold text-muted-foreground">Property</th>
                <th className="text-left p-4 font-ui font-semibold text-muted-foreground hidden sm:table-cell">Location</th>
                <th className="text-left p-4 font-ui font-semibold text-muted-foreground">Price</th>
                <th className="text-left p-4 font-ui font-semibold text-muted-foreground hidden md:table-cell">Status</th>
                <th className="text-right p-4 font-ui font-semibold text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id} className="border-b border-border/30 hover:bg-light-bg transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img src={p.image} alt="" className="w-10 h-10 rounded-lg object-cover hidden sm:block" />
                      <span className="font-ui font-medium">{p.title}</span>
                    </div>
                  </td>
                  <td className="p-4 text-muted-foreground hidden sm:table-cell">{p.location}</td>
                  <td className="p-4 font-ui font-semibold">{formatPrice(p.price)}</td>
                  <td className="p-4 hidden md:table-cell">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-ui font-medium ${
                      p.status === "Active" ? "bg-green-100 text-green-700" :
                      p.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
                      "bg-muted/20 text-muted-foreground"
                    }`}>{p.status}</span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Link to={`/property/${p.id}`}>
                        <Button variant="ghost" size="icon"><Eye className="w-4 h-4" /></Button>
                      </Link>
                      <Button variant="ghost" size="icon"><Pencil className="w-4 h-4" /></Button>
                      <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive"><Trash2 className="w-4 h-4" /></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminProperties;
