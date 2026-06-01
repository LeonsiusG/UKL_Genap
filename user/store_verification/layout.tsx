import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Identity Verification",
  description: "Verify your identity securely",
};

export default function StoreVerificationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Main Content */}
      <main className="px-8 py-12">
        <div className="max-w-3xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
