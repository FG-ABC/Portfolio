import "./ui/global.css";
import { montserrat } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-Grey antialiased`}>
        {children}
      </body>
    </html>
  );
}
