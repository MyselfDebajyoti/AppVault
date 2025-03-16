// // components/HeroSection.jsx

// "use client";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// const HeroSection = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Check if we're on the client side
//     if (typeof window !== "undefined") {
//       const handleResize = () => {
//         setIsMobile(window.innerWidth < 768);
//       };

//       // Set initial value
//       handleResize();

//       // Add event listener
//       window.addEventListener("resize", handleResize);

//       // Clean up
//       return () => window.removeEventListener("resize", handleResize);
//     }
//   }, []);

//   return (
//     <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-5xl mx-auto">
//         {/* Hero Text Section */}
//         <div className="text-center mb-12">
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-700 mb-4">
//             The best moments are the<br></br> ones you share
//           </h1>
//           <p className="text-lg md:text-xl text-gray-600 mb-8">
//             Share your memories with your friends and family with a single
//             click.
//           </p>
//           <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition duration-300">
//             Try AirVault Now
//           </button>
//         </div>

//         {/* Images Section */}
//         <div className="relative h-96 md:h-[30rem] w-full mt-8">
//           {isMobile ? (
//             // Mobile Image
//             <Image
//               src="/Frame 1000003861.png" // Replace with your mobile image path
//               alt="AirVault on mobile"
//               fill
//               className="object-contain"
//               priority
//             />
//           ) : (
//             // Desktop Image
//             <Image
//               src="/Frame 1000003875.png" // Replace with your desktop image path
//               alt="AirVault photo sharing"
//               fill
//               className="object-contain"
//               priority
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// components/HeroSection.jsx
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-white pt-8 px-4 sm:px-6 lg:px-8 md:pt-16">
      <div className="max-w-6xl mx-auto">
        {/* Hero Text Section */}
        <div className="text-center mb-0 md:mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-700 mb-4">
            The best moments are the ones you share
          </h1>
          <p className="text-md md:text-xl text-gray-600 mb-8">
            Share your memories with your friends and family with a single
            click.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition duration-300">
            Try AirVault Now
          </button>
        </div>

        {/* Images Section - Responsive with Tailwind */}
        <div className="relative h-96 md:h-[30rem] w-full mt-8">
          {/* Mobile Image - Only visible on small screens */}
          <div className="block md:hidden relative h-full w-full">
            <Image
              src="/Frame 1000003861 (1).png"
              alt="AirVault on mobile"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop Image - Hidden on small screens, visible on md and up */}
          <div className="hidden md:block relative h-full w-full">
            <Image
              src="/Frame 1000003875.png"
              alt="AirVault photo sharing"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
