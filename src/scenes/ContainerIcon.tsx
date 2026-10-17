import { C } from "../theme";

export const ContainerIcon: React.FC<{ size: number; color?: string }> = ({
  size,
  color = C.blue,
}) => (
  <svg width={size} height={size * 0.62} viewBox="0 0 200 124">
    <rect
      x="4"
      y="4"
      width="192"
      height="116"
      rx="14"
      fill={`${color}22`}
      stroke={color}
      strokeWidth="6"
    />
    {[30, 60, 90, 120, 150, 170].map((x) => (
      <line
        key={x}
        x1={x}
        y1="20"
        x2={x}
        y2="104"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />
    ))}
  </svg>
);
