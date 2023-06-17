export default async function GenerateImage(data: { inputs: string }) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGING_FACE}`,
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.blob();
  return result;
}
