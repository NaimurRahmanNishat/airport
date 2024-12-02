"use client";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

const Page = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [bgIndex, setBgIndex] = useState<number>(0);
  const [openRoute, setOpenRoute] = useState<boolean>(false);
  const [openGuide, setOpenGuide] = useState<boolean>(false);
  const [airNumber, setAirNumber] = useState<boolean>(false);
  const [ticketPrice, setTicketPrice] = useState<boolean>(false);

  const handleRoute = () => {
    setOpenRoute((prev) => !prev);
    setOpenGuide(false);
    setAirNumber(false);
    setTicketPrice(false);
  };

  const handleGuide = () => {
    setOpenGuide((prev) => !prev);
    setOpenRoute(false);
    setAirNumber(false);
    setTicketPrice(false);
  };

  const handleNumber = () => {
    setAirNumber((prev) => !prev);
    setOpenRoute(false);
    setOpenGuide(false);
    setTicketPrice(false);
  };

  const handlePrice = () => {
    setTicketPrice((prev) => !prev);
    setOpenRoute(false);
    setOpenGuide(false);
    setAirNumber(false);
  };

  const bgImage = [
    "/herobg1.jpg",
    "/herobg2.jpg",
    "/herobg3.jpg",
    "/herobg4.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % bgImage.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [bgImage.length]);

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <main
      style={{ backgroundImage: `url(${bgImage[bgIndex]})` }}
      className="bg-cover bg-center w-full h-[1080px] opacity-65 transition-all duration-1000"
    >
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h3 className="flex items-center flex-col md:flex-row justify-center pt-2 text-xl font-semibold text-[#cf6110]">
          Hello, {user.firstName} welcome to Flughafen München-Riem
          International Airport
        </h3>
        <div className="mt-5 w-full h-[96px] md:h-[100px] bg-slate-200/35 opacity-100 grid grid-cols-2 md:grid-cols-4">
          <button
            onClick={handleRoute}
            className="md:text-2xl text-purple-700 hover:ring-2 hover:bg-[#dc5110] hover:font-bold"
          >
            <span>Aircraft Route</span>
          </button>
          <button
            onClick={handleGuide}
            className="md:text-2xl text-purple-700 hover:ring-2 hover:bg-[#dc5110] hover:font-bold"
          >
            <span>Passenger Guide</span>
          </button>
          <button
            onClick={handleNumber}
            className="md:text-2xl text-purple-700 hover:ring-2 hover:bg-[#dc5110] hover:font-bold"
          >
            <span>Aircraft Number</span>
          </button>
          <button
            onClick={handlePrice}
            className="md:text-2xl text-purple-700 hover:ring-2 hover:bg-[#dc5110] hover:font-bold"
          >
            <span>Ticket Price</span>
          </button>
        </div>
        {/* Open Aircraft Route */}
        {openRoute && (
          <div>
            <h1 className="pt-52">Aircraft Route</h1>
          </div>
        )}
        {/* Open Passenger Guide */}
        {openGuide && (
          <div>
            <h1 className="pt-52">Passenger Guide</h1>
          </div>
        )}
        {/* Open Aircraft Number */}
        {airNumber && (
          <div>
            <h1 className="pt-52">Aircraft Number</h1>
          </div>
        )}
        {/* Open Ticket Price */}
        {ticketPrice && (
          <div>
            <h1 className="pt-52">Ticket Price</h1>
          </div>
        )}
      </div>
    </main>
  );
};

export default Page;