import { Button } from "@/components/ui/button";
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
        <h2>{m.home_list_head()}</h2>
        <ul>
          <li>{m.homelist_1()}</li>
          <li>{m.homelist_2()}</li>
          <li>{m.homelist_3()}</li>
          <li>{m.homelist_4()}</li>
        </ul>
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
