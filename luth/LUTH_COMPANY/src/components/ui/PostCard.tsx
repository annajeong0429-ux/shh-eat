import Link from "next/link";
import type { Post } from "@/lib/types";

type PostCardProps = {
  post: Post;
  href?: string;
};

export function PostCard({ post, href }: PostCardProps) {
  const linkHref = href ?? `/${post.category}/${post.slug}`;

  return (
    <Link
      href={linkHref}
      className="group flex min-h-[170px] flex-col rounded-[18px] border border-gray-line bg-gray-card p-6 transition-colors hover:border-gray-text/50"
    >
      <span className="mb-auto text-xs font-semibold text-gray-text">
        {post.categoryLabel}
      </span>
      <h3 className="my-5 text-lg font-semibold leading-snug tracking-[-0.01em] text-foreground group-hover:text-gray-text">
        {post.title}
      </h3>
      <time className="text-xs text-gray-text" dateTime={post.publishedAt}>
        {post.publishedAt.replace(/-/g, ".")}
      </time>
    </Link>
  );
}
