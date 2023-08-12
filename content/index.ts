interface Post {
  title: string;
  slug: string;
  draft: Boolean;
}

let md: any = Object.entries(import.meta.glob<{
  metadata: Post;
  default: unknown;
}>('./**/*.mdx', { eager: true }));

let meta = {};
for (let i = 0; i < md.length; i++) {
  const [key, value] = md[i];
  meta = value.metadata;

  if (meta.draft) {
    md[i] = null;
    continue;
  };

  md[i] = ({
    ...meta,
    slug: key.split('/').at(-2),
  })
};

export const posts: Post[] = md.filter(Boolean)
