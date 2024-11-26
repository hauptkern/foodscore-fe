<script>
    import {onMount} from "svelte";
    import NutriScore from "$lib/custom/nutri/NutriScore.svelte";
    import ProductInfo from "$lib/custom/product/ProductInfo.svelte";
    import {Card} from "$lib/components/ui/card";
    import {Jumper} from "svelte-loading-spinners";
    import {fetchData} from "$utils/api";

    let scannedProducts = [];
    let selectedProduct = null;
    let dialogOpen = false;
    let loading = false;
    let error = false;
    let blank = false;


    function truncateText(text, maxLength = 35) {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + "...";
        }
        return text;
    }

    function openProductInfo(product) {
        selectedProduct = product;
        dialogOpen = true;
    }

    async function loadLastScanned() {
        loading = true;
        const { data, error: fetchError } = await fetchData('/query/last');
        if (fetchError) {
            error = true;
        } else {
            scannedProducts = data.results || [];
            blank = scannedProducts.length === 0;
        }
        loading = false;
    }

    onMount(() => {
        loadLastScanned();
    });
</script>

{#if !error && !blank}
    {#if loading}
        <span class="grid place-items-center mb-10 mt-16">
            <Jumper size="60" color="#80c522" unit="px" duration="1s" />
        </span>
    {:else}
        <section id="sponsors" class="w-screen">
            <h2 class="text-center text-md lg:text-xl font-bold mb-10 mt-16 text-primary">
                Son Tarananlar
            </h2>
            <div class="marquee-wrapper">
                {#if scannedProducts.length > 0}
                    <div class="marquee">
                        <div class="marquee-group">
                            {#each scannedProducts as product (product.barcode)}
                                <div
                                        class="marquee-item cursor-pointer"
                                        on:click={() => openProductInfo(product)}
                                        on:keydown={(e) => e.key === 'Enter' && openProductInfo(product)}
                                        role="button"
                                        tabindex="0"
                                >
                                    <Card class="shadow-md rounded-lg h-full flex flex-col justify-between">
                                        <div class="shadow-md rounded-lg p-3 flex items-center space-x-4">
                                            <div class="flex-shrink-0 w-32 h-32">
                                                <img
                                                        src={"data:image/png;base64," + product.img}
                                                        alt={product.productName}
                                                        class="w-full h-full object-fill rounded-lg"
                                                />
                                            </div>

                                            <div class="flex flex-col justify-center">
                                                <p class="font-semibold text-sm line-clamp-1 h-10">
                                                    {truncateText(product.productName)}
                                                </p>
                                                <div class="mt-2">
                                                    <NutriScore letter={product.nutriScore}/>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            {/each}
                        </div>
                        <div class="marquee-group" aria-hidden="true">
                            {#each scannedProducts as product (product.barcode)}
                                <div
                                        class="marquee-item cursor-pointer"
                                        on:click={() => openProductInfo(product)}
                                        on:keydown={(e) => e.key === 'Enter' && openProductInfo(product)}
                                        role="button"
                                        tabindex="0"
                                >
                                    <Card class="shadow-md rounded-lg h-full flex flex-col justify-between">
                                        <div class="shadow-md rounded-lg p-3 flex items-center space-x-4">
                                            <div class="flex-shrink-0 w-32 h-32">
                                                <img
                                                        src={"data:image/png;base64," + product.img}
                                                        alt={product.productName}
                                                        class="w-full h-full object-fill rounded-lg"
                                                        loading="lazy"
                                                />
                                            </div>

                                            <div class="flex flex-col justify-center">
                                                <p class="font-semibold text-sm line-clamp-1 h-10">
                                                    {truncateText(product.productName)}
                                                </p>
                                                <div class="mt-2">
                                                    <NutriScore letter={product.nutriScore}/>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            {/each}
                        </div>
                    </div>
                {/if}

                {#if dialogOpen && selectedProduct}
                    <ProductInfo product={selectedProduct} bind:dialogOpen={dialogOpen}/>
                {/if}
            </div>
        </section>
    {/if}
{/if}

<style>
    .marquee-wrapper {
        position: relative;
        width: 100%;
        overflow: hidden;
        --gap: 2rem;
        mask: linear-gradient(
                90deg,
                transparent,
                black 20%,
                black 80%,
                transparent
        );
        -webkit-mask: linear-gradient(
                90deg,
                transparent,
                black 20%,
                black 80%,
                transparent
        );
    }

    .marquee {
        display: flex;
        gap: var(--gap);
    }

    .marquee-group {
        flex-shrink: 0;
        display: flex;
        gap: var(--gap);
        min-width: 100%;
        animation: scroll 90s linear infinite;
    }

    @keyframes scroll {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(calc(-100% - var(--gap)));
        }
    }

    .marquee-wrapper:hover .marquee-group {
        animation-play-state: paused;
    }

    @media (prefers-reduced-motion: reduce) {
        .marquee-group {
            animation-duration: 80s;
        }
    }
</style>