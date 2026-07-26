// EDIT ME: swap in your own favorite games (cover art goes in public/images/favorites/).
export type FavoriteGame = {
  title: string;
  image: string;
  steamUrl: string;
};

export const favorites: FavoriteGame[] = [
  {
    title: "Outer Wilds",
    image: "/images/favorites/outer-wilds.jpg",
    steamUrl: "https://store.steampowered.com/app/753640/Outer_Wilds/",
  },
  {
    title: "Dota 2",
    image: "/images/favorites/dota-2.jpg",
    steamUrl: "https://store.steampowered.com/app/570/Dota_2/",
  },
  {
    title: "Dark Souls III",
    image: "/images/favorites/dark-souls-3.jpg",
    steamUrl: "https://store.steampowered.com/app/374320/DARK_SOULS_III/",
  },
];
