import { nextAuthOptions } from "@/lib/auth";
import { AppTopBar } from "../components/appTopBar";
import { getServerSession } from "next-auth";
import { redirect, useRouter } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppTopBar>{children}</AppTopBar>;
}
