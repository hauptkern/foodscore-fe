<script lang="ts">
    import MainNav from "$lib/custom/menubar/sub/MainNav.svelte";
    import Icon from "$lib/custom/brand/Icon.svelte"
    import {Badge} from "$lib/components/ui/badge";
</script>

<div class="flex flex-col">
    <div class="border-b">
        <div class="flex h-16 items-center px-4">
            <button
                    class="flex items-center text-base font-medium ml-1 md:ml-2 mr-2"
                    on:click={() => {document.location.href = "/";}}
                    aria-label="home">
                <Icon options="mr-2 mt-0.5 mb-0.5 w-5"/>
                BrandHolder
            </button>
            <MainNav class="mx-5 mt-0.5 md:mx-10" />
            <div class="ml-auto flex items-center space-x-4">
                <Badge class="ml-2 mr-1">Alpha</Badge>
            </div>
        </div>
    </div>
</div>
