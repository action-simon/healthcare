import Conversation from "@/components/home/Conversation";
import Countdown from "@/components/home/Countdown";
import Cta from "@/components/home/Cta";
import Hero from "@/components/home/Hero";
import Info from "@/components/home/Info";
import KeyInformation from "@/components/home/KeyInformation";
import List from "@/components/home/List";
import Saxion from "@/components/home/Saxion";

export default function Home() {
  return (
    <>
      <Hero />
      <Countdown />
      <Cta />
      <Saxion />
      <KeyInformation />
      <Info />
      <List />
      <Conversation />
    </>
  );
}
