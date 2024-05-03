import Container from "@/components/Container";
import * as m from "@/paraglide/messages";

export default function Imprint() {
  return (
    <div>
      <Container>
        <h1 className="mb-12 text-4xl font-bold text-foreground">
          {m.Imprint()}
        </h1>

        <p className="text-xl font-bold"> {m.home_metadata_title()}</p>

        <p>
          Zeynep Celik <br />
          Mühlenmathe 22 <br />
          48599 Gronau
          <br />
          {m.Germany()}
        </p>

        <p>+49 (0) 2562 1234</p>
      </Container>
    </div>
  );
}
