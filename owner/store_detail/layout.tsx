import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store Detail",
  description: "Dashboard detail untuk toko",
};

export default function StoreDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}
