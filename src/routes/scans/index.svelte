<script>
    import { scannedProducts } from "$lib/store/products";
    import { Card, CardHeader, CardTitle, CardContent } from "$lib/components/ui/card";
    import NutriScore from "$lib/custom/nutri/NutriScore.svelte";
    import ProductInfo from "$lib/custom/product/ProductInfo.svelte";
    import {Frown} from "lucide-svelte";

    let selectedProduct = null;
    let dialogOpen = false;

    function openProductInfo(product) {
        selectedProduct = product;
        dialogOpen = true;
    }
</script>

<section class="container py-20 md:pb-80">
    {#if $scannedProducts.length > 0}
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {#each $scannedProducts.reverse() as product (product.barcode)}
                <div
                        on:click={() => openProductInfo(product)}
                        on:keydown={(e) => e.key === 'Enter' && openProductInfo(product)}
                        role="button"
                        tabindex="0"
                >
                    <Card class="shadow-md rounded-lg cursor-pointer h-full flex flex-col justify-between">
                        <CardHeader class="h-auto">
                            <CardTitle class="text-center text-2xs truncate text-[clamp(1rem, 5vw, 1.25rem)]">{product.productName}</CardTitle>
                        </CardHeader>
                        <CardContent class="flex flex-col items-center text-center flex-grow">
                            <div class="w-48 h-48 mb-4 flex justify-center items-center">
                                <img
                                        src={"data:image/png;base64," + product.img}
                                        alt={product.productName}
                                        class="object-cover w-full h-full rounded-lg"
                                />
                            </div>
                            <div class="flex justify-center items-center mt-auto pt-2">
                                <NutriScore letter={product.nutriScore} />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            {/each}
        </div>
    {:else}
        <div class="flex flex-col h-[65vh] items-center justify-center">
            <Frown color="orange" size={64}/>
            <p class="font-bold mt-4">Taranmış ürün bulunamadı.</p>
        </div>
    {/if}

    {#if dialogOpen && selectedProduct}
        <ProductInfo product={selectedProduct} bind:dialogOpen={dialogOpen} />
    {/if}
</section>

