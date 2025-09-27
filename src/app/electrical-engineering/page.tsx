import React, { Fragment } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import BreadCrump from "@/components/breadcrumpt";
import ServiceDetail from "@/components/ui/service-detail";

export default function ElectricalEngineering() {
  return (
    <Fragment>
      <Header />
      <BreadCrump title="Electrical Engineering" />
      <ServiceDetail
        imageSrc="/assets/img/hero/hero_bg_1_1.jpg"
        title={"Electrical Engineering"}
        summary={[
          "Our services encompass all aspects of **electrical engineering**, including design, installation, testing, and commissioning of electrical systems for industrial, commercial, and residential applications. We ensure all work meets the highest standards of safety and efficiency.",
          "We specialize in **cable termination**, which is the precise and secure connection of electrical cables to devices, equipment, or other cables. This crucial process ensures reliable power transmission, minimizes energy loss, and prevents electrical faults like short circuits or arcing.",
          "We provide comprehensive **general maintenance** for electrical infrastructure, covering routine inspections, proactive troubleshooting, preventative repairs, and system upgrades. Our maintenance ensures your operations run smoothly, safely, and comply with all regulatory standards, maximizing the lifespan of your equipment.",
        ]}
        checkList={[
          "System Inspections & Diagnostics",
          "Cable Splicing & Termination",
          "Preventative Maintenance & Repairs",
          "Fault Finding & Troubleshooting",
          "Compliance & Safety Checks",
        ]}
      />
      <Footer />
    </Fragment>
  );
}
