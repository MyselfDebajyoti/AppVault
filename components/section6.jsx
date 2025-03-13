// // components/ProductShowcase.jsx
// import Image from "next/image";

// const ProductShowcase = () => {
//   return (
//     <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Headline */}
//         <div className="text-center mb-12">
//           <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 mb-4 max-w-3xl mx-auto">
//             Explore our wide selection of products that helps you preserve your
//             memories, in your own style.
//           </h2>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
//           {/* AirVault Cloud */}
//           <div className="bg-white rounded-lg p-6 shadow-sm">
//             <div className="mb-4">
//               <span className="text-2xl font-semibold">
//                 <span className="text-blue-600">AirVault Cloud</span> is built
//                 for people who like it to keep it{" "}
//                 <span className="font-bold">simple</span>.
//               </span>
//             </div>
//             <div className="mb-6">
//               <p className="text-gray-700">
//                 AirVault Cloud lets you pack light on your trips so you can{" "}
//                 <span className="font-semibold">
//                   explore the world with just your phone
//                 </span>
//                 .
//               </p>
//             </div>
//             <div className="flex items-end justify-between">
//               <button className="bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-full hover:bg-gray-50 transition duration-300">
//                 Try AirVault Now
//               </button>
//               <div className="relative w-40 h-40">
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
//           <div className="bg-white rounded-lg p-6 shadow-sm">
//             <div className="mb-4">
//               <span className="text-2xl font-semibold">
//                 <span className="text-purple-600">AirVault Go</span> is built
//                 for people who like to keep it{" "}
//                 <span className="font-bold">close</span>.
//               </span>
//             </div>
//             <div className="mb-6">
//               <p className="text-gray-700">
//                 AirVault Go lets you{" "}
//                 <span className="font-semibold">
//                   keep all your memories in your pocket
//                 </span>
//                 , so you can take them with you even on the craziest of
//                 adventures.
//               </p>
//             </div>
//             <div className="flex items-end justify-between">
//               <button className="bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-full hover:bg-gray-50 transition duration-300">
//                 Try AirVault Now
//               </button>
//               <div className="relative w-44 h-44">
//                 <Image
//                   src="/images/airvault-go-device.png"
//                   alt="AirVault Go portable device"
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* AirVault Pro - Full Width on All Screens */}
//           <div className="bg-white rounded-lg p-6 shadow-sm md:col-span-2">
//             <div className="mb-4">
//               <span className="text-2xl font-semibold">
//                 <span className="text-orange-500">AirVault Pro</span> is built
//                 for people who are hungry for{" "}
//                 <span className="font-bold">power</span>.
//               </span>
//             </div>
//             <div className="mb-6">
//               <p className="text-gray-700">
//                 AirVault Pro brings together the power of distributed hosting
//                 into a single compact package, allowing your team to{" "}
//                 <span className="font-semibold">
//                   simultaneously access all your files at blazing fast speed!
//                 </span>
//               </p>
//             </div>
//             <div className="flex flex-col md:flex-row items-center justify-between">
//               <button className="bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-full hover:bg-gray-50 transition duration-300 mb-6 md:mb-0">
//                 Try AirVault Now
//               </button>
//               <div className="relative w-full md:w-96 h-48 md:h-56">
//                 <Image
//                   src="/Group 1000002833.png"
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

// components/ProductShowcase.jsx
import Image from "next/image";

const ProductShowcase = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 max-w-3xl mx-auto">
            Explore our wide selection of products that helps you preserve your
            memories, in your own style.
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* AirVault Cloud */}
          <div className="bg-white rounded-lg p-6 shadow-sm relative">
            <div className="mb-4">
              <span className="text-2xl font-semibold">
                <span className="text-blue-600">AirVault Cloud</span> is built
                for people who like it to keep it{" "}
                <span className="font-bold">simple</span>.
              </span>
            </div>
            <div className="mb-16">
              <p className="text-gray-700">
                AirVault Cloud lets you pack light on your trips so you can{" "}
                <span className="font-semibold">
                  explore the world with just your phone
                </span>
                .
              </p>
            </div>
            <div className="absolute bottom-6 left-6">
              <button className="bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-full hover:bg-gray-50 transition duration-300">
                Try AirVault Now
              </button>
            </div>
            <div className="absolute bottom-6 right-6">
              <div className="relative w-32 h-32 md:w-36 md:h-36">
                <Image
                  src="/images/airvault-cloud-phone.png"
                  alt="AirVault Cloud mobile app"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* AirVault Go */}
          <div className="bg-white rounded-lg p-6 shadow-sm relative">
            <div className="mb-4">
              <span className="text-2xl font-semibold">
                <span className="text-purple-600">AirVault Go</span> is built
                for people who like to keep it{" "}
                <span className="font-bold">close</span>.
              </span>
            </div>
            <div className="mb-16">
              <p className="text-gray-700">
                AirVault Go lets you{" "}
                <span className="font-semibold">
                  keep all your memories in your pocket
                </span>
                , so you can take them with you even on the craziest of
                adventures.
              </p>
            </div>
            <div className="absolute bottom-6 left-6">
              <button className="bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-full hover:bg-gray-50 transition duration-300">
                Try AirVault Now
              </button>
            </div>
            <div className="absolute bottom-0 right-6">
              <div className="relative w-40 h-40 md:w-44 md:h-44">
                <Image
                  src="/images/airvault-go-device.png"
                  alt="AirVault Go portable device"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* AirVault Pro */}
          <div className="bg-white rounded-lg p-6 shadow-sm relative md:col-span-2 h-80 md:h-96">
            <div className="max-w-lg mb-4">
              <span className="text-2xl font-semibold">
                <span className="text-orange-500">AirVault Pro</span> is built
                for people who are hungry for{" "}
                <span className="font-bold">power</span>.
              </span>
            </div>
            <div className="max-w-lg mb-16">
              <p className="text-gray-700">
                AirVault Pro brings together the power of distributed hosting
                into a single compact package, allowing your team to{" "}
                <span className="font-semibold">
                  simultaneously access all your files at blazing fast speed!
                </span>
              </p>
            </div>
            <div className="absolute bottom-6 left-6">
              <button className="bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-full hover:bg-gray-50 transition duration-300">
                Try AirVault Now
              </button>
            </div>
            <div className="absolute bottom-0 right-0 md:right-6">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/images/airvault-pro-server.png"
                  alt="AirVault Pro server"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
