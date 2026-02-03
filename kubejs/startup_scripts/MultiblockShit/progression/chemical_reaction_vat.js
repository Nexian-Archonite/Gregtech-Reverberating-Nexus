GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
event.create('chemical_vat')
.category('hamburgercheeseburgerbigmacwhopperhamburgercheeseburgerbigmacwhopper')
.setMaxIOSize(6, 6, 4, 4)
.setSlotOverlay(false, false, false, GuiTextures.MOLECULAR_OVERLAY_1)
.setSlotOverlay(false, false, true, GuiTextures.MOLECULAR_OVERLAY_2)
.setSlotOverlay(false, true, false, GuiTextures.MOLECULAR_OVERLAY_3)
.setSlotOverlay(false, true, true, GuiTextures.MOLECULAR_OVERLAY_4)
.setSlotOverlay(true, false, GuiTextures.VIAL_OVERLAY_1)
.setSlotOverlay(true, true, GuiTextures.VIAL_OVERLAY_2)
.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
.setSound(GTSoundEntries.CHEMICAL)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {

    GTRecipeTypes.get("chemical_vat").addDataInfo((data) => (
        `Temperature: ${data.getInt("Temp")}K` // 
    ))

    GTRecipeTypes.get("chemical_vat").addDataInfo((data) => (
        `Pressure: ${data.getDouble("HeatPressure")}ΔP` // 
    ))


    event.create('chemical_reaction_vat', 'multiblock')
    .rotationState(RotationState.NON_Y_AXIS)
    .machine((holder) => new $CoilWorkableElectricMultiblockMachine(holder)) 
    .recipeTypes([GTRecipeTypes.get('chemical_vat'), GTRecipeTypes.get('large_chemical_reactor'), GTRecipeTypes.get('chemical_reactor')])
    .recipeModifiers([(machine, recipe) => GTRecipeModifiers.pyrolyseOvenOverclock(machine, recipe), GTRecipeModifiers.PARALLEL_HATCH, (machine, recipe) => TemperatureModifier(machine, recipe), (machine, recipe) => PressureModifier(machine, recipe)])
    .appearanceBlock(() => Block.getBlock("gtceu:inert_machine_casing"))
    .pattern(definition => FactoryBlockPattern.start()
    .aisle("AABBBBBAA", "AABAAABAA", "ABBAAABBA", "ABAAAAABA", "ABAAAAABA", "ABAAAAABA", "ABBAAABBA", "AABAAABAA", "AABBBBBAA")
    .aisle("ABBBBBBBA", "ABBBBBBBA", "BBAAAAABB", "BBAAAAABB", "BBAAAAABB", "BBAAAAABB", "BBAAAAABB", "AABBBBBAA", "AABBBBBAA")
    .aisle("BBBBBBBBB", "BBBCCCBBB", "BADDDDDAB", "AADEEEDAA", "AADEEEDAA", "AADEEEDAA", "BADDDDDAB", "BBBCCCBBB", "BBBBBBBBB")
    .aisle("BBBBBBBBB", "ABCCCCCBA", "AADFFFDAA", "AAEAAAEAA", "AAEAAAEAA", "AAEAAAEAA", "AADFFFDAA", "ABCCCCCBA", "BBBBBBBBB")
    .aisle("BBBBBBBBB", "ABCCCCCBA", "AADFHFDAA", "AAEAHAEAA", "AAEAHAEAA", "AAEAHAEAA", "AADFHFDAA", "ABCCCCCBA", "BBBBBBBBB")
    .aisle("BBBBBBBBB", "ABCCCCCBA", "AADFFFDAA", "AAEAAAEAA", "AAEAAAEAA", "AAEAAAEAA", "AADFFFDAA", "ABCCCCCBA", "BBBBBBBBB")
    .aisle("BBBBBBBBB", "BBBCCCBBB", "BADDDDDAB", "AADEEEDAA", "AADEEEDAA", "AADEEEDAA", "BADDDDDAB", "BBBCCCBBB", "BBBBBBBBB")
    .aisle("ABBBBBBBA", "ABBBBBBBA", "BBAAAAABB", "BBAAAAABB", "BBAAAAABB", "BBAAAAABB", "BBAAAAABB", "AABBBBBAA", "AABBBBBAA")
    .aisle("AABBGBBAA", "AABAAABAA", "ABBAAABBA", "ABAAAAABA", "ABAAAAABA", "ABAAAAABA", "ABBAAABBA", "AABAAABAA", "AABBBBBAA")
   .where("A", Predicates.any())
   .where("B", Predicates.blocks("gtceu:inert_machine_casing")
        .or(Predicates.autoAbilities(definition.getRecipeTypes()))
        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
   .where("C", Predicates.blocks("gtceu:signalum_casing"))
   .where("D", Predicates.blocks("gtceu:nitinol_casing"))
   .where("E", Predicates.blocks("kubejs:enderium_glass"))
   .where("F", Predicates.blocks("gtceu:stable_machine_casing"))
   .where("G", Predicates.controller(Predicates.blocks(definition.get())))
   .where('H', Predicates.heatingCoils())
.build())
.workableCasingModel('gtceu:block/casings/solid/machine_casing_inert_ptfe',
        'gtceu:block/machines/chemical_reactor')
})