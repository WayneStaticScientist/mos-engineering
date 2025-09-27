import AboutUs from "@/components/about-us";
import BreadCrump from "@/components/breadcrumpt";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import Header from "@/components/header";
import LocationForm from "@/components/location-form";
import OurServices from "@/components/our-services";
import React, { Fragment } from "react";

export default function ContactUsPage() {
  return (
    <Fragment>
      <Header />
      <BreadCrump title="Contact Us" />
      <LocationForm />
      <ContactForm />
      <OurServices />
      <Footer />
    </Fragment>
  );
}
