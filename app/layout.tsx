import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/reset.scss";
import { NextAuthSessionProvider } from "./api/providers/sessionProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <body>
        <NextAuthSessionProvider>
          <ToastContainer />
          {children}
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
