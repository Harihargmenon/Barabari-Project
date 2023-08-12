<script>
    import Meta from "../../components/meta.svelte";
    import Layout from "../../layout/primary.svelte";
    import Background from "../../../static/images/hero/volunteer.jpg?w=1080&h=610&fit=cover&webp";
</script>

<svelte:head>
    <Meta title="Work with us!" />
</svelte:head>

<Layout title="Work with us!">
    <div slot="desc">
        The Barabari Project is a non-profit working to provide quality training
        and mentorship to candidates from low-income categories, rural
        backgrounds, underprivileged caste sections, and underrepresented gender
        backgrounds
    </div>

    <div
        class="hero f-col j-ct p-rel h-100"
        slot="max"
        style="overflow: hidden;"
    >
        <img
            src={Background}
            alt="candidate"
            class="p-abs w-100 h-100"
            style="z-index:-1000;filter:blur(5px)"
        />
        <a
            href="https://forms.gle/JHENNYSPp2SqDvEM9"
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
            href="https://docs.google.com/document/d/1yREF25R3NRavN3GQ7vBQMWeJ3yjUdn44vU-hmyH6U8o/
        "
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
    svg {
        width: 32px;
        height: 32px;
        fill: none;
        stroke: currentcolor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
    }
    a {
        left: 10%;
        max-width: 100%;
        text-decoration: none;
        color: #000;
        transition: 0.2s box-shadow ease-in-out;
        &:hover {
            // light soft white box shadow
            box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.25);
        }
    }
    @media (max-width: 768px) {
        a {
            left: 2px;
        }
    }
</style>
