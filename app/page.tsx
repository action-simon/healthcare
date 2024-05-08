import Conversation from "@/components/home/Conversation";
import Gallery from "@/components/home/Gallery";
import Health from "@/components/home/Health";
import Hero from "@/components/home/Hero";
import Info from "@/components/home/Info";
import KeyInformation from "@/components/home/KeyInformation";
import List from "@/components/home/List";
import MoreText from "@/components/home/MoreText";
import MoreText2 from "@/components/home/MoreText2";

export default function Home() {
  return (
    <>
      <Hero />
      <MoreText />
      <Gallery />
      <Health />
      <MoreText2 />
      <KeyInformation />
      <Info />
      <List />
      <Conversation />
    </>
  );
}
