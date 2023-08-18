<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<div class="p20">
  <article class="blur-fff8 rpm-10 mx-a" style="max-width:991px;">
    <p><br /></p>
    <header class="d-b" style="margin: 10px 0;">
      <h1 class="m0">{data.post.title}</h1>
      <p>{data.post.desc}</p>
    </header>
    <hr />

    {#if data.post.image}
      {@const img = data.post.image}
      <img class="hero" src="/images/set/{img}" alt={data.post.caption} />
    {/if}

    <!-- render the post -->
    <svelte:component this={data.component} />
  </article>
</div>

<style>
  .blur-fff8 {
    overflow: hidden;
    word-wrap: break-word;
    width: calc(min(70ch, 100%) - 40px);
  }
  @media (max-width: 600px) {
    .rpm-10 {
      padding: 5px;
      margin: 0;
    }
    .blur-fff8 {
      width: calc(100% - 10px);
    }
  }
</style>
