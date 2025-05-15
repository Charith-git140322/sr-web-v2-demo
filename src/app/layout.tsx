import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { LenisProvider } from "@/components/lenis-provider";
import PageTransition from "@/components/page-transition";

export const metadata: Metadata = {
  title: "StudyReserve",
  description: "Making Quality Education Accessible for Everyone, Everywhere!",
  icons: [{ rel: "icon", url: "/sr-icon.svg" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} h-full w-full`}>
      <body className="flex h-full min-h-screen w-full flex-col justify-between">
        <LenisProvider>
          <Header />
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
