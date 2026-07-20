GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    const biomechanicaltypes = {
    biomechanical_mixer: [GTSoundEntries.COOLING, 6, 1, 4, 1],
    biomechanical_extruder: [GTSoundEntries.COMPRESSOR, 4, 2, 1, 0],
    biomechanical_recycler: [GTSoundEntries.MACERATOR, 2, 6, 2, 4],
    biomechanical_imbuer: [GTSoundEntries.COOLING, 2, 2, 2, 2],
    organism_incubation_chamber: [GTSoundEntries.CHEMICAL, 6, 15, 2, 4],
    spawn_simulator: [GTSoundEntries.PORTAL_CLOSING, 4, 12, 1, 3]


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

    event.create('star_forge') // this is STILL the Organism Assembly Line. this is all just for it to work
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
        .recipeModifiers(GTRecipeModifiers.OC_NON_PERFECT)
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
    .recipeModifiers(GTRecipeModifiers.OC_NON_PERFECT)
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
        )

    event.create('biomechanical_factory', "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeTypes(['biomechanical_mixer', 'biomechanical_extruder', 'biomechanical_recycler', 'biomechanical_imbuer'])
    .appearanceBlock(() => Block.getBlock("gtceu:flesh_alloy_casing"))
    .recipeModifiers([GTRecipeModifiers.OC_PERFECT, GTRecipeModifiers.PARALLEL_HATCH])
    .pattern(definition => FactoryBlockPattern.start()
    .aisle("abbbaaaaaaaaabbba", "aabbaaaaaaaaabbaa", "aabbaaaaaaaaabbaa", "abbbaaaaaaaaabbba", "aabbaaaaaaaaabbaa", "aabaaaaaaaaaaabaa", "abbaaaaaaaaaaabba", "abaaaaaaaaaaaaaba", "abaaaaaaaaaaaaaba", "abaaaaaaaaaaaaaba", "aaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaa")
    .aisle("bbbbbaaabaaabbbbb", "abaabbbbbbbbbaaba", "abaacccccccccaaba", "bbaacccccccccaabb", "abaaccaaaaaccaaba", "abaaccaaaaaccaaba", "bbaacaaaaaaacaabb", "bbaacaaaaaaacaabb", "bbaaccaaaaaccaabb", "bbaaccaaaaaccaabb", "abbacccccccccabba", "aabbcccccccccbbaa", "aaabbbbbbbbbbbaaa")
    .aisle("bbbbbbbbbbbbbbbbb", "baaabaaaaaaabaaab", "baaacaaaaaaacaaab", "baaacaaacaaacaaab", "baaacacccccacaaab", "baaaaacccccaaaaab", "baaacccccccccaaab", "aaaacccccccccaaaa", "aaaaaacccccaaaaaa", "aaaacacccccacaaaa", "abaacaaacaaacaaba", "abaaaaaaaaaaaaaba", "aabbbbbbbbbbbbbaa")
    .aisle("bbbbbbbbbbbbbbbbb", "baabaaaaaaaaabaab", "baacaaaaaaaaacaab", "baacaaaaaaaaacaab", "baacaaaaaaaaacaab", "aaaccaaaaaaaccaaa", "aaaacaaaaaaacaaaa", "aaaacaaaaaaacaaaa", "aaaccaaaaaaaccaaa", "aaacaaaaaaaaacaaa", "aaacaaaabaaaacaaa", "abacabbbbbbbacaba", "abbbbaaaaaaabbbba")
    .aisle("abbbbbaabaabbbbba", "abbaaabbbbbaaabba", "accaaabababaaacca", "accaaabababaaacca", "accaaabbbbbaaacca", "acacaaababaaacaca", "acccaaababaaaccca", "acccaaabbbaaaccca", "acacaaaabaaaacaca", "accaaaaabaaaaacca", "accaaabbbbbaaacca", "acaabbaaaaabbaaca", "abbbaaaaaaaaabbba")
    .aisle("aabbbaaaaaaabbbaa", "abaaabbbbbbbaaaba", "acaaaaadddaaaaaca", "acaaaaaaaaaaaaaca", "acaaaaaaaaaaaaaca", "acaaaaaaaaaaaaaca", "aacaaaaaaaaaaacaa", "aacaaaaaaaaaaacaa", "acaaaaaaaaaaaaaca", "acaaaaaaaaaaaaaca", "acaaabbeeebbaaaca", "acabbaaaaaaabbaca", "abbaaaaaaaaaaabba")
    .aisle("aabbaaaaaaaaabbaa", "abaabbbbbbbbbaaba", "acaabadaaadabaaca", "acaabaaaaaaabaaca", "aacabaaaaaaabacaa", "aacaaaaaaaaaaacaa", "aacaaaaaaaaaaacaa", "aacaaaaaaaaaaacaa", "aacaaaaaaaaaaacaa", "aacaaaaaaaaaaacaa", "acaabbeeeeebbaaca", "acabaaaaaaaaabaca", "abbaaaaaaaaaaabba")
    .aisle("aabbaaaaaaaaabbaa", "abaabbbbbbbbbaaba", "acaaadaaaaadaaaca", "acaaaaaaaaaaaaaca", "aacabaaaaaaabacaa", "aacabaaaaaaabacaa", "aacabaaaaaaabacaa", "aacabaaaaaaabacaa", "aacaaaaaaaaaaacaa", "aacaaaaaaaaaaacaa", "acaabeeeeeeebaaca", "acabaaaaaaaaabaca", "abbaaaaaaaaaaabba")
    .aisle("abbbbaaaaaaabbbba", "abaabbbbbbbbbaaba", "acaabdaafaadbaaca", "accabaaaaaaabacca", "aacabaaaaaaabacaa", "aacaaaaaaaaaaacaa", "aacaaaaaaaaaaacaa", "aacabaaaaaaabacaa", "aacabaaaaaaabacaa", "aacabaaaaaaabacaa", "accbbeeeeeeebbcca", "acabaaaaaaaaabaca", "abbaaaaaaaaaaabba")
    .aisle("aabbaaaaaaaaabbaa", "abaabbbbbbbbbaaba", "acaaadaaaaadaaaca", "acaaaaaaaaaaaaaca", "aacabaaaaaaabacaa", "aacabaaaaaaabacaa", "aacabaaaaaaabacaa", "aacabaaaaaaabacaa", "aacaaaaaaaaaaacaa", "aacaaaaaaaaaaacaa", "acaabeeeeeeebaaca", "acabaaaaaaaaabaca", "abbaaaaaaaaaaabba")
    .aisle("aabbaaaaaaaaabbaa", "abaabbbbbbbbbaaba", "acaabaaaaaaabaaca", "acaabaaaaaaabaaca", "aacabaaaaaaabacaa", "aacaaaaaaaaaaacaa", "aacaaaaaaaaaaacaa", "aacaaaaaaaaaaacaa", "aacaaaaaaaaaaacaa", "aacaaaaaaaaaaacaa", "acaabbeeeeebbaaca", "acabaaaaaaaaabaca", "abbaaaaaaaaaaabba")
    .aisle("aabbbaaaaaaabbbaa", "abaaabbbbbbbaaaba", "acaaaaaaaaaaaaaca", "acaaaaaaaaaaaaaca", "acaaaaaaaaaaaaaca", "acaaaaaaaaaaaaaca", "aacaaaaaaaaaaacaa", "aacaaaaaaaaaaacaa", "acaaaaaaaaaaaaaca", "acaaaaaaaaaaaaaca", "acaaabbeeebbaaaca", "acabbaaaaaaabbaca", "abbaaaaaaaaaaabba")
    .aisle("abbbbbaabaabbbbba", "abbaaabbbbbaaabba", "accaaabababaaacca", "accaaabababaaacca", "accaaabbbbbaaacca", "acacaaababaaacaca", "acccaaababaaaccca", "acccaaabbbaaaccca", "acacaaaabaaaacaca", "accaaaaabaaaaacca", "accaaabbbbbaaacca", "acaabbaaaaabbaaca", "abbbaaaaaaaaabbba")
    .aisle("bbbbbbbbbbbbbbbbb", "baabaaaaaaaaabaab", "baacaaaaaaaaacaab", "baacaaaaaaaaacaab", "baacaaaaaaaaacaab", "aaaccaaaaaaaccaaa", "aaaacaaaaaaacaaaa", "aaaacaaaaaaacaaaa", "aaaccaaaaaaaccaaa", "aaacaaaaaaaaacaaa", "aaacaaaabaaaacaaa", "abacabbbbbbbacaba", "abbbbaaaaaaabbbba")
    .aisle("bbbbbbbbbbbbbbbbb", "baaabaaabaaabaaab", "baaacaaaaaaacaaab", "baaacaaaaaaacaaab", "baaacacccccacaaab", "baaaaacccccaaaaab", "baaacccccccccaaab", "aaaacccccccccaaaa", "aaaaaacccccaaaaaa", "aaaacacccccacaaaa", "abaacaaacaaacaaba", "abaaaaaaaaaaaaaba", "aabbbbbbbbbbbbbaa")
    .aisle("bbbbbaaabaaabbbbb", "abaabbbbbbbbbaaba", "abaaccccaccccaaba", "bbaaccccaccccaabb", "abaaccaaaaaccaaba", "abaaccaaaaaccaaba", "bbaacaaaaaaacaabb", "bbaacaaaaaaacaabb", "bbaaccaaaaaccaabb", "bbaaccaaaaaccaabb", "abbacccccccccabba", "aabbcccccccccbbaa", "aaabbbbbbbbbbbaaa")
    .aisle("abbbaaaaaaaaabbba", "aabbaaaaaaaaabbaa", "aabbaaaaaaaaabbaa", "abbbaaaaaaaaabbba", "aabbaaaaaaaaabbaa", "aabaaaaaaaaaaabaa", "abbaaaaaaaaaaabba", "abaaaaaaaaaaaaaba", "abaaaaaaaaaaaaaba", "abaaaaaaaaaaaaaba", "aaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaa")
    .where("a", Predicates.any())
    .where("b", Predicates.blocks("gtceu:flesh_alloy_casing"))
    .where("c", Predicates.blocks("gtceu:organism_glass"))
    .where("d", Predicates.blocks("gtceu:stable_machine_casing"))
    .where("e", Predicates.blocks("gtceu:sterilizing_filter_casing"))
    .where("f", Predicates.controller(Predicates.blocks(definition.get())))
    .build())
   .workableCasingModel("gtceu:block/casings/solid/flesh_alloy/casing", "gtceu:block/multiblock/fusion_reactor")
    

    event.create(`biomechanical_mixer`, "simple")
    .tiers(GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
    .definition((tier, builder) =>
        builder
               .langValue(`${GTValues.VLVH[tier]} Biomechanical Mixer`)
               .recipeType(`biomechanical_mixer`)
               .workableTieredHullModel(`gtceu:block/machines/biomechanical_mixer`))

    event.create(`biomechanical_recycler`, "simple")
    .tiers(GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
    .definition((tier, builder) =>
        builder
               .langValue(`${GTValues.VLVH[tier]} Biomechanical Recycler`)
               .recipeType(`biomechanical_recycler`)
               .workableTieredHullModel(`gtceu:block/machines/biomechanical_recycler`))

    event.create(`biomechanical_extruder`, "simple")
    .tiers(GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
    .definition((tier, builder) =>
        builder
               .langValue(`${GTValues.VLVH[tier]} Biomechanical Extruder`)
               .recipeType(`biomechanical_extruder`)
               .workableTieredHullModel(`gtceu:block/machines/biomechanical_extruder`))

    event.create(`biomechanical_imbuer`, "simple")
    .tiers(GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
    .definition((tier, builder) =>
        builder
               .langValue(`${GTValues.VLVH[tier]} Biomechanical Imbuer`)
               .recipeType(`biomechanical_imbuer`)
               .workableTieredHullModel(`gtceu:block/machines/biomechanical_imbuer`))


})

