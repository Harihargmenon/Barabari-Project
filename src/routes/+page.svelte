<script>
    import { onMount } from "svelte";
    import Meta from "../components/meta.svelte";
    import Landing from "./home/landing.svelte";
    import Papa from "papaparse";
    import BBS from "bbs";
    import Testimonials from "../components/testimonials.svelte";

    let innerWidth;

    const base = BBS.i1.none("");
    $: stats = [
        {
            name: "Across States",
            count: 4,
            icon: base + "/fas:graduation-cap",
        },
    ];

    const partners = [
        ["Ohoq Foundation", "/images/partners/hoq.png"],
        ["Sāक्षartā Foundation", "/images/partners/saksharta.png"],
    ];

    const getStats = async () => {
        const sheet =
            "https://docs.google.com/spreadsheets/d/1zWC5x7sAPFKI0ggBy9JErXpHk-F0IMzPI68zPqb70nw/gviz/tq?tqx=out:csv&sheet=Overall%20Data";

        Papa.parse(sheet, {
            download: true,
            skipEmptyLines: true,
            header: true,
            complete: function (results) {
                let localStats = [];

                for (let i = 0; i < results.data.length; i++) {
                    const e = results.data[i];
                    localStats.push({
                        name: e.heading,
                        count: e.Total,
                        icon: e.icon,
                    });
                }
                stats = localStats;
            },
            error: function (err) {
                console.log(err);
                stats = [
                    { name: "Across States", count: 4 },
                    { name: "Candidates in Training", count: 33 },
                    { name: "Candidates Placed", count: 10 },
                ];
            },
        });
    };

    onMount(getStats);
</script>

<svelte:window bind:innerWidth />

<svelte:head>
    <Meta title="Home" />
</svelte:head>

<Landing />

<div class="p20" style="background: #eee;">
    <!-- <h1 class="tc" style="font-size: 2em;">IMPACT</h1> -->
    <div class="f mx-a j-ar fw" style="max-width: 1000px;">
        {#each stats as stat}
            <div class="f">
                <div class="f-col tc stat m10">
                    <div class="ctr fw7">{stat.count}</div>
                    <div class="name fw4">{stat.name}</div>
                </div>
            </div>
        {/each}
    </div>
</div>
<article id="about" class="w-100 tc p-rel f-col j-ar bg-222">
    <Testimonials
        data={[
            {
                title: "1:1 Tech Mentorship",
                content:
                    "This program builds a strong tech foundation for school students (8th and above) from underprivileged communities. We run courses that help them understand the basics of computers and internet tools and develop an understanding of programming with hands-on projects. The objective is to get candidates comfortable and confident about using tech to uplift their lives",
                icon: "/images/home/mentorship.jpg",
            },
            {
                title: "Tech Empowerment Program",
                content:
                    "This program is for candidates from college 1st and above. We connect candidates with mentors from Industry; these mentors help to upskill candidates via personalized mentorship sessions on everything from preparation to recruitment. The objective is to provide them access to top tech jobs currently accessible to only tier-1/tier-2 universities",
                icon: "/images/home/empowerment.jpg",
            },
        ]}
    />
</article>

<div class="p20 tc" style="background:#eee;">
    <h2>Partners</h2>
    <div class="f mx-a j-ar fw" style="max-width: 1000px;">
        {#each partners as partner}
            <div class="stat tc m10 part">
                <img src={partner[1]} alt={partner[0]} />
                <div class="name fw7">{partner[0]}</div>
            </div>
        {/each}
    </div>
</div>

<!-- <Social /> -->
<style lang="scss">
    article {
        height: 50vh;
    }
    @media (max-width: 768px) {
        article {
            height: 100vh;
        }
    }
    .part img {
        width: 150px;
        height: 150px;
        object-fit: contain;
    }
    .stat {
        padding: 30px 0;
        width: 250px;
        .ctr {
            font-size: 3.75rem;
        }
        .name {
            text-transform: uppercase;
        }
    }
</style>
