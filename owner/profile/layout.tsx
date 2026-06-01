import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Profile",
  description: "Edit your profile information",
};

export default function EditProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#E5E5E5] font-sans">
      {children}
    </div>
  );
}