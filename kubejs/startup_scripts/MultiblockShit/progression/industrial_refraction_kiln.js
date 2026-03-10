GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('industrial_refraction_kiln', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .recipeTypes([GTRecipeTypes.get('alloying_kiln'), GTRecipeTypes.get('alloy_smelter')])
        .appearanceBlock(() => Block.getBlock("gtceu:signalum_casing"))
        .pattern(definition => FactoryBlockPattern.start()
.aisle("AABBBAA", "CDDDDDC", "CDDDDDC", "CDDDDDC", "AABBBAA") //5
.aisle("CBDDDBC", "CEAAAEC", "CEEAEEC", "CDEAEDC", "CBDDDBC") //4
.aisle("CCCCCCC", "CAFAFAC", "CAFAFAC", "CDFFFCC", "CCCCCCC") //3
.aisle("CBDDDBC", "CEAAAEC", "CEEAEEC", "CDEAEDC", "CBDDDBC") //2
.aisle("AABCBAA", "CBCCCBC", "CBCXCBC", "CBCCCBC", "AABBBAA") //1
   .where("A", Predicates.any())
   .where("B", Predicates.blocks("gtceu:kovar_frame"))
   .where("C", Predicates.blocks("gtceu:signalum_casing")
        .or(Predicates.autoAbilities(definition.getRecipeTypes()))
        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
   .where("D", Predicates.blocks("gtceu:resonite_casing"))
   .where("E", Predicates.blocks("gtceu:steel_pipe_casing"))
   .where("F", Predicates.blocks("gtceu:nichrome_coil_block"))
   .where("X", Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel('gtceu:block/casings/solid/thermal_casing/signalum_casing',
    'gtceu:block/machines/alloy_smelter')
        
})