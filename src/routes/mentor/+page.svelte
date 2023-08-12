<script>
    import Meta from "../../components/meta.svelte";
    import Layout from "../../layout/primary.svelte";
    import Background from "../../../static/images/hero/mentor.jpg?w=1080&h=610&fit=cover&webp";
    import Testimonials from "../../components/testimonials.svelte";
    import { onMount } from "svelte";

    let demo = false;
    onMount(() => {
        const url = new URL(window.location.href);
        if (
            url.searchParams.get("demo") === "true" ||
            url.hostname === "localhost"
        ) {
            demo = true;
        }
    });

    let monials = [
        {
            title: "Section 1",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate, quibusdam voluptatum, voluptatibus, quos dolorum",
            icon: "https://picsum.photos/900/900",
        },
        {
            title: "Section 2",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate, quibusdam voluptatum, voluptatibus, quos dolorum",
            icon: "https://picsum.photos/900/901",
        },
        {
            title: "Section 3",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate, quibusdam voluptatum, voluptatibus, quos dolorum",
            icon: "https://picsum.photos/900/902",
        },
        {
            title: "Section 4",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate, quibusdam voluptatum, voluptatibus, quos dolorum",
            icon: "https://picsum.photos/900/903",
        },
    ];
</script>

<svelte:head>
    <Meta title="Become a Mentor" />
</svelte:head>

<Layout title="Become a Mentor!">
    <div slot="desc">
        <span class="desktop-only">
            The Barabari Project is a non-profit working to provide quality
            training and mentorship to candidates from low-income categories,
            rural backgrounds, underprivileged caste sections, and
            underrepresented gender backgrounds.
            <br /><br />
        </span>
        Come join us as a
        <b> mentor, doubt solver or technical content curator</b> and positively
        impact the lives of thousands of underprivileged candidates. Find all details
        in the form below
    </div>

    <main slot="max">
        <div
            class="hero f-col p-rel j-ct p-rel h-100"
            style="overflow: hidden;"
        >
            <img
                src={Background}
                alt="candidate"
                class="p-abs w-100 h-100"
                style="z-index:-1000;filter:blur(5px);"
            />
            <a
                href="https://docs.google.com/forms/d/1utKmc4y1SJWNH0rzQSlTBcItT6IBiHkeb6Ivz5u3mKo/"
                target="_blank"
                rel="noreferrer"
                class="blur-16 fw4 CTA tc m20 p20 p-rel f j-ar"
            >
                <div style="align-self:center;">Apply Here!</div>
                <svg viewBox="0 0 32 32" height="48">
                    <path d="M11 29 24 16 11 3" />
                </svg>
            </a>
            <a
                href="https://docs.google.com/document/d/1SGicA4CjgESXWGYP1o6YQkI4Z0aOvNrxTyLvg_abKL8/"
                target="_blank"
                rel="noreferrer"
                class="blur-16 fw4 CTA tc m20 p20 p-rel f j-ar"
            >
                <div style="align-self:center;">Read More!</div>
                <svg viewBox="0 0 32 32" height="48">
                    <path d="M11 29 24 16 11 3" />
                </svg>
            </a>
        </div>
        {#if demo === true}
            <Testimonials data={monials} />
        {/if}
    </main>
</Layout>

<style lang="scss">
    .hero {
        height: 50vh;
    }
    @media (max-width: 768px) {
        .hero {
            height: 90vh;
        }
    }
    svg {
        width: 32px;
        height: 32px;
        fill: none;
        stroke: currentcolor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
    }
    .CTA {
        width: 33.33%;
        font-size: 2.25rem;
        line-height: 1em;
    }
    @media (max-width: 768px) {
        .CTA {
            width: 75%;
        }
    }
    a {
        left: 10%;
        max-width: 100%;
        text-decoration: none;
        color: #000;
        transition: 0.2s box-shadow ease-in-out;
        &:hover {
            // light soft white box shadow
            box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
        }
    }
    @media (max-width: 768px) {
        a {
            left: 2px;
        }
    }
</style>
