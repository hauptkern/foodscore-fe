<script>
    import Icon from "$lib/custom/brand/Icon.svelte";
</script>

<footer id="footer" class="md:ml-8 md:mr-8">
    <hr class="w-screen mx-auto" />
    <section class="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div class="col-span-full xl:col-span-2">
            <a rel="noreferrer noopener" href="/" class="font-bold text-xl flex">
                <Icon options="mr-2 mt-0.5" />
                BrandHolder
            </a>
        </div>

        <div class="flex flex-col gap-2">
            <h3 class="font-bold text-lg">Bizi Takip Edin</h3>
            <div>
                <a rel="noreferrer noopener" href="#" class="opacity-60 hover:opacity-100">Discord</a>
            </div>
            <div>
                <a rel="noreferrer noopener" href="#" class="opacity-60 hover:opacity-100">Twitter</a>
            </div>
        </div>

        <div class="flex flex-col gap-2">
            <h3 class="font-bold text-lg">Platformlar</h3>
            <div>
                <a rel="noreferrer noopener" href="#" class="opacity-60 hover:opacity-100">Web</a>
            </div>
            <div>
                <a rel="noreferrer noopener" href="#" class="opacity-60 hover:opacity-100">Mobil</a>
            </div>
        </div>

        <div class="flex flex-col gap-2">
            <h3 class="font-bold text-lg">Hakkında</h3>
            <div>
                <a rel="noreferrer noopener" href="#" class="opacity-60 hover:opacity-100">Özellikler</a>
            </div>
            <div>
                <a rel="noreferrer noopener" href="#faq" class="opacity-60 hover:opacity-100">SSS</a>
            </div>
        </div>

        <div class="flex flex-col gap-2">
            <h3 class="font-bold text-lg">Yasal</h3>
            <div>
                <a rel="noreferrer noopener" href="/privacy" class="opacity-60 hover:opacity-100">Gizlilik Politikası</a>
            </div>
            <div>
                <a rel="noreferrer noopener" href="/terms" class="opacity-60 hover:opacity-100">Şartlar ve Koşullar</a>
            </div>
        </div>
    </section>

    <section class="container pb-14 text-center">
        <h3>
            &copy; 2024 {" "}
            <a
                    rel="noreferrer noopener"
                    target="_blank"
                    href="https://github.com/hauptkern"
                    class="text-primary transition-all border-primary hover:border-b-2"
            >
                hauptkern.
            </a>
            <p class="mt-2" style="font-size: 0.8rem; line-height: 1.2">
                Bu sayfada görüntülenen logolar, ürün isimleri ve diğer tüm ticari markalar ilgili sahiplerine aittir ve yalnızca tanımlama amaçlı kullanılmaktadır.
                Bu ticari markaların, isimlerin kullanılması onay anlamına gelmez.
            </p>
        </h3>
    </section>
</footer>
