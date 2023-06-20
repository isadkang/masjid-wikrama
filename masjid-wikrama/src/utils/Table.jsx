import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Axios from 'axios';

const Table = () => {
  const [donaturList, setDonaturList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 5;

  const location = useLocation();

  useEffect(() => {
    fetchData();
  }, [currentPage, location.key, searchQuery]);

  const fetchData = async () => {
    try {
      const response = await Axios.get(`https://masjid-wikramasyad.000webhostapp.com/apimasjid.php/?page=${currentPage}&itemsPerPage=${itemsPerPage}&search=${searchQuery}`);
      setDonaturList(response.data.data);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const renderDonaturList = () => {
    return donaturList.map((donatur) => (
      <tr key={donatur.id}>
        <td className='hover:bg-slate-200 tracking-wider border px-8 py-2 sm:px-8 sm:py-4 md:px-8 md:py-6 lg:px-8 lg:py-8 xl:px-8 xl:py-10 font-bold text-gray-700'>{donatur.nama}</td>
        <td className='hover:bg-slate-200 border px-8 py-2 sm:px-8 sm:py-4 md:px-8 md:py-6 lg:px-8 lg:py-8 xl:px-8 xl:py-10 font-bold text-gray-700'>{donatur.id}</td>
        <td className='hover:bg-slate-200 border px-8 py-2 sm:px-8 sm:py-4 md:px-8 md:py-6 lg:px-8 lg:py-8 xl:px-8 xl:py-10 font-medium text-gray-700'>{donatur.paket}</td>
        <td className='hover:bg-slate-200 border px-8 py-2 sm:px-8 sm:py-4 md:px-8 md:py-6 lg:px-8 lg:py-8 xl:px-8 xl:py-10 font-medium text-gray-700'>{donatur.kategori}</td>
        <td className='hover:bg-slate-200 border px-8 py-2 sm:px-8 sm:py-4 md:px-8 md:py-6 lg:px-8 lg:py-8 xl:px-8 xl:py-10 font-medium text-gray-700'>{donatur.nominal}</td>
      </tr>
    ));
  };

  const renderPagination = () => {
    const pagination = [];
    for (let i = 1; i <= totalPages; i++) {
      pagination.push(
        <li key={i}>
          <button
            onClick={() => handlePageChange(i)}
            className={`bg-blue-800 hover:bg-blue-950 text-white font-bold py-2 px-4 mb-2 rounded ${currentPage === i ? 'bg-blue-950' : ''
              }`}
          >
            {i}
          </button>
        </li>
      );
    }
    return pagination;
  };

  return (
    <div id='tabel' className="container mx-auto p-4">
      <div class='flex justify-center mt-2 mb-2 '>
        <Link to={'/create'} className='border font-semibold text-white bg-blue-800 hover:bg-blue-950 border-gray-500 shadow-lg rounded-md py-2 px-4' >
          Beri Bantuan Shodaqah
        </Link>
      </div>
      <div className="flex justify-center mt-4">
        <input
          id="cari"
          type="text"
          placeholder="Cari Data"
          value={searchQuery}
          onChange={handleSearchChange}
          className="border border-gray-500 bg-slate-100 rounded-md py-2 px-4 mb-2"
        />
      </div>
      
      
      <div className="overflow-x-auto">
        <table className="table-auto w-full border">
          <thead>
            <tr className="opacity-50 font-light text-left">
              <th className="border px-4 py-2">Nama Donatur</th>
              <th className="border px-4 py-2">Donatur ID</th>
              <th className="border px-4 py-2">Paket</th>
              <th className="border px-4 py-2">Kategori</th>
              <th className="border px-4 py-2">Nominal/Barang</th>
            </tr>
          </thead>
          <tbody>{renderDonaturList()}</tbody>
        </table>
        <div className="flex justify-center mt-4">
        <nav className="pagination">
          <ul className="flex space-x-2">
            <li>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-blue-800 hover:bg-blue-950 text-white font-bold py-2 px-4 mb-2 rounded"
              >
                Prev
              </button>
            </li>
            {renderPagination()}
            <li>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="bg-blue-800 hover:bg-blue-950 text-white font-bold py-2 px-4 mb-2 rounded"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
      </div>
    </div>
  );
};

export default Table;
