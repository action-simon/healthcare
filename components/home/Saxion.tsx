import * as m from "@/paraglide/messages";

import Container from "../Container";
import Image from "next/image";
import SaxionLogo from "@/public/saxionLogo.jpeg";

const Saxion = () => {
  return (
    <div className="bg-muted">
      <Container>
        <div className=" lg:flex lg:items-center">
          <div className="mr-6 w-full">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Saxion University of Applied Science
            </h2>
            <p className="text-md mt-4 text-muted-foreground">
              In zusammenarbeit mit der Saxion University of Applied Science,
              haben wir ein Projekt entwickelt, um Patienten und medizinischem
              Personal die Möglichkeit zu geben, die Qualität der Pflege zu
              verbessern.
            </p>
          </div>
          <div className="flex items-center gap-6 py-8 lg:w-10/12 lg:py-24">
            <Image
              src={SaxionLogo}
              className="object-cover"
              alt="Saxion Logo"
              width={1600}
              height={803}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Saxion;
