import Conversation from "@/components/home/Conversation";
import Cta from "@/components/home/Cta";
import Health from "@/components/home/Health";
import Hero from "@/components/home/Hero";
import Info from "@/components/home/Info";
import KeyInformation from "@/components/home/KeyInformation";
import List from "@/components/home/List";

export default function Home() {
  return (
    <>
      <Hero />
      <Cta />
      <Health />
      <KeyInformation />
      <Info />
      <List />
      <Conversation />
    </>
  );
}
