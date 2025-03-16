// // components/AirVaultCloudCard.jsx
// import Image from "next/image";

// export default function AirVaultCloudCard() {
//   return (
// <div className="bg-white rounded-3xl shadow-sm p-8 relative overflow-hidden w-[50%]">
//   <div className="max-w-md flex flex-col">
//     <h2 className="text-3xl lg:text-4xl font-medium mb-6">
//       <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//         AirVault Cloud
//       </span>
//       <span className="text-gray-700">
//         {" "}
//         is built for people who like it to keep it{" "}
//       </span>
//       <span className="font-bold text-gray-800">simple.</span>
//     </h2>

//     <p className="text-gray-600 text-lg mb-12">
//       AirVault Cloud lets you pack light on your trips so you can
//       <span className="font-semibold">
//         {" "}
//         explore the world with just your phone.
//       </span>
//     </p>

//     <div className="mt-4">
//       <button className="rounded-full border border-gray-300 py-3 px-8 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
//         Try AirVault Now
//       </button>
//     </div>
//   </div>

//   <div className="absolute bottom-6 right-6 lg:right-8">
//     <Image
//       src="/mockup.png" // Replace with your actual image path
//       alt="AirVault Cloud mobile app showing travel photos"
//       width={240}
//       height={480}
//       className="object-contain"
//       priority
//     />
//   </div>
// </div>
//   );
// }

// components/AirVaultCloudCard.jsx
//

// components/AirVaultProCard.jsx
// import Image from "next/image";

// export default function AirVaultCloudCard() {
//   return (
//     <div className="bg-white rounded-3xl shadow-sm p-8 relative overflow-hidden w-[50%]">
//       <div className="flex flex-col md:flex-row justify-between items-start gap-8">
//         {/* Left side content */}
//         <div className="flex flex-col max-w-full md:max-w-sm">
//           <h2 className="text-3xl lg:text-4xl font-medium mb-4">
//             <span className="text-orange-500">AirVault Pro</span>
//             <span className="text-gray-700">
//               {" "}
//               is built for people who are hungry for{" "}
//             </span>
//             <span className="font-bold text-gray-800">power.</span>
//           </h2>

//           <p className="text-gray-600 mb-8">
//             AirVault Pro brings together the power of distributed hosting into a
//             single compact package, allowing your team to
//             <span className="font-semibold">
//               {" "}
//               simultaneously access all your files at blazing fast speed!
//             </span>
//           </p>

//           <div>
//             <button className="rounded-full border border-gray-300 py-3 px-8 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
//               Try AirVault Now
//             </button>
//           </div>
//         </div>

//         {/* Right side image - Moves to bottom on mobile */}
//         <div className="w-full md:w-auto flex justify-center md:justify-end mt-8 md:mt-0">
//           <Image
//             src="/image3.png" // Replace with your actual image path
//             alt="AirVault Pro NAS device with multiple drive bays"
//             width={380}
//             height={280}
//             className="object-contain "
//             priority
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// components/AirVaultProCard.jsx
// import Image from "next/image";

// export default function AirVaultProCard() {
//   return (
//     <div className="bg-white rounded-3xl shadow-sm p-8 relative">
//       {/* Card content */}
//       <div className="max-w-sm">
//         <h2 className="text-3xl lg:text-4xl font-medium mb-4">
//           <span className="text-orange-500">AirVault Pro</span>
//           <span className="text-gray-700">
//             {" "}
//             is built for people who are hungry for{" "}
//           </span>
//           <span className="font-bold text-gray-800">power.</span>
//         </h2>

//         <p className="text-gray-600 mb-8">
//           AirVault Pro brings together the power of distributed hosting into a
//           single compact package, allowing your team to
//           <span className="font-semibold">
//             {" "}
//             simultaneously access all your files at blazing fast speed!
//           </span>
//         </p>

//         <div>
//           <button className="rounded-full border border-gray-300 py-3 px-8 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
//             Try AirVault Now
//           </button>
//         </div>
//       </div>

//       {/* Desktop image - Bottom right, absolute position */}
//       <div className="hidden md:block absolute right-0 bottom-0">
//         <Image
//           src="/image3.png"
//           alt="AirVault Pro NAS device with multiple drive bays"
//           width={450}
//           height={280}
//           className="object-contain md:w-[380] lg:w-[450]"
//           priority
//         />
//       </div>

//       {/* Mobile image - Bottom of content */}
//       <div className="block md:hidden w-full mt-8">
//         <Image
//           src="/image3.png"
//           alt="AirVault Pro NAS device with multiple drive bays"
//           width={400}
//           height={280}
//           className="object-contain w-full"
//           priority
//         />
//       </div>
//     </div>
//   );
// }

// components/AirVaultCloudCard.jsx

// components/AirVaultCloudCard.jsx
import Image from "next/image";

export default function AirVaultCloudCard() {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-8 relative overflow-hidden w-[50%]">
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
    </div>
  );
}
