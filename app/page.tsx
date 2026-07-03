import Nav from "@/app/components/sections/Nav";
import Hero from "@/app/components/sections/Hero";
import ValueProp from "@/app/components/sections/ValueProp";
import CapabilityGrid from "@/app/components/sections/CapabilityGrid";
import Pricing from "@/app/components/sections/Pricing";
import UseCases from "@/app/components/sections/UseCases";
import ComplianceGrid from "@/app/components/sections/ComplianceGrid";
import Footer from "@/app/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ValueProp />
        <CapabilityGrid />
        <Pricing />
        <UseCases />
        <ComplianceGrid />
      </main>
      <Footer />
    </>
  );
}
