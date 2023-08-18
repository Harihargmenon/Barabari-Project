<script>
  import Layout from "$layout/primary.svelte";

  export let data;
</script>

<Layout title="Find out more!">
  <section class="mx-a w-100" slot="max">
    {#each data.posts as p}
      <a class="d-b" href="/resources/{p.slug}">
        <h3>{p.title}</h3>
        <p style="margin-bottom: 0;">{p.desc}</p>
      </a>
    {/each}
  </section>
</Layout>

<style>
  section {
    padding-top: 10px;
    max-width: min(100%, 600px);
  }
  a {
    color: #fff;
  }
  h3 {
    padding: 0;
    margin: 0 0 7px 0;
  }
</style>
