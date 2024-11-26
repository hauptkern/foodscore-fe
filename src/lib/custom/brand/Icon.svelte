<script>
    import { Wheat } from "lucide-svelte";
    export let options = "";
    export let strokeColor = "#8ae439";
</script>

<Wheat id="icon" class={options} color={strokeColor}/>