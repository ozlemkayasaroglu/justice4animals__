import Link from "next/link";
const Filter = () => {
    return (
        
        <div className="flex justify-center items-center space-x-4" >
          <label
            htmlFor="location"
            className="block text-sm font-medium leading-6 text-gray-900 mt-3"
          >
            Location
          </label>
          <div className="flex items-center  pr-4 ">
            <select
              id="location"
              name="location"
              className=" mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            <div className="mr-4 pr-4">
            <Link href="/list">
              <button className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-1 px-4  mt-1 rounded">
                Git
              </button>
            </Link>
            </div>
          </div>
        </div>
       
    )
}

export default Filter;