
import Image from "next/image";
const News=() => {
    return (

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
    )
}

export default News;