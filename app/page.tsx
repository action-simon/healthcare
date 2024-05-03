import Conversation from "@/components/home/Conversation";
import Gallery from "@/components/home/Gallery";
import Health from "@/components/home/Health";
import Hero from "@/components/home/Hero";
import Info from "@/components/home/Info";
import KeyInformation from "@/components/home/KeyInformation";
import List from "@/components/home/List";

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <Health />
      <KeyInformation />
      <Info />
      <List />
      <Conversation />
    </>
  );
}
