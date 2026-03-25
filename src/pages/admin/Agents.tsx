import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { agents } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2 } from "lucide-react";

const AdminAgents = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="font-heading text-2xl font-bold">Agent Management</h1>
          <Button onClick={() => setShowForm(!showForm)}><Plus className="w-4 h-4 mr-2" />Add Agent</Button>
        </div>

        {showForm && (
          <div className="bg-background rounded-xl border border-border/50 p-6 animate-fade-in-up">
            <h3 className="font-ui font-semibold mb-4">Add New Agent</h3>
            <form className="grid sm:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
              <input placeholder="Full Name" className="px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input placeholder="Specialization" className="px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input placeholder="Phone" className="px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input placeholder="Email" type="email" className="px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <textarea placeholder="Bio" rows={3} className="sm:col-span-2 px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
              <div className="sm:col-span-2 flex gap-2">
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
                <Button>Save Agent</Button>
              </div>
            </form>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((a) => (
            <div key={a.id} className="bg-background rounded-xl border border-border/50 overflow-hidden">
              <img src={a.image} alt={a.name} className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-4">
                <h4 className="font-ui font-semibold">{a.name}</h4>
                <p className="text-xs text-primary font-ui">{a.specialization}</p>
                <p className="text-xs text-muted-foreground mt-1">{a.listings} listings · {a.experience}y exp</p>
                <div className="flex gap-2 mt-3">
                  <Button variant="outline" size="sm" className="flex-1"><Pencil className="w-3 h-3 mr-1" />Edit</Button>
                  <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive"><Trash2 className="w-3 h-3" /></Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminAgents;
