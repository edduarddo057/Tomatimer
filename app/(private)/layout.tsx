import { nextAuthOptions } from "@/lib/auth";
import { AppTopBar } from "../components/appTopBar";
import { getServerSession } from "next-auth";
import { redirect, useRouter } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/login");
  }

  return <AppTopBar>{children}</AppTopBar>;
}
