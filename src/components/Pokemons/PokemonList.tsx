"use client";

import { fetchPokemonData } from "@/apis/pokemons";
import { Pokemon } from "@/types/pokemon.type";
import { useSuspenseQuery } from "@tanstack/react-query";
import Link from "next/link";
import PokemonDetail from "./PokemonDetail";

function PokemonList() {
  const { data: pokemonData } = useSuspenseQuery<Pokemon[]>({
    queryKey: ["pokemons"],
    queryFn: fetchPokemonData,
    staleTime: 1000 * 60 * 2,
  });

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
