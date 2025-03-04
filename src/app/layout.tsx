import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { TasksProvider } from "@/context/TasksContext";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Todoist Clone",
  description: "todoist productivity web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TasksProvider>
            <SidebarProvider>
              <AppSidebar />
              <SidebarInset>
                <div className="p-5 pt-0">{children}</div>
              </SidebarInset>
            </SidebarProvider>
          </TasksProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
