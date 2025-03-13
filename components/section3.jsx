// // // // components/FacesGridSection.jsx
// // // import Image from 'next/image';
// // // import Link from 'next/link';

// // // export default function FacesGridSection() {
// // //   // Image data with their respective sizes
// // //   const images = [
// // //     { id: 1, src: '/images/baby-newborn.jpg', alt: 'Newborn baby', className: 'col-span-1 row-span-1' },
// // //     { id: 2, src: '/images/baby-birthday.jpg', alt: 'Baby first birthday', className: 'col-span-1 row-span-1' },
// // //     { id: 3, src: '/images/graduation.jpg', alt: 'Woman at graduation', className: 'col-span-1 row-span-1' },
// // //     { id: 4, src: '/images/temple-visit.jpg', alt: 'Person visiting temple', className: 'col-span-1 row-span-1' },
// // //     { id: 5, src: '/images/engagement.jpg', alt: 'Engagement ring', className: 'col-span-1 row-span-1' },
// // //     { id: 6, src: '/images/child-height.jpg', alt: 'Measuring child height', className: 'col-span-1 row-span-1' },
// // //     { id: 7, src: '/images/mother-daughter.jpg', alt: 'Mother and daughter', className: 'col-span-1 row-span-1' },
// // //     { id: 8, src: '/images/man-motorcycle.jpg', alt: 'Man on motorcycle', className: 'col-span-1 row-span-1' },
// // //     { id: 9, src: '/images/anniversary.jpg', alt: 'Anniversary celebration', className: 'col-span-1 row-span-1' },
// // //     { id: 10, src: '/images/worker.jpg', alt: 'Construction worker', className: 'col-span-2 row-span-1' },
// // //     { id: 11, src: '/images/boat-trip.jpg', alt: 'Woman on boat trip', className: 'col-span-2 row-span-1' },
// // //     { id: 12, src: '/images/grandfather-grandson.jpg', alt: 'Grandfather with grandson', className: 'col-span-1 row-span-1' },
// // //   ];

// // //   return (
// // //     <div className="bg-white py-16 md:py-24">
// // //       <div className="container mx-auto px-4 max-w-6xl">
// // //         {/* Heading Section */}
// // //         <div className="text-center mb-16">
// // //           <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">
// // //             We know the faces you love
// // //           </h2>
// // //           <p className="text-gray-600 max-w-3xl mx-auto mb-8">
// // //             AirVault uses AI to find your loved ones, across all your memories. Letting you live those happy moments that truly happen only once.
// // //           </p>
// // //           <Link href="/signup">
// // //             <button className="bg-[#F47142] hover:bg-[#E45E30] text-white font-medium py-3 px-8 rounded-full transition duration-300">
// // //               Try AirVault Now
// // //             </button>
// // //           </Link>
// // //         </div>

// // //         {/* Bento Grid Gallery */}
// // //         <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
// // //           {/* First row - 5 images */}
// // //           <div className="rounded-lg overflow-hidden h-40 md:h-52">
// // //             <Image
// // //               src="/images/baby-newborn.jpg"
// // //               alt="Newborn baby"
// // //               width={400}
// // //               height={400}
// // //               className="w-full h-full object-cover"
// // //             />
// // //           </div>
// // //           <div className="rounded-lg overflow-hidden h-40 md:h-52">
// // //             <Image
// // //               src="/images/baby-birthday.jpg"
// // //               alt="Baby first birthday"
// // //               width={400}
// // //               height={400}
// // //               className="w-full h-full object-cover"
// // //             />
// // //           </div>
// // //           <div className="rounded-lg overflow-hidden h-40 md:h-52">
// // //             <Image
// // //               src="/images/graduation.jpg"
// // //               alt="Woman at graduation"
// // //               width={400}
// // //               height={400}
// // //               className="w-full h-full object-cover"
// // //             />
// // //           </div>
// // //           <div className="rounded-lg overflow-hidden h-40 md:h-52">
// // //             <Image
// // //               src="/images/temple-visit.jpg"
// // //               alt="Person visiting temple"
// // //               width={400}
// // //               height={400}
// // //               className="w-full h-full object-cover"
// // //             />
// // //           </div>
// // //           <div className="rounded-lg overflow-hidden h-40 md:h-52">
// // //             <Image
// // //               src="/images/engagement.jpg"
// // //               alt="Engagement ring"
// // //               width={400}
// // //               height={400}
// // //               className="w-full h-full object-cover"
// // //             />
// // //           </div>

// // //           {/* Second row - 4 images */}
// // //           <div className="rounded-lg overflow-hidden h-40 md:h-52">
// // //             <Image
// // //               src="/images/child-height.jpg"
// // //               alt="Measuring child height"
// // //               width={400}
// // //               height={400}
// // //               className="w-full h-full object-cover"
// // //             />
// // //           </div>
// // //           <div className="rounded-lg overflow-hidden h-40 md:h-52">
// // //             <Image
// // //               src="/images/mother-daughter.jpg"
// // //               alt="Mother and daughter"
// // //               width={400}
// // //               height={400}
// // //               className="w-full h-full object-cover"
// // //             />
// // //           </div>
// // //           <div className="rounded-lg overflow-hidden h-40 md:h-52">
// // //             <Image
// // //               src="/images/man-motorcycle.jpg"
// // //               alt="Man on motorcycle"
// // //               width={400}
// // //               height={400}
// // //               className="w-full h-full object-cover"
// // //             />
// // //           </div>
// // //           <div className="rounded-lg overflow-hidden h-40 md:h-52">
// // //             <Image
// // //               src="/images/anniversary.jpg"
// // //               alt="Anniversary celebration"
// // //               width={400}
// // //               height={400}
// // //               className="w-full h-full object-cover"
// // //             />
// // //           </div>

// // //           {/* Third row - 3 images with varying widths */}
// // //           <div className="rounded-lg overflow-hidden col-span-2 h-40 md:h-52">
// // //             <Image
// // //               src="/images/worker.jpg"
// // //               alt="Construction worker"
// // //               width={800}
// // //               height={400}
// // //               className="w-full h-full object-cover"
// // //             />
// // //           </div>
// // //           <div className="rounded-lg overflow-hidden col-span-2 h-40 md:h-52">
// // //             <Image
// // //               src="/images/boat-trip.jpg"
// // //               alt="Woman on boat trip"
// // //               width={800}
// // //               height={400}
// // //               className="w-full h-full object-cover"
// // //             />
// // //           </div>
// // //           <div className="rounded-lg overflow-hidden col-span-1 h-40 md:h-52">
// // //             <Image
// // //               src="/images/grandfather-grandson.jpg"
// // //               alt="Grandfather with grandson"
// // //               width={400}
// // //               height={400}
// // //               className="w-full h-full object-cover"
// // //             />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // components/FacesGridSection.jsx
// // import Image from "next/image";
// // import Link from "next/link";

// // export default function FacesGridSection() {
// //   // Using placeholder images from unsplash and other free stock photo sites
// //   const images = [
// //     {
// //       id: 1,
// //       src: "/Frame (1).png",
// //       alt: "Newborn baby",
// //     },
// //     {
// //       id: 2,
// //       src: "/Frame (2).png",
// //       alt: "Baby first birthday",
// //     },
// //     {
// //       id: 3,
// //       src: "/Frame (3).png",
// //       alt: "Woman at graduation",
// //     },
// //     {
// //       id: 4,
// //       src: "/Frame (4).png",
// //       alt: "Temple visit",
// //     },
// //     {
// //       id: 5,
// //       src: "/Frame (5).png",
// //       alt: "Engagement ring",
// //     },
// //     {
// //       id: 6,
// //       src: "/Frame (6).png",
// //       alt: "Measuring child height",
// //     },
// //     {
// //       id: 7,
// //       src: "/Frame (7).png",
// //       alt: "Mother and daughter",
// //     },
// //     {
// //       id: 8,
// //       src: "/Frame (8).png",
// //       alt: "Man on motorcycle",
// //     },
// //     {
// //       id: 9,
// //       src: "/Frame (9).png",
// //       alt: "Anniversary celebration",
// //     },
// //     {
// //       id: 10,
// //       src: "public/Frame (10).png",
// //       alt: "Construction worker",
// //     },
// //     {
// //       id: 11,
// //       src: "https://images.unsplash.com/photo-1544551763-92ab472cad5d",
// //       alt: "Woman on boat trip",
// //     },
// //     {
// //       id: 12,
// //       src: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8",
// //       alt: "Grandfather with grandson",
// //     },
// //   ];

// //   return (
// //     <div className="bg-white py-16 md:py-24">
// //       <div className="container mx-auto px-4 max-w-6xl">
// //         {/* Heading Section */}
// //         <div className="text-center mb-16">
// //           <h2 className="text-5xl md:text-6xl font-bold text-gray-700 mb-4">
// //             We know the faces you love
// //           </h2>
// //           <p className="text-gray-600 max-w-3xl mx-auto mb-8">
// //             AirVault uses AI to find your loved ones, across all your memories.
// //             Letting you live those happy moments that truly happen only once.
// //           </p>
// //           <Link href="/signup">
// //             <button className="bg-[#F47142] hover:bg-[#E45E30] text-white font-medium py-3 px-8 rounded-full transition duration-300">
// //               Try AirVault Now
// //             </button>
// //           </Link>
// //         </div>

// //         {/* Bento Grid Gallery */}
// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
// //           {/* First row - 5 images */}
// //           <div className="rounded-lg overflow-hidden h-40 md:h-52">
// //             <img
// //               src={`${images[0].src}?auto=format&fit=crop&w=500&h=500&q=80`}
// //               alt={images[0].alt}
// //               className="w-full h-full object-cover"
// //             />
// //           </div>
// //           <div className="rounded-lg overflow-hidden h-40 md:h-52">
// //             <img
// //               src={`${images[1].src}?auto=format&fit=crop&w=500&h=500&q=80`}
// //               alt={images[1].alt}
// //               className="w-full h-full object-cover"
// //             />
// //           </div>
// //           <div className="rounded-lg overflow-hidden h-40 md:h-52">
// //             <img
// //               src={`${images[2].src}?auto=format&fit=crop&w=500&h=500&q=80`}
// //               alt={images[2].alt}
// //               className="w-full h-full object-cover"
// //             />
// //           </div>
// //           <div className="rounded-lg overflow-hidden h-40 md:h-52">
// //             <img
// //               src={`${images[3].src}?auto=format&fit=crop&w=500&h=500&q=80`}
// //               alt={images[3].alt}
// //               className="w-full h-full object-cover"
// //             />
// //           </div>
// //           <div className="rounded-lg overflow-hidden h-40 md:h-52">
// //             <img
// //               src={`${images[4].src}?auto=format&fit=crop&w=500&h=500&q=80`}
// //               alt={images[4].alt}
// //               className="w-full h-full object-cover"
// //             />
// //           </div>

// //           {/* Second row - 4 images */}
// //           <div className="rounded-lg overflow-hidden h-40 md:h-52">
// //             <img
// //               src={`${images[5].src}?auto=format&fit=crop&w=500&h=500&q=80`}
// //               alt={images[5].alt}
// //               className="w-full h-full object-cover"
// //             />
// //           </div>
// //           <div className="rounded-lg overflow-hidden h-40 md:h-52">
// //             <img
// //               src={`${images[6].src}?auto=format&fit=crop&w=500&h=500&q=80`}
// //               alt={images[6].alt}
// //               className="w-full h-full object-cover"
// //             />
// //           </div>
// //           <div className="rounded-lg overflow-hidden h-40 md:h-52">
// //             <img
// //               src={`${images[7].src}?auto=format&fit=crop&w=500&h=500&q=80`}
// //               alt={images[7].alt}
// //               className="w-full h-full object-cover"
// //             />
// //           </div>
// //           <div className="rounded-lg overflow-hidden h-40 md:h-52">
// //             <img
// //               src={`${images[8].src}?auto=format&fit=crop&w=500&h=500&q=80`}
// //               alt={images[8].alt}
// //               className="w-full h-full object-cover"
// //             />
// //           </div>

// //           {/* Third row - 3 images with varying widths */}
// //           <div className="rounded-lg overflow-hidden col-span-2 h-40 md:h-52">
// //             <img
// //               src={`${images[9].src}?auto=format&fit=crop&w=800&h=400&q=80`}
// //               alt={images[9].alt}
// //               className="w-full h-full object-cover"
// //             />
// //           </div>
// //           <div className="rounded-lg overflow-hidden col-span-2 h-40 md:h-52">
// //             <img
// //               src={`${images[10].src}?auto=format&fit=crop&w=800&h=400&q=80`}
// //               alt={images[10].alt}
// //               className="w-full h-full object-cover"
// //             />
// //           </div>
// //           <div className="rounded-lg overflow-hidden col-span-1 h-40 md:h-52">
// //             <img
// //               src={`${images[11].src}?auto=format&fit=crop&w=500&h=500&q=80`}
// //               alt={images[11].alt}
// //               className="w-full h-full object-cover"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // components/FacesGallery.jsx
// import Image from "next/image";

// const FacesGridSection = () => {
//   return (
//     <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Heading Section */}
//         <div className="text-center mb-10">
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
//             We know the faces you love
//           </h2>
//           <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
//             AirVault uses AI to find your loved ones, across all your memories.
//             Letting you live those happy moments that truly happen only once.
//           </p>
//           <div className="flex justify-center">
//             <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-full transition duration-300">
//               Try AirVault Now
//             </button>
//           </div>
//         </div>

//         {/* Bento Grid Gallery */}
//         <div className="grid grid-cols-12 gap-3 md:gap-4">
//           {/* Row 1 */}
//           <div className="col-span-6 md:col-span-3 aspect-square rounded-2xl overflow-hidden">
//             <div className="relative w-full h-full">
//               <Image
//                 src="/Frame (1).png"
//                 alt="Newborn baby"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//           <div className="col-span-6 md:col-span-3 aspect-square rounded-2xl overflow-hidden">
//             <div className="relative w-full h-full">
//               <Image
//                 src="/Frame (2).png"
//                 alt="Child's birthday"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//           <div className="col-span-6 md:col-span-3 aspect-square rounded-2xl overflow-hidden">
//             <div className="relative w-full h-full">
//               <Image
//                 src="/Frame (3).png"
//                 alt="Graduation celebration"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//           <div className="col-span-6 md:col-span-3 aspect-square rounded-2xl overflow-hidden">
//             <div className="relative w-full h-full">
//               <Image
//                 src="/Frame (4).png"
//                 alt="Travel memory"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>

//           {/* Row 2 */}
//           <div className="col-span-6 md:col-span-3 aspect-square rounded-2xl overflow-hidden">
//             <div className="relative w-full h-full">
//               <Image
//                 src="/Frame (5).png"
//                 alt="Engagement moment"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//           <div className="col-span-6 md:col-span-3 aspect-square rounded-2xl overflow-hidden">
//             <div className="relative w-full h-full">
//               <Image
//                 src="/Frame (6).png"
//                 alt="Child playing"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//           <div className="col-span-6 md:col-span-3 aspect-square rounded-2xl overflow-hidden">
//             <div className="relative w-full h-full">
//               <Image
//                 src="/Frame (7).png"
//                 alt="First day of school"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//           <div className="col-span-6 md:col-span-3 aspect-square rounded-2xl overflow-hidden">
//             <div className="relative w-full h-full">
//               <Image
//                 src="/Frame (8).png"
//                 alt="Man on motorcycle"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>

//           {/* Row 3 */}
//           <div className="col-span-6 md:col-span-4 aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden">
//             <div className="relative w-full h-full">
//               <Image
//                 src="/Frame (9).png"
//                 alt="Anniversary celebration"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//           <div className="col-span-6 md:col-span-4 aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden">
//             <div className="relative w-full h-full">
//               <Image
//                 src="/Frame (10).png"
//                 alt="Construction worker"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//           <div className="col-span-12 md:col-span-4 aspect-[2/1] md:aspect-[4/3] rounded-2xl overflow-hidden">
//             <div className="relative w-full h-full">
//               <Image
//                 src="/image 873.png"
//                 alt="Vacation in nature"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>

//           {/* Row 4 (Only visible on mobile) */}
//           <div className="col-span-12 md:hidden aspect-[2/1] rounded-2xl overflow-hidden">
//             <div className="relative w-full h-full">
//               <Image
//                 src="/Frame (10).png"
//                 alt="Grandfather with child"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>

//           {/* Row 4 (Only visible on desktop) */}
//           <div className="hidden md:block md:col-span-8 aspect-[2/1] rounded-2xl overflow-hidden">
//             <div className="relative w-full h-full">
//               <Image
//                 src="/images/gallery/boat-trip.jpg"
//                 alt="Woman on boat trip"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//           <div className="hidden md:block md:col-span-4 aspect-[1/1] rounded-2xl overflow-hidden">
//             <div className="relative w-full h-full">
//               <Image
//                 src="/images/gallery/grandfather.jpg"
//                 alt="Grandfather with child"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FacesGridSection;

// components/FacesGallery.jsx
import Image from "next/image";

const FacesGridSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            We know the faces you love
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            AirVault uses AI to find your loved ones, across all your memories.
            Letting you live those happy moments that truly happen only once.
          </p>
          <div className="flex justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-full transition duration-300">
              Try AirVault Now
            </button>
          </div>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {/* First Column - 5 images */}
          <div className="space-y-3 md:space-y-4">
            <div className="rounded-2xl overflow-hidden aspect-square">
              <div className="relative w-full h-full">
                <Image
                  src="/images/gallery/newborn.jpg"
                  alt="Newborn baby"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square">
              <div className="relative w-full h-full">
                <Image
                  src="/images/gallery/child-playing.jpg"
                  alt="Child playing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square">
              <div className="relative w-full h-full">
                <Image
                  src="/images/gallery/worker.jpg"
                  alt="Construction worker"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square">
              <div className="relative w-full h-full">
                <Image
                  src="/images/gallery/travel.jpg"
                  alt="Travel memory"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square">
              <div className="relative w-full h-full">
                <Image
                  src="/images/gallery/engagement.jpg"
                  alt="Engagement moment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Second Column - 4 images */}
          <div className="space-y-3 md:space-y-4">
            <div className="rounded-2xl overflow-hidden aspect-square">
              <div className="relative w-full h-full">
                <Image
                  src="/images/gallery/birthday.jpg"
                  alt="Child's birthday"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square">
              <div className="relative w-full h-full">
                <Image
                  src="/images/gallery/first-day-school.jpg"
                  alt="First day of school"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square">
              <div className="relative w-full h-full">
                <Image
                  src="/images/gallery/motorcycle.jpg"
                  alt="Man on motorcycle"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/5]">
              <div className="relative w-full h-full">
                <Image
                  src="/images/gallery/boat-trip.jpg"
                  alt="Woman on boat trip"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Third Column - 3 images */}
          <div className="space-y-3 md:space-y-4">
            <div className="rounded-2xl overflow-hidden aspect-square">
              <div className="relative w-full h-full">
                <Image
                  src="/images/gallery/graduation.jpg"
                  alt="Graduation celebration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square">
              <div className="relative w-full h-full">
                <Image
                  src="/images/gallery/anniversary.jpg"
                  alt="Anniversary celebration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/5]">
              <div className="relative w-full h-full">
                <Image
                  src="/images/gallery/grandfather.jpg"
                  alt="Grandfather with child"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacesGridSection;
