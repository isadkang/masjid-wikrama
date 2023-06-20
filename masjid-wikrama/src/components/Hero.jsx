import React from "react";
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <section className="mt-1">
      <div className="flex flex-col items-center justify-center py-8 px-6 md:flex-row">
        <div className="mx-4 md:mx-16 flex-1 text-center md:text-left md:text-clip">
          <p className="text-2xl font-semibold text-opacity-50 text-gray-900">
            Al-Ikrom SMK Wikrama Bogor
          </p>
          <p className="font-bold text-4xl md:text-6xl mb-10 text-black mt-2">
            Mari <span className="text-indigo-800">Tingkatkan Keimanan</span>{" "}
            Masyarakat SMK Wikrama Bogor.
          </p>
          <Link to={'/create'} className="bg-blue-800 hover:bg-blue-700 text-white font-bold  py-4 px-5 mt-8 md:mt-16 rounded">
            Beri Bantuan Sodaqoh
          </Link>
        </div>
        <div className="flex-none mt-8 md:mt-0">
          <img
            src="/assets/Image/banner-img-1.png"
            alt="Gambar"
            width={530}
            height={530}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
