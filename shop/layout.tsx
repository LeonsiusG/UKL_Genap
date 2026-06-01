import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to the home page",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
