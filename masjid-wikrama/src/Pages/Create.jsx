import React, { useState } from "react";
// import Axios from "axios";
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [formValue, setFormValue] = useState({
    nama: "",
    paket: "",
    kategori: "",
    nominal: "",
    selectNominal: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name === "paket") {
      if (value === "Paket A") {
        setFormValue({
          ...formValue,
          [name]: value,
          kategori: "Uang",
          nominal: "",
          selectNominal: "",
        });
      } else if (value === "Paket B") {
        setFormValue({
          ...formValue,
          [name]: value,
          kategori: "Barang",
          nominal: "",
          selectNominal: "Pilih Barang/Nominal",
        });
      }
    } else {
      setFormValue({ ...formValue, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      nama: formValue.nama,
      paket: formValue.paket,
      kategori: formValue.kategori,
      nominal: formValue.paket === "Paket A" ? formValue.nominal : formValue.selectNominal,
    };

    try {
      const res = await fetch("https://masjid-wikramasyad.000webhostapp.com/apimasjid.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(res)

      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          setMessage(data.success);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      } else {
        console.log("Request failed:", res.status);
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="container mx-auto py-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">Input Data Shodaqah</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nama
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nama"
            type="text"
            name="nama"
            placeholder="Masukan Nama Anda"
            value={formValue.nama}
            onChange={handleInput}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="paket"
          >
            Paket
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="paket"
            type="text"
            value={formValue.paket}
            onChange={handleInput}
            name="paket"
          >
            <option value="" disabled>
              Pilih Paket
            </option>
            <option value="Paket A">Paket A</option>
            <option value="Paket B">Paket B</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="kategori"
          >
            Kategori
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="kategori"
            type="text"
            name="kategori"
            placeholder="Masukan Kategori"
            value={formValue.kategori}
            onChange={handleInput}
            readOnly
          />
        </div>
        {formValue.paket === "Paket A" ? (
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="nominal"
            >
              Nominal
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nominal"
              type="number"
              name="nominal"
              placeholder="Enter nominal"
              value={formValue.nominal}
              onChange={handleInput}
            />
          </div>
        ) : (
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="selectNominal"
            >
              Select Nominal
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="selectNominal"
              type="text"
              value={formValue.selectNominal}
              onChange={handleInput}
              name="selectNominal"
            >
              <option value="" disabled>Pilih Macam Barang</option>
              <option value="Emas">Emas</option>
              <option value="Sembako">Sembako</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>
        )}
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>{" "}
          <Link to={'/'} className=" bg-yellow-500 hover:bg-yellow-600  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >Batal</Link>
          <br />
        </div>
      </form>

      <h2 className="mt-10 bg-white shadow-md rounded-md py-2 px-4 text-sky-800 font-bold text-2xl text-center">
        {message}
      </h2>
    </div>
  );
};

export default Create;

