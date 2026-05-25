import type { BlogPost } from "./types";

/**
 * Blog yazıları. İlk parti agent tarafından üretilecek; bu dosya
 * şu an boş array ile başlar, agent çıktısı geldikçe doldurulur.
 */
export const blogPosts: BlogPost[] = [];

export function findBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
