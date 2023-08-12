import { posts } from "$content/index";

export async function load ( { } ) {
  console.log( "load", posts );
  return { posts };
}
