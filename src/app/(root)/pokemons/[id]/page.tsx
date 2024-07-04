import { Pokemon } from "@/types/pokemon.type";
import {
  formatHeight,
  formatPokemonId,
  formatWeight,
} from "@/utils/formatPokemonInfo";
import Image from "next/image";
import Link from "next/link";

const PokemonDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:3000/api/pokemons/${id}`);
  if (!res.ok) {
    return <p>Failed to load data</p>;
  }
  const pokemon: Pokemon = await res.json();

  return (
    <section className="flex flex-col w-[520px] mx-auto">
      <div className="flex flex-col justify-center items-center w-full h-20 p-4 rounded-t-lg bg-slate-100 text-black">
        <h2 className="text-xl font-bold">{pokemon.korean_name}</h2>
        <span>NO. {formatPokemonId(pokemon.id)}</span>
      </div>

      <div className="flex flex-col justify-center items-center w-full h-auto p-4 rounded-b-lg bg-white text-black leading-7 mb-6">
        <Image
          src={pokemon.sprites.front_default}
          alt={`${pokemon.korean_name} 사진`}
          width={150}
          height={150}
          priority
        />
        <span className="text-lg">이름: {pokemon.korean_name}</span>
        <div>
          <span>키: {formatHeight(pokemon.height)} </span>
          <span>무게: {formatWeight(pokemon.weight)}</span>
        </div>
        <div className="flex gap-x-1">
          <span className="font-semibold">타입: </span>
          {pokemon.types.map((typeList, index) => (
            <div
              key={index}
              className="bg-orange-400 text-white rounded-md px-1"
            >
              {typeList.type.korean_name || typeList.type.name}
            </div>
          ))}
          <span className="font-semibold">특성: </span>
          {pokemon.abilities.map((abilityList, index) => (
            <div
              key={index}
              className="bg-green-500 text-white rounded-md px-1"
            >
              {abilityList.ability.korean_name || abilityList.ability.name}
            </div>
          ))}
        </div>
        <span className="font-semibold m-3">기술:</span>
        <div className="break-keep text-center">
          {pokemon.moves.map((moveList, index) => (
            <span key={index}>
              {moveList.move.korean_name || moveList.move.name}
              {"  "}
            </span>
          ))}
        </div>
        <Link href="/">
          <button className="px-2.5 py-1 mt-3 rounded bg-blue-500 text-white text-sm">
            뒤로 가기
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PokemonDetailPage;
