import Image from "next/image";

const Navbar = () => {
  return (
    <header className="bg-white mt-7 mb-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="relative z-10 flex px-2 lg:px-0">
            <div className="flex flex-shrink-0 items-center">
              <Image
                className="h-8 w-auto w-full h-full "
                src="/images/logo.png"
               
                width="400"
                height="400"
                alt="J4A Logo"
              />
            </div>
          </div>
          <nav
            className="hidden lg:flex lg:space-x-8 lg:py-2"
            aria-label="Global"
          >
            <a
              href="/"
              className="text-sky-600 inline-flex items-center rounded-md py-2 px-3 text-lg font-medium hover:shadow-md "
              aria-current="page"
            >
              Anasayfa
            </a>
            <a
              href="#"
              className="text-sky-600 inline-flex items-center rounded-md py-2 px-3 text-lg font-medium hover:shadow-md "
            >
              Hakkımızda
            </a>
          </nav>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <nav className="lg:hidden" aria-label="Global" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
         
          <a
            href="/"
            className="text-sky-600 inline-flex items-center rounded-md py-2 px-3 text-lg font-medium hover:shadow-md  "
            aria-current="page"
          >
            Anasayfa
          </a>
          <a
            href="#"
            className="text-sky-600 inline-flex items-center rounded-md py-2 px-3 text-lg font-medium hover:shadow-md  "
          >
            Hakkımızda
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
