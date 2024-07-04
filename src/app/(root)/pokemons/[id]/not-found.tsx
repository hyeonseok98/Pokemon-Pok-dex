import Link from "next/link";

const NotFoundDetailPage = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center gap-y-6">
      <h1 className="text-4xl font-bold">Not-Found</h1>
      <p className="text-xl">해당하는 id의 포켓몬 정보가 존재하지 않습니다.</p>
      <Link href="/">
        <button className="px-3 py-2 rounded bg-blue-500 text-white hover:brightness-110">
          홈으로 가기
        </button>
      </Link>
    </section>
  );
};

export default NotFoundDetailPage;
