import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import { siteUrl } from "@/lib/site";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const description =
  "Frontend developer portfolio — projects, technologies, and experience.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mikhail Medovnik — Web Developer",
    template: "%s | Mikhail Medovnik",
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mikhail Medovnik — Web Developer",
    description,
    url: siteUrl,
    siteName: "Mikhail Medovnik",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mikhail Medovnik — Web Developer",
    description,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB" className={spaceGrotesk.variable}>
      <body>
        <StyledComponentsRegistry>
          <Header />
          <main>{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
