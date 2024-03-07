import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <main>
      <nav class="bg-white mb-10 mt-10">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 justify-between">
            <div class="flex  items-center">
              <Link href="/">
              <Image
                width="600"
                height="400"
                class="h-16 w-full "
                src="/images/logo.png"
                alt="Your Company"
                
              />
              </Link>
            </div>

            <div className="flex flez-1 justify-end items-center">
              <div class="hidden sm:ml-6 sm:flex sm:space-x-8 object-right">
                <a
                  href="/"
                  class="inline-flex tracking-tight items-center border-b-2  border-indigo-500 px-1 pt-1 hover:border-blue-600 hover:bg-blue-50 py-2 pl-3 pr-4 font-bold font-xl hover:text-blue-800"
                >
                  Anasayfa
                </a>
                <a
                  href="#"
                  class="inline-flex tracking-tight items-center border-b-2 border-transparent px-1 pt-1 hover:border-blue-600 hover:bg-blue-50 py-2 pl-3 pr-4 font-bold font-xl  font-medium hover:text-blue-800"
                >
                  Hakkımızda
                </a>
                <a
                  href="#"
                  class="inline-flex  tracking-tight items-center border-b-2 border-transparent px-1 pt-1 hover:border-blue-600 hover:bg-blue-50 py-2 pl-3 pr-4 font-bold font-xl font-medium hover:text-blue-800"
                >
                  Veriler
                </a>
                <a
                  href="#"
                  class="inline-flex tracking-tight items-center border-b-2 border-transparent px-1 pt-1 hover:border-blue-600 hover:bg-blue-50 py-2 pl-3 pr-4 font-bold font-xl font-medium hover:text-blue-800"
                >
                  Calendar
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="sm:hidden" id="mobile-menu">
          <div class="space-y-1 pb-4 pt-2">
            <a
              href="#"
              class="block border-l-4 text-zinc-600 hover:border-blue-600 hover:bg-blue-50 py-2 pl-3 pr-4 text-base font-medium hover:text-blue-800"
            >
              Anasayfa
            </a>
            <a
              href="#"
              class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base text-zinc-600 hover:border-blue-600 hover:bg-blue-50 py-2 pl-3 pr-4 text-base font-medium hover:text-blue-800"
            >
              Hakkımızda
            </a>
            <a
              href="#"
              class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base text-zinc-600 hover:border-blue-600 hover:bg-blue-50 py-2 pl-3 pr-4 text-base font-medium hover:text-blue-800"
            >
              Veriler
            </a>
            <a
              href="#"
              class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base text-zinc-600 hover:border-blue-600 hover:bg-blue-50 py-2 pl-3 pr-4 text-base font-medium hover:text-blue-800"
            >
              Calendar
            </a>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
