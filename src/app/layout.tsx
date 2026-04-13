import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { NeuralNetworkBackground } from "@/components/layout/neural-background";
import { Chatbot } from "@/components/chat/chatbot";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Andy Gomez | Full-Stack AI Developer",
  description: "Portafolio de Andy Gomez, desarrollador de software especializado en IA, Clean Architecture y Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <NeuralNetworkBackground />
          <Header />
          <main className="pt-16 relative z-10">
            {children}
          </main>
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
