import React from "react";
import StreamingSection from "./StreamingSection";
import PaymentIntegrationSection from "./PaymentIntegrationSection";
import NavigationLinks from "./NavigationLinks";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <StreamingSection />
      <PaymentIntegrationSection />
      <NavigationLinks />
    </main>
  );
};

export default Home;
