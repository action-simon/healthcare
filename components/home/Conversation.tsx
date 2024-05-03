import * as m from "@/paraglide/messages";

import Container from "../Container";

const Conversation = () => {
  return (
    <section className="bg-background ">
      <Container>
        <h2 className="mb-12 text-2xl font-bold ">{m.home_text_7()}</h2>
        <h2 className="mb-8 text-xl font-bold">{m.home_text_7_heading()}</h2>
        <p className="mb-12 font-light text-muted-foreground sm:text-xl">
          {m.home_text_8()}
        </p>
        <h2 className="mb-8 text-xl font-bold ">{m.home_text_9_heading()}</h2>
        <p className="mb-4 font-light text-muted-foreground sm:text-xl">
          {m.home_text_9()}
        </p>
        <p className="mb-8 font-light text-muted-foreground sm:text-xl">
          {m.home_text_10()}
        </p>
      </Container>
    </section>
  );
};

export default Conversation;
