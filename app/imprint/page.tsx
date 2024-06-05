import * as m from "@/paraglide/messages";

import Container from "@/components/Container";

export default function Imprint() {
  return (
    <div>
      <Container className="prose dark:prose-invert">
        <h1>{m.Imprint()}</h1>

        <h2> {m.home_metadata_title()}</h2>

        <p>
          Purdey Lansink <br />
          Docent/Onderzoeker Verpleegkunde bij Saxion University of Applied
          Sciences <br />
          Palliatieve zorg | Minor
        </p>

        <p>
          +06-1091 3357 <br />
          <a href="mailto:P.m.lansink@saxion.nl">P.m.lansink@saxion.nl</a>
        </p>
      </Container>
    </div>
  );
}
