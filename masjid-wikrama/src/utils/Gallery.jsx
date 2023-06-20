import React, { useState } from "react";
import dataGallery from "../data/gallery";

const Gallery = () => {
  const [showPopup, setShowPopup] = useState(false);

  const limitedDataGallery = dataGallery.slice(0, 5);

  const handleShowAllPhotos = () => {
    setShowPopup(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 m-3 space-y-5 rounded-3xl md:p-40">
        <div className="grid gap-10 md:grid-cols-3">
          {limitedDataGallery.map((photo) => (
            <div className="relative group" key={photo.id}>
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-96 h-96 rounded-md"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                <div className="flex justify-between w-full">
                  <div className="font-normal">
                    <p className="text-sm font-bold">{photo.title}</p>
                  </div>
                  <div className="flex items-center"></div>
                </div>
              </div>
            </div>
          ))}
          <div className="relative group">
            <button
              className=" rounded-md bg-gray-200 flex items-center justify-center"
              onClick={handleShowAllPhotos}
            >
              <img src="/assets/Image/galeri.png" className="w-full h-96 md:w-96 md:h-96 rounded-md"/>
            </button>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-75">
          <div className="bg-white p-6 m-3 space-y-5 rounded-3xl overflow-auto max-h-full md:p-40">
            <button
              className="absolute top-3 mx-auto text-black text-xl font-extrabold"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
            <div className="grid gap-4 md:grid-cols-3">
              {dataGallery.map((photo) => (
                <img
                  key={photo.id}
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-60 md:w-72 md:h-52 rounded-md"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
