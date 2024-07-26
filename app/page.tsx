import Header from "./ui/Layout/Header";
import Hero from "./ui/Landing/Hero";
import Footer from "./ui/Layout/Footer";
import Start from "./ui/Landing/Start";
import Services from "./ui/Landing/Services/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ewarez IT Solutions",
  description: "The official Website of Ewarez IT Solutions.",
  // metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function Page() {
  return (
    <main className="m-0 flex min-h-screen flex-col p-0">
      <Header />
      <Hero />
      <Start />
      <Services />
      <Footer />
    </main>
  );
}
