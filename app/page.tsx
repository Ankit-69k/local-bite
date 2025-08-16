import Layout from "../layout";
import Test from "../components/test";
import { ContactSection } from "../components/contactsection";
import { ItemSection } from "@/components/itemsection";
import { ItemSelection } from "@/components/itemselection";
import { WelcomeSection } from "@/components/welcomesection";
import { HomeSection } from "@/components/homesection";

export default function Home() {
  return (
    <Layout>
      {/* <Test /> */}
      <HomeSection />
      <WelcomeSection />
      <div className="relative">
        {" "}
        {/* keeps sticky only inside */}
        <ItemSelection />
        <ItemSection />
      </div>
      <ContactSection />
    </Layout>
  );
}
