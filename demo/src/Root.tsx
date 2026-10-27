import React from "react";
import { Composition } from "remotion";
import { Personalized, personalizedSchema } from "./Personalized";
import { Stats } from "./Stats";

export const Root: React.FC = () => (
  <>
    <Composition
      id="Personalized"
      component={Personalized}
      schema={personalizedSchema}
      durationInFrames={120}
      fps={30}
      width={1280}
      height={720}
      defaultProps={{ name: "Webmontag", color: "#0fbe7c", tagline: "Dieses Video ist Code." }}
    />
    <Composition id="Stats" component={Stats} durationInFrames={150} fps={30} width={1280} height={720} />
  </>
);
