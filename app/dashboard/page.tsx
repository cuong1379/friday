import Description from "@/components/landing-page/description";
import Features from "@/components/landing-page/features";
import Footer from "@/components/landing-page/footer";
import Header from "@/components/landing-page/header";
import Hero from "@/components/landing-page/hero";
import Introduce from "@/components/landing-page/introduce";
import SocialMedia from "@/components/landing-page/social-media";
import React from "react";

const Dashboard = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-between bg-ln-dark text-white">
      <Header />
      <Hero />
      <Introduce />
      <Features />
      <Description />
      <Footer />
      <SocialMedia />
    </div>
  );
};

export default Dashboard;
