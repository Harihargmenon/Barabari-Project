<script>
    import { onMount } from "svelte";
    import Meta from "../components/meta.svelte";
    import Landing from "./home/landing.svelte";
    import Papa from "papaparse";
    const BBS = "https://bbs.barabariproject.org/i1";

    let innerWidth;

    $: stats = [
        {
            name: "Across States",
            count: 4,
            icon: BBS + "/fas:graduation-cap",
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
    <div class="f mx-a j-ar fwx" style="max-width: 1000px;">
        {#each stats as stat}
            <div class="f-col tc stat m10">
                <div class="ctr fw5">{stat.count}</div>
                <div class="name fw4">{stat.name}</div>
            </div>
        {/each}
    </div>
</div>
<article class="w-100 tc p-rel f-col j-ar bg-222">
    <div class="p10 m20">
        <svg class="ccd-icon tc p10" viewBox="0 0 512 512">
            <path
                d="M418.4 157.9c35.3-8.3 61.6-40 61.6-77.9c0-44.2-35.8-80-80-80c-43.4 0-78.7 34.5-80 77.5L136.2 151.1C121.7 136.8 101.9 128 80 128c-44.2 0-80 35.8-80 80s35.8 80 80 80c12.2 0 23.8-2.7 34.1-7.6L259.7 407.8c-2.4 7.6-3.7 15.8-3.7 24.2c0 44.2 35.8 80 80 80s80-35.8 80-80c0-27.7-14-52.1-35.4-66.4l37.8-207.7zM156.3 232.2c2.2-6.9 3.5-14.2 3.7-21.7l183.8-73.5c3.6 3.5 7.4 6.7 11.6 9.5L317.6 354.1c-5.5 1.3-10.8 3.1-15.8 5.5L156.3 232.2z"
            />
        </svg>
        <div class="ccd-text tc p10">
            <b>Mentorship Network:</b> Connecting industry professionals and underprivileged
            candidates
        </div>
    </div>
    <div class="p10 m20">
        <svg class="ccd-icon tc p10" viewBox="0 0 512 512">
            <path
                d="M352 96c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zM240 248V512l-48.4-24.2c-20.9-10.4-43.5-17-66.8-19.3l-96-9.6C12.5 457.2 0 443.5 0 427V224c0-17.7 14.3-32 32-32H62.3c63.6 0 125.6 19.6 177.7 56zm32 264V248c52.1-36.4 114.1-56 177.7-56H480c17.7 0 32 14.3 32 32V427c0 16.4-12.5 30.2-28.8 31.8l-96 9.6c-23.2 2.3-45.9 8.9-66.8 19.3L272 512z"
            />
        </svg>
        <div class="ccd-text tc p10">
            <b>Training Modules:</b> Customizable in regional languages
        </div>
    </div>
    <div class="p10 m20">
        <svg
            class="ccd-icon tc p10"
            viewBox="0 0 640 640"
            transform="scale(1.1)"
        >
            <path
                d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48V352h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM96 128H0V352c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V128zM48 352c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zM544 128V352c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V128H544zm64 208c0 8.8-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16z"
            />
        </svg>
        <div class="ccd-text tc p10">
            <b>Recruitment Channels:</b> Providing underprivileged candidates access
            to top company jobs
        </div>
    </div>
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
        height: 80vh;
    }
    @media screen and (max-width: 600px) {
        article {
            height: 100vh;
        }
    }
    .part {
        img {
            width: 150px;
            height: 150px;
            object-fit: contain;
        }
    }
    .stat {
        padding: 30px 0;
        width: 250px;
        .ctr {
            font-size: 3.5rem;
        }
        .name {
            text-transform: uppercase;
        }
    }
    .ccd {
        &-text {
            font-size: 22px;
            flex: 2;
            align-self: center;
            padding: 2px !important;
        }
        &-icon {
            flex: 1;
            --sz: 100px;
            width: var(--sz);
            height: var(--sz);
            filter: invert(100%);
        }
    }
    @media screen and (max-width: 600px) {
        .ccd {
            &-text {
                font-size: 18px;
            }
            &-icon {
                --sz: 80px;
            }
        }
    }
    @media screen and (max-width: 400px) {
        .ccd {
            &-text {
                font-size: 16px;
            }
            &-icon {
                --sz: 60px;
            }
        }
    }
</style>
