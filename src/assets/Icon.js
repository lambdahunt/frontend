import React from "react";

import LambdaArrow from './LambdaArrow';
import LambdaLogoHorizontal from './LambdaLogoHorizontal';
import LambdaNextUp from './LambdaNextUp';
import LambdaNextUpFull from './LambdaNextUpFull';
import LambdaNextUpFlat from './LambdaNextUpFlat';

const Icon = props => {
  switch (props.name) {
    case 'arrow':
      return <LambdaArrow {...props} />;
    case 'logoH':
      return <LambdaLogoHorizontal {...props} />;
    case 'nextUp':
      return <LambdaNextUp {...props} />;
    case 'nextUpFull':
      return <LambdaNextUpFull {...props} />;
    case 'nextUpFlat':
      return <LambdaNextUpFlat {...props} />;
    default:
      return;
  }
};

export default Icon;