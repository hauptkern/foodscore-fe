<script>
    import {tweened} from "svelte/motion";
    import {cubicOut} from "svelte/easing";

    let activeIndex = 4;
    export let letter = "E";

    const scale = tweened(1, { duration: 300, easing: cubicOut });
    $: scale.set(activeIndex === -1 ? 1 : 1.2);

    const updateActiveLetter = () => {
        const letters = ["A", "B", "C", "D", "E"];
        activeIndex = letters.indexOf(letter);
        if (activeIndex === -1) activeIndex = 4;
    };

    const levels = [
        { letter: "A", activeColor: "#00CC00", inactiveColor: "#99E699" },
        { letter: "B", activeColor: "#AACC00", inactiveColor: "#CCE699" },
        { letter: "C", activeColor: "#FFCC00", inactiveColor: "#FFE699" },
        { letter: "D", activeColor: "#FF9900", inactiveColor: "#FFD699" },
        { letter: "E", activeColor: "#FF3300", inactiveColor: "#FFB399" }
    ];

   updateActiveLetter()

</script>

<div class="nutri-score">
    {#each levels as {letter, activeColor, inactiveColor}, i}
        <div
                class="box {i === activeIndex ? 'active' : ''}"
                style="background-color: {i === activeIndex ? activeColor : inactiveColor}; transform: scale({i === activeIndex ? $scale : 1})"
        >
            {letter}
        </div>
    {/each}
</div>

<style>
    .nutri-score {
        display: flex;
        align-items: center;
    }

    .box {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        color: white;
        font-weight: bold;
        font-size: 1.2em;
        transition: transform 0.3s, background-color 0.3s, font-size 0.3s;
    }

    .box:not(.active) {
        font-size: 1em;
    }

    .box.active {
        font-size: 1.4em;
        z-index: 40;
    }
</style>