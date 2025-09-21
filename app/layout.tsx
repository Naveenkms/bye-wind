import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { SidebarProvider as PrimarySidebarProvider } from "@/components/ui/sidebar";
import { PrimarySidebar } from "@/app/_components/primary-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { SecondarySidebarProvider } from "./_components/secondary-sidebar-provider";
import { SecondarySidebar } from "./_components/secondary-sidebar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ByeWind",
  description: "ByeWind - Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PrimarySidebarProvider>
            <SecondarySidebarProvider>
              <PrimarySidebar />
              <main className="flex-1 flex flex-col">{children}</main>
              <SecondarySidebar />
            </SecondarySidebarProvider>
          </PrimarySidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
