import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "./App.css";

import NavBar from "./NavBar";
import Footer from "@components/Footer";

import { badges } from "@data/badges";
import { personal } from "@data/personal";
import {
  knowsAbout,
  profiles,
  siteDescription,
  siteTitle,
  siteUrl,
} from "@data/site";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${personal.name}`,
  },
  description: siteDescription,
  applicationName: `${personal.name} Portfolio`,
  authors: [{ name: personal.name, url: siteUrl }],
  creator: personal.name,
  keywords: knowsAbout,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: personal.name,
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
    firstName: "Sajjad",
    lastName: "Ali",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/logo.png",
  },
};

// Structured data so search engines and AI assistants can identify who this site is about.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  url: siteUrl,
  image: `${siteUrl}/picofme.png`,
  jobTitle: personal.title,
  description: siteDescription,
  worksFor: {
    "@type": "Organization",
    name: personal.company,
    url: personal.companyUrl,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  knowsAbout,
  sameAs: Object.values(profiles),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Providers>
          <NavBar />
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <main id="main-content" className="page-shell">
            {children}
          </main>
          <Footer badges={badges} />
        </Providers>
      </body>
    </html>
  );
}
