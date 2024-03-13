

import Land from "./componet/land/Land"
import Company from "./componet/company/Company";
import Futeres from "./componet/future/Futeres";
import PartFeaturte from "./componet/partFeaturte/PartFeaturte";
import Pricing from "./componet/pricing/Pricing";
import Testmonail from "./componet/testmonail/Testmonail";
import Contact from "./componet/contact/Contact";
import Footer from "./componet/footer/Footer";

export default function Home() {
  return (
    <div className="mt-24 container mx-auto" >
      <Land/>
      <Company/>
      <Futeres/>
      <PartFeaturte/>
      <Pricing/>
      <Testmonail/>
      <Contact/>
      <Footer />
    </div>
  );
} 
