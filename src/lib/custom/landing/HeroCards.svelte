<script>
    import {Button} from "$lib/components/ui/button";
    import {Card, CardContent} from "$lib/components/ui/card";
    import {ArrowBigDownDash} from "lucide-svelte";
    import {downloadAndroidAPK} from "$utils/download.js";
    const phoneUrl = new URL('$assets/phone.jpeg', import.meta.url);
</script>

<div class="hidden ml-30 xl:ml-50 2xl:ml-60 lg:flex flex-col flex-1 place-items-center gap-y-4">
    <Card class="drop-shadow-xl shadow-black/10 dark:shadow-white/10 ">
        <CardContent class="p-2.5">
            <img
                src={phoneUrl}
                alt=""
                class="rounded-md md:w-64 2xl:w-72 p-0"
             />
        </CardContent>
    </Card>
    <Button class="w-32" on:click={downloadAndroidAPK}>
        <ArrowBigDownDash size={24} class="m-0" />
        <span class="ml-1 mr-1">Alpha APK</span>
       </Button>
</div>
