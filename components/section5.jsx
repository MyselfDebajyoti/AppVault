// // // components/MemoriesSection.jsx
// // import Image from 'next/image';

// // const MemoriesSection = () => {
// //   return (
// //     <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-6xl mx-auto">
// //         {/* Text Section */}
// //         <div className="text-center mb-12">
// //           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
// //             Your memories are worth everything!
// //           </h2>
// //           <p className="text-lg text-gray-600">
// //             No one understands it better than us.
// //           </p>
// //         </div>

// //         {/* Desktop Image Collage - Hidden on mobile, visible on md+ screens */}
// //         <div className="hidden md:block relative w-full h-[400px] lg:h-[500px]">
// //           {/* Image 1 - Baby */}
// //           <div className="absolute left-0 top-0 w-36 h-64 md:w-48 md:h-80 lg:w-64 lg:h-96 rounded-3xl overflow-hidden transform -rotate-6">
// //             <Image
// //               src="/images/memory-baby.jpg"
// //               alt="Baby memories"
// //               fill
// //               className="object-cover"
// //             />
// //           </div>

// //           {/* Image 2 - Cooking */}
// //           <div className="absolute left-[15%] top-[25%] w-48 h-56 md:w-64 md:h-72 lg:w-72 lg:h-80 rounded-3xl overflow-hidden transform rotate-3">
// //             <Image
// //               src="/images/memory-cooking.jpg"
// //               alt="Cooking memories"
// //               fill
// //               className="object-cover"
// //             />
// //           </div>

// //           {/* Image 3 - Mountain view */}
// //           <div className="absolute left-[40%] top-0 w-40 h-64 md:w-56 md:h-80 lg:w-64 lg:h-96 rounded-3xl overflow-hidden transform -rotate-3">
// //             <Image
// //               src="/images/memory-mountain.jpg"
// //               alt="Adventure memories"
// //               fill
// //               className="object-cover"
// //             />
// //           </div>

// //           {/* Image 4 - Friends */}
// //           <div className="absolute right-0 top-[10%] w-48 h-56 md:w-64 md:h-72 lg:w-72 lg:h-80 rounded-3xl overflow-hidden transform rotate-6">
// //             <Image
// //               src="/images/memory-friends.jpg"
// //               alt="Friends memories"
// //               fill
// //               className="object-cover"
// //             />
// //           </div>
// //         </div>

// //         {/* Mobile Image - Visible only on small screens */}
// //         <div className="block md:hidden relative w-full h-80">
// //           <Image
// //             src="/images/memories-mobile-collage.jpg"
// //             alt="Cherished memories collection"
// //             fill
// //             className="object-contain"
// //             priority
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MemoriesSection;

// // components/MemoriesSection.jsx

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

// // components/MemoriesSection.jsx
// import Image from "next/image";

// const MemoriesSection = () => {
//   return (
//     <div className="bg-white py-16">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-15">
//         {/* Text Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-5xl md:text-6xl font-bold text-gray-700 mb-4">
//             Your memories are worth everything!
//           </h2>
//           <p className="text-lg text-gray-600">
//             No one understands it better than us.
//           </p>
//         </div>
//       </div>

//       {/* Full width container for images */}
//       <div className="relative w-full">
//         {/* Desktop Image - Hidden on mobile, visible on md+ screens */}
//         <div className="hidden md:block w-full">
//           <div className="relative w-full h-64 md:h-80 lg:h-[400px] xl:h-[550px]">
//             <Image
//               src="/Frame 1000003837.png"
//               alt="Collection of cherished memories"
//               fill
//               className="object-cover object-center"
//               priority
//             />
//           </div>
//         </div>

//         {/* Mobile Image - Visible only on small screens */}
//         <div className="block md:hidden w-full">
//           <div className="relative w-full h-64 sm:h-80">
//             <Image
//               src="/mobile.png"
//               alt="Collection of cherished memories"
//               fill
//               className="object-cover object-center"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MemoriesSection;

// import Image from "next/image";

// const MemoriesSection = () => {
//   // Card data with images and rotation/position values
//   const cards = [
//     {
//       id: 1,
//       src: "/Frame 1000003837 (1).png",
//       alt: "Child crawling on floor",
//     },
//     {
//       id: 2,
//       src: "/Frame 1000003833.png",
//       alt: "People cooking together",
//     },
//     {
//       id: 3,
//       src: "/Frame 1000003834.png",
//       alt: "Person with arms spread on mountain",
//     },
//     {
//       id: 4,
//       src: "/Frame 1000003835.png",
//       alt: "Friends laughing together",
//     },
//     {
//       id: 5,
//       src: "/image 892.png",
//       alt: "Couple having a tender moment",
//     },
//   ];

//   return (
//     <div className="bg-gray-50 min-h-screen w-full py-16 px-4">
//       <div className="max-w-4xl mx-auto text-center mb-16">
//         <h1 className="text-5xl font-bold text-gray-800 mb-4">
//           Your memories are worth everything!
//         </h1>
//         <p className="text-gray-600">No one understands it better than us.</p>
//       </div>

//       {/* Images row with explicit dimensions */}
//       <div className="flex justify-center items-center gap-4 flex-wrap md:flex-nowrap max-w-7xl ">
//         {cards.map((image) => (
//           <div key={image.id} className="w-full sm:w-1/5 p-2">
//             <div className="rounded-3xl overflow-hidden ">
//               {/* Using width and height instead of fill */}
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 width={300}
//                 height={200}
//                 className="w-full h-auto object-cover rounded-3xl"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MemoriesSection;

// import Image from "next/image";

// const MemoriesSection = () => {
//   return (
//     <div className="bg-white py-16">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-15">
//         {/* Text Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-5xl md:text-6xl font-bold text-gray-700 mb-4">
//             Your memories are worth everything!
//           </h2>
//           <p className="text-lg text-gray-600">
//             No one understands it better than us.
//           </p>
//         </div>
//       </div>

//       {/* Full width container for images */}
//       <div className="max-w-[1740px]   ">
//         {/* Desktop Image - Hidden on mobile, visible on md+ screens */}
//         <div className="hidden md:block w-full">
//           <div className="relative w-full">
//             <Image
//               src="/Frame 1000003837.png"
//               alt="Collection of cherished memories"
//               width={1440}
//               height={300}
//               className="rounded-2xl"
//               priority
//             />
//           </div>
//         </div>

//         {/* Mobile Image - Visible only on small screens */}
//         <div className="block md:hidden w-full">
//           <div className="relative w-full">
//             <Image
//               src="/mobile.png"
//               alt="Collection of cherished memories"
//               width={640}
//               height={360}
//               className="rounded-2xl"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MemoriesSection;

// import Image from "next/image";

// const MemoriesSection = () => {
//   return (
//     <div className="bg-white py-16">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-15">
//         {/* Text Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-5xl md:text-6xl font-bold text-gray-700 mb-4">
//             Your memories are worth everything!
//           </h2>
//           <p className="text-lg text-gray-600">
//             No one understands it better than us.
//           </p>
//         </div>
//       </div>

//       {/* Full width container for images with centered content */}
//       <div className="w-full flex justify-center">
//         <div className="w-full max-w-7xl  ">
//           {/* Desktop Image - Hidden on mobile, visible on md+ screens */}
//           <div className="hidden md:block w-full">
//             <div className="relative w-full">
//               <Image
//                 src="/Frame 1000003837.png"
//                 alt="Collection of cherished memories"
//                 width={1000}
//                 height={250}
//                 className="rounded-2xl mx-auto object-cover"
//                 priority
//               />
//             </div>
//           </div>

//           {/* Mobile Image - Visible only on small screens */}
//           <div className="block md:hidden w-full">
//             <div className="relative w-full">
//               <Image
//                 src="/mobile.png"
//                 alt="Collection of cherished memories"
//                 width={640}
//                 height={360}
//                 className="rounded-2xl mx-auto"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MemoriesSection;
//Authentic below
import Image from "next/image";

const MemoriesSection = () => {
  return (
    <div className="bg-white md:py-16 pb:16 pt:0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 md:pb-15 pb-12">
        {/* Text Section */}
        <div className="text-center ">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-700 mb-4">
            Your memories are worth everything!
          </h2>
          <p className="md:text-lg text-md text-gray-600">
            No one understands it better than us.
          </p>
        </div>
      </div>

      {/* Full width container for images */}
      <div className="w-full">
        {/* Desktop Image - Hidden on mobile, visible on md+ screens */}
        <div className="hidden md:block w-full  ">
          <div className="relative w-full">
            <Image
              src="/Frame 1000003837.png"
              alt="Collection of cherished memories"
              width={1920}
              height={300}
              className=" object-contain  w-full "
              priority
            />
          </div>
        </div>

        {/* Mobile Image - Visible only on small screens */}
        <div className="block md:hidden w-full">
          <div className="relative w-full">
            <Image
              src="/mobile.png"
              alt="Collection of cherished memories"
              width={640}
              height={360}
              className="w-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoriesSection;

// import Image from "next/image";

// const MemoriesSection = () => {
//   return (
//     <div className="bg-white py-16">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-15">
//         {/* Text Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-5xl md:text-6xl font-bold text-gray-700 mb-4">
//             Your memories are worth everything!
//           </h2>
//           <p className="text-lg text-gray-600">
//             No one understands it better than us.
//           </p>
//         </div>
//       </div>

//       {/* Full width container for images */}
//       <div className="w-full">
//         {/* Desktop Image - Hidden on mobile, visible on md+ screens */}
//         <div className="hidden md:block w-full">
//           <div className="relative w-full h-40 md:h-48 lg:h-56">
//             <Image
//               src="/Frame 1000003837.png"
//               alt="Collection of cherished memories"
//               fill
//               className="w-full object-cover"
//               priority
//             />
//           </div>
//         </div>

//         {/* Mobile Image - Visible only on small screens */}
//         <div className="block md:hidden w-full">
//           <div className="relative w-full h-32">
//             <Image
//               src="/mobile.png"
//               alt="Collection of cherished memories"
//               fill
//               className="w-full object-cover"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MemoriesSection;

// import Image from "next/image";

// const MemoriesSection = () => {
//   return (
//     <div className="bg-white py-16">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-15">
//         {/* Text Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-5xl md:text-6xl font-bold text-gray-700 mb-4">
//             Your memories are worth everything!
//           </h2>
//           <p className="text-lg text-gray-600">
//             No one understands it better than us.
//           </p>
//         </div>
//       </div>

//       {/* Full width container with constrained height */}
//       <div className="w-full">
//         {/* Desktop Image - Hidden on mobile, visible on md+ screens */}
//         <div className="hidden md:block w-full">
//           <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 relative overflow-hidden">
//             <Image
//               src="/Frame 1000003837.png"
//               alt="Collection of cherished memories"
//               fill
//               sizes="100vw"
//               style={{ objectFit: "cover", objectPosition: "center" }}
//               priority
//             />
//           </div>
//         </div>

//         {/* Mobile Image - Visible only on small screens */}
//         <div className="block md:hidden w-full">
//           <div className="w-full h-40 sm:h-48 relative overflow-hidden">
//             <Image
//               src="/mobile.png"
//               alt="Collection of cherished memories"
//               fill
//               sizes="100vw"
//               style={{ objectFit: "cover", objectPosition: "center" }}
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MemoriesSection;
