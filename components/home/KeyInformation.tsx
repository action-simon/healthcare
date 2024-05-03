import Image from "next/image";

import * as m from "@/paraglide/messages";
import hands_image from "@/public/shane-rounce-DNkoNXQti3c-unsplash.jpg";
import Container from "../Container";

const KeyInformation = () => {
  return (
    <section className="bg-primary/5">
      <Container>
        <div className=" mx-auto max-w-7xl  ">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="text-pretty">
              <p className="text-base font-semibold uppercase tracking-wider text-primary">
                {m.home_metadata_title()}
              </p>
              <h1 className="mt-4 text-xl font-bold text-foreground sm:text-2xl lg:mt-8 xl:text-4xl">
                {m.home_text_3_heading()}
              </h1>

              <p className="mt-4 sm:text-xl lg:mt-8">{m.home_text_3()}</p>
              <p className="mt-4 sm:text-xl lg:mt-8">{m.home_text_4()}</p>
              <p className="mt-4 text-xl font-bold md:text-2xl lg:mt-8 ">
                {m.home_text_5_heading()}
              </p>
              <p className="mt-4 sm:text-xl lg:mt-8">{m.home_text_5()}</p>
              <p className="mt-4 sm:text-xl lg:mt-8">{m.home_text_6()}</p>
            </div>

            <div className="w-full">
              <Image className=" rounded-3xl" src={hands_image} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default KeyInformation;
