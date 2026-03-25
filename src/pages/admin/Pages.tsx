import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { adminPages } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2, Eye } from "lucide-react";

const AdminPages = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="font-heading text-2xl font-bold">Page Management</h1>
          <Button onClick={() => setShowForm(!showForm)}><Plus className="w-4 h-4 mr-2" />Create Page</Button>
        </div>

        {showForm && (
          <div className="bg-background rounded-xl border border-border/50 p-6 animate-fade-in-up">
            <h3 className="font-ui font-semibold mb-4">Create New Page</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input placeholder="Page Title" className="w-full px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input placeholder="URL Slug (e.g. /about)" className="w-full px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <textarea placeholder="Page Content" rows={6} className="w-full px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
              <div className="flex gap-2">
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
                <Button>Save Page</Button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-background rounded-xl border border-border/50 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left p-4 font-ui font-semibold text-muted-foreground">Title</th>
                <th className="text-left p-4 font-ui font-semibold text-muted-foreground hidden sm:table-cell">Slug</th>
                <th className="text-left p-4 font-ui font-semibold text-muted-foreground hidden md:table-cell">Status</th>
                <th className="text-left p-4 font-ui font-semibold text-muted-foreground hidden md:table-cell">Last Modified</th>
                <th className="text-right p-4 font-ui font-semibold text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {adminPages.map((page) => (
                <tr key={page.id} className="border-b border-border/30 hover:bg-light-bg transition-colors">
                  <td className="p-4 font-ui font-medium">{page.title}</td>
                  <td className="p-4 text-muted-foreground hidden sm:table-cell">{page.slug}</td>
                  <td className="p-4 hidden md:table-cell">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-ui font-medium ${
                      page.status === "Published" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                    }`}>{page.status}</span>
                  </td>
                  <td className="p-4 text-muted-foreground hidden md:table-cell">{page.lastModified}</td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="icon"><Eye className="w-4 h-4" /></Button>
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

export default AdminPages;
