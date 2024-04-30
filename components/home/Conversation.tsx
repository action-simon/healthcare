import * as m from "@/paraglide/messages";

const Conversation = () => {
  return (
    <section className="bg-background ">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {m.home_text_7()}
        </h2>
        <h2 className="mb-4 text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {m.home_text_7_heading()}
        </h2>
        <p className="mb-8 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
          {m.home_text_8()}
        </p>
        <h2 className="mb-4 text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {m.home_text_9_heading()}
        </h2>
        <p className="mb-8 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
          {m.home_text_9()}
        </p>
        <p className="mb-8 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
          {m.home_text_10()}
        </p>
      </div>
    </section>
  );
};

export default Conversation;
