if (Platform.isLoaded('tacz')) {
GTCEuStartupEvents.registry("gtceu:recipe_type", event => {
    event.create("bullet_hell")
        .category("bullethell")
        .setEUIO("in")
        .setMaxIOSize(5, 2, 2, 0)
        .setSlotOverlay(false, false, GuiTextures.CIRCUIT_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.DOWN_TO_UP)
        .setSound(GTSoundEntries.ASSEMBLER)
})

GTCEuStartupEvents.registry("gtceu:machine", event => {
    event.create("bullet_hell", "simple")
        .tiers(GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV)
        .definition((tier, builder) =>
            builder
                .langValue(`${GTValues.VLVH[tier]} Bullet Hell`)
                .recipeType("bullet_hell")
                .workableTieredHullModel("gtceu:block/machines/bullet_hell")
        )
    })
}

