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
        <div className="mt-4 justify-center">
          <Image
            src="/images/cat-dog.jpg"
            width="1500"
            height="100"
            alt="animals"
            className="w-svw h-3/12 rounded-xl"
          />
        </div>

        <div class="bg-white py-16">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our mission
              </h2>
              <div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                <div class="lg:w-full lg:max-w-2xl lg:flex-auto">
                  <p class="text-xl leading-8 text-gray-600">
                    Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                    sem. At arcu, sit dui mi, nibh dui, diam eget aliquam.
                    Quisque id at vitae feugiat egestas ac. Diam nulla orci at
                    in viverra scelerisque eget. Eleifend egestas fringilla
                    sapien.
                  </p>
                  <p class="mt-10 max-w-xl text-base leading-7 text-gray-700">
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                    risus enim. Mattis mauris semper sed amet vitae sed turpis
                    id. Id dolor praesent donec est. Odio penatibus risus
                    viverra tellus varius sit neque erat velit. Faucibus commodo
                    massa rhoncus, volutpat. Dignissim sed eget risus enim.
                    Mattis mauris semper sed amet vitae sed turpis id.
                  </p>
                </div>
                <div class="lg:flex lg:flex-auto lg:justify-center">
                  <dl class="w-64 space-y-8 xl:w-80">
                    <div class="flex flex-col-reverse gap-y-4">
                      <dt class="text-base leading-7 text-gray-600">
                        Transactions every 24 hours
                      </dt>
                      <dd class="text-5xl font-semibold tracking-tight text-gray-900">
                        44 million
                      </dd>
                    </div>
                    <div class="flex flex-col-reverse gap-y-4">
                      <dt class="text-base leading-7 text-gray-600">
                        Assets under holding
                      </dt>
                      <dd class="text-5xl font-semibold tracking-tight text-gray-900">
                        $119 trillion
                      </dd>
                    </div>
                    <div class="flex flex-col-reverse gap-y-4">
                      <dt class="text-base leading-7 text-gray-600">
                        New users annually
                      </dt>
                      <dd class="text-5xl font-semibold tracking-tight text-gray-900">
                        46,000
                      </dd>
                    </div>
                  </dl>
                </div>
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
