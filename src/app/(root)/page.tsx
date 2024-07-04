// "use client";

import dynamic from "next/dynamic";
// import PokemonList from "@/components/Pokemons/PokemonList";
import Loading from "./loading";

const PokemonList = dynamic(() => import("@/components/Pokemons/PokemonList"), {
  loading: () => <Loading />,
  ssr: false,
});

// const PokemonList = lazy(() => import("@/components/Pokemons/PokemonList"));

const HomePage = () => {
  return (
    <main className="flex justify-center p-6">
      {/* <Suspense fallback={<Loading />}> */}
      <PokemonList />
      {/* </Suspense> */}
    </main>
  );
};

export default HomePage;
