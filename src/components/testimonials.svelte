<script>
  export let data = [];

  /*
  interface Data {
    title: string;
    content: string;
    icon: string;
  }*/

  $: active = 0;
  const toggleSection = (e) => {
    const id = +e.target.id;
    if (!Number.isNaN(id) && id !== active) active = id;
  };

  const getCSS = (index) => {
    let css =
      "background-size: cover;background-position: center center;background-repeat: no-repeat;";
    css += `background-image: url(${data[index].icon});`;
    css += `z-index: ${index};`;
    css += `color: #fff;`;

    return css;
  };
</script>

<article class="f mx-a h-100 w-100" on:click={toggleSection}>
  {#each data as section, index}
    <div
      class="item p-rel"
      id={index}
      class:active={active === index}
      style={getCSS(index)}
    >
      <div class="grad p-rel w-100 h-100">
        <div class="f-col p10 h-100 p-rel tc content j-bw">
          <div>&nbsp;</div>
          <div>
            <h3 style="text-transform:uppercase">{section.title}</h3>
            {#if active === index}
              <p class="fade-up o-0 p10 ctt-text">
                {section.content}
              </p>
            {/if}
          </div>
        </div>
      </div>
    </div>
  {/each}
</article>

<style lang="scss">
  .ctt-text {
    --delay: 0.1s;
    color: #888;
    max-width: min(100%, 768px);
    margin: 1em auto;
  }
  .grad {
    background-image: linear-gradient(to top, #000f, #000a, #0000);
  }
  .item {
    min-height: 400px;
    flex: 1;
    filter: grayscale(1);
    transition: flex 0.2s ease-in-out, filter 0.2s ease-in-out;
    & > * {
      pointer-events: none;
    }
    &.active {
      filter: grayscale(0);
      flex: 3;
    }
  }

  .content {
    bottom: 5em;
    p {
      min-height: 5em;
    }
  }

  @media (max-width: 768px) {
    article {
      flex-direction: column;
    }
    .item {
      min-height: unset;
    }
  }
</style>
