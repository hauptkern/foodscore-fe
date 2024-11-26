<script>
    import {Button} from '$lib/components/ui/button';
    import {ArrowBigDownDash} from 'lucide-svelte';
    import {downloadAndroidAPK} from "$utils/download.js";
</script>

<div class="flex flex-col items-center p-4 text-center sm:visible md:hidden mt-10">
    <p class="mb-4 text-sm">
        Barkodu tarat, sağlıklı seçimler yap!
    </p>
    <Button class="w-40" on:click={downloadAndroidAPK}>
        <ArrowBigDownDash size={24} class="m-0" />
        <span class="ml-1.5 mr-1.5">Alpha APK</span>
    </Button>
</div>
