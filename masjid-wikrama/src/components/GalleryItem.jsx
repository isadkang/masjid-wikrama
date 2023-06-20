import React from "react";
import Gallery from "../utils/Gallery";

const GalleryItems = () => {
    return (
        <section id="gallery" className="mt-36 mb-10">
            <div className="flex justify-start items-center">
                <div className="mx-16 text-clip md:text-left md:text-clip tracking-widest">
                    <h1 className="text-5xl font-bold text-gray-900">
                        <span className="text-blue-800">Galeri</span> Masjid Besar SMK <br />{" "}
                        Wikrama Bogor.
                    </h1>
                    <p className="text-2xl font-semibold opacity-50 mt-10 mb-10">
                        Berikut Adalah Gallery Masjid Besar SMK Wikrama Bogor.
                    </p>
                </div>
            </div>
            <Gallery/>
        </section>
    )
}

export default GalleryItems