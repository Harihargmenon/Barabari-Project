<script>
    import Background from "../../../static/images/landing2.jpg?w=1200&h=925&fit=cover&webp";
</script>

<section id="landing" class="p-rel">
    <img
        src={Background}
        alt=""
        class="p-abs flow-x-h"
        style="height: 100vh;width:100vw;"
    />
    <div id="bio" class="w-100 tc p-abs fade-down">
        <div
            class="tl rx2"
            style="max-width:min(600px, 50%);border-left: 3px solid var(--yellow); padding-left: 20px;background: #0008;"
        >
            We are a Non-Profit working to reduce inequality via Tech-Education.
            We run two programs; 1:1 Tech Mentorship to help candidates get jobs
            and Tech Empowerment courses for school students
        </div>
    </div>
    <div class="p-abs f w-100 tc fade-up" style="bottom: 0;left:0;--delay:6s;">
        <a href="/volunteer" class="bg-222">
            Volunteer <br /> <span>Help Us Out</span>
        </a>
        <a href="/candidate" class="bg-fc3">
            Candidate <br /> <span>Level Up Now!</span>
        </a>
        <a href="/mentor" class="bg-222">
            Mentor <br /> <span>Help a Candidate</span>
        </a>
    </div>
</section>

<style lang="scss">
    a {
        display: block;
        padding: 20px 0;
        cursor: pointer;
        width: 33.33%;
        font-size: 2rem;
        font-weight: 600;
        transform: translateY(0);
        transition: all 0.2s ease;
        span {
            font-weight: 200;
            font-size: 0.75em;
        }
        &:hover {
            transform: translateY(-5px);
            opacity: 0.66;
        }
    }
    #bio {
        top: 20%;
        left: 10%;
        width: max(90%, 600px);
        --delay: 6s;
        font-size: 2rem;
        color: #fff;
    }

    @media (max-width: 600px) {
        #bio {
            font-size: 1rem;
            left: 20px;
        }
        a {
            font-size: 1.25rem;
        }
    }
</style>
