import { Link } from "@/lib/i18n";
import * as m from "@/paraglide/messages.js";

const goToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
  });
};

export const Footer = () => {
  return (
    <>
      <footer>
        <hr className="mx-auto w-11/12" />

        <section className="container grid grid-cols-2 gap-x-12 gap-y-8 py-20 md:grid-cols-4 xl:grid-cols-6">
          <div className="col-span-full xl:col-span-2">
            <Link
              href="/"
              className="flex text-xl font-bold" /*onClick={goToTop}*/
            >
              {m.home_metadata_title()}
            </Link>
            <div>
              Mühlenmathe 22
              <br />
              48599 Gronau
              <br />
              {m.Germany()}
            </div>
            <div>
              <Link href="tel:+4925621234">{"+49 (0) 2562 1234"}</Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">{m.Follow_us()}</h3>
            <div>
              <Link
                href="https://www.instagram.com/zeinabalhaybi"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                Instagram
              </Link>
            </div>

            <div>
              <Link
                href="https://facebook.com/Hollywood-Hair-by-Zeinab-252404238119427"
                className="opacity-60 hover:opacity-100"
                target="_blank"
              >
                Facebook
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">{m.Legal()}</h3>
            <div>
              <Link href="/imprint" className="opacity-60 hover:opacity-100">
                {m.Imprint()}
              </Link>
            </div>

            <div>
              <Link href="/contact" className="opacity-60 hover:opacity-100">
                {m.Contact_us()}
              </Link>
            </div>

            <div>
              <Link
                href="/privacy-policy"
                className="opacity-60 hover:opacity-100"
              >
                {m.Privacy_Policy()}
              </Link>
            </div>
          </div>
        </section>

        <section className="container pb-14 text-center">
          <h3>
            &copy; 2024{" "}
            <Link
              href="/"
              //reloadDocument
              className="border-primary text-primary transition-all hover:border-b-2"
            >
              {m.home_metadata_title()}
            </Link>
          </h3>
        </section>
      </footer>
    </>
  );
};
