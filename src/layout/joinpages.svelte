<script>
    export let //
        title = "Title!";
</script>

<div class="w-100">
    <header class="p5 tc p-rel bg-222 desc">
        <div class="w-100 desc">
            <slot name="desc" />
        </div>
    </header>
    <h1 class="m0 p20 bg-fc3">{title}</h1>
    <div class="limit mx-a">
        <slot name="body" />
    </div>
    <div class="mx-a">
        <slot name="max" />
    </div>
</div>

<style lang="scss">
    header {
        width: calc(100% - 10px);
        .desc {
            line-height: 2em;
            font-size: 1.2rem;
            color: #fff;
            max-width: 1000px;
            padding: 5rem 5px 4rem 5px;
            margin: 5px auto;
        }
    }
    h1 {
        width: calc(100% - 40px);
    }
    .limit {
        max-width: 1000px;
        overflow: hidden;
    }
</style>
