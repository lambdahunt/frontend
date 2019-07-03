import React from "react";

import LambdaArrow from "./LambdaArrow";
import LambdaLogoHorizontal from "./LambdaLogoHoriz";
import LambdaNextUp from "./LambdaNextUp";

const Icon = props => {
  switch (props.name) {
    case "arrow":
      return <LambdaArrow {...props} />;
    case "logoH":
      return <LambdaLogoHorizontal {...props} />;
    case "nextUp":
      return <LambdaNextUp {...props} />;
    default:
      return;
  }
};

export default Icon;