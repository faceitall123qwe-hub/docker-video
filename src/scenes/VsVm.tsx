import {
  AbsoluteFill,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { Audio } from "@remotion/media";
import { Background } from "../Background";
import { C, appear, fontFamily } from "../theme";

const Layer: React.FC<{
  label: string;
  color: string;
  start: number;
  height?: number;
}> = ({ label, color, start, height = 76 }) => {
  const frame = useCurrentFrame();
  const p = appear(frame, start, 14);
  return (
    <div
      style={{
        height,
        borderRadius: 14,
        background: `${color}33`,
        border: `3px solid ${color}`,
        color: C.text,
        fontSize: 32,
        fontWeight: 700,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        opacity: p,
        translate: `0px ${interpolate(p, [0, 1], [-50, 0])}px`,
      }}
    >
      {label}
    </div>
  );
};

const Column: React.FC<{
  title: string;
  titleColor: string;
  apps: { label: string; os: boolean }[];
  engine: string;
  verdict: string;
  start: number;
}> = ({ title, titleColor, apps, engine, verdict, start }) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{ width: 430, display: "flex", flexDirection: "column", gap: 12 }}
    >
      <div
        style={{
          fontSize: 46,
          fontWeight: 800,
          color: titleColor,
          textAlign: "center",
          marginBottom: 12,
          height: 120,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          opacity: appear(frame, start),
        }}
      >
        {title}
      </div>
      <div
        style={{
          display: "flex",
          gap: 10,
          alignItems: "flex-end",
          height: 250,
        }}
      >
        {apps.map((a, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <Layer label={a.label} color={C.cyan} start={start + 60 + i * 6} />
            {a.os && (
              <Layer
                label="ОС"
                color={C.red}
                start={start + 45 + i * 6}
                height={150}
              />
            )}
          </div>
        ))}
      </div>
      <Layer label={engine} color={C.blue} start={start + 30} />
      <Layer label="ОС компьютера" color={C.muted} start={start + 18} />
      <Layer label="Железо" color={C.muted} start={start + 8} />
      <div
        style={{
          marginTop: 20,
          fontSize: 38,
          fontWeight: 600,
          color: C.text,
          textAlign: "center",
          lineHeight: 1.3,
          opacity: appear(frame, start + 90),
          whiteSpace: "pre-line",
        }}
      >
        {verdict}
      </div>
    </div>
  );
};

export const VsVm: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <Background />
      <Audio src={staticFile("vo/vsvm.mp3")} from={8} premountFor={30} />
      <AbsoluteFill
        style={{
          fontFamily,
          alignItems: "center",
          justifyContent: "center",
          padding: 80,
          gap: 70,
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            color: C.text,
            textAlign: "center",
            lineHeight: 1.1,
            opacity: appear(frame, 0),
          }}
        >
          Почему не <span style={{ color: C.red }}>виртуалка</span>?
        </div>
        <div style={{ display: "flex", gap: 60 }}>
          <Column
            title="Виртуальная машина"
            titleColor={C.red}
            apps={[
              { label: "App", os: true },
              { label: "App", os: true },
            ]}
            engine="Гипервизор"
            verdict={"Своя ОС у каждой\nГигабайты, минуты"}
            start={45}
          />
          <Column
            title="Docker"
            titleColor={C.blue}
            apps={[
              { label: "App", os: false },
              { label: "App", os: false },
              { label: "App", os: false },
            ]}
            engine="Docker"
            verdict={"Общее ядро ОС\nМегабайты, секунды"}
            start={200}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
