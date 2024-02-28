import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Filter from "../../components/Filter";
export default function list() {
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl p-10  text-center">
          Şehir Adı
        </h2>

        <div className="bg-gray-100 py-8 mb-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ul
              role="list"
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
              <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
                <div className="flex flex-1 flex-col p-8">
                  <Image
                    width="100"
                    height="100"
                    className="mx-auto w-full flex-shrink-0 rounded-md"
                    src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2787w"
                    alt=""
                  />
                  <h3 className="mt-6 text-sm font-medium text-gray-900">
                    Jane Cooper
                  </h3>
                  <dl className="mt-1 flex flex-grow flex-col justify-between">
                    <dd className="text-sm text-gray-500 inline-flex">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classNameical
                      Latin literature from 45 BC, making it over 2000 years
                      old.
                    </dd>
                  </dl>
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <Link
                      href="/list/detail"
                      className="-ml-px flex w-0 flex-1 text-center"
                    >
                      <p className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900 hover:text-sky-500">
                        Habere Git
                      </p>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
                <div className="flex flex-1 flex-col p-8">
                  <Image
                    width="100"
                    height="100"
                    className="mx-auto w-full flex-shrink-0 rounded-md"
                    src="https://images.unsplash.com/photo-1541199249251-f713e6145474?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2274w"
                    alt=""
                  />
                  <h3 className="mt-6 text-sm font-medium text-gray-900">
                    Jane Cooper
                  </h3>
                  <dl className="mt-1 flex flex-grow flex-col justify-between">
                    <dd className="text-sm text-gray-500 inline-flex">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                    </dd>
                  </dl>
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <Link
                      href="/detail"
                      className="-ml-px flex w-0 flex-1 text-center"
                    >
                      <p className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900 hover:text-sky-500">
                        Habere Git
                      </p>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
                <div className="flex flex-1 flex-col p-8">
                  <Image
                    width="100"
                    height="100"
                    className="mx-auto w-full flex-shrink-0 rounded-md"
                    src="https://images.unsplash.com/photo-1615694547744-f100c242a3a8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2071w"
                    alt=""
                  />
                  <h3 className="mt-6 text-sm font-medium text-gray-900">
                    Jane Cooper
                  </h3>
                  <dl className="mt-1 flex flex-grow flex-col justify-between">
                    <dd className="text-sm text-gray-500 inline-flex">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                    </dd>
                  </dl>
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <Link
                      href="/detail"
                      className="-ml-px flex w-0 flex-1 text-center"
                    >
                      <p className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900 hover:text-sky-500">
                        Habere Git
                      </p>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
                <div className="flex flex-1 flex-col p-8">
                  <Image
                    width="100"
                    height="100"
                    className="mx-auto w-full flex-shrink-0 rounded-md"
                    src="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2835w"
                    alt=""
                  />
                  <h3 className="mt-6 text-sm font-medium text-gray-900">
                    Jane Cooper
                  </h3>
                  <dl className="mt-1 flex flex-grow flex-col justify-between">
                    <dd className="text-sm text-gray-500 inline-flex">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                    </dd>
                  </dl>
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <Link
                      href="/list/detail"
                      className="-ml-px flex w-0 flex-1 text-center"
                    >
                      <p className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900 hover:text-sky-500">
                        Habere Git
                      </p>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Filter />

      <Footer />
    </>
  );
}
