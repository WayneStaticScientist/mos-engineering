import AboutUs from "@/components/about-us";
import BreadCrump from "@/components/breadcrumpt";
import Footer from "@/components/footer";
import Header from "@/components/header";
import OurServices from "@/components/our-services";
import React, { Fragment } from "react";

export default function AboutPage() {
  return (
    <Fragment>
      <Header />
      <BreadCrump title="About Us" />
      <AboutUs />
      <OurServices />
      <Footer />
    </Fragment>
  );
}
