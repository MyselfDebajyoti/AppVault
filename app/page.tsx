// import Image from "next/image";
import LandingHero from "@/components/Hero";
import FeaturesSection from "@/components/section2";
import FacesGridSection from "@/components/section3";
import HeroSection from "@/components/section4";
import MemoriesSection from "@/components/section5";
// import ProductShowcase from "@/components/section6";
import ProductsSection from "@/components/section6";
import AirVaultCloudCard from "@/components/text";

export default function Home() {
  return (
    <>
      <LandingHero></LandingHero>
      <FeaturesSection></FeaturesSection>
      <FacesGridSection></FacesGridSection>
      <HeroSection></HeroSection>
      <MemoriesSection></MemoriesSection>
      {/* <ProductShowcase></ProductShowcase> */}
      <ProductsSection></ProductsSection>
      {/* <AirVaultCloudCard></AirVaultCloudCard> */}
    </>
  );
}
