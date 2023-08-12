<script>
    import Meta from "../../components/meta.svelte";
    import Layout from "../../layout/primary.svelte";
    import Background from "../../../static/images/hero/candidate.jpg?w=1080&h=610&fit=cover&webp";

    const fa = (name) =>
        `https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/${name}.svg`;

    const cells = [
        {
            title: "Our Process",
            desc: "We provide candidates with personalized 1-on-1 mentoring over a period of 6-8 months to help them gain expertise in their chosen field",
            icon: fa("gear"),
        },
        {
            title: "Mentors",
            desc: "Our mentorship community comprises IIT/BITS alumni and tech professionals from Google, Adobe, and Amazon",
            icon: fa("user"),
        },
        {
            title: "Mentorship Technologies",
            desc: "We help candidates build a basic to advanced understanding of DSA (Java/C++), Web Dev (React), and Data Analytics (SQL, Python, and Power BI)",
            icon: fa("book"),
        },
        {
            title: "Past Record",
            desc: "We have successfully mentored and created a job referral network for 25+ underprivileged candidates across 4 states",
            icon: fa("check"),
        },
    ];
</script>

<svelte:head>
    <Meta title="Get Free Mentorship" />
</svelte:head>

<Layout title="Recruit from Us!">
    <div slot="desc">
        <span class="desktop-only">
            At Barabari, we offer free tech mentorship to underprivileged
            candidates to help them live their lives with dignity and contribute
            to the workforce.
        </span>
        <div class="fw7">Help Us Help You!</div>
    </div>

    <div class="hero f fw w-100" slot="max">
        <div class="lhs f fw">
            {#each cells as cell}
                <div class="cell f-col tc j-ct">
                    <div class="tl f-col p20">
                        <img
                            class="rpm-5"
                            src={cell.icon}
                            alt=""
                            height="32"
                            width="32"
                            style="background: #fc38;"
                        />
                        <p>
                            <span class="fw7">
                                {cell.title}
                            </span> <br />
                            {cell.desc}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
        <div class="rhs p-rel">
            <img
                src={Background}
                alt=""
                class="w-100 p-abs z-0 h-100"
                style="top:0;left:0;"
            />
            <div
                class="clearfix w-100 h-100 f-col tc j-ct"
                style="top:0;left:0;background:#fff4;z-index:1"
            >
                <a
                    href="https://docs.google.com/document/d/1yREF25R3NRavN3GQ7vBQMWeJ3yjUdn44vU-hmyH6U8o/
        "
                    target="_blank"
                    rel="noreferrer"
                    class="blur-8 w-66 fw4 tc mx-a p20 p-rel f j-ar"
                    style="font-size: 1.5em; background:#fff4;"
                >
                    <div style="align-self:center;">Get In Touch!</div>
                    <svg viewBox="0 0 32 32" height="48">
                        <path d="M11 29 24 16 11 3" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</Layout>

<style lang="scss">
    svg {
        width: 32px;
        height: 32px;
        fill: none;
        stroke: currentcolor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
    }
    .lhs,
    .rhs {
        width: 50%;
        overflow: hidden;
        height: auto;
    }
    .hero {
        min-height: 50vh;
    }
    @media (max-width: 768px) {
        .lhs,
        .rhs {
            width: 100%;
        }
        .hero {
            min-height: 90vh;
        }
    }

    .lhs img {
        object-fit: contain;
    }
    .rhs img {
        object-fit: cover;
    }
    .cell {
        width: 50% !important;
        word-wrap: break-word;
    }
    @media (max-width: 768px) {
        .cell {
            min-width: 100%;
        }
    }
</style>
