import Link from "next/link";
import type { BlogPost } from "@/data/types";
import { Badge } from "@/components/ui/badge";
import { formatTrDate } from "@/lib/utils";

/**
 * Anasayfa ve şehir hub'larında kullanılan blog yazı kartı.
 */
export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-xl border border-zinc-200 bg-white p-5 transition-colors hover:border-zinc-300 hover:shadow-sm"
    >
      <div className="flex items-center gap-2 text-xs text-zinc-500">
        <span aria-hidden>📝</span>
        <span>Blog</span>
        <span aria-hidden>·</span>
        <span>{formatTrDate(post.publishedAt)}</span>
      </div>
      <h3 className="mt-2 text-base font-semibold leading-snug text-zinc-900 group-hover:text-sky-700">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-600">
        {post.excerpt}
      </p>
      {post.medicalReviewerName ? (
        <div className="mt-3">
          <Badge variant="verified">✓ Tıbbi inceleyici onaylı</Badge>
        </div>
      ) : null}
    </Link>
  );
}
