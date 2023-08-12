<script>
  import { onMount } from "svelte";

  export let data;

  onMount(() => {
    console.log(data);
  });
  import Layout from "../../layout/primary.svelte";
</script>

<Layout title="Find out more!">Resources</Layout>

<section class="mx-a w-100">
  {#each data.posts as p}
    <!-- {"title":"Why so many people dislike Math?","desc":"Despite being the most universal possible language and the only known tools to understand the universe, Math is often disliked. Why?","date":1683570600000,"image":"","slug":"math-art"} -->
    <a class="f" href="/t/{p.slug}">
      <div>
        <h3>{p.title}</h3>
        <span class="dt">
          {new Date(p.date).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          })}
        </span>
        <p style="margin-bottom: 0;">{p.desc}</p>
      </div>
    </a>
  {/each}
</section>

<style>
  .q {
    margin-bottom: 7px;
  }
  section {
    padding-top: 10px;
    max-width: min(100%, 600px);
  }
  a,
  a:visited,
  a:active,
  a:hover {
    text-decoration: none;
    color: #000 !important;
    display: block;
  }
  img {
    height: 100px;
    width: 100px;
    object-fit: cover;
    object-position: center center;
    aspect-ratio: 1;
    margin-right: 10px;
  }
  h3 {
    padding: 0;
    margin: 0 0 7px 0;
  }
  .dt {
    font-size: 0.9em;
    color: #666;
  }
</style>
