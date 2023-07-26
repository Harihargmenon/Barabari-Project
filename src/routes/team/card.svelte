<script>
    import { marked } from "marked";
    export let //
        minimal = false,
        color = "purple",
        index = 0,
        person;

    let //
        hold,
        current = false;
    const flip = ({ target }) => {
        if (minimal) return 0;
        if (target.classList.contains("x")) current = false;
        else current = true;

        if (current) {
            hold.classList.remove("p-rel");
            hold.classList.add("p-fix");
        } else {
            hold.classList.remove("p-fix");
            hold.classList.add("p-rel");
        }
    };

    const getBg = () =>
        index % 2 === 0 ? "#fff" : color === "purple" ? "#eef" : "#ffe";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    class="p20 tc f-col p-rel person ptr flow-x-h flow-y-s z-0"
    class:active={current}
    bind:this={hold}
    on:click={flip}
    style={`--col:var(--${color}-rgb);--bg:${getBg()};`}
>
    <img class="mx-a" src={person.img} alt={person.name} />
    <div class="mx-a body flow-y-h">
        <div class="fw7 p10 name">{person.name}</div>
        <div class="fw4 desc">{person.desc}</div>
        <p class:tc={current} class="fw4 caps">{person.caps}</p>
        {#if current && !minimal}
            <p class="fade-up tj w-100 flow-y-s" style="line-height: 2em;">
                {@html marked.parse(person?.md || "")}
            </p>
        {/if}
    </div>
    {#if current}
        <div class="p-abs tc rx20 x">&#x2715;</div>
    {/if}
</div>

<style lang="scss">
    .x {
        height: 44px;
        width: 44px;
        line-height: 44px;
        font-size: 36px;

        top: 2rem;
        right: 2rem;
        background: #8880;
        will-change: background;
        transition: background 0.2s ease;
        &:hover {
            background: #8884;
        }
    }
    .person {
        aspect-ratio: 1 !important;
        --sz: 33%;
        width: var(--sz);
        background: var(--bg);
        will-change: transform;
        transition: transform 0.2s ease;
        transform: scale(1);
        .desc,
        .name,
        img,
        .caps {
            pointer-events: none;
        }
        .body {
            max-width: 991px;
        }
        img {
            background: rgba(var(--col), 0.66);
            height: 150px;
            width: 150px;
            object-position: center center;
            object-fit: contain;
            border-radius: 100px;
            margin-bottom: 10px;

            will-change: transform;
            transition: transform 0.2s ease;
            transform: scale(1);
        }
        &:hover {
            transform: scale(1.01);
            img {
                transform: scale(1.1);
            }
        }
        .desc {
            color: #666;
        }
    }
    .active {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100vh;
        width: 100vw;
        z-index: 100;
        padding-top: 80px !important;
        &:hover {
            transform: none;
        }
    }
    @media (max-width: 991px) {
        .person {
            --sz: 50%;
        }
    }
    @media (max-width: 600px) {
        .person {
            --sz: 100%;
        }
    }
</style>
