<script lang="ts">
  export let src: string;
  export let fallback: string[] = [];
  export let alt: string;

  const filters = ["src", "onerror", "fallback", "alt", "class"];
  const getProps = (old, filter: string[] = []) => {
    const keys = Object.keys(old);
    const news = {};
    keys.forEach((k) => {
      if (!filter.includes(k)) news[k] = old[k];
    });

    if (fallback.length > 0) {
      news.fallback = JSON.stringify(fallback);
      news.attempt = 0;
      news.onerror = `(()=>{
        let fb = JSON.parse(this.getAttribute("fallback"));
        let att = this.getAttribute("attempt");

        if(att < fb.length) {
          this.setAttribute("src", fb[att]);
          this.setAttribute("attempt", ++att);
        } else {
          this.onerror = null;
        };
      })()`;
    }
    return news;
  };
</script>

<img
  {src}
  {alt}
  class={$$props.class || ""}
  {...getProps($$props, filters)}
  style=""
/>
