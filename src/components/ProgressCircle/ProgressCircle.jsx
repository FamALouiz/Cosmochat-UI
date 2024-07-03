import { GREEN, RED } from "../../constants/Colors";

function ProgressCircle({ progress = 0.75 }) {
  //   const angle = progress * 360;

  return (
    <svg
      width={`${40}px`}
      height={`${40}px`}
      strokeDasharray={`${Math.abs(progress) * 100}, 100`}
    >
      <circle
        stroke={parseFloat(progress) > 0 ? GREEN : RED}
        stroke-width="4"
        fill="transparent"
        r="15"
        cx="17"
        cy="20"
      />
    </svg>
  );
}

export default ProgressCircle;
