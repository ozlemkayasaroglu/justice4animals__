import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Filter from "../components/Filter";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 mt-4 justify-center">
          <Image
            src="/images/cat-dog.jpg"
            width="1500"
            height="100"
            alt="animals"
            className="w-svw h-3/12 rounded-xl"
          />
        </div>

    
        <Filter />

        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl p-10  text-center">
          Son Haberler
        </h2>

        <div className="flex mx-auto max-w-7xl px-6 lg:px-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap -mx-4">
              <article className="flex max-w-xl flex-col w-full md:w-1/3 px-4 mb-8">
                <div className="flex items-center gap-x-4 text-xs">
                  <time datetime="2020-03-16" className="text-gray-500">
                    Mar 16, 2020
                  </time>
                  <a
                    href="#"
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    Ankara
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Boost your conversion rate
                    </a>
                    <div className="relative mt-8 flex items-center gap-x-4">
                      <Image
                        width="300"
                        height="300"
                        className="rounded-sm bg-gray-50 items-center justify-center"
                        src="/images/blog-1.jpg"
                        alt=""
                      />
                    </div>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 inline-flex ">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                    totam vitae illo. Non aliquid explicabo necessitatibus unde.
                    Sed exercitationem placeat consectetur nulla deserunt vel.
                    Iusto corrupti dicta.
                  </p>
                </div>
              </article>
              <article className="flex max-w-xl flex-col w-full md:w-1/3 px-4 mb-8">
                <div className="flex items-center gap-x-4 text-xs">
                  <time datetime="2020-03-16" className="text-gray-500">
                    Mar 16, 2020
                  </time>
                  <a
                    href="#"
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    İstanbul
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Boost your conversion rate
                    </a>
                    <div className="relative mt-8 flex items-center gap-x-4">
                      <Image
                        width="300"
                        height="300"
                        className="rounded-sm bg-gray-50"
                        src="/images/blog-1.jpg"
                        alt=""
                      />
                    </div>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 inline-flex ">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                    totam vitae illo. Non aliquid explicabo necessitatibus unde.
                    Sed exercitationem placeat consectetur nulla deserunt vel.
                    Iusto corrupti dicta.
                  </p>
                </div>
              </article>
              <article className="flex max-w-xl flex-col w-full md:w-1/3 px-4 mb-8">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="2020-03-16" className="text-gray-500">
                    Mar 16, 2020
                  </time>
                  <a
                    href="#"
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    İzmir
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Boost your conversion rate
                    </a>
                    <div className="relative mt-8 flex items-center gap-x-4">
                      <Image
                        width="300"
                        height="300"
                        className="rounded-sm bg-gray-50"
                        src="/images/blog-1.jpg"
                        alt=""
                      />
                    </div>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 inline-flex ">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                    totam vitae illo. Non aliquid explicabo necessitatibus unde.
                    Sed exercitationem placeat consectetur nulla deserunt vel.
                    Iusto corrupti dicta.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      {/* testimonials */}
      <Testimonials />

      {/* footer */}
      <Footer />
    </>
  );
}
