import React from "react";
import Services from "../utils/Services";

const SecondContent = () => {
    return (
        <section id="carawakaf" className=" mt-20 mb-10">
            <div className="flex justify-start items-center">
                <div className="mx-16 text-clip md:text-left md:text-clip tracking-widest">
                    <h1 className="text-5xl font-bold text-gray-900">
                        <span className="text-blue-800">Cara melakukan</span> Wakaf, Infaq <br />{" "}
                        Shodaqah.
                    </h1>
                    <p className="text-2xl font-semibold opacity-50 mt-10 mb-10">
                        Berikut Adalah Beberapa Keutamaan Wakaf, Infaq <br /> Shodaqah Yang
                        Akan Anda Dapatkan.
                    </p>
                </div>
            </div>

            <Services />
        </section>
    )
}

export default SecondContent