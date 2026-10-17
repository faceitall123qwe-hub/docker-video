import {
  AbsoluteFill,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { Audio } from "@remotion/media";
import { Background } from "../Background";
import { C, appear, fontFamily } from "../theme";
import { ContainerIcon } from "./ContainerIcon";

export const Hook: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <Background />
      <Audio src={staticFile("vo/hook.mp3")} from={8} premountFor={30} />
      <AbsoluteFill
        style={{
          fontFamily,
          justifyContent: "center",
          alignItems: "center",
          padding: 90,
          gap: 60,
        }}
      >
        <div
          style={{
            scale: interpolate(frame, [0, 22], [0.4, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              output: "perceptual-scale",
            }),
            opacity: appear(frame, 0, 12),
            translate: `0px ${Math.sin(frame / 12) * 10}px`,
          }}
        >
          <ContainerIcon size={300} />
        </div>
        <div
          style={{
            fontSize: 120,
            fontWeight: 800,
            color: C.text,
            textAlign: "center",
            lineHeight: 1.05,
            opacity: appear(frame, 10),
            translate: `0px ${interpolate(appear(frame, 10), [0, 1], [60, 0])}px`,
          }}
        >
          Что такое <span style={{ color: C.blue }}>Docker</span>?
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 500,
            color: C.muted,
            opacity: appear(frame, 26),
            translate: `0px ${interpolate(appear(frame, 26), [0, 1], [40, 0])}px`,
          }}
        >
          Коротко и на пальцах
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
