'use client'
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {

  // scroll to bottom of page when component mounts
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <main className="flex flex-col items-center mt-8 md:mt-0 md:-mt-32 px-4">
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Welcome to Veyor Wellness
          </h1>
          <p className="text-base md:text-lg py-4 md:py-6">
            Veyor Wellness Booking System
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Link
            href="/booking"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 md:px-8 rounded"
          >
            Book Now
          </Link>
        </div>
      </div>
    </main>
  );
}
