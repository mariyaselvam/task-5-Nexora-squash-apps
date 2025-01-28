import React from "react";
import Header from "../components/HomePage-1/Header";
import Footer from "../components/HomePage-1/Footer";
import ServicesPageBanner from "../components/ServicesPage/ServicesPageBanner";
import OurRangeofExpertiseSec from "../components/ServicesPage/OurRangeofExpertiseSec";
import OurServicesOverview from "../components/ServicesPage/OurServicesOverview";

const Services = () => {
  return (
    <>
      <div className="Services-page-warper">
        <Header />
        <ServicesPageBanner />
        <OurRangeofExpertiseSec />
        <OurServicesOverview />
        <Footer />
      </div>
    </>
  );
};

export default Services;
