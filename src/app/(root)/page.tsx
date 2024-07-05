import dynamic from "next/dynamic";
import Loading from "./loading";

const PokemonList = dynamic(() => import("@/components/Pokemons/PokemonList"), {
  loading: () => <Loading />,
  ssr: false,
});

const HomePage = () => {
  return (
    <main className="flex justify-center p-6">
      <PokemonList />
    </main>
  );
};

export default HomePage;
