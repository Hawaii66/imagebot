import { createServerClient } from "./CreateSupabaseServer";
import { GetExtra } from "./Extra";
import GenerateImage from "./GenerateImage";
import { v4 as uuidv4 } from "uuid";

export const GenerateCategory = async (category: string) => {
  const extra = await GetExtra(category, 1);

  const prompt = `cute ${category}, ${extra.join(" ")}, ${uuidv4().slice(
    0,
    5
  )}`;

  const blob = await GenerateImage({
    inputs: prompt,
  });

  const supabase = createServerClient();
  const path = `${category}/generated/${prompt
    .replaceAll(" ", "")
    .replaceAll(",", "")}.png`;
  const data = await supabase.storage.from("images").upload(path, blob);

  const absolutePath = supabase.storage
    .from("images")
    .getPublicUrl(data.data?.path || "");

  await supabase.from("images").insert({
    category: category,
    description: `Cute image of a ${category}, \n\n#dog #cute #picture #daile`,
    image: absolutePath.data.publicUrl,
    uploaded: false,
  });
};

export const GenerateForAll = async () => {
  const supabase = createServerClient();

  const data = await supabase.from("category").select("*");
  if (data.error) {
    console.log(data.error.message);
    return;
  }

  const categoryeies = data.data.map((i) => i.name);
  const promises = [];

  for (var i = 0; i < categoryeies.length; i++) {
    const c = categoryeies[i];
    promises.push(GenerateCategory(c));
  }

  await Promise.all(promises);
};
