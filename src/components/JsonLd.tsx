import { locations, siteConfig } from "@/data/site";

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: siteConfig.name,
    description: siteConfig.description,
    url: "https://damjang.vercel.app",
    logo: "https://damjang.vercel.app/images/logo.png",
    image: "https://damjang.vercel.app/images/logo.png",
    sameAs: [
      locations[0].instagram,
      locations[1].instagram,
      locations[0].kakao,
    ],
    location: locations.map((loc) => ({
      "@type": "Place",
      name: `담장 클라이밍 ${loc.name}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.address,
        addressLocality: "서울",
        addressCountry: "KR",
      },
      telephone: loc.phone,
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "11:00",
          closes: "23:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "10:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "10:00",
          closes: "20:00",
        },
      ],
    })),
    priceRange: "₩20,000 - ₩690,000",
    sport: "클라이밍",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
