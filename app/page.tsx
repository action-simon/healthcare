import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/lib/i18n";
import * as m from "@/paraglide/messages";

export default function Home() {
  return (
    <>
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                {m.home_metadata_title()}
              </p>
              <h1 className="mt-4 text-xl font-bold text-foreground lg:mt-8 sm:text-2xl xl:text-4xl">
                {m.home_headline()}
              </h1>
              <p className="mt-4 text-base text-muted-foreground lg:mt-8 sm:text-xl">
                {m.home_headline_sub()}
              </p>
              <Link href="#">
                <Button
                  size={"lg"}
                  className="inline-flex rounded-full items-center h-12 px-6 py-4 mt-8 lg:mt-16 font-semibold"
                >
                  {m.Read_more()}
                  <svg
                    className="w-6 h-6 ml-8 -mr-2"
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
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <main className=" py-12 flex flex-col space-y-8">
        <Card className="border-none shadow-none bg-muted/35">
          <CardHeader>
            <CardTitle className="mt-4 text-center text-xl font-bold text-foreground lg:mt-8 sm:text-2xl xl:text-4xl">
              {m.home_list_head()}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
              <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">
                  1
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 bg-primary text-green-200 rounded-full inline-flex items-center justify-center">
                    <svg className="w-12 h-12" viewBox="0 0 48 48">
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M23.706 11.044a1 1 0 0 1 .588 0l13 4A1 1 0 0 1 38 16v1h1a5 5 0 0 1 5 5v4a5 5 0 0 1-5 5h-2.456a9 9 0 0 1-4.897 3.693l-7.353 2.263a1 1 0 0 1-.588 0l-7.353-2.263A9 9 0 0 1 11.456 31H9a5 5 0 0 1-5-5v-4a5 5 0 0 1 5-5h1v-1a1 1 0 0 1 .706-.956zM10 19H9a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h1.482A9 9 0 0 1 10 26.091zm28 7.091V19h1a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.482A9 9 0 0 0 38 26.091M12 16.74v9.352a7 7 0 0 0 4.941 6.69L24 34.955l7.059-2.172A7 7 0 0 0 36 26.092v-9.353l-12-3.693zM18 21v-2h12v2zm0 6h12v-2H18z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font mb-1 text-xl">
                      {m.homelist_1()}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">
                  2
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 bg-primary text-green-200 rounded-full inline-flex items-center justify-center">
                    <svg className="w-12 h-12" viewBox="0 0 48 48">
                      <path
                        fill="currentColor"
                        d="M6 30a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v10.996a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm14.915-.811s-2.278-.425-3.21 0c-.694.316-3.38 1.28-4.705 1.752v8.86c.767-.044 2.293-.125 2.945-.099c3.756.151 5.673 1.734 9.422 2.018c2.097.159 3.934.53 5.384 0c1.45-.531 9.732-4.566 10.767-5.628s.518-3.93-2.692-3.399s-7.454 3.08-9.214 2.974s-6.42-.956-6.42-.956l5.35.065s.756.04 1.794-.702c1.04-.742 1.968-2.867.415-2.867s-3.21-.532-3.21-.532zM26 20.429c0 2-1.54 3.571-3.5 3.571S19 22.429 19 20.429S22.5 14 22.5 14s3.5 4.571 3.5 6.429m15-4.297C41 18.836 38.778 21 36 21s-5-2.163-5-4.868C31 13.428 36 6 36 6s5 7.428 5 10.132"
                      />
                    </svg>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font  mb-1 text-xl">
                      {m.homelist_2()}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">
                  3
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 bg-primary text-green-200 rounded-full inline-flex items-center justify-center">
                    <svg className="w-12 h-12" viewBox="0 0 48 48">
                      <g fill="currentColor">
                        <path d="M20 10a4 4 0 1 1 8 0a4 4 0 0 1-8 0m-.967 8.156C20.342 16.782 22.127 16 24 16s3.658.782 4.967 2.156C30.274 19.528 31 21.379 31 23.3V26a1 1 0 0 1-1 1h-1.662l-.771 8.095a1 1 0 0 1-.996.905H21.43a1 1 0 0 1-.996-.905L19.663 27H18a1 1 0 0 1-1-1v-2.7c0-1.92.726-3.772 2.033-5.144" />
                        <path d="M13.495 29.95a1 1 0 1 0-.626-1.9c-1.957.644-3.629 1.475-4.831 2.47C6.84 31.511 6 32.763 6 34.226c0 1.3.665 2.437 1.65 3.365c.983.925 2.351 1.713 3.96 2.354C14.83 41.228 19.21 42 24 42s9.17-.772 12.39-2.055c1.609-.64 2.977-1.428 3.96-2.354c.984-.928 1.65-2.065 1.65-3.365c0-1.463-.84-2.715-2.038-3.706c-1.203-.995-2.874-1.826-4.831-2.47a1 1 0 1 0-.626 1.9c1.82.599 3.238 1.33 4.182 2.11c.95.786 1.313 1.526 1.313 2.166c0 .57-.286 1.216-1.022 1.909c-.737.695-1.859 1.367-3.327 1.952C32.719 39.255 28.6 40 24 40s-8.719-.745-11.65-1.913c-1.47-.585-2.59-1.257-3.328-1.952C8.286 35.442 8 34.796 8 34.226c0-.64.363-1.38 1.313-2.165c.944-.781 2.363-1.512 4.182-2.111M8 22v-3h6v-2H8v-3H6v8zm34 0v-8h-2v3h-6v2h6v3z" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font  mb-1 text-xl">
                      {m.homelist_3()}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">
                  4
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 bg-primary text-green-200 rounded-full inline-flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                      <path d="m21 3 1 11h-2" />
                      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                      <path d="M3 4h8" />
                    </svg>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font  mb-1 text-xl">
                      {m.homelist_4()}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <p>{m.home_text_1()}</p>
        <p>{m.home_text_2()}</p>
        <h2>{m.home_text_3_heading()}</h2>
        <p>{m.home_text_3()}</p>
        <p>{m.home_text_4()}</p>
        <p>{m.home_text_5()}</p>
        <p>{m.home_text_6()}</p>
        <ul className="list-decimal space-y-1 list-inside">
          <li>{m.Advanced_healthcare()}</li>
          <li>{m.Advanced_medical_care()}</li>
          <li>{m.Specialised_healthcare_professionals()}</li>
          <li>{m.Innovative_medical_practices()}</li>
          <li>{m.Advanced_medical_technologies()}</li>
          <li>{m.Advanced_treatments_and_therapies()}</li>
          <li>{m.Specialist_medical_services()}</li>
          <li>{m.Advanced_medical_procedures()}</li>
          <li>{m.Healthcare_expertise()}</li>
          <li>{m.Cuttingedge_healthcare_solutions()}</li>
          <li>{m.Dementia_care()}</li>
          <li>{m.Alzheimers_care()}</li>
          <li>{m.Dementia_support()}</li>
          <li>{m.Dementia_treatment()}</li>
          <li>{m.Dementia_care_facilities()}</li>
          <li>{m.Dementia_care_programmes()}</li>
          <li>{m.Dementia_care_centres()}</li>
          <li>{m.Dementia_research()}</li>
          <li>{m.Dementia_care_at_home()}</li>
          <li>{m.Dementia_prevention()}</li>
          <li>{m.Advanced_care_planning()}</li>
          <li>{m.Care_planning_for_advanced_dementia()}</li>
          <li>{m.Advanced_care_planning_and_dementia_care()}</li>
          <li>{m.Care_planning_for_advanced_dementia_patients()}</li>
          <li>{m.Advanced_care_planning_and_palliative_care_in_dementia()}</li>
          <li>{m.Dementia_and_future_care_planning()}</li>
          <li>{m.Advanced_care_planning_and_living_wills_in_dementia()}</li>
          <li>{m.Advanced_care_planning_and_quality_of_life_in_dementia()}</li>
          <li>
            {m.Advanced_care_planning_and_decisionmaking_in_the_last_phase_of_life()}
          </li>
          <li>
            {m.Advanced_care_planning_and_family_engagement_in_dementia()}
          </li>
        </ul>
        <p>{m.home_text_7()}</p>

        <h3>{m.home_text_7_heading()}</h3>
        <p>{m.home_text_8()}</p>

        <h3>{m.home_text_9_heading()}</h3>
        <p>{m.home_text_9()}</p>
        <p>{m.home_text_10()}</p>
      </main>
    </>
  );
}
