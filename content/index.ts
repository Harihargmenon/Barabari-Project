interface Post {
  title: string;
  slug: string;
  desc: string;
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

  if (meta.desc) {
    if (typeof meta.desc === 'string')
      meta.desc = meta.desc.slice(0, 280);
    else
      meta.desc = meta.desc.join(' ').slice(0, 280);
  }

  console.log(meta);

  md[i] = ({
    ...meta,
    slug: key.split('/').at(-2),
  })
};

export const posts: Post[] = md.filter(Boolean)
