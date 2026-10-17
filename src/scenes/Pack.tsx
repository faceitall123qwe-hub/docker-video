import {
  AbsoluteFill,
  interpolate,
  interpolateColors,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { Audio } from "@remotion/media";
import { Background } from "../Background";
import { C, appear, ease, fontFamily, monoFamily } from "../theme";

const ITEMS = [
  { label: "Твой код", from: [-300, -520], to: [-170, -70], delay: 60 },
  { label: "Node 22", from: [320, -560], to: [170, -70], delay: 100 },
  { label: "Библиотеки", from: [-340, 520], to: [-170, 60], delay: 145 },
  { label: "Настройки", from: [330, 560], to: [170, 60], delay: 175 },
];

const PACK_AT = 210;

export const Pack: React.FC = () => {
  const frame = useCurrentFrame();
  const closed = appear(frame, PACK_AT, 20);
  return (
    <AbsoluteFill>
      <Background />
      <Audio src={staticFile("vo/pack.mp3")} from={8} premountFor={30} />
      <Audio
        src={staticFile("sfx/switch.wav")}
        from={PACK_AT}
        volume={0.6}
        premountFor={30}
      />
      <AbsoluteFill style={{ fontFamily, alignItems: "center", padding: 90 }}>
        <div
          style={{
            marginTop: 150,
            fontSize: 84,
            fontWeight: 800,
            color: C.text,
            textAlign: "center",
            lineHeight: 1.1,
            opacity: appear(frame, 0),
          }}
        >
          Решение — <span style={{ color: C.blue }}>контейнер</span>
        </div>

        <AbsoluteFill
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <div
            style={{
              position: "absolute",
              width: 760,
              height: 420,
              borderRadius: 36,
              border: `6px solid ${C.blue}`,
              background: interpolateColors(
                closed,
                [0, 1],
                ["rgba(36,150,237,0.08)", "rgba(36,150,237,1)"],
              ),
              opacity: appear(frame, 5),
              scale: interpolate(closed, [0, 0.5, 1], [1, 1.06, 1]),
              boxShadow: `0 0 ${interpolate(closed, [0, 1], [0, 120])}px ${C.blue}aa`,
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                style={{
                  width: 14,
                  height: 300,
                  borderRadius: 7,
                  background: "#ffffffcc",
                  opacity: appear(frame, PACK_AT + 8 + i * 2, 10),
                }}
              />
            ))}
          </div>

          {ITEMS.map((it) => {
            const p = interpolate(frame, [it.delay, it.delay + 35], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: ease,
            });
            return (
              <div
                key={it.label}
                style={{
                  position: "absolute",
                  padding: "22px 34px",
                  borderRadius: 20,
                  background: C.card,
                  border: `3px solid ${C.cyan}`,
                  color: C.text,
                  fontFamily: monoFamily,
                  fontSize: 40,
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                  opacity: appear(frame, it.delay, 8) * (1 - closed),
                  translate: `${interpolate(p, [0, 1], [it.from[0], it.to[0]])}px ${interpolate(p, [0, 1], [it.from[1], it.to[1]])}px`,
                  scale: interpolate(closed, [0, 1], [1, 0.4], {
                    output: "perceptual-scale",
                  }),
                }}
              >
                {it.label}
              </div>
            );
          })}
        </AbsoluteFill>

        <div
          style={{
            position: "absolute",
            bottom: 230,
            left: 90,
            right: 90,
            fontSize: 54,
            fontWeight: 500,
            color: C.muted,
            textAlign: "center",
            lineHeight: 1.3,
            opacity: appear(frame, PACK_AT + 12),
            translate: `0px ${interpolate(appear(frame, PACK_AT + 12), [0, 1], [40, 0])}px`,
          }}
        >
          Приложение +{" "}
          <span style={{ color: C.text, fontWeight: 700 }}>
            всё, что ему нужно
          </span>
          <br />в одной «коробке»
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
