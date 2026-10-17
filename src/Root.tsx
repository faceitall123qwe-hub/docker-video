import { Composition, Folder } from "remotion";
import { DockerExplainer } from "./DockerExplainer";
import { Flow } from "./scenes/Flow";
import { Hook } from "./scenes/Hook";
import { Outro } from "./scenes/Outro";
import { Pack } from "./scenes/Pack";
import { Problem } from "./scenes/Problem";
import { VsVm } from "./scenes/VsVm";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="DockerExplainer"
        component={DockerExplainer}
        durationInFrames={1640}
        fps={30}
        width={1080}
        height={1920}
      />
      <Folder name="Scenes">
        <Composition
          id="Hook"
          component={Hook}
          durationInFrames={165}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="Problem"
          component={Problem}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="Pack"
          component={Pack}
          durationInFrames={270}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="Flow"
          component={Flow}
          durationInFrames={360}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="VsVm"
          component={VsVm}
          durationInFrames={400}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="Outro"
          component={Outro}
          durationInFrames={220}
          fps={30}
          width={1080}
          height={1920}
        />
      </Folder>
    </>
  );
};
