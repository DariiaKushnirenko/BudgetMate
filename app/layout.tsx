// app/layout.tsx або src/app/layout.tsx
import type { Metadata } from "next";
import "./global.css";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "BudgetMate",
  description: "Your friendly budget tracker",
  openGraph: {
    title: "udgetMate",
    description: "Your friendly budget tracker",
    url: "",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
          {children}
          {modal}
      </body>
    </html>
  );
}