import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { Audio } from "@remotion/media";
import { AbsoluteFill, staticFile, useVideoConfig } from "remotion";
import { Flow } from "./scenes/Flow";
import { Hook } from "./scenes/Hook";
import { Outro } from "./scenes/Outro";
import { Pack } from "./scenes/Pack";
import { Problem } from "./scenes/Problem";
import { VsVm } from "./scenes/VsVm";

export const DockerExplainer: React.FC = () => {
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill>
      <TransitionSeries>
        <TransitionSeries.Sequence
          name="Hook"
          durationInFrames={165}
          premountFor={fps}
        >
          <Hook />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 15 })}
        />
        <TransitionSeries.Sequence
          name="Problem"
          durationInFrames={300}
          premountFor={fps}
        >
          <Problem />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 15 })}
        />
        <TransitionSeries.Sequence
          name="Pack"
          durationInFrames={270}
          premountFor={fps}
        >
          <Pack />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: 15 })}
        />
        <TransitionSeries.Sequence
          name="Flow"
          durationInFrames={360}
          premountFor={fps}
        >
          <Flow />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 15 })}
        />
        <TransitionSeries.Sequence
          name="VsVm"
          durationInFrames={400}
          premountFor={fps}
        >
          <VsVm />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 15 })}
        />
        <TransitionSeries.Sequence
          name="Outro"
          durationInFrames={220}
          premountFor={fps}
        >
          <Outro />
        </TransitionSeries.Sequence>
      </TransitionSeries>
      <Audio
        name="Whoosh 1"
        src={staticFile("sfx/whoosh.wav")}
        from={150}
        volume={0.5}
        premountFor={fps}
      />
      <Audio
        name="Whoosh 2"
        src={staticFile("sfx/whoosh.wav")}
        from={435}
        volume={0.5}
        premountFor={fps}
      />
      <Audio
        name="Whoosh 3"
        src={staticFile("sfx/whoosh.wav")}
        from={690}
        volume={0.5}
        premountFor={fps}
      />
      <Audio
        name="Whoosh 4"
        src={staticFile("sfx/whoosh.wav")}
        from={1035}
        volume={0.5}
        premountFor={fps}
      />
      <Audio
        name="Whoosh 5"
        src={staticFile("sfx/whoosh.wav")}
        from={1420}
        volume={0.5}
        premountFor={fps}
      />
    </AbsoluteFill>
  );
};
