import rss from "@astrojs/rss";
import { SITE } from "../config";
import { getWritingPosts } from "../utils/content";

export async function GET(context: { site?: URL }) {
  const posts = await getWritingPosts();

  return rss({
    title: `${SITE.title} — Writing`,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/writing/${post.id}/`,
      categories: post.data.tags,
    })),
  });
}
