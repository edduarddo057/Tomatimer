import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/reset.scss";

export const metadata: Metadata = {
  title: "Tomatimer",
  description: "App de gerenciamento de tempo do metodo pomodoro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" data-theme="light" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
