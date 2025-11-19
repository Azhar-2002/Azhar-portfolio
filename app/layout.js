import "./globals.css";

export const metadata = {
  title: "Md Azhar Ansari | Portfolio",
  description: "Portfolio website of Md Azhar Ansari - Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
