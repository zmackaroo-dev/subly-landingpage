"use client";

import {
  HeroParallax,
  type HeroParallaxProduct,
} from "@/components/ui/hero-parallax";

function unsplash(id: string) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;
}

const products: HeroParallaxProduct[] = [
  {
    title: "Design System",
    link: "https://unsplash.com",
    thumbnail: unsplash("photo-1522542550221-31fd19575a2d"),
  },
  {
    title: "Product Team",
    link: "https://unsplash.com",
    thumbnail: unsplash("photo-1521737604893-d14cc237f11d"),
  },
  {
    title: "Analytics",
    link: "https://unsplash.com",
    thumbnail: unsplash("photo-1551288049-bebda4e38f71"),
  },
  {
    title: "Wireframes",
    link: "https://unsplash.com",
    thumbnail: unsplash("photo-1557683316-973673baf926"),
  },
  {
    title: "Landing Pages",
    link: "https://unsplash.com",
    thumbnail: unsplash("photo-1545239351-1141bd82e8a6"),
  },
  {
    title: "Components",
    link: "https://unsplash.com",
    thumbnail: unsplash("photo-1555066931-4365d14bab8c"),
  },
  {
    title: "Documentation",
    link: "https://unsplash.com",
    thumbnail: unsplash("photo-1454165804606-c3d57bc86b40"),
  },
  {
    title: "Prototyping",
    link: "https://unsplash.com",
    thumbnail: unsplash("photo-1553877522-43269d4ea984"),
  },
  {
    title: "Collaboration",
    link: "https://unsplash.com",
    thumbnail: unsplash("photo-1522071820081-009f0129c71c"),
  },
  {
    title: "Roadmaps",
    link: "https://unsplash.com",
    thumbnail: unsplash("photo-1557804506-669a67965ba0"),
  },
  {
    title: "Performance",
    link: "https://unsplash.com",
    thumbnail: unsplash("photo-1518770660439-4636190af475"),
  },
  {
    title: "Security",
    link: "https://unsplash.com",
    thumbnail: unsplash("photo-1563013544-824ae1b704d3"),
  },
  {
    title: "Automation",
    link: "https://unsplash.com",
    thumbnail: unsplash("photo-1526378722484-cc5caa7a5e87"),
  },
  {
    title: "Build & Ship",
    link: "https://unsplash.com",
    thumbnail: unsplash("photo-1581091215367-59ab6b6b0f5b"),
  },
  {
    title: "Scale",
    link: "https://unsplash.com",
    thumbnail: unsplash("photo-1551033406-611cf9a28f67"),
  },
];

export function HeroParallaxDemo() {
  return (
    <section className="relative">
      <div className="relative w-full">
        <HeroParallax products={products} />
      </div>
    </section>
  );
}
