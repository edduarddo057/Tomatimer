import { AppTopBar } from "../components/appTopBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppTopBar>{children}</AppTopBar>;
}
