import { Pokemon } from "@/types/pokemon.type";
import Image from "next/image";
import React from "react";

type PokemonDetailProps = {
  pokemon: Pokemon;
};

const PokemonDetail: React.FC<PokemonDetailProps> = ({ pokemon }) => {
  return (
    <div className="group flex flex-col justify-center items-start border border-gray-400 rounded-lg px-4 py-2.5 hover:border-white hover:cursor-pointer hover:scale-[1.03] transition-transform duration-200 ease-in-out">
      <div className="w-full flex justify-center mb-1.5">
        <Image
          className="group-hover:scale-[1.03] transform duration-200 ease-in-out"
          src={pokemon.sprites.front_default}
          alt={`${pokemon.korean_name} 사진`}
          width={100}
          height={100}
          priority
        />
      </div>
      <span className="group-hover:font-bold">{pokemon.korean_name}</span>
      <span>도감번호: {pokemon.id}</span>
    </div>
  );
};

export default PokemonDetail;
