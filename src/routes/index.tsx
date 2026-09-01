import { createFileRoute } from "@tanstack/react-router";
import { GreetingExperience } from "@/components/GreetingExperience";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mustaqillik 35 yil — Tabriknoma | WebInvite" },
      {
        name: "description",
        content:
          "O'zbekiston Respublikasi Mustaqilligining 35 yilligiga bag'ishlangan tantanali tabriknoma. UZ/RU/EN, musiqa va shaxsiy havola.",
      },
      { property: "og:title", content: "Mustaqillik 35 yil — Tabriknoma" },
      {
        property: "og:description",
        content: "Mustaqillikning 35 yilligi bilan tabriklaymiz! Shaxsiy tabriknoma yarating.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <GreetingExperience />;
}
