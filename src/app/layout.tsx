import type { Metadata } from "next";
import { Space_Grotesk, Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LenisProvider } from "@/components/LenisProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ankur Singh | Cyber Security & Networking Portfolio",
  description: "B.Tech Computer Science student specializing in Cyber Security, Networking, System Administration, and Secure Web Operations. Explore technical projects, certifications, and growth timeline.",
  authors: [{ name: "Ankur Singh" }],
  creator: "Ankur Singh",
  keywords: [
    "Ankur Singh",
    "Cyber Security",
    "Networking",
    "Computer Science Student",
    "Penetration Testing",
    "System Administration",
    "Linux",
    "Web Security",
    "Portfolio"
  ],
  metadataBase: new URL("https://ankursingh.dev"), // Fallback domain for metadata
  openGraph: {
    title: "Ankur Singh | Cyber Security & Networking Portfolio",
    description: "B.Tech Computer Science student specializing in Cyber Security, Networking, System Administration, and Secure Web Operations.",
    url: "https://ankursingh.dev",
    siteName: "Ankur Singh Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankur Singh | Cyber Security & Networking Portfolio",
    description: "B.Tech Computer Science student specializing in Cyber Security, Networking, System Administration, and Secure Web Operations.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Inject structured data JSON-LD for Google Rich Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ankur Singh",
    "jobTitle": "Cyber Security & Networking Developer",
    "description": "B.Tech Computer Science student specializing in Cyber Security, Networking, and Linux systems.",
    "url": "https://ankursingh.dev",
    "sameAs": [
      "https://github.com", // Placeholder to be customized
      "https://linkedin.com/in" // Placeholder to be customized
    ]
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${firaCode.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider>
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
