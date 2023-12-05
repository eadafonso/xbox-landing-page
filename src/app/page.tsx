import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "./_components/hero";

export default function Home() {
  return (
    <main className="max-w-[1230px] mx-auto px-5 text-white">
      <Header />

      <Hero />

      <Footer />
    </main>
  );
}
