import AdminLayout from "@/components/AdminLayout";

const AdminMessages = () => (
  <AdminLayout>
    <div className="space-y-6">
      <h1 className="font-heading text-2xl font-bold">Messages</h1>
      <div className="bg-background rounded-xl border border-border/50 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left p-4 font-ui font-semibold text-muted-foreground">From</th>
              <th className="text-left p-4 font-ui font-semibold text-muted-foreground hidden sm:table-cell">Subject</th>
              <th className="text-left p-4 font-ui font-semibold text-muted-foreground hidden md:table-cell">Date</th>
              <th className="text-left p-4 font-ui font-semibold text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { from: "John Smith", subject: "Interested in Oceanview Villa", date: "Mar 15, 2024", read: false },
              { from: "Maria Garcia", subject: "Inquiry about investment options", date: "Mar 14, 2024", read: true },
              { from: "Alex Johnson", subject: "Schedule viewing for penthouse", date: "Mar 13, 2024", read: false },
            ].map((m, i) => (
              <tr key={i} className={`border-b border-border/30 hover:bg-light-bg transition-colors ${!m.read ? "font-medium" : ""}`}>
                <td className="p-4 font-ui">{m.from}</td>
                <td className="p-4 text-muted-foreground hidden sm:table-cell">{m.subject}</td>
                <td className="p-4 text-muted-foreground hidden md:table-cell">{m.date}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-ui font-medium ${
                    m.read ? "bg-muted/20 text-muted-foreground" : "bg-primary/10 text-primary"
                  }`}>{m.read ? "Read" : "New"}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </AdminLayout>
);

export default AdminMessages;
