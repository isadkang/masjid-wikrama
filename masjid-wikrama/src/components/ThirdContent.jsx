import React from "react";
import Table from "../utils/Table";

const ThirdContent = () => {
  return (
    <section id="datawakaf" className=" mt-20 mb-10">
      <div className="flex justify-start items-center">
        <div className="mx-16 text-clip md:text-left md:text-clip tracking-widest">
          <h1 className="text-5xl font-bold text-gray-900">
            <span className="text-blue-800">Data Donatur</span> Wakaf, Infaq{" "}
            <br /> Shodaqah.
          </h1>
          <p className="text-2xl font-semibold opacity-50 mt-10 mb-10">
            Berikut Adalah Data Donatur Wakaf, Infaq <br /> Shodaqah Untuk
            Masjid Besar Al-Ikram SMK Wikrama Bogor.
          </p>
        </div>
      </div>
      <Table />
    </section>
  );
};

export default ThirdContent;
