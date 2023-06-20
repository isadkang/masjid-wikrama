import React, { useState, useEffect } from "react";
import Axios from "axios";

const DataView = () => {
  const totalTarget = 300_000_000;
  const [donaturList, setDonaturList] = useState([]);

  Axios.get('https://masjid-wikramasyad.000webhostapp.com/apimasjid.php/?all').then((response) => {
    setDonaturList(response.data)
  })


  const totalDonasi = donaturList.reduce((total, donatur) => {
    const nominal = parseInt(donatur.nominal, 10);
    return isNaN(nominal) ? total : total + nominal;
  }, 0);
  

  const persentaseProgres = Math.floor((totalDonasi / totalTarget) * 100);

  return (
    <section className="mt-10 flex justify-center items-center">
      <div className="bg-gray-100 p-4 rounded-lg w-3/4 shadow-lg shadow-black">
        <div className="card-header grid grid-cols-1 md:grid-cols-3 gap-4">
          <p className="text-1xl">
            <span className="font-semibold opacity-50 italic">Total target dana</span>
            <br />
            <span className="font-bold text-3xl">Rp.{totalTarget.toLocaleString()}</span>
          </p>
          <p className="text-1xl">
            <span className="font-semibold opacity-50 italic">Total dana terkumpul</span>
            <br />
            <span className="font-bold text-3xl">Rp. {totalDonasi.toLocaleString()}</span>
          </p>
          <p className="text-1xl">
            <span className="font-semibold opacity-50 italic">Total donatur</span>
            <br />
            <span className="font-bold text-3xl">{donaturList.length} Orang</span>
          </p>
        </div>
        <hr className="border-neutral-500 mt-2 p-2" />
        <div className="card-body mt-4">
          <div className="flex flex-col bg-gray-300 p-1 rounded-sm">
            <div
              className="bg-blue-800 p-4 h-full rounded-sm"
              style={{ width: `${persentaseProgres}%` }}
            />
          </div>
          <div className="text-center mt-2 w-3/4 absolute mb-44">
            <p className="font-semibold text-1xl opacity-100">
              <span className="text-3xl font-bold text-blue-800"> {persentaseProgres}% </span>
              <span className="text-blue-800 opacity-50">Terpenuhi</span>
            </p>
          </div>
        </div>
        <div className="mt-16 bg-blue-800 py-2 rounded-md">
          <marquee className="text-lg text-white" direction="left">
            {donaturList.map((val) => (
              <span key={val.id} className="mr-4">
                <span className="font-semibold"> {val.nama} </span> -{" "}
                <span className="text-yellow-300">
                  {val.kategori} :{" "}
                  {val.kategori === "Uang"
                    ? `Rp. ${val.nominal.toLocaleString()}`
                    : val.nominal}
                </span>{" "}
                •
              </span>
            ))}
          </marquee>
        </div>
      </div>
    </section>
  );
};

export default DataView;
