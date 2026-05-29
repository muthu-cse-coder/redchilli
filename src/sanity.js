import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "lse4qpjh",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-05-22",
});

// 🔥 THIS PART IS IMPORTANT
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);