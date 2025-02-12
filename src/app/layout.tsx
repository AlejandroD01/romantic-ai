import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "IA Romántica",
  description: "Creado por AlejandroD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
