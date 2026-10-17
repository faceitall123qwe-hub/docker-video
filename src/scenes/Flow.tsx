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

const Step: React.FC<{
  n: string;
  title: string;
  desc: string;
  start: number;
  children: React.ReactNode;
}> = ({ n, title, desc, start, children }) => {
  const frame = useCurrentFrame();
  const p = appear(frame, start);
  return (
    <div
      style={{
        width: 900,
        padding: "34px 44px",
        borderRadius: 30,
        background: C.card,
        border: `3px solid ${C.border}`,
        opacity: p,
        translate: `${interpolate(p, [0, 1], [-120, 0])}px 0px`,
        display: "flex",
        alignItems: "center",
        gap: 36,
      }}
    >
      <div
        style={{
          minWidth: 84,
          height: 84,
          borderRadius: 42,
          background: C.blue,
          color: "white",
          fontSize: 46,
          fontWeight: 800,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {n}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 54, fontWeight: 800, color: C.text }}>
          {title}
        </div>
        <div
          style={{
            fontSize: 38,
            fontWeight: 500,
            color: C.muted,
            marginTop: 6,
            lineHeight: 1.25,
          }}
        >
          {desc}
        </div>
      </div>
      {children}
    </div>
  );
};

const Arrow: React.FC<{ start: number }> = ({ start }) => {
  const frame = useCurrentFrame();
  const p = appear(frame, start, 12);
  return (
    <div
      style={{
        fontSize: 64,
        color: C.cyan,
        opacity: p,
        translate: `0px ${interpolate(p, [0, 1], [-20, 0])}px`,
        lineHeight: 1,
      }}
    >
      ↓
    </div>
  );
};

export const Flow: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <Background />
      <Audio src={staticFile("vo/flow.mp3")} from={8} premountFor={30} />
      <AbsoluteFill
        style={{
          fontFamily,
          justifyContent: "center",
          alignItems: "center",
          padding: 90,
          gap: 24,
        }}
      >
        <div
          style={{
            fontSize: 84,
            fontWeight: 800,
            color: C.text,
            textAlign: "center",
            marginBottom: 30,
            opacity: appear(frame, 0),
          }}
        >
          Как это <span style={{ color: C.blue }}>работает</span>
        </div>

        <Step
          n="1"
          title="Dockerfile"
          desc="Рецепт: что положить в контейнер"
          start={25}
        >
          <div
            style={{
              fontFamily: monoFamily,
              fontSize: 26,
              color: C.cyan,
              background: C.bg,
              padding: "14px 18px",
              borderRadius: 14,
              lineHeight: 1.45,
              whiteSpace: "pre",
            }}
          >
            {"FROM node:22\nCOPY . .\nCMD npm start"}
          </div>
        </Step>
        <Arrow start={115} />
        <Step
          n="2"
          title="Образ"
          desc="Готовый шаблон, собранный по рецепту"
          start={125}
        >
          <div style={{ opacity: 0.9 }}>
            <ContainerIcon size={150} color={C.muted} />
          </div>
        </Step>
        <Arrow start={210} />
        <Step
          n="3"
          title="Контейнеры"
          desc="Запущенные копии образа"
          start={220}
        >
          <div style={{ display: "flex", gap: 10 }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  opacity: appear(frame, 245 + i * 10, 10),
                  scale: interpolate(
                    appear(frame, 245 + i * 10, 10),
                    [0, 1],
                    [0.3, 1],
                  ),
                }}
              >
                <ContainerIcon size={70} />
              </div>
            ))}
          </div>
        </Step>

        <div
          style={{
            marginTop: 40,
            fontSize: 50,
            fontWeight: 500,
            color: C.muted,
            textAlign: "center",
            lineHeight: 1.3,
            opacity: appear(frame, 290),
          }}
        >
          Один образ —{" "}
          <span style={{ color: C.text, fontWeight: 700 }}>сколько угодно</span>{" "}
          одинаковых контейнеров
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
