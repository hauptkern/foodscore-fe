<script>
    import {Button} from "$lib/components/ui/button";
    import HeroCards from "$lib/custom/landing/HeroCards.svelte";
    import ProductInfo from "$lib/custom/product/ProductInfo.svelte";
    import {scannedProducts} from "$lib/store/products.js";
    import {fetchData} from "$utils/api";

    let barcode = '';
    let product = null;
    let loading = false;
    let errorHRF = null;
    let dialogOpen = false;

    function handleBarcodeInput(event) {
        const input = event.target;
        let value = input.value.replace(/\D/g, '');
        if (value.length > 13) {
            value = value.slice(0, 13);
        }
        barcode = value;
    }

    async function searchProduct() {
        if (!barcode) return;
        if (barcode.length !== 13) {
            errorHRF = "Barkod 13 haneli olmalıdır";
            return;
        }
        loading = true;
        dialogOpen = false;
        errorHRF = null;

        try {
            const { data, error: fetchError } = await fetchData(`/barcode/${barcode}`);
            if (fetchError || !data.success) {
                errorHRF = fetchError ? "Hata Oluştu" : "Ürün Bulunamadı 😞";
                return;
            }
            product = {
                barcode: barcode,
                productName: data.productName,
                ingredients: data.ingredients,
                nutritionalValues: data.nutritionalValues,
                nutriScore: data.nutriScore,
                img: data.img,
                detective: data.detective
            };
            const existingProduct = $scannedProducts.find(p => p.barcode === barcode);
            if (!existingProduct) {
                scannedProducts.update(products => {
                    if (products.length >= 200) products.pop();
                    products.push(product);
                    return products;
                });
            }
            dialogOpen = true;
        } catch (err) {
            errorHRF = "Hata Oluştu";
        } finally {
            loading = false;
        }
    }
</script>

<section class="container grid lg:grid-cols-2 place-items-center md:pl-24 2xl:pl-14 2xl:py-16 gap-10 mt-8 2xl:mt-0">
    <div class="text-center lg:text-start space-y-6">
        <main class="text-5xl md:text-6xl font-bold">
            Ürünlerin
            <br>
            <h2 class="inline">
                <span class="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                    Besin Değerlerini
                </span>
                ve
                <br>
                <h1 class="inline">
                <span class="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
                    BrandHolder Puanını
                </span>
                </h1>
                öğrenin
            </h2>
        </main>

        <p class="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            Ürün barkodunu girin, anında detaylı besin değerlerini ve BrandHolder puanını öğrenin.
        </p>

        <div class="flex space-x-4 items-center">
            <input
                    type="text"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    maxlength="13"
                    bind:value={barcode}
                    on:input={handleBarcodeInput}
                    placeholder="Barkod girin (EAN-13)"
                    class="w-full xl:w-3/6 px-4 py-2 text-lg border rounded-lg h-12"
            />
            <Button
                    class="w-1/4 h-12"
                    on:click={searchProduct}
                    disabled={loading || barcode.length !== 13}
            >
                {loading ? 'Aranıyor...' : 'Ara'}
            </Button>
        </div>
        {#if errorHRF}
            <p class="text-red-500">{errorHRF}</p>
        {/if}
        {#if product}
            <ProductInfo {product} bind:dialogOpen={dialogOpen}/>
        {/if}
    </div>
    <div class="z-10">
        <HeroCards />
    </div>
    <!-- Shadow effect -->
    <div class="shadow"></div>
</section>

<style>
    .shadow {
        position: absolute;
        background: hsl(var(--primary) / 50%);
        border-radius: 24px;
        width: 320px;
        height: 550px;
        filter: blur(150px);
        top: 50%;
        right: 7%;
        transform: translate(-50%, -50%) rotate(35deg);
    }

    @media (max-width: 1024px) {
        .shadow {
            width: 250px;
            height: 450px;
            filter: blur(150px);
            left: 50%;
            right: 50%;
            top: 50%;
            background: hsl(var(--primary) / 40%);
            animation: none;
        }
    }

    @media (max-width: 768px) {
        .shadow {
            width: 150px;
            height: 350px;
            filter: blur(150px);
            left: 50%;
            right: 50%;
            top: 50%;
            background: hsl(var(--primary) / 50%);
            animation: none;
        }
    }
</style>