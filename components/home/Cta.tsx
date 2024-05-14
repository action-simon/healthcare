import * as m from "@/paraglide/messages";

import { Button } from "../ui/button";
import Container from "../Container";
import Image from "next/image";
import { Link } from "@/lib/i18n";
import image1 from "@/public/keith-tanner-iDBf7a9pn7s-unsplash.jpg";
import image2 from "@/public/mimi-thian--VHQ0cw2euA-unsplash.jpg";
import image3 from "@/public/chungkuk-bae-_0mtPW3Epwo-unsplash.jpg";

const Cta = () => {
  return (
    <div className="bg-muted">
      <Container>
        <div className=" lg:flex lg:items-center">
          <div className="mr-6 w-full">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              {m.CTA_HEAD()}
            </h2>
            <p className="text-md mt-4 text-muted-foreground">{m.CTA_TEXT()}</p>
            <div className="lg:mt-0 lg:flex-shrink-0">
              <div className="mt-6 inline-flex ">
                <Link href="/contact">
                  <Button>{m.Contact_us()}</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 py-8 lg:w-10/12 lg:py-24">
            <Image
              src={image1.src}
              className="aspect-[1.6/2] w-1/2 rounded-lg object-cover"
              alt="Old People"
              width={image1.width / 2}
              height={image1.height / 2}
            />
            <div>
              <Image
                src={image2.src}
                className="mb-6 aspect-[1.6/1] rounded-lg object-cover"
                alt="Nurses Meeting"
                width={image2.width / 2}
                height={image2.height / 2}
              />
              <Image
                src={image3.src}
                className="aspect-[1.6/1] rounded-lg object-cover"
                alt="Flowers in a hand"
                width={image3.width / 2}
                height={image3.height / 2}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cta;
