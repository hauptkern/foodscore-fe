<script>
    import * as Table from "$lib/components/ui/table";

    export let rawNutritionData = {
        calories: null,
        joules: null,
        fat: null,
        saturatedFat: null,
        transFat: null,
        carbohydrates: null,
        sugar: null,
        protein: null,
        fiber: null,
        salt: null
    };

    $: formattedNutritionItems = [
        { label: "Kalori (kcal)", amount: rawNutritionData.calories },
        { label: "Yağ (g)", amount: rawNutritionData.fat },
        { label: "Doymuş Yağ (g)", amount: rawNutritionData.saturatedFat },
        { label: "Trans Yağ (g)", amount: rawNutritionData.transFat },
        { label: "Karbonhidratlar (g)", amount: rawNutritionData.carbohydrates },
        { label: "Şeker (g)", amount: rawNutritionData.sugar },
        { label: "Protein (g)", amount: rawNutritionData.protein },
        { label: "Lif (g)", amount: rawNutritionData.fiber},
        { label: "Tuz (g)", amount: rawNutritionData.salt}
    ].filter(item => item.amount != null);
</script>

<Table.Root>
    <Table.Body>
        {#each formattedNutritionItems as item, index (index)}
            <Table.Row>
                <Table.Cell class="font-medium">{item.label}</Table.Cell>
                <Table.Cell class="text-right">
                    <div class="bg-green-500 text-white rounded-full px-3 py-1 inline-block">
                        {item.amount.toFixed(1)}
                    </div>
                </Table.Cell>
            </Table.Row>
        {/each}
    </Table.Body>
</Table.Root>