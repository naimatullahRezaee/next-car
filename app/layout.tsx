import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Car Project",
  description: "This is a Nextjs typeScript project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
