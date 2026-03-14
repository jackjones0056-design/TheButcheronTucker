import { PageShell } from "@/components/layout/page-shell";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  return (
    <PageShell title="Contact" description="Make it easy for customers to call, email, and find the shop.">
      <div className="space-y-2 rounded-xl border border-black/10 bg-white p-6 text-sm">
        <p><strong>Phone:</strong> {siteConfig.phone}</p>
        <p><strong>Email:</strong> {siteConfig.email}</p>
        <p><strong>Address:</strong> 123 Tucker Ave, Your City</p>
        <p><strong>Hours:</strong> Mon-Sat 8am-6pm</p>
      </div>
    </PageShell>
  );
}
