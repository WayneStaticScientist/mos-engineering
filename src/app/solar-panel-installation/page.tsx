import BreadCrump from "@/components/breadcrumpt";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ServiceDetail from "@/components/ui/service-detail";
import React, { Fragment } from "react";

export default function SolarPanelInstallation() {
  return (
    <Fragment>
      <Header />
      <BreadCrump title="Solar Panel Installation" />
      <ServiceDetail
        title={"Solar Panel Installation"}
        summary={[
          "Our **Solar Panel Installation** services cover the complete lifecycle of grid-tied and off-grid photovoltaic (PV) systems for residential, commercial, and industrial clients. We manage everything from initial site assessment and system design to final commissioning and inspection, ensuring optimal energy production.",
          "We specialize in **system design and financial analysis**, which includes calculating your energy needs, determining the best panel layout, selecting high-efficiency components (panels, inverters, racking), and providing a clear return-on-investment (ROI) projection and payback period for your investment.",
          "Our service includes **professional installation and interconnection**, where certified technicians securely mount the panels, install the electrical wiring, integrate the inverter(s), and handle all necessary regulatory documentation and interconnection agreements with the local utility company.",
        ]}
        checkList={[
          "Site Assessment & Feasibility Study",
          "Custom PV System Design & Engineering",
          "Permitting & Regulatory Compliance",
          "Panel Mounting & Wiring Installation",
          "Inverter Setup & System Commissioning",
        ]}
      />
      <Footer />
    </Fragment>
  );
}
