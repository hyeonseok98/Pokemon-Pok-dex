"use client";

import Lottie from "react-lottie-player";
import lottieJson from "../../../public/lottie_loading.json";

function LoadingAnimation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 400, height: 400 }}
    />
  );
}

export default LoadingAnimation;
