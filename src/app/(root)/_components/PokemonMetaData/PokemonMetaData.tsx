import { fetchPokemonDetailData } from "@/apis/pokemons";
import { Pokemon } from "@/types/pokemon.type";
import { formatPokemonId } from "@/utils/formatPokemonInfo";

const generateMetadata = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const pokemon: Pokemon = await fetchPokemonDetailData(id);

  if (!pokemon) {
    return {
      title: "Error Page",
      description: "포켓몬 정보를 찾을 수 없습니다.",
    };
  }

  return {
    title: `NO. ${formatPokemonId(pokemon.id)} ${pokemon.korean_name}`,
    description: `${pokemon.korean_name} 페이지`,
  };
};

export default generateMetadata;
