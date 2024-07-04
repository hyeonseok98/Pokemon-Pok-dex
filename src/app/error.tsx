"use client";

import Link from "next/link";

const ErrorPage = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center gap-y-4">
      <h1 className="text-4xl font-bold">Error Page</h1>
      <p className="text-xl">예상치 못한 오류가 발생했습니다.</p>
      <Link href="/">
        <button className="px-3 py-2 rounded bg-blue-500 text-white">
          홈으로 가기
        </button>
      </Link>
    </section>
  );
};

export default ErrorPage;
