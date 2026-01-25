import { supabase } from "@/lib/supabaseClient";
import { notFound } from "next/navigation";


export default async function PlaceDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { data } = await supabase
    .from("places")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (!data) return notFound();

  return (
    <>
      <div className="max-w-5xl mx-auto py-20 px-6">
        <img
          src={data.image}
          className="w-full h-[400px] object-cover rounded-2xl mb-8"
        />

        <h1 className="text-4xl font-black mb-4">{data.name}</h1>
      </div>
    </>
  );
}
