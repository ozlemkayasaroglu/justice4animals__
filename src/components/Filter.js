import Link from "next/link";
const Filter = () => {
  return (
    <div className="flex justify-center items-center space-x-4 mb-10">
      <label
        htmlFor="location"
        className="block text-sm font-medium leading-6 text-gray-900 "
      >
        Location
      </label>
      <div className="flex items-center ">
        <select
          id="location"
          name="location"
          className="  mr-3 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option>İstanbul</option>
          <option>Ankara</option>
          <option>İzmir</option>
          <option>Adana</option>
          <option>Bursa</option>
          <option>Gaziantep</option>
          <option>Konya</option>
          <option>Kayseri</option>
          <option>Antalya</option>
          <option>Diyarbakır</option>
          <option>Eskişehir</option>
          <option>Erzurum</option>
          <option>Mersin</option>
          <option>Kocaeli</option>
          <option>Samsun</option>
          <option>Sakarya</option>
          <option>Aydın</option>
          <option>Balıkesir</option>
          <option>Denizli</option>
          <option>Hatay</option>
          <option>Malatya</option>
          <option>Manisa</option>
          <option>Kahramanmaraş</option>
          <option>Mardin</option>
          <option>Muğla</option>
          <option>Ordu</option>
          <option>Tekirdağ</option>
          <option>Trabzon</option>
          <option>Şanlıurfa</option>
          <option>Van</option>
        </select>
        <div className="mr-6">
          <Link href="/list">
            <button
              className="bg-zinc-100 border border-zinc-300 rounded-md text-zinc-900 hover:bg-zinc-300 text-white pr-4 pl-4 
          pt-1 pb-1"
            >
              Git
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Filter;
