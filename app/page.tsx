import Conversation from "@/components/home/Conversation";
import Cta from "@/components/home/Cta";
import Health from "@/components/home/Health";
import Hero from "@/components/home/Hero";
import Info from "@/components/home/Info";
import KeyInformation from "@/components/home/KeyInformation";
import List from "@/components/home/List";
import Saxion from "@/components/home/Saxion";

export default function Home() {
  return (
    <>
      <Hero />
      <Cta />
      <Health />
      <Saxion />
      <KeyInformation />
      <Info />
      <List />
      <Conversation />
    </>
  );
}
