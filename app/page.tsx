import Hero from "@/components/home/Hero";
import Health from "@/components/home/Health";
import KeyInformation from "@/components/home/KeyInformation";
import Info from "@/components/home/Info";
import List from "@/components/home/List";
import Conversation from "@/components/home/Conversation";

export default function Home() {
  return (
    <>
      <Hero />
      <Health />
      <KeyInformation />
      <Info />
      <List />
      <Conversation />
    </>
  );
}
