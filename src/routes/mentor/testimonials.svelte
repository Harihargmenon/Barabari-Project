<script>
  const sections = [
    {
      title: "Section 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate, quibusdam voluptatum, voluptatibus, quos dolorum",
    },
    {
      title: "Section 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate, quibusdam voluptatum, voluptatibus, quos dolorum",
    },
    {
      title: "Section 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate, quibusdam voluptatum, voluptatibus, quos dolorum",
    },
    {
      title: "Section 4",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate, quibusdam voluptatum, voluptatibus, quos dolorum",
    },
  ];

  $: active = 0;
  const toggleSection = (e) => {
    const id = +e.target.id;
    if (!Number.isNaN(id) && id !== active) active = id;
  };

  const colors = ["#f00", "#0f0", "#00f", "#ff0"];
  const getCSS = (index) => {
    let css = "";
    css += `background-color: ${colors[index]};`;
    css += `z-index: ${index};`;

    return css;
  };
</script>

<!-- Accordion.svelte -->
<div class="accordion f mx-a rx10" on:click={toggleSection}>
  {#each sections as section, index}
    <div
      class="item"
      id={index}
      class:active={active === index}
      style={getCSS(index)}
    >
      <div class="f-col p10">
        {index}
        {#if active === index}
          <h3>{section.title}</h3>
          <p>{section.content}</p>
        {:else}
          <h3>{section.title}</h3>
        {/if}
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  .item {
    flex: 1;
    & > * {
      pointer-events: none;
    }
  }

  .item.active {
    flex: 3;
  }
</style>
