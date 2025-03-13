//

// components/LandingHero.jsx
import Image from "next/image";
import Link from "next/link";

export default function LandingHero() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Navbar with logo and text */}
      <nav className="py-4">
        <div className="container mx-auto px-6 sm:px-20 md:py-1 flex items-center">
          <div className="flex items-center">
            <Image
              src="/LOGO 1 12.png"
              alt="AirVault Logo"
              width={166}
              height={24}
              priority
            />
          </div>
        </div>
      </nav>

      {/* Main content centered */}
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-4xl w-full text-center">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-700 mb-4">
            Your photo gallery is a mess!
            <br />
            We can fix it.
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 mb-12">
            AirVault is the easiest way to capture and relive your memories.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link href="/signup">
              <button className="bg-[#FF6A00] hover:bg-[#E45E30] text-white font-medium py-3 px-8 rounded-full transition duration-300">
                Try AirVault Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
