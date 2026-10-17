import {
  AbsoluteFill,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { Audio } from "@remotion/media";
import { Background } from "../Background";
import { C, appear, fontFamily, monoFamily } from "../theme";
import { ContainerIcon } from "./ContainerIcon";

const typed = (text: string, frame: number, start: number) =>
  text.slice(0, Math.max(0, Math.floor((frame - start) * 1.2)));

const CMD1 = "docker build -t app .";
const CMD2 = "docker run app";

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <Background />
      <Audio src={staticFile("vo/outro.mp3")} from={8} premountFor={30} />
      <Audio
        src={staticFile("sfx/ding.wav")}
        from={72}
        volume={0.35}
        premountFor={30}
      />
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
            fontSize: 88,
            fontWeight: 800,
            color: C.text,
            textAlign: "center",
            lineHeight: 1.1,
            opacity: appear(frame, 0),
            translate: `0px ${interpolate(appear(frame, 0), [0, 1], [50, 0])}px`,
          }}
        >
          Собрал <span style={{ color: C.blue }}>один раз</span>&nbsp;—<br />
          запускается <span style={{ color: C.green }}>везде</span>
        </div>

        <div
          style={{
            width: 900,
            borderRadius: 26,
            background: "#050b14",
            border: `3px solid ${C.border}`,
            padding: "30px 40px",
            fontFamily: monoFamily,
            fontSize: 44,
            color: C.text,
            lineHeight: 1.7,
            opacity: appear(frame, 15),
          }}
        >
          <div style={{ display: "flex", gap: 14, marginBottom: 14 }}>
            {[C.red, "#ffbd2e", C.green].map((c) => (
              <div
                key={c}
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 11,
                  background: c,
                }}
              />
            ))}
          </div>
          <div>
            <span style={{ color: C.green }}>$ </span>
            {typed(CMD1, frame, 25)}
          </div>
          <div style={{ opacity: frame >= 50 ? 1 : 0 }}>
            <span style={{ color: C.green }}>$ </span>
            {typed(CMD2, frame, 50)}
          </div>
          <div style={{ color: C.cyan, opacity: appear(frame, 72, 8) }}>
            ✓ Контейнер запущен
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 30,
            opacity: appear(frame, 110),
            scale: interpolate(appear(frame, 110), [0, 1], [0.7, 1]),
          }}
        >
          <ContainerIcon size={120} />
          <div style={{ fontSize: 80, fontWeight: 800, color: C.blue }}>
            Docker
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
