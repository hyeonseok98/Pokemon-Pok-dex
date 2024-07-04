"use client";

import { fetchPokemonData } from "@/apis/pokemons";
import { Pokemon } from "@/types/pokemon.type";
import { useSuspenseQuery } from "@tanstack/react-query";
import Link from "next/link";
import PokemonDetail from "./PokemonDetail";

// 서버컴포넌트 실험시 async 붙이기!
function PokemonList() {
  const { data: pokemonData } = useSuspenseQuery<Pokemon[]>({
    queryKey: ["pokemons"],
    queryFn: fetchPokemonData,
    staleTime: 1000 * 60 * 2,
  });

  // 서버 컴포넌트 실험
  // const baseUrl = "http://localhost:3000";

  // const fetchPokemonData = async () => {
  //   const response = await fetch(`${baseUrl}/api/pokemons/`);
  //   const data: Pokemon[] = await response.json();

  //   return data;
  // };

  // const pokemonData = await fetchPokemonData();

  // if (isLoading) {
  //   throw new Promise(() => {});
  // }

  // if (isLoading) {
  //   return (
  //     <div className="flex flex-col justify-center items-center text-white font-semibold">
  //       <LoadingAnimation />
  //       <div>로딩중입니다...</div>
  //     </div>
  //   );
  // }

  return (
    <section className="w-full max-w-screen-xl">
      <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {pokemonData?.map((pokemon: Pokemon) => (
          <li key={pokemon.id}>
            <Link href={`/pokemons/${pokemon.id}`}>
              <PokemonDetail pokemon={pokemon} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PokemonList;
