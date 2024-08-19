"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center p-4 sticky top-0 bg-white z-10">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-xl md:text-2xl font-bold ml-2 md:ml-4">
            Veyor Wellness
          </h1>
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-2 md:space-x-4 pr-4 md:pr-12">
          <li className="cursor-pointer hover:underline">
            <Link href="/">
              <span
                className={`${
                  pathname === "/" ? "underline font-semibold" : ""
                }`}
              >
                Home
              </span>
            </Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link href="/booking">
              <span
                className={`${
                  pathname === "/booking" ? "underline font-semibold" : ""
                }`}
              >
                Book Now
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
