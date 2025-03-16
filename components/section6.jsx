// // // components/ProductShowcase.jsx
// // import Image from "next/image";

// // const ProductShowcase = () => {
// //   return (
// //     <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-6xl mx-auto">
// //         {/* Headline */}
// //         <div className="text-center mb-12">
// //           <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 mb-4 max-w-3xl mx-auto">
// //             Explore our wide selection of products that helps you preserve your
// //             memories, in your own style.
// //           </h2>
// //         </div>

// //         {/* Product Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
// //           {/* AirVault Cloud */}
// //           <div className="bg-white rounded-lg p-6 shadow-sm">
// //             <div className="mb-4">
// //               <span className="text-2xl font-semibold">
// //                 <span className="text-blue-600">AirVault Cloud</span> is built
// //                 for people who like it to keep it{" "}
// //                 <span className="font-bold">simple</span>.
// //               </span>
// //             </div>
// //             <div className="mb-6">
// //               <p className="text-gray-700">
// //                 AirVault Cloud lets you pack light on your trips so you can{" "}
// //                 <span className="font-semibold">
// //                   explore the world with just your phone
// //                 </span>
// //                 .
// //               </p>
// //             </div>
// //             <div className="flex items-end justify-between">
// //               <button className="bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-full hover:bg-gray-50 transition duration-300">
// //                 Try AirVault Now
// //               </button>
// //               <div className="relative w-40 h-40">
// //                 <Image
// //                   src="/images/airvault-cloud-phone.png"
// //                   alt="AirVault Cloud mobile app"
// //                   fill
// //                   className="object-contain"
// //                 />
// //               </div>
// //             </div>
// //           </div>

// //           {/* AirVault Go */}
// //           <div className="bg-white rounded-lg p-6 shadow-sm">
// //             <div className="mb-4">
// //               <span className="text-2xl font-semibold">
// //                 <span className="text-purple-600">AirVault Go</span> is built
// //                 for people who like to keep it{" "}
// //                 <span className="font-bold">close</span>.
// //               </span>
// //             </div>
// //             <div className="mb-6">
// //               <p className="text-gray-700">
// //                 AirVault Go lets you{" "}
// //                 <span className="font-semibold">
// //                   keep all your memories in your pocket
// //                 </span>
// //                 , so you can take them with you even on the craziest of
// //                 adventures.
// //               </p>
// //             </div>
// //             <div className="flex items-end justify-between">
// //               <button className="bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-full hover:bg-gray-50 transition duration-300">
// //                 Try AirVault Now
// //               </button>
// //               <div className="relative w-44 h-44">
// //                 <Image
// //                   src="/images/airvault-go-device.png"
// //                   alt="AirVault Go portable device"
// //                   fill
// //                   className="object-contain"
// //                 />
// //               </div>
// //             </div>
// //           </div>

// //           {/* AirVault Pro - Full Width on All Screens */}
// //           <div className="bg-white rounded-lg p-6 shadow-sm md:col-span-2">
// //             <div className="mb-4">
// //               <span className="text-2xl font-semibold">
// //                 <span className="text-orange-500">AirVault Pro</span> is built
// //                 for people who are hungry for{" "}
// //                 <span className="font-bold">power</span>.
// //               </span>
// //             </div>
// //             <div className="mb-6">
// //               <p className="text-gray-700">
// //                 AirVault Pro brings together the power of distributed hosting
// //                 into a single compact package, allowing your team to{" "}
// //                 <span className="font-semibold">
// //                   simultaneously access all your files at blazing fast speed!
// //                 </span>
// //               </p>
// //             </div>
// //             <div className="flex flex-col md:flex-row items-center justify-between">
// //               <button className="bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-full hover:bg-gray-50 transition duration-300 mb-6 md:mb-0">
// //                 Try AirVault Now
// //               </button>
// //               <div className="relative w-full md:w-96 h-48 md:h-56">
// //                 <Image
// //                   src="/Group 1000002833.png"
// //                   alt="AirVault Pro server"
// //                   fill
// //                   className="object-contain"
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductShowcase;

// // components/ProductShowcase.jsx
// import Image from "next/image";

// const ProductShowcase = () => {
//   return (
//     <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Headline */}
//         <div className="text-center mb-12">
//           <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 max-w-3xl mx-auto">
//             Explore our wide selection of products that helps you preserve your
//             memories, in your own style.
//           </h2>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
//           {/* AirVault Cloud */}
//           <div className="bg-white rounded-lg p-6 shadow-sm relative">
//             <div className="mb-4">
//               <span className="text-2xl font-semibold">
//                 <span className="text-blue-600">AirVault Cloud</span> is built
//                 for people who like it to keep it{" "}
//                 <span className="font-bold">simple</span>.
//               </span>
//             </div>
//             <div className="mb-16">
//               <p className="text-gray-700">
//                 AirVault Cloud lets you pack light on your trips so you can{" "}
//                 <span className="font-semibold">
//                   explore the world with just your phone
//                 </span>
//                 .
//               </p>
//             </div>
//             <div className="absolute bottom-6 left-6">
//               <button className="bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-full hover:bg-gray-50 transition duration-300">
//                 Try AirVault Now
//               </button>
//             </div>
//             <div className="absolute bottom-6 right-6">
//               <div className="relative w-32 h-32 md:w-36 md:h-36">
//                 <Image
//                   src="/images/airvault-cloud-phone.png"
//                   alt="AirVault Cloud mobile app"
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* AirVault Go */}
//           <div className="bg-white rounded-lg p-6 shadow-sm relative">
//             <div className="mb-4">
//               <span className="text-2xl font-semibold">
//                 <span className="text-purple-600">AirVault Go</span> is built
//                 for people who like to keep it{" "}
//                 <span className="font-bold">close</span>.
//               </span>
//             </div>
//             <div className="mb-16">
//               <p className="text-gray-700">
//                 AirVault Go lets you{" "}
//                 <span className="font-semibold">
//                   keep all your memories in your pocket
//                 </span>
//                 , so you can take them with you even on the craziest of
//                 adventures.
//               </p>
//             </div>
//             <div className="absolute bottom-6 left-6">
//               <button className="bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-full hover:bg-gray-50 transition duration-300">
//                 Try AirVault Now
//               </button>
//             </div>
//             <div className="absolute bottom-0 right-6">
//               <div className="relative w-40 h-40 md:w-44 md:h-44">
//                 <Image
//                   src="/images/airvault-go-device.png"
//                   alt="AirVault Go portable device"
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* AirVault Pro */}
//           <div className="bg-white rounded-lg p-6 shadow-sm relative md:col-span-2 h-80 md:h-96">
//             <div className="max-w-lg mb-4">
//               <span className="text-2xl font-semibold">
//                 <span className="text-orange-500">AirVault Pro</span> is built
//                 for people who are hungry for{" "}
//                 <span className="font-bold">power</span>.
//               </span>
//             </div>
//             <div className="max-w-lg mb-16">
//               <p className="text-gray-700">
//                 AirVault Pro brings together the power of distributed hosting
//                 into a single compact package, allowing your team to{" "}
//                 <span className="font-semibold">
//                   simultaneously access all your files at blazing fast speed!
//                 </span>
//               </p>
//             </div>
//             <div className="absolute bottom-6 left-6">
//               <button className="bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-full hover:bg-gray-50 transition duration-300">
//                 Try AirVault Now
//               </button>
//             </div>
//             <div className="absolute bottom-0 right-0 md:right-6">
//               <div className="relative w-64 h-64 md:w-80 md:h-80">
//                 <Image
//                   src="/images/airvault-pro-server.png"
//                   alt="AirVault Pro server"
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductShowcase;

// components/ProductsSection.jsx
// import Image from "next/image";

// export default function ProductsSection() {
//   return (
//     <section className="bg-white py-8 px-4 sm:py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//       {/* Heading - Show only on larger screens */}
//       <div className="text-center mb-8 hidden sm:block">
//         <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-800 max-w-3xl mx-auto leading-tight">
//           Explore our wide selection of products that helps you preserve your
//           memories, in your own style.
//         </h2>
//       </div>

//       {/* Product Cards Container */}
//       <div className="flex flex-col space-y-6 sm:space-y-8">
//         {/* AirVault Cloud Card */}
//         <div className="bg-white sm:bg-gray-50 rounded-xl sm:rounded-3xl p-4 sm:p-8 relative">
//           <div className="flex flex-col h-full">
//             <div className="mb-4 sm:mb-auto">
//               <h3 className="mb-1 sm:mb-2">
//                 <span className="text-xl sm:text-2xl font-semibold text-blue-600">
//                   AirVault Cloud
//                 </span>
//                 <span className="text-xl sm:text-2xl font-normal text-gray-700">
//                   {" "}
//                   is built for people who like it to keep it{" "}
//                 </span>
//                 <span className="text-xl sm:text-2xl font-bold text-gray-800">
//                   simple.
//                 </span>
//               </h3>
//               <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-4">
//                 AirVault Cloud lets you pack light on your trips so you can{" "}
//                 <span className="font-semibold">
//                   explore the world with just your phone
//                 </span>
//                 .
//               </p>
//               <button className="mt-4 border border-gray-300 rounded-full px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
//                 Try AirVault Now
//               </button>
//             </div>
//             <div className="mt-4 sm:mt-0 self-center sm:self-end sm:absolute sm:bottom-8 sm:right-8">
//               <Image
//                 src="/mockup.png" // Replace with your actual image path
//                 alt="AirVault Cloud phone app"
//                 width={180}
//                 height={220}
//                 className="object-contain"
//               />
//             </div>
//           </div>
//         </div>

//         {/* AirVault Go Card */}
//         <div className="bg-white sm:bg-gray-50 rounded-xl sm:rounded-3xl p-4 sm:p-8 relative">
//           <div className="flex flex-col h-full">
//             <div className="mb-4 sm:mb-auto">
//               <h3 className="mb-1 sm:mb-2">
//                 <span className="text-xl sm:text-2xl font-semibold text-blue-600">
//                   AirVault Go
//                 </span>
//                 <span className="text-xl sm:text-2xl font-normal text-gray-700">
//                   {" "}
//                   is built for people who like to keep it{" "}
//                 </span>
//                 <span className="text-xl sm:text-2xl font-bold text-gray-800">
//                   close.
//                 </span>
//               </h3>
//               <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-4">
//                 AirVault Go lets you{" "}
//                 <span className="font-semibold">
//                   keep all your memories in your pocket
//                 </span>
//                 , so you can take them with you even on the craziest of
//                 adventures.
//               </p>
//               <button className="mt-4 border border-gray-300 rounded-full px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
//                 Try AirVault Now
//               </button>
//             </div>
//             <div className="mt-4 sm:mt-0 self-center sm:self-auto sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:right-8 lg:right-auto lg:left-1/2">
//               <Image
//                 src="/mockup2.png" // Replace with your actual image path
//                 alt="AirVault Go device"
//                 width={180}
//                 height={180}
//                 className="object-contain"
//               />
//             </div>
//           </div>
//         </div>

//         {/* AirVault Pro Card */}
//         <div className="bg-white sm:bg-gray-50 rounded-xl sm:rounded-3xl p-4 sm:p-8 relative">
//           <div className="flex flex-col h-full">
//             <div className="mb-4 sm:mb-auto">
//               <h3 className="mb-1 sm:mb-2">
//                 <span className="text-xl sm:text-2xl font-semibold text-orange-500">
//                   AirVault Pro
//                 </span>
//                 <span className="text-xl sm:text-2xl font-normal text-gray-700">
//                   {" "}
//                   is built for people who are hungry for{" "}
//                 </span>
//                 <span className="text-xl sm:text-2xl font-bold text-gray-800">
//                   power.
//                 </span>
//               </h3>
//               <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-4">
//                 AirVault Pro brings together the power of distributed hosting
//                 into a single compact package, allowing your team to
//                 <span className="font-semibold">
//                   {" "}
//                   simultaneously access all your files at blazing fast speed!
//                 </span>
//               </p>
//               <button className="mt-4 border border-gray-300 rounded-full px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
//                 Try AirVault Now
//               </button>
//             </div>
//             <div className="mt-4 sm:mt-0 self-center sm:self-auto sm:absolute sm:bottom-0 sm:right-8">
//               <Image
//                 src="/image3.png" // Replace with your actual image path
//                 alt="AirVault Pro device"
//                 width={220}
//                 height={180}
//                 className="object-contain"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// components/ProductsSection.jsx
import Image from "next/image";

export default function ProductsSection() {
  return (
    <section className="bg-white py-15 px-4 sm:py-12 sm:px-6 lg:px-8 max-w-screen ">
      {/* Heading */}
      <div className="text-center sm:mb-8 sm:pb-8 pb-3 mb-3">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-800 max-w-3xl mx-auto leading-tight">
          Explore our wide selection of products that helps you preserve your
          memories, in your own style.
        </h2>
      </div>

      {/* Product Cards Container - Grid layout changes from 1 column on mobile to 2 columns on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AirVault Cloud Card */}
        {/* <div className="bg-white sm:bg-gray-50 rounded-xl sm:rounded-3xl p-4 sm:p-8 relative">
          <div className="flex flex-col h-full">
            <div>
              <h3 className="mb-1 sm:mb-2">
                <span className="text-xl sm:text-2xl font-semibold text-blue-600">
                  AirVault Cloud
                </span>
                <span className="text-xl sm:text-2xl font-normal text-gray-700">
                  {" "}
                  is built for people who like it to keep it{" "}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-gray-800">
                  simple.
                </span>
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-4">
                AirVault Cloud lets you pack light on your trips so you can{" "}
                <span className="font-semibold">
                  explore the world with just your phone
                </span>
                .
              </p>
              <button className="mt-4 border border-gray-300 rounded-full px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                Try AirVault Now
              </button>
            </div>
            <div className="mt-6 self-center sm:absolute sm:bottom-8 sm:right-8">
              <Image
                src="/mockup.png" // Replace with your actual image path
                alt="AirVault Cloud phone app"
                width={180}
                height={220}
                className="object-contain"
              />
            </div>
          </div>
        </div> */}

        {/* <div className="bg-white rounded-3xl shadow-sm p-8 relative overflow-hidden ">
          <div className="max-w-md flex flex-col">
            <h2 className="text-3xl lg:text-4xl font-medium mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                AirVault Cloud
              </span>
              <span className="text-gray-700">
                {" "}
                is built for people who like it to keep it{" "}
              </span>
              <span className="font-bold text-gray-800">simple.</span>
            </h2>

            <p className="text-gray-600 text-lg mb-12">
              AirVault Cloud lets you pack light on your trips so you can
              <span className="font-semibold">
                {" "}
                explore the world with just your phone.
              </span>
            </p>

            <div className="mt-4">
              <button className="rounded-full border border-gray-300 py-3 px-8 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                Try AirVault Now
              </button>
            </div>
          </div>

          <div className="absolute right-0 bottom-0">
            <Image
              src="/mockup.png" // Replace with your actual image path
              alt="AirVault Cloud mobile app showing travel photos"
              width={240}
              height={480}
              className="object-contain"
              priority
            />
          </div>
        </div> */}

        <div className="bg-[#F9F9F9] rounded-3xl shadow-sm p-8 pb-0 md:pb-8 relative overflow-hidden">
          <div className="max-w-md flex flex-col">
            <h2 className="text-3xl lg:text-4xl font-medium mb-6">
              <span className="bg-gradient-to-r from-[#4D64FF] to-[#FF3CCB] bg-clip-text text-transparent font-bold">
                AirVault Cloud
              </span>
              <span className="text-gray-700">
                {" "}
                is built for people who like it to keep it{" "}
              </span>
              <span className="font-bold text-gray-800">simple.</span>
            </h2>

            <p className="text-gray-600 text-lg mb-12 md:w-[65%]">
              AirVault Cloud lets you pack light on your trips so you can
              <span className="font-semibold">
                {" "}
                explore the world with just your phone.
              </span>
            </p>

            <div className="mt-4 mb-6 md:mb-0">
              <button className="rounded-full border border-gray-300 py-3 px-8 text-gray-700 font-medium hover:bg-white transition-colors">
                Try AirVault Now
              </button>
            </div>
          </div>

          {/* Desktop image - right aligned */}
          <div className="absolute right-0 bottom-0 hidden md:block">
            <Image
              src="/mockup.png"
              alt="AirVault Cloud mobile app showing travel photos"
              width={240}
              height={480}
              className="object-contain h-[245] w-[180] "
              priority
            />
          </div>

          {/* Mobile image - center aligned */}
          <div className="w-full mt-12 flex justify-center md:hidden">
            <Image
              src="/mobileImg.png" // Replace with your mobile-specific image
              alt="AirVault Cloud mobile app showing travel photos"
              width={320}
              height={200}
              className="object-contain w-full h-[200]"
              priority
            />
          </div>
        </div>

        {/* AirVault Go Card */}
        {/* <div className="bg-white sm:bg-gray-50 rounded-xl sm:rounded-3xl p-4 sm:p-8 relative">
          <div className="flex flex-col h-full">
            <div>
              <h3 className="mb-1 sm:mb-2">
                <span className="text-xl sm:text-2xl font-semibold text-blue-600">
                  AirVault Go
                </span>
                <span className="text-xl sm:text-2xl font-normal text-gray-700">
                  {" "}
                  is built for people who like to keep it{" "}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-gray-800">
                  close.
                </span>
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-4">
                AirVault Go lets you{" "}
                <span className="font-semibold">
                  keep all your memories in your pocket
                </span>
                , so you can take them with you even on the craziest of
                adventures.
              </p>
              <button className="mt-4 border border-gray-300 rounded-full px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                Try AirVault Now
              </button>
            </div>
            <div className="mt-6 self-center sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:right-8 lg:right-auto lg:left-1/2">
              <Image
                src="/avGO 1.png" // Replace with your actual image path
                alt="AirVault Go device"
                width={180}
                height={180}
                className="object-contain"
              />
            </div>
          </div>
        </div> */}

        <div className="bg-[#F9F9F9] rounded-3xl shadow-sm p-8 relative overflow-hidden ">
          <div className="max-w-md flex flex-col">
            <h2 className="text-3xl lg:text-4xl font-medium mb-6">
              <span className="bg-gradient-to-r from-[#4A6CFF] to-[#FF3CCB] bg-clip-text text-transparent font-bold">
                AirVault Cloud
              </span>
              <span className="text-gray-700">
                {" "}
                is built for people who like it to keep it{" "}
              </span>
              <span className="font-bold text-gray-800">simple.</span>
            </h2>

            <p className="text-gray-600 text-lg md:w-[70%]">
              AirVault Cloud lets you pack light on your trips so you can
              <span className="font-semibold">
                {" "}
                explore the world with just your phone.
              </span>
            </p>

            <div className="mt-4">
              <button className="rounded-full border border-gray-300 py-3 px-8 text-gray-700 font-medium hover:bg-white transition-colors">
                Try AirVault Now
              </button>
            </div>
          </div>

          <div className="absolute right-0 bottom-0">
            <Image
              src="/mockup2.png" // Replace with your actual image path
              alt="AirVault Cloud mobile app showing travel photos"
              width={240}
              height={480}
              className="object-contain w-[140] md:w-[190] md:h-[340] lg:w-[240] h-[350] hidden md:block"
              priority
            />
          </div>
        </div>

        {/* AirVault Pro Card - Takes full width on mobile, half width on desktop */}
        <div className="bg-[#F9F9F9] rounded-3xl shadow-sm p-8 relative lg:col-span-2">
          {/* Card content */}
          <div className="max-w-sm">
            <h2 className="text-3xl lg:text-4xl font-medium mb-4">
              <span className="bg-gradient-to-r from-[#FD9109] to-[#BD24E5] bg-clip-text text-transparent font-bold">
                AirVault Pro
              </span>
              <span className="text-gray-700">
                {" "}
                is built for people who are hungry for{" "}
              </span>
              <span className="font-bold text-gray-800">power.</span>
            </h2>

            <p className="text-gray-600 mb-8">
              AirVault Pro brings together the power of distributed hosting into
              a single compact package, allowing your team to
              <span className="font-semibold">
                {" "}
                simultaneously access all your files at blazing fast speed!
              </span>
            </p>

            <div>
              <button className="rounded-full border border-gray-300 py-3 px-8 text-gray-700 font-medium hover:bg-white transition-colors">
                Try AirVault Now
              </button>
            </div>
          </div>

          {/* Desktop image - Bottom right, absolute position */}
          <div className="hidden md:block absolute right-0 bottom-0">
            <Image
              src="/image3.png"
              alt="AirVault Pro NAS device with multiple drive bays"
              width={450}
              height={280}
              className="object-contain md:w-[340] lg:w-[450] "
              priority
            />
          </div>

          {/* Mobile image - Bottom of content */}
          <div className="block md:hidden w-full mt-8">
            <Image
              src="/image3.png"
              alt="AirVault Pro NAS device with multiple drive bays"
              width={400}
              height={280}
              className="object-contain w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
