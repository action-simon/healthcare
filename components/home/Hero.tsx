import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Link } from "@/lib/i18n";
import * as m from "@/paraglide/messages";
import hero_image from "@/public/hero-img.png";

const Hero = () => {
  return (
    <section className="px-4 py-10 sm:py-16 md:px-8 lg:py-24">
      <div className=" mx-auto max-w-7xl  ">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-base font-semibold uppercase tracking-wider text-blue-600">
              {m.home_metadata_title()}
            </p>
            <h1 className="mt-4 text-xl font-bold text-foreground sm:text-2xl lg:mt-8 xl:text-4xl">
              {m.home_headline()}
            </h1>
            <p className="mt-4 text-base text-muted-foreground sm:text-xl lg:mt-8">
              {m.home_headline_sub()}
            </p>
            <Link href="#">
              <Button
                size={"lg"}
                className="mt-8 inline-flex h-12 items-center rounded-full px-6 py-4 font-semibold lg:mt-16"
              >
                {m.Read_more()}
                <svg
                  className="-mr-2 ml-8 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Button>
            </Link>
          </div>

          <div>
            <Image className="w-full" src={hero_image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
