GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    var biomechanicaltypes = {
    biomechanical_mixer: [GTSoundEntries.COOLING, 6, 1, 4, 1],
    biomechanical_extruder: [GTSoundEntries.COMPRESSOR, 4, 2, 1, 0],
    biomechanical_recycler: [GTSoundEntries.MACERATOR, 1, 6, 2, 4],
    organism_incubation_chamber: [GTSoundEntries.CHEMICAL, 3, 3, 1, 2],
    spawn_simulator: [GTSoundEntries.PORTAL_CLOSING, 2, 8, 1, 3]


}

Object.entries(biomechanicaltypes).forEach(([type, config]) => {
    event.create(`${type}`)
        .category("biomechanical")
        .setEUIO("in")
        .setMaxIOSize(config[1], config[2], config[3], config[4])
        .setSlotOverlay(false, false, false, GuiTextures.MOLECULAR_OVERLAY_1)
        .setSlotOverlay(false, false, true, GuiTextures.MOLECULAR_OVERLAY_2)
        .setSlotOverlay(false, true, false, GuiTextures.MOLECULAR_OVERLAY_3)
        .setSlotOverlay(false, true, true, GuiTextures.MOLECULAR_OVERLAY_4)
        .setSlotOverlay(true, false, GuiTextures.VIAL_OVERLAY_1)
        .setSlotOverlay(true, true, GuiTextures.VIAL_OVERLAY_2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setSound(config[0])
})

    event.create('star_forge') // this is STILL the Organism Assembly Line. this is all just for it to work 😭😭😭😭
        .category('biomechanical')
        .setMaxIOSize(15, 5, 5, 0)
        .setEUIO("in")
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('organism_assembly_line', "multiblock")
        .rotationState(RotationState.ALL)
        .recipeTypes('star_forge')
        .appearanceBlock(() => Block.getBlock("gtceu:flesh_alloy_casing"))
        .pattern(definition => FactoryBlockPattern.start("back", "up", "right")
                .aisle("FIF", "RTR", "SAG", "#Y#")
                .aisle("FIF", "RTR", "YAG", "#Y#").setRepeatable(3, 15)
                .aisle("FOF", "RTR", "YAG", "#Y#")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks("gtceu:flesh_alloy_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(4)))
            .where('O', Predicates.abilities(PartAbility.EXPORT_ITEMS))
            .where('Y', Predicates.blocks("gtceu:flesh_alloy_casing")
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMinGlobalLimited(1).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('I', Predicates.blocks('gtceu:ulv_input_bus'))
            .where('G', Predicates.blocks("gtceu:flesh_alloy_casing"))
            .where('A', Predicates.blocks("gtceu:titanium_pipe_casing"))
            .where('R', Predicates.blocks("gtceu:laminated_glass"))
            .where('T', Predicates.blocks("gtceu:titanium_gearbox"))
            .where('#', Predicates.any())
            .build())
        .workableCasingModel(
            "gtceu:block/casings/solid/flesh_alloy/casing",
            "gtceu:block/multiblock/assembly_line"
        )

    event.create('incubation_chamber', "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeTypes(['organism_incubation_chamber', 'spawn_simulator'])
    .appearanceBlock(() => Block.getBlock("gtceu:inert_machine_casing"))
    .pattern(definition => FactoryBlockPattern.start()
        .aisle("BBAAAAABB", "BBBBBBBBB", "ABBAAABBA", "ABAAAAABA", "ABAAAAABA", "ABAAAAABA", "ABBAAABBA", "BBBBBBBBB", "BBAAAAABB")
        .aisle("BBBBBBBBB", "BBCCCCCBB", "BCCCCCCCB", "BCCCCCCCB", "BCCCCCCCB", "BCCCCCCCB", "BCCCCCCCB", "BBCCCCCBB", "BBBBBBBBB")
        .aisle("ABAAAAABA", "BCCCCCCCB", "BCDDDDDCB", "ACDDDDDCA", "ACAAAAACA", "ACAAAAACA", "BCAAAAACB", "BCCCCCCCB", "ABAAAAABA")
        .aisle("ABAAAAABA", "BCCCCCCCB", "ACDDDDDCA", "ACDEDDDCA", "ACAAAAACA", "ACAAAAACA", "ACAAAAACA", "BCCCCCCCB", "ABAAAAABA")
        .aisle("ABAAAAABA", "BCCCCCCCB", "ACDDDDDCA", "ACAADDDCA", "ACAAFAACA", "ACAAAAACA", "ACAAAAACA", "BCCCCCCCB", "ABAAAAABA")
        .aisle("ABAAAAABA", "BCCCCCCCB", "ACDDDDDCA", "ACAAAAACA", "ACAAAAACA", "ACAAAAACA", "ACAAAAACA", "BCCCCCCCB", "ABAAAAABA")
        .aisle("ABAAAAABA", "BCCCCCCCB", "BCDDDDDCB", "ACAAAAACA", "ACAAAAACA", "ACAAAAACA", "BCAAAAACB", "BCCCCCCCB", "ABAAAAABA")
        .aisle("BBBBBBBBB", "BBCCCCCBB", "BCCCCCCCB", "BCHHHHHCB", "BCHHHHHCB", "BCHHHHHCB", "BCCHHHCCB", "BBCCCCCBB", "BBBBBBBBB")
        .aisle("BBAAAAABB", "BBBBBBBBB", "ABBBXBBBA", "ABAAAAABA", "ABAAAAABA", "ABAAAAABA", "ABBAAABBA", "BBBBBBBBB", "BBAAAAABB")
        .where("A", Predicates.any())
        .where("B", Predicates.blocks("gtceu:inert_machine_casing")
            .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
        .where("C", Predicates.blocks("gtceu:flesh_alloy_casing"))
        .where("D", Predicates.blocks("biomancy:primal_flesh"))
        .where("E", Predicates.blocks("biomancy:primal_orifice"))
        .where("F", Predicates.blocks("biomancy:primordial_cradle"))
        .where("H", Predicates.blocks("gtceu:organism_glass"))
        .where("X", Predicates.controller(Predicates.blocks(definition.get())))
        .build())
    .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_inert_ptfe",
            "gtceu:block/machines/incubation_chamber"
        );
   

        var biomechanicaltypesv2 = ["mixer", "extruder", "recycler"]
    biomechanicaltypesv2.forEach(type => {
    let capitalizedType = type.charAt(0).toUpperCase() + type.slice(1)
    event.create(`biomechanical_${type}`)
    .tiers(GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
    .definition((tier, builder) =>
        builder
               .langValue(`${GTValues.VLVH[tier]} Biomechanical ${capitalizedType}`)
               .recipeType(`biomechanical_${type}`)
               .workableTieredHullModel(`gtceu:block/machines/biomechanical_${type}`) 
    )
});
});

