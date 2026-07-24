import { getCollection, type CollectionEntry } from "astro:content";

export async function getWritingPosts(): Promise<CollectionEntry<"writing">[]> {
  const posts = await getCollection("writing", ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  );

  return posts.sort(
    (first, second) =>
      second.data.publishedAt.getTime() - first.data.publishedAt.getTime(),
  );
}

export async function getProjects(): Promise<CollectionEntry<"projects">[]> {
  const projects = await getCollection("projects");

  return projects.sort(
    (first, second) =>
      (second.data.publishedAt?.getTime() ?? 0) -
      (first.data.publishedAt?.getTime() ?? 0),
  );
}
