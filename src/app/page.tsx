import AboutUs from "@/components/about-us";
import Counters from "@/components/counters";
import Faqs from "@/components/faqs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero";
import OurServices from "@/components/our-services";
import RequestQoute from "@/components/request-qoute";
import ServicesCardList from "@/components/services-sect-1";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesCardList />
      <AboutUs />
      <Counters />
      <OurServices />
      <WhyChooseUs />
      <Faqs />
      <RequestQoute />
      <Footer />
    </>
  );
}
