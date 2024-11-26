<script>
    import {
        Accordion,
        AccordionItem,
        AccordionTrigger,
        AccordionContent
    } from "$lib/components/ui/accordion";

    const FAQList = [
        {
            question: "BrandHolder puanı nedir ve nasıl hesaplanır?",
            answer: `BrandHolder, Avrupa Birliği'nin Nutriscore sistemine benzer şekilde ürünlerin besin değerlerini değerlendiren bir puanlama sistemidir. Ürünün kalori, şeker, doymuş yağ, protein, lif ve tuz miktarları göz önünde bulundurularak hesaplanır.` +
                ` Hesaplama Algoritması hakkında daha fazla bilgi almak isterseniz <a
                href="mailto:hauptkerndevel@gmail.com"
                class="text-primary border-primary hover:border-b-2"
            >
                mail adresimizden
            </a> bize ulaşabilirsiniz.`,
            value: "item-2",
        },
        {
            question: "Ürün dedektifi özelliği ne işe yarar?",
            answer: "Ürün dedektifi, yapay zeka teknolojisi kullanarak ürünün içeriklerini analiz eder ve sağlık açısından dikkat edilmesi gereken noktaları, alerjenleri ve besin değeri kalitesini detaylı bir şekilde değerlendirir.",
            value: "item-3",
        },
        {
            question: "Besin değerleri tablosunu nasıl yorumlamalıyım?",
            answer: "Besin değerleri tablosunda ürünün 100 gramındaki (içecekler 100ml) kalori, protein, karbonhidrat, şeker, yağ, lif ve tuz miktarlarını görebilirsiniz.",
            value: "item-5",
        },
        ];
</script>

<section id="faq" class="container py-18 pt-32 sm:py-32 md:py-18">
    <h2 class="text-3xl md:text-4xl font-bold mb-4">
        Sıkça Sorulan{" "}
        <span class="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        Sorular
      </span>
    </h2>

    <Accordion type="single" collapsible class="w-full AccordionRoot">
        {#each FAQList as { question, answer, value }}
            <AccordionItem value={value}>
                <AccordionTrigger class="text-left">
                    {question}
                </AccordionTrigger>
                <AccordionContent>{@html answer}</AccordionContent>
            </AccordionItem>
        {/each}
    </Accordion>

    <h3 class="font-medium mt-4">
        Yanıtlanmamış sorularınız mı var?{" "}
        <a
                rel="noreferrer noopener"
                href="mailto:hauptkerndevel@gmail.com"
                class="text-primary transition-all border-primary hover:border-b-2"
        >
            Bize ulaşın
        </a>
    </h3>

</section>

