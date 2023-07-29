<script>
  import { onMount } from "svelte";

  const sections = [
    {
      id: 1,
      title: "Section 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate, quibusdam voluptatum, voluptatibus, quos dolorum",
    },
    {
      id: 2,
      title: "Section 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate, quibusdam voluptatum, voluptatibus, quos dolorum",
    },
    {
      id: 3,
      title: "Section 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate, quibusdam voluptatum, voluptatibus, quos dolorum",
    },
    {
      id: 4,
      title: "Section 4",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate, quibusdam voluptatum, voluptatibus, quos dolorum",
    },
  ];

  let activeSection = 1;
  function toggleSection(id) {
    activeSection = activeSection === id ? null : id;
  }

  onMount(() => {
    console.log(sections);
  });
</script>

<!-- Accordion.svelte -->
<div class="accordion">
  {#each sections as section}
    <div class="accordion-item">
      <input
        type="radio"
        id={`section-${section.id}`}
        name="accordion"
        group={activeSection}
        value={section.id}
      />
      <label
        for={`section-${section.id}`}
        on:click={() => toggleSection(section.id)}
      >
        {section.title}
      </label>
      {#if activeSection === section.id}
        <div class="content">
          <p>{section.content}</p>
        </div>
      {/if}
    </div>
  {/each}
</div>

<style>
  /* Accordion.svelte */

  /* Add your horizontal accordion styles here */

  @media (max-width: 600px) {
    /* Switch to vertical accordion layout on mobile */
    .accordion {
      display: flex;
      flex-direction: column;
    }

    /* Style for each accordion item on mobile */
    .accordion-item {
      margin-bottom: 10px;
    }

    /* Hide the radio buttons on mobile */
    input[type="radio"] {
      display: none;
    }

    /* Style the labels for mobile */
    label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      background-color: #f0f0f0;
      border-radius: 5px;
      cursor: pointer;
    }

    /* Show the content when the radio button is checked */
    input[type="radio"]:checked + label + .content {
      display: block;
    }

    /* Content style on mobile */
    .content {
      display: none;
      padding: 10px;
      background-color: #f9f9f9;
      border-radius: 5px;
    }
  }
</style>
