import Image from "next/image";
import React from "react";

const locations = [
  {
    name: "RIC",
    ip: "192.168.240.53"
  },
  {
    name: "Malviya Nagar",
    ip: "192.168.32.190"
  },
  {
    name: "Manglam Radiance, Tonk Road",
    ip: "192.168.89.12"
  },
  {
    name: "Melodia, Vaishali",
    ip: "192.168.190.11"
  },
  {
    name: "Radiant Casa, Jawahar Circle",
    ip: "192.168.63.80"
  },
  {
    name: "Arcadia Greens, Vaishali Nagar",
    ip: "192.168.231.130"
  },
  {
    name: "Pride, Ajmer Road",
    ip: "192.168.140.50"
  },
]

const Card = ({ data }) => {
  const rand_index = Math.floor(Math.random() * (locations.length-1));

  const location = locations[rand_index].name;
  const ip = locations[rand_index].ip;
  return (
    <div>
      <div className="relative flex flex-col text-gray-700 bg-[#2b2b2b] shadow-md bg-clip-border rounded-xl w-72">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-[#2b2b2b] shadow-lg bg-clip-border rounded-xl">
          <Image src={data?.picture} alt="weapon" width={10000} height={10000} />
        </div>
        <div className="p-6 text-center">
          <small className="text-gray-400">Detected At:</small>
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-white">
            {ip}
          </h4>
          <p style={{ color: 'white' }} className="block font-sans text-white antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
            Location: {location}
          </p>
        </div>
        {/* <div className="flex justify-center p-6 pt-2 gap-7">
          <a
            href="#facebook"
            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400"
          >
            <i className="fab fa-facebook" aria-hidden="true"></i>
          </a>
          <a
            href="#twitter"
            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400"
          >
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
          <a
            href="#instagram"
            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"
          >
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Card;
