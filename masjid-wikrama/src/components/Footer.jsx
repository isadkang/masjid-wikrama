import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-blue-950 pt-8 pb-6 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-y-10 lg:grid-cols-2">
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex">
              <img src="/assets/Logo/logo-wk2.png" alt="" />
              <h5 className="text-lg mt-12 mb-2 font-bold">
                SMK WIKRAMA <br />
                BOGOR
              </h5>
            </div>
            <div className="text px-16">
              <h2 className="font-bold">Alamat</h2>
              <p className="mb-2">
                Jl. Raya Wangun <br />
                Kelurahan Sindangsari <br />
                Bogor Timur 16720 <br />
              </p>
              <hr className="w-48" />
            </div>
            <div className="text px-16">
              <h2 className="font-bold">Telepon</h2>
              <p className="mb-2">
                0251-8242411 / <br />
                082221718035 (Whatsapp) <br />
              </p>
              <hr className="w-48" />
            </div>
            <br />
            <div className="mt-6 px-16 lg:mb-0 mb-6 flex">
              <a
                href="#"
                className="text-blue-500 font-normal items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-pink-600 font-normal items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-blue-500 font-normal items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="font-normal items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="container mx-auto">
            <div className="relative">
              <div className="absolute top-12 -left-60">
                <h2 className="font-bold mb-4">Tentang Wikrama</h2>
                <ul className="list-disc">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white"
                    >
                      Sejarah
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white"
                    >
                      Peraturan Sekolah
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white"
                    >
                      Rencana Strategi & Prestasi
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white"
                    >
                      Yayasan
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white"
                    >
                      Struktur Organisasi
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white"
                    >
                      Cabang
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white"
                    >
                      Penghargaan
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white"
                    >
                      Kerjasama
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://irsyadnatv2.vercel.app"
                      target="_blank"
                      
                      
                      
                      
                      className="text-gray-300 hover:text-white"
                    >
                      Creator
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <div className="flex justify-center items-center lg:absolute lg:top-20 lg:end-20 ">
              <div className="flex flex-col space-y-8">
                <div>
                  <h2 className="font-bold mb-4">Hubungi Kami</h2>
                  <form>
                    <div className="mb-4">
                      <input
                        placeholder="Nama"
                        type="text"
                        id="name"
                        className="px-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        placeholder="Email"
                        type="email"
                        id="email"
                        className="px-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <textarea
                        id="message"
                        placeholder="Pesan Anda"
                        className="px-12 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="px-10 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-500 font-semibold py-1">
              © <span id="get-current-year">{new Date().getFullYear()}</span>{" "}
              <a
                href="#"
                className="text-gray-500 hover:text-gray-800"
              >
                Masjid SMK Wikrama Bogor by
              </a>{" "}
              <a
                href="https://irsyadnatv2.vercel.app"
                target="_blank"
                className="text-gray-500 hover:text-white"
              >
                Irsyad Nataprawira
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
