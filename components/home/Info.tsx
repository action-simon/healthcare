import * as m from "@/paraglide/messages";
import Container from "../Container";

const Info = () => {
  return (
    <section id="info">
      <Container>
        <h2 className="mb-6 text-pretty text-4xl font-bold tracking-tight">
          {m.home_text_1()}
        </h2>
        <p className="text-pretty font-light text-muted-foreground sm:text-xl">
          {m.home_text_2()}
        </p>
      </Container>
    </section>
  );
};

export default Info;
