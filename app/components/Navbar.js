"use client";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
// import { useUser } from "@clerk/nextjs";

const Navbar = () => {
  // const user = useUser();
  // console.log(user.user?.id)
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold">Z-Chat</span>
        </Link>

        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/">
              <span className="text-gray-800 hover:text-blue-500">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/forums">
              <span className="text-gray-800 hover:text-blue-500">Forums</span>
            </Link>
          </li>
          <li>
            <Link href="/chat">
              <span className="text-gray-800 hover:text-blue-500">User Chat</span>
            </Link>
          </li>
          <li>
            <UserButton />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
