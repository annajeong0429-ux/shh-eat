import Link from "next/link";
import type { Post } from "@/lib/types";

type KnowledgeRowProps = {
  post: Post;
  href?: string;
};

export function KnowledgeRow({ post, href }: KnowledgeRowProps) {
  const linkHref = href ?? `/knowledge`;

  return (
    <div className="flex items-center justify-between border-b border-gray-line px-1 py-[18px] first:border-t">
      <Link
        href={linkHref}
        className="text-base font-medium text-foreground hover:text-gray-text"
      >
        {post.title}
      </Link>
      <time
        className="ml-4 shrink-0 text-[12.5px] text-gray-text"
        dateTime={post.publishedAt}
      >
        {post.publishedAt.replace(/-/g, ".")}
      </time>
    </div>
  );
}
