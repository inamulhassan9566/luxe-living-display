import AdminLayout from "@/components/AdminLayout";
import { properties } from "@/data/mockData";
import { Building2, Home, Users, MessageSquare, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

const stats = [
  { label: "Total Properties", value: "156", change: "+12%", up: true, icon: Building2, color: "bg-primary/10 text-primary" },
  { label: "Active Listings", value: "89", change: "+5%", up: true, icon: Home, color: "bg-secondary/10 text-secondary" },
  { label: "Total Leads", value: "324", change: "+18%", up: true, icon: Users, color: "bg-accent/10 text-accent" },
  { label: "Messages", value: "47", change: "-3%", up: false, icon: MessageSquare, color: "bg-muted/20 text-muted-foreground" },
];

const recentActivity = [
  { action: "New listing added", property: "Oceanview Modern Villa", time: "2 hours ago" },
  { action: "Price updated", property: "Downtown Luxury Penthouse", time: "5 hours ago" },
  { action: "New inquiry received", property: "Mediterranean Estate", time: "1 day ago" },
  { action: "Listing sold", property: "Tuscan-Inspired Villa", time: "2 days ago" },
  { action: "New agent registered", property: "Michael Torres", time: "3 days ago" },
];

const AdminDashboard = () => (
  <AdminLayout>
    <div className="space-y-6">
      <h1 className="font-heading text-2xl font-bold">Dashboard</h1>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-background rounded-xl border border-border/50 p-5">
            <div className="flex items-center justify-between">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${s.color}`}>
                <s.icon className="w-5 h-5" />
              </div>
              <span className={`flex items-center gap-1 text-xs font-ui font-medium ${s.up ? "text-green-600" : "text-red-500"}`}>
                {s.change} {s.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
              </span>
            </div>
            <p className="mt-3 text-2xl font-heading font-bold">{s.value}</p>
            <p className="text-sm text-muted-foreground font-ui">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Chart Placeholder + Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-background rounded-xl border border-border/50 p-6">
          <h3 className="font-ui font-semibold mb-4">Listing Activity</h3>
          <div className="h-64 flex items-center justify-center bg-light-bg rounded-lg">
            <div className="text-center">
              <TrendingUp className="w-10 h-10 text-primary/30 mx-auto" />
              <p className="text-sm text-muted-foreground mt-2 font-ui">Chart placeholder</p>
            </div>
          </div>
        </div>

        <div className="bg-background rounded-xl border border-border/50 p-6">
          <h3 className="font-ui font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((a, i) => (
              <div key={i} className="flex items-start gap-3 pb-3 border-b border-border/30 last:border-0">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <p className="text-sm font-ui"><span className="font-medium">{a.action}</span> — {a.property}</p>
                  <p className="text-xs text-muted-foreground">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
);

export default AdminDashboard;
