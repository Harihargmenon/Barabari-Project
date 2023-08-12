<script>
    import { page } from "$app/stores";

    import Nav from "./home/nav.svelte";
    import Landing from "./landing.svelte";

    const social = Object.freeze([
        {
            name: "GMail",
            icon: "/icons/gmail.svg",
            href: "mailto:thebarabariproject@gmail.com",
        },
        {
            name: "Instagram",
            icon: "/icons/insta.svg",
            href: "https://www.instagram.com/thebarabariproject/",
        },
        {
            name: "Twitter",
            icon: "/icons/twitter.svg",
            href: "https://twitter.com/BarabariProject",
        },
        {
            name: "LinkedIn",
            icon: "/icons/lin.svg",
            href: "https://www.linkedin.com/company/the-barabari-project/",
        },
    ]);
</script>

<main class="app p-rel flow-x-h">
    <Nav />
    <style>
        section {
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            width: 100vw;
            min-height: 100vh;
        }
        section:not(:first-of-type) {
            overflow: hidden;
        }
        .arrow {
            transform: translateX(-7px) scale(1);
            animation: 1.5s wobble ease infinite;
            background: #fff;
            max-height: 1.42em;
            color: var(--purple);
            padding: 2px 12px;
            border: 1px solid #fff;
            cursor: pointer;
            transition: transform 0.15s ease-in-out;
        }
        .arrow:hover {
            transform: translateX(-7px) scale(1.1);
            border: 1px solid var(--purple);
            color: var(--purple);
        }
        @media (prefers-reduced-motion) {
            .arrow {
                animation: none;
            }
        }
    </style>

    {#if $page.url.pathname === "/"}
        <div class="p-abs hero fade-right" style="z-index: 1;">
            <Landing />
        </div>
    {/if}
    <div id="content" style="z-index: 1;">
        <slot />
    </div>

    <footer class="p10 w-100 tc bg-fc3">
        <div class="mx-a" style="max-width: 300px;">
            <div class="fw4" style="font-size:2rem;">The Barabari Project</div>
            <div class="p10" style="font-size:1.1em">
                <i>Universal Access To Quality Jobs</i>
            </div>
            <div class="f j-ar">
                {#each social as soc}
                    <a href={soc.href} class="p5">
                        <img
                            class="rx5 icon"
                            height="36px"
                            width="36px"
                            src={soc.icon}
                            alt={soc.name}
                        />
                    </a>
                {/each}
            </div>
        </div>
    </footer>
</main>

<style>
    footer {
        width: calc(100% - 20px);
        font-size: 0.8em;
    }
    #content {
        scroll-behavior: smooth;
    }

    @keyframes hero {
        0% {
            transform: translateX(0);
            opacity: 1;
        }
        99% {
            transform: translateX(50px);
            opacity: 0;
        }
        100% {
            transform: translateX(50px);
            opacity: 0;
            display: none;
        }
    }
    .icon {
        object-fit: contain;
    }
    .hero {
        pointer-events: none;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        background: #222;

        opacity: 1;
        animation: 0.5s hero ease forwards;
        animation-delay: 2.5s;
    }
</style>
