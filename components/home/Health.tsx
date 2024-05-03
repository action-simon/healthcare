import * as m from "@/paraglide/messages";
import Container from "../Container";

const Health = () => {
  return (
    <section id="medical">
      <Container>
        <h2 className="text-center text-3xl font-bold lg:text-7xl">
          {m.home_list_head()}
        </h2>

        <div className="mx-auto flex flex-wrap px-5 py-24">
          <div className="relative mx-auto flex w-full pb-20 pt-10 sm:items-center md:w-2/3">
            <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
              <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
            </div>
            <div
              className="relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center
                justify-center rounded-full bg-primary text-sm font-medium text-white sm:mt-0"
            >
              1
            </div>
            <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
              <div
                className="inline-flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full
                  bg-primary text-green-200 transition-all duration-300 ease-in-out
                  hover:text-green-700"
              >
                <svg className="size-12" viewBox="0 0 48 48">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M23.706 11.044a1 1 0 0 1 .588 0l13 4A1 1 0 0 1 38 16v1h1a5 5 0 0 1 5 5v4a5 5 0 0 1-5 5h-2.456a9 9 0 0 1-4.897 3.693l-7.353 2.263a1 1 0 0 1-.588 0l-7.353-2.263A9 9 0 0 1 11.456 31H9a5 5 0 0 1-5-5v-4a5 5 0 0 1 5-5h1v-1a1 1 0 0 1 .706-.956zM10 19H9a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h1.482A9 9 0 0 1 10 26.091zm28 7.091V19h1a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.482A9 9 0 0 0 38 26.091M12 16.74v9.352a7 7 0 0 0 4.941 6.69L24 34.955l7.059-2.172A7 7 0 0 0 36 26.092v-9.353l-12-3.693zM18 21v-2h12v2zm0 6h12v-2H18z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                <h2 className="mb-1 text-xl font-medium">{m.homelist_1()}</h2>
                <p className="text-muted-foreground">{m.homelist_1_sub()}</p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto flex w-full pb-20 sm:items-center md:w-2/3">
            <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
              <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
            </div>
            <div
              className="relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center
                justify-center rounded-full bg-primary text-sm font-medium text-white sm:mt-0"
            >
              2
            </div>
            <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
              <div
                className="inline-flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full
                  bg-primary text-green-200 transition-all duration-300 ease-in-out
                  hover:text-green-700"
              >
                <svg className="size-12" viewBox="0 0 48 48">
                  <path
                    fill="currentColor"
                    d="M6 30a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v10.996a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm14.915-.811s-2.278-.425-3.21 0c-.694.316-3.38 1.28-4.705 1.752v8.86c.767-.044 2.293-.125 2.945-.099c3.756.151 5.673 1.734 9.422 2.018c2.097.159 3.934.53 5.384 0c1.45-.531 9.732-4.566 10.767-5.628s.518-3.93-2.692-3.399s-7.454 3.08-9.214 2.974s-6.42-.956-6.42-.956l5.35.065s.756.04 1.794-.702c1.04-.742 1.968-2.867.415-2.867s-3.21-.532-3.21-.532zM26 20.429c0 2-1.54 3.571-3.5 3.571S19 22.429 19 20.429S22.5 14 22.5 14s3.5 4.571 3.5 6.429m15-4.297C41 18.836 38.778 21 36 21s-5-2.163-5-4.868C31 13.428 36 6 36 6s5 7.428 5 10.132"
                  />
                </svg>
              </div>
              <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                <h2 className="mb-1 text-xl font-medium">{m.homelist_2()}</h2>
                <p className="text-muted-foreground">{m.homelist_2_sub()}</p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto flex w-full pb-20 sm:items-center md:w-2/3">
            <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
              <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
            </div>
            <div
              className="relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center
                justify-center rounded-full bg-primary text-sm font-medium text-white sm:mt-0"
            >
              3
            </div>
            <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
              <div
                className="inline-flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full
                  bg-primary text-green-200 transition-all duration-300 ease-in-out
                  hover:text-green-700"
              >
                <svg className="size-12" viewBox="0 0 48 48">
                  <g fill="currentColor">
                    <path d="M20 10a4 4 0 1 1 8 0a4 4 0 0 1-8 0m-.967 8.156C20.342 16.782 22.127 16 24 16s3.658.782 4.967 2.156C30.274 19.528 31 21.379 31 23.3V26a1 1 0 0 1-1 1h-1.662l-.771 8.095a1 1 0 0 1-.996.905H21.43a1 1 0 0 1-.996-.905L19.663 27H18a1 1 0 0 1-1-1v-2.7c0-1.92.726-3.772 2.033-5.144" />
                    <path d="M13.495 29.95a1 1 0 1 0-.626-1.9c-1.957.644-3.629 1.475-4.831 2.47C6.84 31.511 6 32.763 6 34.226c0 1.3.665 2.437 1.65 3.365c.983.925 2.351 1.713 3.96 2.354C14.83 41.228 19.21 42 24 42s9.17-.772 12.39-2.055c1.609-.64 2.977-1.428 3.96-2.354c.984-.928 1.65-2.065 1.65-3.365c0-1.463-.84-2.715-2.038-3.706c-1.203-.995-2.874-1.826-4.831-2.47a1 1 0 1 0-.626 1.9c1.82.599 3.238 1.33 4.182 2.11c.95.786 1.313 1.526 1.313 2.166c0 .57-.286 1.216-1.022 1.909c-.737.695-1.859 1.367-3.327 1.952C32.719 39.255 28.6 40 24 40s-8.719-.745-11.65-1.913c-1.47-.585-2.59-1.257-3.328-1.952C8.286 35.442 8 34.796 8 34.226c0-.64.363-1.38 1.313-2.165c.944-.781 2.363-1.512 4.182-2.111M8 22v-3h6v-2H8v-3H6v8zm34 0v-8h-2v3h-6v2h6v3z" />
                  </g>
                </svg>
              </div>
              <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                <h2 className="mb-1 text-xl font-medium">{m.homelist_3()}</h2>
                <p className="text-muted-foreground">{m.homelist_3_sub()}</p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto flex w-full pb-10 sm:items-center md:w-2/3">
            <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
              <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
            </div>
            <div
              className="relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center
                justify-center rounded-full bg-primary text-sm font-medium text-white sm:mt-0"
            >
              4
            </div>
            <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
              <div
                className="inline-flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full
                  bg-primary text-green-200 transition-all duration-300 ease-in-out
                  hover:text-green-700"
              >
                <svg
                  className="size-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                  <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                  <path d="m21 3 1 11h-2" />
                  <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                  <path d="M3 4h8" />
                </svg>
              </div>
              <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                <h2 className="mb-1 text-xl font-medium">{m.homelist_4()}</h2>
                <p className="text-muted-foreground">{m.homelist_4_sub()}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Health;
