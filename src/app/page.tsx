import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center py-12">
        <div className="">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold">Welcome to Veyor Wellness</h1>
            <p className="text-lg py-6">Veyor Wellness Booking System</p>
          </div>
          <div className="flex flex-col items-center">
            <Link
              href="/booking"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Book Now
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
