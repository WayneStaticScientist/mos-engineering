import Footer from "@/components/footer";
import Header from "@/components/header";
import React, { Fragment } from "react";
import BreadCrump from "@/components/breadcrumpt";
import ServiceDetail from "@/components/ui/service-detail";

export default function IndustrialAutomation() {
  return (
    <Fragment>
      <Header />
      <BreadCrump title="Industrial Automation" />
      <ServiceDetail
        imageSrc="/assets/img/hero/hero_bg_1_2.jpg"
        title={"Industrial Automation"}
        summary={[
          "Our **Industrial Automation** services involve the design, implementation, and optimization of control systems to automate manufacturing, production, and process operations. We focus on enhancing efficiency, reducing human error, and ensuring consistent product quality across various industries.",
          "We specialize in **Programmable Logic Controllers (PLCs)** and **Distributed Control Systems (DCS)** programming and integration. This includes developing custom logic, configuring hardware, and establishing reliable communication networks to manage complex industrial processes from a central control point.",
          "We provide comprehensive services for **Human-Machine Interface (HMI)** and **Supervisory Control and Data Acquisition (SCADA)** systems. This enables real-time monitoring, data logging, and intuitive operator control over machinery and processes, allowing for quick adjustments and proactive maintenance scheduling.",
        ]}
        checkList={[
          "PLC/DCS Programming & Configuration",
          "SCADA & HMI Development",
          "Robotics Integration & Control",
          "Process Optimization & Tuning",
          "Industrial Network Setup (e.g., Profinet, EtherNet/IP)",
        ]}
      />
      <Footer />
    </Fragment>
  );
}
