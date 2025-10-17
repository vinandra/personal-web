import About from "@/components/About";
import Header from "@/components/Header";
import Navigasi from "@/components/Navigasi";

export default function Home() {
  return (
    <div>
      <Navigasi />
      <div className="max-w-3xl mx-auto px-4 py-8 md:px-8 md:py-48">
        <Header />
        <About />
      </div>
    </div>
  );
}
