import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Change Password",
  description: "Update your account password",
};

export default function ChangePasswordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
}
