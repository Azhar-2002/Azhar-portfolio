import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Md Azhar Ansari | Portfolio",
  description: "Portfolio website of Md Azhar Ansari - Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
