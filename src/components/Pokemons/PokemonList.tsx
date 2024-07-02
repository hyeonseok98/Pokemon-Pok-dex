"use client";

import { Pokemon } from "@/types/pokemon.type";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import PokemonDetail from "./PokemonDetail";

function PokemonList() {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/pokemons");
        const data: Pokemon[] = await response.json();
        setPokemonData(data);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Fetching pokemon data error");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchPokemonData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center text-white font-semibold">
        <LoadingAnimation />
        <div>로딩중입니다...</div>
      </div>
    );
  }

  return (
    <section className="w-full max-w-screen-xl">
      <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {pokemonData.map((pokemon: Pokemon) => (
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
