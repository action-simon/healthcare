import * as m from "@/paraglide/messages";

export default function Imprint() {
  return (
    <div className="App">
      <div className="container px-8 py-16">
        <h1 className="mb-8 text-6xl font-bold text-foreground">
          {m.Imprint()}
        </h1>
        <div className="mb-8 text-foreground">
          <p className="text-xl font-bold">Zeinab Consulting {m.Agency()}</p>

          <p>
            Mühlenmathe 22 <br />
            48599 Gronau
            <br />
            {m.Germany()}
          </p>

          <p>+49 (0) 2562 1234</p>
        </div>
      </div>
    </div>
  );
}
