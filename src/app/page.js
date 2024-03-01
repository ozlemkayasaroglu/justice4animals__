import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Filter from "../components/Filter";
import News from "@/components/News";
import Mission from "@/components/Mission";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 justify-center">
          <Image
            src="/images/cat-dog.jpg"
            width="1500"
            height="100"
            alt="animals"
            className="w-svw h-3/12 rounded-xl"
          />
        </div>
        <Mission />
        <Filter />
        <News />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
