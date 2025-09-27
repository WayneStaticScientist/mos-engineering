import BreadCrump from "@/components/breadcrumpt";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ServiceDetail from "@/components/ui/service-detail";
import React, { Fragment } from "react";

export default function IndustrialMiningSupplies() {
  return (
    <Fragment>
      <Header />
      <BreadCrump title="Industrial & Mining Supplies" />
      <ServiceDetail
        title={"Industrial & Mining Supplies"}
        summary={[
          "We are a reliable supplier of a vast range of **industrial and mining supplies**, covering everything from heavy machinery spare parts and specialized equipment to essential consumables and safety gear. Our focus is on delivering high-quality, durable products that meet the rigorous demands of harsh operating environments.",
          "Our service includes **procurement and managed inventory solutions**. We source high-specification components globally and manage inventory levels to ensure critical parts are always available, minimizing costly downtime for your operations. This includes VMI (Vendor-Managed Inventory) services tailored to your consumption rates.",
          "We provide complete **logistics and delivery management** to get supplies directly to your site, even in remote mining locations. This service covers customs clearance, secure warehousing, transportation coordination, and just-in-time delivery scheduling to streamline your supply chain and reduce logistical complexity.",
        ]}
        checkList={[
          "Heavy Equipment Spares Sourcing",
          "Specialized Consumables Supply",
          "Safety & PPE Provision",
          "Tailored Inventory Management",
          "Remote Site Logistics & Delivery",
        ]}
      />
      <Footer />
    </Fragment>
  );
}
