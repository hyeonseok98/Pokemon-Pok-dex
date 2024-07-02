import LoadingAnimation from "@/components/LoadingAnimation/LoadingAnimation";

function Loading() {
  return (
    <div className="flex flex-col justify-center items-center text-white font-semibold">
      <LoadingAnimation />
      <div>로딩중입니다...</div>
    </div>
  );
}

export default Loading;
