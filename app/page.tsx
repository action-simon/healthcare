import * as m from "@/paraglide/messages";

export default function Home() {
  return (
    <main className="container py-12 flex flex-col space-y-8">
      <p>{m.home_headline()}</p>
      <p>{m.home_headline_sub()}</p>
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
    </main>
  );
}
