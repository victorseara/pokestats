interface Stats {
  name: string;
  value: number;
}
interface Pokemon {
  name: string;
  image: string;
  stats: Stats[];
}

export default Pokemon;
