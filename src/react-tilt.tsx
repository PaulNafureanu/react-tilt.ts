import * as React from "react";
import VanillaTilt, { TiltOptions } from "vanilla-tilt";

interface TiltProps {
  options?: TiltOptions;
}

const Tilt: React.FunctionComponent<TiltProps> = ({ options?:TiltOptions }) => {
  const tiltRef = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    VanillaTilt.init(tiltRef.current!);
  }, []);

  return <div ref={tiltRef} {...options} />;
};

export default Tilt;
