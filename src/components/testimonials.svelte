<script>
  export let data = [];

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

<!-- Accordion.svelte -->
<article class="f mx-a" on:click={toggleSection}>
  {#each data as section, index}
    <div
      class="item p-rel"
      id={index}
      class:active={active === index}
      style={getCSS(index)}
    >
      <div class="grad w-100 h-100">
        <div class="f-col p10 h-100 tc content j-bw">
          <div>&nbsp;</div>
          <div>
            <h3 style="text-transform:uppercase">{section.title}</h3>
            {#if active === index}
              <p class="fade-up o-0" style="--delay:0.1s;color:#888;">
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
  .grad {
    background-image: linear-gradient(to top, #000f, #000a, #0000);
  }
  .item {
    min-height: 400px;
    flex: 1;
    transition: flex 0.2s ease-in-out;
    & > * {
      pointer-events: none;
    }
    &.active {
      flex: 3;
    }
  }

  .icon {
    bottom: 5px;
    right: 5px;
    height: auto;
    width: 100px;
    z-index: 10;
  }

  .content p {
    min-height: 5em;
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
