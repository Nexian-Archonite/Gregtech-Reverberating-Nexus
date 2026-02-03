GTCEuStartupEvents.registry("gtceu:recipe_type", event => {
    event.create("sculk_crafter")
        .category("reconstruction")
        .setEUIO("in")
        .setMaxIOSize(6, 1, 2, 0)
        .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)

    event.create("energistics_assembler")
        .category("applied_assemblery")
        .setEUIO("in")
        .setMaxIOSize(6, 2, 2, 0)
        .setSlotOverlay(false, false, GuiTextures.CIRCUIT_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.DOWN_TO_UP)
        .setSound(GTSoundEntries.ASSEMBLER)


})


GTCEuStartupEvents.registry("gtceu:machine", event => {
    event.create("automatic_sculk_crafter", "simple")
        .tiers(GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM)
        .definition((tier, builder) =>
            builder
                .langValue(`Automatic ${GTValues.VLVH[tier]} Sculk Crafter`)
                .recipeType("sculk_crafter")
                .workableTieredHullModel("gtceu:block/machines/automatic_sculk_crafter")
        )

    event.create("energistics_assembler", "simple")
        .tiers(GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV)
        .definition((tier, builder) =>
            builder
                .langValue(`${GTValues.VLVH[tier]} Energistics Assembler`)
                .recipeType("energistics_assembler")
                .workableTieredHullModel("gtceu:block/machines/circuit_assembler")
        )
})