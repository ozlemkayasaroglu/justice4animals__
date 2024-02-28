import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Image from "next/image";

export default function Detail() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div class="bg-white">
          <section aria-labelledby="features-heading" class="relative">
            <div class="aspect-h-2 aspect-w-3 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
              <Image
                width="1200"
                height="1200"
                src="https://images.unsplash.com/photo-1510920018318-3b4dfe979e4d?q=80&w=4480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 4480w"
                alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
                class="w-9/12 object-cover object-center lg:h-full lg:w-full rounded-md"
              />
            </div>

            <div class="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
              <div class="lg:col-start-2">
                <h2 id="features-heading" class="font-medium text-gray-500">
                  Leatherbound Daily Journal
                </h2>
                <p class="mt-4 text-4xl font-bold tracking-tight text-gray-900">
                  All in the Details
                </p>
                <p class="mt-4 text-gray-500">
                What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <br></br>
                <p>
                Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.   
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
