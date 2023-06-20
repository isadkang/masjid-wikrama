import React from "react";
import services from "../data/services";
import ServiceItem from "./ServiceItem";

function Services() {
  return (
    <div id="" className="py-12">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto">
          {services.map((service) => (
            <ServiceItem
              key={service.title}
              title={service.title}
              icon={service.icon}
              description={service.description}
            ></ServiceItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
