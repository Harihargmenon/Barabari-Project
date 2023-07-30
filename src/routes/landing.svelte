<script>
</script>

<div class="cont bg-222 w-100 h-100 fade tc p-rel">
    <div id="hi" class="fade-right">
        <span>Hi! <span class="d-ib" id="wave">👋</span></span>,
        <span class="fade-right o-0" style="--delay: 1s;">we are</span>
    </div>
    <img id="logo" class="o-0 p-abs" src="/icons/barabari.png" alt="logo" />
</div>

<style lang="scss">
    .cont {
        margin-top: 20px;
    }
    @keyframes wave {
        0% {
            transform: rotate(0deg);
        }
        10% {
            transform: rotate(14deg);
        }
        20% {
            transform: rotate(-8deg);
        }
        30% {
            transform: rotate(14deg);
        }
        40% {
            transform: rotate(-4deg);
        }
        50% {
            transform: rotate(10deg);
        }
        60% {
            transform: rotate(0deg);
        } /* Reset for the last half to pause */
        100% {
            transform: rotate(0deg);
        }
    }
    #wave {
        font-size: 0.8em;
        animation: 2.5s wave infinite;
        transform-origin: 70% 70%;
    }
    @keyframes slideOut {
        0% {
            opacity: 1;
            transform: translate(-50%, -60%);
        }
        100% {
            opacity: 0;
            transform: translate(calc(-50% + 100px), -60%);
        }
    }
    #logo {
        top: 60%;
        left: 50%;
        transform: translate(-50%, -60%);
        height: 50vh;
        border-radius: 300px;

        animation: 0.2s fade 1s ease forwards, 0.5s slideOut 1.5s ease forwards;
    }
    #hi {
        color: var(--yellow);
        text-shadow: rgba(0, 0, 0, 0.2) 6px 6px 0px;
        padding-top: 20px;
        padding-left: 20px;
        font-size: 128px;
        text-align: left;
        width: auto;
        span {
            white-space: nowrap;
        }
    }
    @media (max-width: 600px) {
        #hi {
            font-size: 64px;
        }
    }
</style>
