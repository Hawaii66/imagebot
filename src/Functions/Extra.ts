import { createServerClient } from "./CreateSupabaseServer";

export const GetExtra = async (
  category: string,
  count: number
): Promise<string[]> => {
  const supabase = createServerClient();

  const data = await supabase.from("extra").select("*").eq("name", category);

  if (data.error) {
    console.log(data.error.message);
    return [];
  }

  const extras = data.data.map((i) => i.extra);
  const shuffles = shuffle(extras);

  return shuffles.slice(0, count);
};

function shuffle<T>(array: T[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
