import {
  AbsoluteFill,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { Audio } from "@remotion/media";
import { Background } from "../Background";
import { C, appear, fontFamily, monoFamily } from "../theme";

const Machine: React.FC<{
  title: string;
  lines: string[];
  ok: boolean;
  start: number;
  statusDelay: number;
}> = ({ title, lines, ok, start, statusDelay }) => {
  const frame = useCurrentFrame();
  const p = appear(frame, start);
  const status = appear(frame, start + statusDelay, 12);
  const shake = ok
    ? 0
    : Math.sin(frame * 1.6) *
      interpolate(
        frame,
        [start + statusDelay, start + statusDelay + 15],
        [14, 0],
        {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        },
      ) *
      (frame >= start + statusDelay ? 1 : 0);
  const accent = ok ? C.green : C.red;
  return (
    <div
      style={{
        width: 900,
        padding: "40px 50px",
        borderRadius: 32,
        background: C.card,
        border: `3px solid ${status > 0.5 ? accent : C.border}`,
        opacity: p,
        translate: `${shake}px ${interpolate(p, [0, 1], [80, 0])}px`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: C.text,
            marginBottom: 18,
          }}
        >
          {title}
        </div>
        {lines.map((l) => (
          <div
            key={l}
            style={{
              fontFamily: monoFamily,
              fontSize: 40,
              color: C.muted,
              lineHeight: 1.5,
            }}
          >
            {l}
          </div>
        ))}
      </div>
      <div
        style={{
          width: 150,
          height: 150,
          borderRadius: 75,
          background: `${accent}22`,
          border: `5px solid ${accent}`,
          color: accent,
          fontSize: 90,
          fontWeight: 800,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          scale: interpolate(status, [0, 1], [0.3, 1]),
          opacity: status,
        }}
      >
        {ok ? "✓" : "✕"}
      </div>
    </div>
  );
};

export const Problem: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <Background />
      <Audio src={staticFile("vo/problem.mp3")} from={8} premountFor={30} />
      <AbsoluteFill
        style={{
          fontFamily,
          justifyContent: "center",
          alignItems: "center",
          padding: 90,
          gap: 50,
        }}
      >
        <div
          style={{
            fontSize: 84,
            fontWeight: 800,
            color: C.text,
            textAlign: "center",
            lineHeight: 1.1,
            opacity: appear(frame, 0),
          }}
        >
          «Но у меня же <span style={{ color: C.green }}>работает</span>!»
        </div>
        <Machine
          title="Мой ноутбук"
          lines={["Node 22", "Postgres 16"]}
          ok
          start={15}
          statusDelay={40}
        />
        <Machine
          title="Сервер"
          lines={["Node 18", "Postgres 14"]}
          ok={false}
          start={100}
          statusDelay={120}
        />
        <div
          style={{
            fontSize: 52,
            fontWeight: 500,
            color: C.muted,
            textAlign: "center",
            lineHeight: 1.3,
            opacity: appear(frame, 235),
            translate: `0px ${interpolate(appear(frame, 235), [0, 1], [40, 0])}px`,
          }}
        >
          Другие версии и настройки —<br />
          <span style={{ color: C.red, fontWeight: 700 }}>
            и приложение падает
          </span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
