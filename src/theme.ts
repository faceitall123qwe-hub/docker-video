import { loadFont } from "@remotion/google-fonts/Inter";
import { loadFont as loadMono } from "@remotion/google-fonts/JetBrainsMono";
import { Easing, interpolate } from "remotion";

export const { fontFamily } = loadFont("normal", {
  weights: ["500", "700", "800"],
  subsets: ["latin", "cyrillic"],
});
export const { fontFamily: monoFamily } = loadMono("normal", {
  weights: ["500", "700"],
  subsets: ["latin", "cyrillic"],
});

export const C = {
  bg: "#07111f",
  bg2: "#0d1d33",
  blue: "#2496ed",
  cyan: "#5ee7ff",
  text: "#eef4ff",
  muted: "#8ea3c0",
  red: "#ff5c6c",
  green: "#3ee08f",
  card: "#11233d",
  border: "#1f3a5f",
};

export const ease = Easing.bezier(0.16, 1, 0.3, 1);

export const appear = (frame: number, start: number, dur = 18) =>
  interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });
