import React from 'react';

function ServiceItem({ title, icon, description }) {
  return (
    <div className="bg-white hover:bg-slate-100 hover:-translate-y-2 transform transition p-5 rounded-md shadow-xl max-w-2xl tracking-wider">
      <div className="text-blue-800 font-medium text-2xl dark:text-gray-300 w-6 h-6 mb-3">
        {icon}
      </div>
      <h1 className="font-bold text-2xl text-black dark:text-gray-200 mb-1">{title}</h1>
      <p className="leading-relaxed text-clip text-md font-semibold text-gray-600 dark:text-gray-200">
        {description}
      </p>
    </div>
  );
}

export default ServiceItem;
