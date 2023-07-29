<script>
  import { interpolate } from "$lib/ui";

  const sections = [
    {
      title: "Section 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate, quibusdam voluptatum, voluptatibus, quos dolorum",
      icon: "https://api.dicebear.com/6.x/bottts/png?seed=red",
    },
    {
      title: "Section 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate, quibusdam voluptatum, voluptatibus, quos dolorum",
      icon: "https://api.dicebear.com/6.x/bottts/png?seed=blue",
    },
    {
      title: "Section 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate, quibusdam voluptatum, voluptatibus, quos dolorum",
      icon: "https://api.dicebear.com/6.x/bottts/png?seed=green",
    },
    {
      title: "Section 4",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate, quibusdam voluptatum, voluptatibus, quos dolorum",
      icon: "https://api.dicebear.com/6.x/bottts/png?seed=alpha",
    },
  ];

  $: active = 0;
  const toggleSection = (e) => {
    const id = +e.target.id;
    console.log(id, e.target);
    if (!Number.isNaN(id) && id !== active) active = id;
  };

  const colors = interpolate("349", "a2F", sections.length);
  const getCSS = (index) => {
    let css = "";
    css += `background-color: #${colors[index]};`;
    css += `z-index: ${index};`;
    css += `color: #fff;`;

    return css;
  };
</script>

<!-- Accordion.svelte -->
<article class="f mx-a rx10" on:click={toggleSection}>
  {#each sections as section, index}
    <div
      class="item p-rel"
      id={index}
      class:active={active === index}
      style={getCSS(index)}
    >
      <div class="f-col p10 content">
        <h3>{section.title}</h3>
        {#if active === index}
          <p class="fade-left o-0" style="--delay:0.1s">{section.content}</p>
        {/if}
        <img src={section.icon} class="p-abs icon" alt="Mentor" />
      </div>
    </div>
  {/each}
</article>

<style lang="scss">
  .item {
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
    min-height: 6em;
  }

  @media (max-width: 768px) {
    article {
      flex-direction: column;
    }
  }
</style>
