import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { C } from "./theme";

export const Background: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at ${interpolate(frame, [0, 1200], [20, 80])}% 15%, #12345e 0%, ${C.bg} 55%)`,
      }}
    >
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(${C.border}33 1px, transparent 1px), linear-gradient(90deg, ${C.border}33 1px, transparent 1px)`,
          backgroundSize: "90px 90px",
          backgroundPosition: `0px ${frame * 0.6}px`,
        }}
      />
    </AbsoluteFill>
  );
};
