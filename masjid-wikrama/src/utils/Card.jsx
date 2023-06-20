import React from "react";

const Card = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid lg:grid-cols-2 2xl:grid-cols-2 grid-cols-1 gap-8 mx-auto">
        <article className="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
          <img
            className="mx-auto mb-20 mt-10 w-20 relative end-28"
            src="/assets/Icon/heart-icon.png"
            alt=""
          />
          <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
            Menjadikan Hati Lebih Tenang
          </h2>
          <p className="m-4 text-lg p-4 leading-relaxed text-center ">
            Hati menjadi lebih tenang karena telah melakukan amal ibadah untuk menjadi
            tabungan kita di akhirat.
          </p>
          <img className="absolute bottom-1 start-36" src="/assets/Particles/Heart.png" alt="" />
        </article>

        <article className="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
          <img
            className="mx-auto mt-10 w-20 relative end-28"
            src="/assets/Icon/shield-icon.png"
            alt=""
          />
          <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
           Terbukanya Pintu Rezeki
          </h2>
          <p className="m-4 text-lg p-4 leading-relaxed text-center">
           Allah SWT akan membuka pintu rezeki dari arah yang tidak dikira sebelumnya.
          </p>
          <img className="absolute bottom-1 start-36" src="/assets/Particles/Shield Check.png" alt="" />
        </article>

        <article className="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
          <img
            className="mx-auto mb-20 mt-10 w-20 relative end-28"
            src="/assets/Icon/star-icon.png"
            alt=""
          />
          <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
            Menjauhkan Dari Bahaya
          </h2>
          <p className="m-4 text-lg p-4 leading-relaxed text-center ">
            Rasulullah SAW pernah bersabda:"Bersegeralah untuk bersedekah, karena musibah dan bencana tidak bisa mendahului sedekah."
          </p>
          <img className="absolute bottom-1 start-40" src="/assets/Particles/Stars.png" alt="" />
        </article>

        <article className="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
          <img
            className="mx-auto mb-20 mt-10 w-20 relative end-28"
            src="/assets/Icon/verified-icon.png"
            alt=""
          />
          <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
            Pahala Yang Tak Terputus
          </h2>
          <p className="m-4 text-lg leading-relaxed text-center ">
            Ini akan menolong kita di akhirat nantinya, juga dapat menyelamatkan dari api neraka.
          </p>
          <img className="absolute bottom-1 start-40" src="/assets/Particles/Verified Check.png" alt="" />
        </article>
      </div>

      <div className="flex-1 mx-auto max-w-xs lg:max-w-sm bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl shadow-black rounded-xl">
        <div className="lg:flex lg:flex-row-reverse">
          <img
            className="mx-auto h-full w-40 bg-cover lg:w-auto hidden lg:block"
            src="/assets/Image/unsplash_lyiKExA4zQA.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
