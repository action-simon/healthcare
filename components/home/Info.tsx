import * as m from "@/paraglide/messages";

const Info = () => {
  return (
    <section className="bg-background ">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {m.home_text_1()}
        </h2>
        <p className="mb-8 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
          {m.home_text_2()}
        </p>
      </div>
    </section>
  );
};

export default Info;
