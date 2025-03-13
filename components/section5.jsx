// // components/MemoriesSection.jsx
// import Image from 'next/image';

// const MemoriesSection = () => {
//   return (
//     <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Text Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
//             Your memories are worth everything!
//           </h2>
//           <p className="text-lg text-gray-600">
//             No one understands it better than us.
//           </p>
//         </div>

//         {/* Desktop Image Collage - Hidden on mobile, visible on md+ screens */}
//         <div className="hidden md:block relative w-full h-[400px] lg:h-[500px]">
//           {/* Image 1 - Baby */}
//           <div className="absolute left-0 top-0 w-36 h-64 md:w-48 md:h-80 lg:w-64 lg:h-96 rounded-3xl overflow-hidden transform -rotate-6">
//             <Image
//               src="/images/memory-baby.jpg"
//               alt="Baby memories"
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* Image 2 - Cooking */}
//           <div className="absolute left-[15%] top-[25%] w-48 h-56 md:w-64 md:h-72 lg:w-72 lg:h-80 rounded-3xl overflow-hidden transform rotate-3">
//             <Image
//               src="/images/memory-cooking.jpg"
//               alt="Cooking memories"
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* Image 3 - Mountain view */}
//           <div className="absolute left-[40%] top-0 w-40 h-64 md:w-56 md:h-80 lg:w-64 lg:h-96 rounded-3xl overflow-hidden transform -rotate-3">
//             <Image
//               src="/images/memory-mountain.jpg"
//               alt="Adventure memories"
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* Image 4 - Friends */}
//           <div className="absolute right-0 top-[10%] w-48 h-56 md:w-64 md:h-72 lg:w-72 lg:h-80 rounded-3xl overflow-hidden transform rotate-6">
//             <Image
//               src="/images/memory-friends.jpg"
//               alt="Friends memories"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>

//         {/* Mobile Image - Visible only on small screens */}
//         <div className="block md:hidden relative w-full h-80">
//           <Image
//             src="/images/memories-mobile-collage.jpg"
//             alt="Cherished memories collection"
//             fill
//             className="object-contain"
//             priority
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MemoriesSection;

// components/MemoriesSection.jsx

// import Image from "next/image";

// const MemoriesSection = () => {
//   return (
//     <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Text Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-5xl md:text-6xl font-bold text-gray-700 mb-4">
//             Your memories are worth everything!
//           </h2>
//           <p className="text-lg text-gray-600">
//             No one understands it better than us.
//           </p>
//         </div>

//         {/* Desktop Image - Hidden on mobile, visible on md+ screens */}
//         <div className="hidden md:block relative w-full h-64 md:h-80 lg:h-96">
//           <Image
//             src="/Frame 1000003837.png"
//             alt="Collection of cherished memories"
//             fill
//             className="object-contain"
//             priority
//           />
//         </div>

//         {/* Mobile Image - Visible only on small screens */}
//         <div className="block md:hidden relative w-full h-64">
//           <Image
//             src="/mobile.png"
//             alt="Collection of cherished memories"
//             fill
//             className="object-contain"
//             priority
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MemoriesSection;

// components/MemoriesSection.jsx
import Image from "next/image";

const MemoriesSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-15">
        {/* Text Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-700 mb-4">
            Your memories are worth everything!
          </h2>
          <p className="text-lg text-gray-600">
            No one understands it better than us.
          </p>
        </div>
      </div>

      {/* Full width container for images */}
      <div className="relative w-full">
        {/* Desktop Image - Hidden on mobile, visible on md+ screens */}
        <div className="hidden md:block w-full">
          <div className="relative w-full h-64 md:h-80 lg:h-[400px] xl:h-[550px]">
            <Image
              src="/Frame 1000003837.png"
              alt="Collection of cherished memories"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Mobile Image - Visible only on small screens */}
        <div className="block md:hidden w-full">
          <div className="relative w-full h-64 sm:h-80">
            <Image
              src="/mobile.png"
              alt="Collection of cherished memories"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoriesSection;
