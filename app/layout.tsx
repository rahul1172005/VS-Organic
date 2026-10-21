import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VS ORGANIC | Pure & Natural Traditional Chekku Oils",
  description:
    "VS Organic chekku oil - Founded in 2018. Quality cold-pressed groundnut oil, sesame oil, coconut oil, pure cow ghee, and organic jaggery. Serving households, retailers, and wholesale across 10 branches.",
  keywords: [
    "VS Organic",
    "Chekku Oil",
    "Cold Pressed Oil",
    "Groundnut Oil",
    "Sesame Oil",
    "Coconut Oil",
    "Ghee",
    "Jaggery",
    "Wholesale Chekku Oil",
    "Wood Pressed Oil",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100;200;300;400;500;600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
