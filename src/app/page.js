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

        <div class="relative bg-white">
          <div class="mx-auto grid max-w-7xl lg:grid-cols-2">
            <div class="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
              <div class="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
                <h2 class="text-base font-semibold leading-8 text-indigo-600">
                  Our track record
                </h2>
                <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Trusted by thousands of creators&nbsp;worldwide
                </p>
                <p class="mt-6 text-lg leading-8 text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
                <dl class="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                  <div class="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                    <dt class="text-sm leading-6 text-gray-600">
                      Creators on the platform
                    </dt>
                    <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">
                      8,000+
                    </dd>
                  </div>
                  <div class="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                    <dt class="text-sm leading-6 text-gray-600">
                      Flat platform fee
                    </dt>
                    <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">
                      3%
                    </dd>
                  </div>
                  <div class="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                    <dt class="text-sm leading-6 text-gray-600">
                      Uptime guarantee
                    </dt>
                    <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">
                      99.9%
                    </dd>
                  </div>
                  <div class="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                    <dt class="text-sm leading-6 text-gray-600">
                      Paid out to creators
                    </dt>
                    <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">
                      $70M
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <Filter />

        <div className=" mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl  font-bold tracking-tight text-gray-900 sm:text-4xl p-10 text-center">
            Son Haberler
          </h2>
          <div className="container flex mx-auto px-4 sm:px-6 lg:px-8  ">
            <div className="flex flex-wrap -mx-4  ">
              <article className="flex max-w-xl flex-col w-full md:w-1/3 px-4 mb-8">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="2020-03-16" className="text-gray-500">
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
                    <div className="relative mt-8 flex items-center gap-x-4 h-48 w-60">
                      <Image
                        width="300"
                        height="300"
                        className="rounded-sm bg-gray-50 items-center justify-center h-full w-full object-cover object-center"
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
                    İstanbul
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Boost your conversion rate
                    </a>
                    <div className="relative mt-8 flex items-center gap-x-4 h-48 w-60">
                      <Image
                        width="300"
                        height="300"
                        className="rounded-sm bg-gray-50 items-center justify-center h-full w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1570018144715-43110363d70a?q=80&w=4325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 4325w"
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
                    <div className="relative mt-8 flex items-center gap-x-4 h-48 w-60">
                      <Image
                        width="300"
                        height="300"
                        className="rounded-sm bg-gray-50 items-center justify-center h-full w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1524309124783-00473b0bbd21?q=80&w=5496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 5496w"
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

        {/* testimonials */}
        <Testimonials />

        {/* footer */}
        <Footer />
      </div>
    </>
  );
}
