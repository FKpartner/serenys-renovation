import type { MetadataRoute } from "next";
import { cities } from "@/data/cities";
import { services } from "@/data/services";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.serenys-renovation.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ["", "/contact", "/calculateur-travaux", "/guides"];
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const cityRoutes = cities.map((city) => `/renovation/${city.slug}`);
  const interventionRoutes = services.flatMap((service) =>
    cities.map((city) => `/intervention/${service.slug}/${city.slug}`)
  );

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...cityRoutes,
    ...interventionRoutes,
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
