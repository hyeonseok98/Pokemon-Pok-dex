// 포켓몬 ID를 4자리로 설정
export const formatPokemonId = (id: number): string => {
  return id.toString().padStart(4, "0");
};

// 포켓몬 height → meter 단위로 변환
export const formatHeight = (height: number): string => {
  const meters = height / 10;
  return meters % 1 === 0 ? `${meters}m` : `${meters.toFixed(1)}m`;
};

// 포켓몬 weight → kilogram 단위로 변환
export const formatWeight = (weight: number): string => {
  const kilograms = weight / 10;
  return kilograms % 1 === 0 ? `${kilograms}kg` : `${kilograms.toFixed(1)}kg`;
};
