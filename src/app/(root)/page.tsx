// "use client";

// import dynamic from "next/dynamic";
import PokemonList from "@/components/Pokemons/PokemonList";
import { Suspense } from "react";
import Loading from "./loading";

// const PokemonList = dynamic(() => import("@/components/Pokemons/PokemonList"), {
//   loading: () => <Loading />,
//   ssr: false,
// });

function HomePage() {
  return (
    <main className="flex justify-center p-6">
      <Suspense fallback={<Loading />}>
        <PokemonList />
      </Suspense>
    </main>
  );
}

export default HomePage;
