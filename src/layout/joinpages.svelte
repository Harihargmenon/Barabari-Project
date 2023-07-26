<script>
    export let //
        title = "Title!";
</script>

<div class="w-100">
    <div class="w-100 tc p-rel bg-222">
        <p class="w-100 mx-a">
            <slot name="desc" />
        </p>
    </div>
    <h1 class="m0 p20">{title}</h1>
    <div class="limit mx-a">
        <slot name="body" />
    </div>
    <div class="mx-a">
        <slot name="max" />
    </div>
</div>

<style>
    h1 {
        width: calc(100% - 40px);
        background: var(--yellow);
    }
    .limit {
        max-width: 1000px;
        overflow: hidden;
    }
    p {
        line-height: 2em;
        font-size: 1.2rem;
        color: #fff;
        max-width: 1000px;
        padding: 5rem 5px 4rem 5px;
    }
</style>
