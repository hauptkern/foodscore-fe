<script>
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import * as Tabs from "$lib/components/ui/tabs";
    import {CardHeader,CardTitle,CardContent} from "$lib/components/ui/card";
    import NutriScore from "$lib/custom/nutri/NutriScore.svelte";
    import NutriTable from "$lib/custom/nutri/NutriTable.svelte";
    import {Svrollbar} from "svrollbar";
    export let product;
    export let dialogOpen = false;
    let tableElement = null
    let tableElementContent = null

    function formatBoldText(text) {
        let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<br><b>$1</b>');
        return formattedText.replace(/\*/g, '');
    }
</script>

<Dialog.Root bind:open={dialogOpen}>
    <Dialog.Content class="w-full max-w-[95vw] md:max-w-[800px] mx-auto overflow-x-hidden">
        <Dialog.Header class="text-center">
            <CardHeader>
                <CardTitle class="text-center pb-5">{product.productName}</CardTitle>
            </CardHeader>

        </Dialog.Header>

        <CardContent class="p-0 pb-10 overflow-y-auto max-h-[60vh]">
            <div class="flex flex-col md:flex-row justify-center">
                <div class="w-full md:w-1/2 flex flex-col items-center justify-center">
                    <img
                            src={"data:image/png;base64," + product.img}
                            alt={product.productName}
                            class="w-60 h-auto object-cover rounded-lg"
                    />
                    <div class="flex justify-center mt-6 mb-6 md:mb-0">
                        <NutriScore letter={product.nutriScore}/>
                    </div>
                </div>
                <div class="w-full md:w-1/2">
                    <Tabs.Root value="ingredients" class="w-full">
                        <Tabs.List>
                            <Tabs.Trigger value="ingredients">İçindekiler</Tabs.Trigger>
                            <Tabs.Trigger value="nutrition">Besin Değerleri</Tabs.Trigger>
                            <Tabs.Trigger value="detective">Detektif (AI)</Tabs.Trigger>
                        </Tabs.List>
                        <div class="h-[300px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" bind:this={tableElement}>
                            <div bind:this={tableElementContent}>
                                <Tabs.Content value="ingredients" class="h-full">
                                    <p class="mt-3">{product.ingredients}</p>
                                </Tabs.Content>
                                <Tabs.Content value="nutrition" class="h-full">
                                    <NutriTable rawNutritionData={product.nutritionalValues}/>
                                </Tabs.Content>
                                <Tabs.Content value="detective" class="h-full">
                                    <p class="mt-3">{@html formatBoldText(product.detective)}</p>
                                </Tabs.Content>
                            </div>
                        </div>
                        <Svrollbar viewport={tableElement} contents={tableElementContent} />
                    </Tabs.Root>
                </div>
            </div>
        </CardContent>
    </Dialog.Content>
</Dialog.Root>