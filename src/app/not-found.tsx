import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center gap-y-6">
      <h1 className="text-4xl font-bold">404 Error</h1>
      <p className="text-xl">해당하는 페이지가 존재하지 않습니다.</p>
      <Link href="/">
        <button className="px-3 py-2 rounded bg-blue-500 text-white">
          홈으로 가기
        </button>
      </Link>
    </section>
  );
};

export default NotFoundPage;
