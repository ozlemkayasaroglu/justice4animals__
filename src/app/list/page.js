
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Filter from "../../components/Filter";
import Pagination from "@/components/Pagination";
import News from "@/components/News";
export default function list() {
  return (
    <>
      <Navbar />
<div>
  <News />
        <Pagination />
      </div>
   
   <div className="mt-10">

      <Filter />
   </div>

      <Footer />
    </>
  );
}
