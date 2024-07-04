import { Pokemon } from "@/types/pokemon.type";

const baseUrl = "http://localhost:3000";

export const fetchPokemonData = async () => {
  const response = await fetch(`${baseUrl}/api/pokemons/`);
  const data: Pokemon[] = await response.json();

  return data;
};

export const fetchPokemonDetailData = async (id: string): Promise<Pokemon> => {
  const response = await fetch(`${baseUrl}/api/pokemons/${id}`);
  const data: Pokemon = await response.json();

  return data;
};
