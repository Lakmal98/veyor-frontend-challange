interface IProps {
  text: string;
  width: number;
  height: number;
  fillColor?: string;
  borderColor?: string;
}

export default function CustomShape({
  text,
  width,
  height,
  fillColor,
  borderColor,
}: Readonly<IProps>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 150 30"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <clipPath id="3e760eb06c">
          <path
            d="M 2.417969 0 L 147.578125 0 L 147.578125 29.03125 L 2.417969 29.03125 Z M 2.417969 0 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="9a006c103f">
          <path
            d="M 133.066406 0 L 2.417969 0 L 2.417969 29.03125 L 133.066406 29.03125 L 147.582031 14.515625 Z M 133.066406 0 "
            clipRule="nonzero"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#3e760eb06c)">
        <g clipPath="url(#9a006c103f)">
          <path
            strokeLinecap="butt"
            transform="matrix(0.725806, 0, 0, 0.725806, 2.419352, 0.00000193548)"
            fill={fillColor ?? "none"}
            d="M 180.002609 -0.00000266667 L -0.00190639 -0.00000266667 L -0.00190639 39.998609 L 180.002609 39.998609 L 200.001915 19.999303 Z M 180.002609 -0.00000266667 "
            stroke={borderColor ?? "#000000"}
            strokeWidth="4"
            strokeMiterlimit="4"
          />
        </g>
      </g>
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#000000"
        fontSize="11"
      >
        {text}
      </text>
    </svg>
  );
}
