import * as m from "@/paraglide/messages";

import Container from "@/components/Container";

export default function Imprint() {
  return (
    <div>
      <Container>
        <h1 className="mb-12 text-4xl font-bold text-foreground">
          {m.Imprint()}
        </h1>

        <p className="text-xl font-bold mb-4"> {m.home_metadata_title()}</p>

        <p className="mb-4">
          Purdey Lansink <br />
          Docent/Onderzoeker Verpleegkunde bij Saxion University of Applied Sciences <br />
          Palliatieve zorg | Minor
        </p>

        <p className="mb-4">
          +06-1091 3357 <br />
	  <a href="mailto:P.m.lansink@saxion.nl">P.m.lansink@saxion.nl</a>
	</p>
      </Container>
    </div>
  );
}
