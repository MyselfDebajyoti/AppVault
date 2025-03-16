// // components/FeaturesSection.jsx
// import Image from "next/image";
// import Link from "next/link";

// export default function FeaturesSection() {
//   return (
//     <div className="bg-gray-50 py-16 md:py-24">
//       <div className="container mx-auto px-6 max-w-6xl">
//         <div className="flex flex-col items-center">
//           {/* Text Content - Top for both desktop and mobile */}
//           <div className="w-full text-center mb-12 max-w-2xl mx-auto">
//             <p className="text-gray-600 mb-2">
//               AirVault doesn't just store your media.
//             </p>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
//               We track your memories.
//             </h2>
//             <p className="text-gray-600 mb-8">
//               Your entire life-story right at your fingertips.
//             </p>
//             <Link href="/signup">
//               <button className="bg-[#F47142] hover:bg-[#E45E30] text-white font-medium py-2 px-6 rounded-full transition duration-300">
//                 Try AirVault Now
//               </button>
//             </Link>
//           </div>

//           {/* Phone Mockups - Bottom for both desktop and mobile, but scaled differently */}
//           <div className="w-full max-w-lg md:max-w-2xl relative">
//             <div className="relative h-[400px] sm:h-[450px] md:h-[500px]">
//               {/* Left Phone */}
//               <div className="absolute left-0 bottom-0 z-10 w-[45%]">
//                 <Image
//                   src="/mock12 1.png"
//                   alt="AirVault mobile app showing photo collections"
//                   width={250}
//                   height={500}
//                   className="w-full h-auto"
//                   priority
//                 />
//               </div>

//               {/* Right Phone - positioned slightly higher and to the right */}
//               <div className="absolute right-0 bottom-0 z-20 w-[55%]">
//                 <Image
//                   src="/mock11 1.png"
//                   alt="AirVault mobile app showing photo gallery"
//                   width={280}
//                   height={560}
//                   className="w-full h-auto"
//                   priority
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// components/FeaturesSection.jsx
import Image from "next/image";
import Link from "next/link";

export default function FeaturesSection() {
  return (
    <div className="bg-white md:pb-24 md:pt-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center">
          {/* Text Content - Top for both desktop and mobile */}
          <div className="w-full text-center mb-16 max-w-5xl mx-auto">
            <p className="text-gray-600 mb-2 md:text-3xl text-xl">
              AirVault doesn&apos;t just store your media.
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-700 mb-4">
              We track your memories.
            </h1>
            <p className="text-gray-600 mb-8 md:text-lg text-sm">
              Your entire life-story right at your fingertips.
            </p>
            <Link href="/signup">
              <button className="bg-[#FF6A00] hover:bg-[#E45E30] text-white font-medium py-2 px-6 rounded-full transition duration-300">
                Try AirVault Now
              </button>
            </Link>
          </div>

          {/* Single Mockup Image - Bottom for both desktop and mobile */}
          <div className="w-full max-w-md md:max-w-2xl">
            <Image
              src="/Frame 1000003858.png"
              alt="AirVault mobile app interfaces showing photo collections and gallery"
              width={600}
              height={350}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
