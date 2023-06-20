import React from "react";
import Card from "../utils/Card";

const FirstContent = () => {
  return (
    <section className="mt-10 mb-10">
      <div className="flex justify-start items-center">
        <div className="mx-16 text-clip md:text-left md:text-clip tracking-widest">
          <h1 className="text-5xl font-bold text-gray-900">
            <span className="text-blue-800">Manfaat</span> Wakaf, Infaq <br />{" "}
            Shodaqah.
          </h1>
          <p className="text-2xl font-semibold opacity-50 mt-10 mb-10">
            Berikut Adalah Beberapa Keutamaan Wakaf, Infaq <br /> Shodaqah Yang
            Akan Anda Dapatkan.
          </p>
        </div>
      </div>

      <Card/>
      
    </section>
  );
};

export default FirstContent;
