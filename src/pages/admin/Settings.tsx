import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";

const AdminSettings = () => (
  <AdminLayout>
    <div className="space-y-6">
      <h1 className="font-heading text-2xl font-bold">Settings</h1>

      <div className="bg-background rounded-xl border border-border/50 p-6 space-y-6 max-w-2xl">
        <div>
          <h3 className="font-ui font-semibold mb-4">General Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-ui font-medium text-muted-foreground block mb-1">Site Title</label>
              <input defaultValue="PremiumEstates" className="w-full px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
            <div>
              <label className="text-sm font-ui font-medium text-muted-foreground block mb-1">Contact Email</label>
              <input defaultValue="info@premiumestates.com" className="w-full px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
            <div>
              <label className="text-sm font-ui font-medium text-muted-foreground block mb-1">Phone</label>
              <input defaultValue="(310) 555-0101" className="w-full px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
            <div>
              <label className="text-sm font-ui font-medium text-muted-foreground block mb-1">Office Address</label>
              <textarea defaultValue="123 Luxury Avenue, Beverly Hills, CA 90210" rows={2} className="w-full px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
            </div>
          </div>
        </div>
        <Button>Save Settings</Button>
      </div>
    </div>
  </AdminLayout>
);

export default AdminSettings;
