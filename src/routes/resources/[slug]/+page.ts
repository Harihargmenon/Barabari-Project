import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
  const c = await import(`../../../../content/${data.post.slug}/index.mdx`)


  return {
    post: data.post,
    component: c.default,
  };
};