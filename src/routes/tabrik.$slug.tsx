import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { GreetingExperience } from "@/components/GreetingExperience";

export const Route = createFileRoute("/tabrik/$slug")({
  head: () => ({
    meta: [
      { title: "Shaxsiy tabriknoma — Mustaqillik 35 yil" },
      {
        name: "description",
        content:
          "O'zbekiston Mustaqilligining 35 yilligi bilan shaxsiy tabriknoma. Musiqa, milliy bezaklar va samimiy tilaklar.",
      },
      { property: "og:title", content: "Shaxsiy tabriknoma — Mustaqillik 35 yil" },
      {
        property: "og:description",
        content: "Sizga atalgan tabriknoma: Mustaqillik bayrami muborak bo'lsin!",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GreetingBySlug,
});

function GreetingBySlug() {
  const { slug } = Route.useParams();
  const { data } = useQuery({
    queryKey: ["greeting", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("greetings")
        .select("recipient_name, sender_name")
        .eq("slug", slug)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  return (
    <GreetingExperience
      recipientName={data?.recipient_name}
      senderName={data?.sender_name}
    />
  );
}
