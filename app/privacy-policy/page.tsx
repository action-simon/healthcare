import Container from "@/components/Container";
import * as m from "@/paraglide/messages";

export default function PrivacyPolicy() {
  return (
    <div>
      <Container>
        <h1 className="mb-12 text-4xl font-bold text-foreground">
          {m.Privacy_Policy()}
        </h1>

        <p className="text-xl font-bold"> {m.home_metadata_title()}</p>

        <p>Add Text here</p>
      </Container>
    </div>
  );
}
