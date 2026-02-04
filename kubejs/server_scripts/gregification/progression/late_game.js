ServerEvents.recipes(event => {
    const GTM = event.recipes.gtceu
   // welcome to late game, i hope you brought a spezi and some crumpets ay
   
   //resonite tree. PUREX style :D


GTM.chemical_reactor('resonance_dissolution')
    .itemInputs('3x gtceu:resonite_dust')
    .inputFluids('gtceu:infernal_acid 2000', 'minecraft:water 1000')
    .outputFluids('gtceu:resonite_slurry 3000')
    .itemOutputs('gtceu:resonite_ore_waste_dust')
    .duration(300)
    .EUt(480)

GTM.centrifuge('resonance_harmonic_filtration')
    .inputFluids('gtceu:resonite_slurry 5000')
    .outputFluids('gtceu:filtered_resonite_solution 4000')
    .itemOutputs('gtceu:resonite_filter_cake_dust')
    .duration(400)
    .EUt(1920)

GTM.extraction_column('resonance_vibrational_extraction')
    .inputFluids('gtceu:filtered_resonite_solution 4000', 'gtceu:chloroform 3000', 'gtceu:acetone 2000')
    .outputFluids('gtceu:resonant_organic_phase 4000', 'gtceu:extraction_raffinate 5000')
    .duration(600)
    .EUt(1920)

GTM.chemical_vat('resonance_crystallization')
    .inputFluids('gtceu:resonant_organic_phase 4000')
    .outputFluids('gtceu:resonite_crystal_suspension 3000')
    .addData("HeatPressure", 0.5)
    .addData("Temp", 273)
    .duration(500)
    .EUt(1920)

GTM.centrifuge('resonance_crystal_separation')
    .inputFluids('gtceu:resonite_crystal_suspension 3000')
    .itemOutputs('2x gtceu:crude_resonite_crystal_dust')
    .outputFluids('gtceu:acetone 2000')
    .duration(300)
    .EUt(480)

GTM.chemical_reactor('resonance_frequency_washing')
    .itemInputs('2x gtceu:crude_resonite_crystal_dust')
    .inputFluids('gtceu:ethanol 1000')
    .outputFluids('gtceu:washed_resonite_solution 2000', 'gtceu:harmonic_impurities 500')
    .duration(400)
    .EUt(1920)

GTM.chemical_vat('resonance_sublimation')
    .inputFluids('gtceu:washed_resonite_solution 2000')
    .itemOutputs('2x gtceu:resonance_ingot', 'gtceu:sublimation_residue_dust')
    .addData("HeatPressure", 5.4)
    .addData("Temp", 1800)
    .duration(800)
    .EUt(7680)

GTM.fluid_solidifier('solidify_resonance_to_ingot')
.inputFluids('gtceu:resonance_plasma 144')
.notConsumable('gtceu:ingot_casting_mold')
.itemOutputs('gtceu:resonance_ingot')
.duration(20)
.EUt(7)

GTM.fluid_solidifier('solidify_resonance_to_nugget')
.inputFluids('gtceu:resonance_plasma 144')
.notConsumable('gtceu:nugget_casting_mold')
.itemOutputs('9x gtceu:resonance_nugget')
.duration(97)
.EUt(7)

GTM.fluid_solidifier('solidify_resonance_to_block')
.inputFluids('gtceu:resonance_plasma 1296')
.notConsumable('gtceu:block_casting_mold')
.itemOutputs('gtceu:resonance_block')
.duration(97)
.EUt(7)
   
   
// blood chain ;)

GTM.mixer('blood_electrolytes_synthesis')
    .itemInputs('3x gtceu:sodium_dust', '2x gtceu:potassium_dust', '2x gtceu:calcium_dust', 'gtceu:magnesium_dust', 'gtceu:phosphorus_dust')
    .inputFluids('minecraft:water 1000', 'gtceu:chlorine 4000')
    .outputFluids('gtceu:blood_electrolytes 14000')
    .duration(200)
    .EUt(480)
    .cleanroom(CleanroomType.STERILE_CLEANROOM)

GTM.biomechanical_mixer('amino_acid_solution')
    .inputFluids('gtceu:ammonia 2000', 'gtceu:acetic_acid 1000', 'minecraft:water 1000', 'gtceu:blood_electrolytes 500')
    .itemInputs('2x gtceu:carbon_dust')
    .outputFluids('gtceu:amino_acid_solution 4000')
    .duration(300)
    .EUt(480)
    .cleanroom(CleanroomType.STERILE_CLEANROOM)

GTM.biomechanical_mixer('human_serum_albumin_synthesis')
    .inputFluids('gtceu:amino_acid_solution 4000', 'gtceu:blood_electrolytes 500')
    .itemInputs('2x gtceu:sulfur_dust', 'gtceu:zinc_dust')
    .itemOutputs('4x gtceu:human_serum_albumin_dust')
    .duration(800)
    .EUt(1920)
    .cleanroom(CleanroomType.STERILE_CLEANROOM)

GTM.biomechanical_mixer('hemoglobin_synthesis')
    .inputFluids('gtceu:amino_acid_solution 6000', 'gtceu:oxygen 2000', 'gtceu:blood_electrolytes 500', 'gtceu:nitrogen 4000')
    .itemInputs('4x gtceu:iron_dust')
    .itemOutputs('4x gtceu:hemoglobin_dust')
    .duration(1000)
    .EUt(1920)
    .cleanroom(CleanroomType.STERILE_CLEANROOM)

GTM.biomechanical_mixer('fibrinogen_synthesis')
    .inputFluids('gtceu:amino_acid_solution 5000', 'gtceu:blood_electrolytes 500')
    .itemInputs('gtceu:calcium_dust', '2x gtceu:phosphorus_dust')
    .itemOutputs('4x gtceu:fibrinogen_dust')
    .duration(600)
    .EUt(1920)
    .cleanroom(CleanroomType.STERILE_CLEANROOM)

GTM.biomechanical_mixer('blood_proteins_mixing')
    .inputFluids('gtceu:blood_electrolytes 500')
    .itemInputs('2x gtceu:human_serum_albumin_dust', '2x gtceu:hemoglobin_dust', 'gtceu:fibrinogen_dust')
    .outputFluids('gtceu:blood_proteins 5000')
    .duration(400)
    .EUt(480)
    .cleanroom(CleanroomType.STERILE_CLEANROOM)

GTM.biomechanical_mixer('blood_plasma_synthesis')
    .inputFluids('minecraft:water 8000', 'gtceu:blood_proteins 1000', 'gtceu:blood_electrolytes 1500')
    .outputFluids('gtceu:blood_plasma 10000')
    .duration(400)
    .EUt(960)
    .cleanroom(CleanroomType.STERILE_CLEANROOM)

GTM.biomechanical_extruder('cellulose_extraction')
    .inputFluids('gtceu:blood_electrolytes 500')
    .itemInputs('16x minecraft:sugar_cane')
    .itemOutputs('8x gtceu:cellulose_dust')
    .duration(400)
    .EUt(120)
    .cleanroom(CleanroomType.STERILE_CLEANROOM)

// random heebie-jeebie
GTM.biomechanical_extruder('cellulose_to_paper')
    .inputFluids('gtceu:blood_electrolytes 500', 'minecraft:water 2000')
    .itemInputs('4x gtceu:cellulose_dust')
    .itemOutputs('16x minecraft:paper')
    .duration(300)
    .EUt(120)
    .cleanroom(CleanroomType.STERILE_CLEANROOM)

GTM.biomechanical_mixer('cellulose_to_ethanol')
    .inputFluids('minecraft:water 1000')
    .itemInputs('8x gtceu:cellulose_dust')
    .outputFluids('gtceu:ethanol 3000')
    .perTick(true)
    .inputFluids('gtceu:blood_electrolytes 25')
    .duration(600)
    .EUt(480)
    .cleanroom(CleanroomType.STERILE_CLEANROOM)

    //return to sender

    GTM.biomechanical_recycler('amino_acid_solution_recycling')
    .inputFluids('gtceu:amino_acid_solution 4000')
    .outputFluids('gtceu:ammonia 2000', 'gtceu:acetic_acid 1000', 'minecraft:water 1000')
    .itemOutputs('2x gtceu:carbon_dust')
    .perTick(true)
    .inputFluids('gtceu:blood_electrolytes 25')
    .duration(200)
    .EUt(240)

GTM.biomechanical_recycler('blood_electrolytes_recycling')
    .inputFluids('gtceu:blood_electrolytes 14000')
    .itemOutputs('3x gtceu:sodium_dust', '2x gtceu:potassium_dust', '2x gtceu:calcium_dust', 'gtceu:magnesium_dust', 'gtceu:phosphorus_dust')
    .outputFluids('minecraft:water 1000', 'gtceu:chlorine 4000')
    .perTick(true)
    .inputFluids('gtceu:blood_electrolytes 25')
    .duration(150)
    .EUt(240)
    
GTM.biomechanical_recycler('blood_proteins_recycling')
    .inputFluids('gtceu:blood_proteins 5000')
    .itemOutputs('2x gtceu:human_serum_albumin_dust', '2x gtceu:hemoglobin_dust', 'gtceu:fibrinogen_dust')
    .perTick(true)
    .inputFluids('gtceu:blood_electrolytes 25')
    .duration(300)
    .EUt(480)

GTM.biomechanical_recycler('blood_plasma_recycling')
    .inputFluids('gtceu:blood_plasma 10000')
    .outputFluids('minecraft:water 8000', 'gtceu:blood_proteins 1000', 'gtceu:blood_electrolytes 1000')
    .perTick(true)
    .inputFluids('gtceu:blood_electrolytes 25')
    .duration(250)
    .EUt(480)
   
   
// return from blood... to flesh alloy

event.custom(
    {
  "type": "biomancy:bio_brewing",
  "ingredients": [
    {
      "item": "gtceu:collagen_dust"
    },
    {
      "item": "gtceu:stem_cells"
    },
    {
      "item": "gtceu:organism_amalgam"
    },
    {
      "item": "biomancy:creator_mix"
    }
  ],
  "nutrientsCost": 2,
  "processingTime": 20,
  "reactant": {
    "item": "gtceu:tungsten_steel_dust"
  },
  "result": {
    "item": "gtceu:flesh_alloy_dust"
  }})
   
const fleshAlloyParts = [
    ['small_gear', 'small_gear', 'small_flesh_alloy_gear', 1, 1],
    ['plate', 'plate', 'flesh_alloy_plate', 1, 1],
    ['double_plate', 'plate', 'double_flesh_alloy_plate', null, 1],
    ['nugget', 'nugget', 'flesh_alloy_nugget', 1, 9],
    ['ingot', 'ingot', 'flesh_alloy_ingot', 1, 1],
    ['gear', 'gear', 'flesh_alloy_gear', 4, 1],
]

fleshAlloyParts.forEach((entry) => {
    let part = entry[0]
    let mold = entry[1]
    let itemName = entry[2]
    let inputCount = entry[3] || 1
    let outputCount = entry[4] || 1

    
    let recipe = GTM.biomechanical_extruder(`flesh_alloy_${part}`)
        .duration(40)
        .perTick(true)
        .inputFluids('gtceu:blood_electrolytes 100')
        .perTick(false)
        .EUt(GTValues.VA[GTValues.IV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
    
    if (part === 'double_plate') {
        recipe.itemInputs('2x gtceu:flesh_alloy_plate')
    } else {
        recipe.itemInputs(`${inputCount}x gtceu:flesh_alloy_dust`)
    }
    
    recipe.itemOutputs(`${outputCount}x gtceu:${itemName}`)
    recipe.notConsumable(`gtceu:${mold}_casting_mold`)
})

GTM.biomechanical_extruder('flesh_alloy_rod')
.itemInputs('gtceu:flesh_alloy_dust')
.notConsumable('gtceu:rod_extruder_mold')
.itemOutputs('2x gtceu:flesh_alloy_rod')
.perTick(true)
.inputFluids('gtceu:blood_electrolytes 100')
.duration(40)
.EUt(GTValues.VA[GTValues.IV])
.cleanroom(CleanroomType.STERILE_CLEANROOM)
   
GTM.biomechanical_extruder('flesh_alloy_casing')
.itemInputs('gtceu:tungsten_steel_frame', '4x gtceu:flesh_alloy_plate', '4x gtceu:flesh_alloy_rod')
.notConsumable('gtceu:block_extruder_mold')
.itemOutputs('2x gtceu:flesh_alloy_casing')
.perTick(true)
.inputFluids('gtceu:blood_electrolytes 100')
.duration(100)
.EUt(8192)
.cleanroom(CleanroomType.STERILE_CLEANROOM)

GTM.assembly_line('organism_assembly_line')
.itemInputs('2x gtceu:flesh_alloy_casing', '24x gtceu:flesh_alloy_plate', '16x gtceu:flesh_alloy_rod', '12x gtceu:double_flesh_alloy_plate', 'biomancy:bio_forge', 'biomancy:bio_lab', 'biomancy:primordial_cradle', '64x gtceu:stem_cells', '8x createbb:blue_meth')
.inputFluids('gtceu:artificial_blood 8000', 'gtceu:sterilized_growth_medium 6000', 'gtceu:mutagen 4000', 'gtceu:polybenzimidazole 2500')
.itemOutputs('gtceu:organism_assembly_line')
.duration(12000)
.EUt(GTValues.VA[GTValues.LuV])
["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:luv_biomechanical_extruder')).EUt(GTValues.VA[GTValues.IV]).duration(2400))
   
GTM.star_forge('recipe_test')
.itemInputs('2x gtceu:flesh_alloy_casing', '24x gtceu:flesh_alloy_plate', '16x gtceu:flesh_alloy_rod', '12x gtceu:double_flesh_alloy_plate', 'biomancy:bio_forge', 'biomancy:bio_lab', 'biomancy:primordial_cradle', '64x gtceu:stem_cells', '8x createbb:blue_meth')
.inputFluids('gtceu:artificial_blood 8000', 'gtceu:sterilized_growth_medium 6000', 'gtceu:mutagen 4000', 'gtceu:polybenzimidazole 2500')
.itemOutputs('gtceu:organism_assembly_line')
.duration(2000)
.EUt(GTValues.VA[GTValues.LuV])
.cleanroom(CleanroomType.STERILE_CLEANROOM)
   

const nutrientRecipes = [
["minecraft:bamboo", 2, 260, 1],
["minecraft:big_dripleaf", 3, 464, 4],
["minecraft:brown_mushroom_block", 3, 541, 6],
["minecraft:cactus", 3, 332, 2],
["minecraft:cake", 2, 673, 12],
["minecraft:carved_pumpkin", 2, 232, 2],
["minecraft:cocoa_beans", 3, 524, 4],
["minecraft:crimson_fungus", 2, 409, 3],
["minecraft:crimson_roots", 2, 332, 2],
["minecraft:dried_kelp_block", 2, 528, 9],
["minecraft:egg", 2, 220, 1],
["minecraft:fern", 2, 200, 1],
["minecraft:grass", 2, 200, 1],
["minecraft:hanging_roots", 2, 200, 1],
["minecraft:hay_block", 2, 658, 9],
["minecraft:honeycomb", 2, 409, 3],
["minecraft:kelp", 3, 235, 1],
["minecraft:large_fern", 2, 332, 2],
["#minecraft:leaves", 2, 225, 1],
["minecraft:lily_pad", 2, 332, 2],
["minecraft:melon", 3, 702, 14],
["minecraft:moss_block", 3, 352, 2],
["minecraft:moss_carpet", 2, 180, 1],
["minecraft:mushroom_stem", 3, 332, 2],
["#forge:mushrooms", 2, 409, 3],
["minecraft:nether_sprouts", 2, 332, 2],
["minecraft:nether_wart", 2, 292, 2],
["minecraft:nether_wart_block", 16, 750, 18],
["minecraft:pumpkin", 3, 541, 6],
["minecraft:red_mushroom_block", 3, 541, 6],
["#minecraft:saplings", 2, 215, 1],
["minecraft:sea_pickle", 2, 409, 3],
["minecraft:seagrass", 2, 200, 1],
["#forge:seeds", 2, 240, 1],
["minecraft:shroomlight", 3, 464, 4],
["minecraft:small_dripleaf", 2, 332, 2],
["#minecraft:small_flowers", 2, 180, 1],
["minecraft:sniffer_egg", 3, 541, 6],
["minecraft:sugar_cane", 2, 220, 1],
["#minecraft:tall_flowers", 2, 332, 2],
["minecraft:tall_grass", 2, 332, 2],
["minecraft:turtle_egg", 2, 332, 2],
["minecraft:twisting_vines", 2, 332, 2],
["minecraft:vine", 2, 200, 1],
["minecraft:warped_fungus", 2, 409, 3],
["minecraft:warped_roots", 2, 332, 2],
["minecraft:warped_wart_block", 3, 409, 3],
["minecraft:weeping_vines", 2, 332, 2],
["minecraft:wheat", 2, 200, 1]
];
   
nutrientRecipes.forEach((entry) => {
let input = entry[0]
let nutrientsCost = entry[1]
let processingTime = entry[2]
let outputCount = entry[3]

let recipeId = input.replace('#', '');
GTM.biomechanical_recycler(`${recipeId}_recycling`)
.itemInputs(input)
.perTick(true)
.inputFluids(`gtceu:blood_electrolytes ${nutrientsCost*5}`)
.perTick(false)
.itemOutputs(`${outputCount}x biomancy:nutrient_paste`)
.duration(5 ** Math.log10(processingTime))
.EUt(2048 * (Math.log10(processingTime)-1.5))
})

GTM.electrolyzer('blood_recycling')
.inputFluids('gtceu:natural_blood 1000')
.outputFluids('gtceu:blood_plasma 550', 'water 450')
.duration(100)
.EUt(512)

GTM.extractor('blood_extraction')
.itemOutputs('undergarden:blood_globule')
.outputFluids('gtceu:natural_blood 250')
.duration(100)
.EUt(512)

event.shaped('2x gtceu:sterilizing_filter_casing', 
    [
    'LEL',
    'FBF',
    "MTR"
    ], {
    L: 'gtceu:polybenzimidazole_large_fluid_pipe',
    E: "gtceu:luv_emitter",
    F: "gtceu:item_filter",
    B: "gtceu:blacklight",
    M: "gtceu:luv_electric_motor",
    T: "gtceu:trinium_frame",
    R: "gtceu:hssd_rotor"
    }).id('gtceu:shaped/filter_casing_sterile')

GTM.star_forge('filter_casing_sterile')
.itemInputs('32x gtceu:polybenzimidazole_small_fluid_pipe', '16x gtceu:luv_emitter', '32x gtceu:item_filter', '16x gtceu:blacklight', '16x gtceu:luv_electric_motor', '16x gtceu:trinium_frame', '16x gtceu:hssd_rotor')
.inputFluids('gtceu:artificial_blood 5000')
.itemOutputs('16x gtceu:sterilizing_filter_casing')
.duration(1600)
.EUt(131072)

GTM.star_forge('filter_casing')
.itemInputs('48x iron_bars', '48x gtceu:item_filter', '16x gtceu:lv_electric_motor', '16x gtceu:nexus_steel_frame', '16x gtceu:nexus_steel_rotor')
.inputFluids('gtceu:artificial_blood 2000')
.itemOutputs('16x gtceu:filter_casing')
.duration(1600)
.EUt(8192)

GTM.star_forge('incubation_chamber')
.itemInputs('gtceu:chemical_reaction_vat', '48x gtceu:flesh_alloy_plate', '24x gtceu:flesh_alloy_rod', '16x #gtceu:circuits/luv', '2x gtceu:luv_world_accelerator')
.inputFluids('gtceu:artificial_blood 10000', 'gtceu:mutagen 6000', 'gtceu:polyethyl_cyanoacrylate 4000', 'gtceu:trinium 2500')
.itemOutputs('gtceu:incubation_chamber')
.duration(1600)
.EUt(131072)
.cleanroom(CleanroomType.STERILE_CLEANROOM)
















    //PECA (thank you monifactory)
event.recipes.gtceu.chemical_reactor("sodium_cyanide")
        .inputFluids("gtceu:hydrogen_cyanide 1000")
        .itemInputs("gtceu:sodium_hydroxide_dust")
        .outputFluids("minecraft:water 1000")
        .itemOutputs("gtceu:sodium_cyanide_dust")
        .duration(50)
        .EUt(GTValues.VHA[GTValues.HV])

    event.recipes.gtceu.chemical_reactor("chloroacetic_mixture")
        .notConsumableFluid("gtceu:acetic_anhydride 500")
        .inputFluids("gtceu:acetic_acid 1000", "gtceu:chlorine 3000")
        .outputFluids("gtceu:chloroacetic_mixture 1000")
        .duration(20)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.distillation_tower("chloroacetate_distillation")
        .inputFluids("gtceu:chloroacetic_mixture 2000")
        .itemOutputs("gtceu:small_chloroacetate_dust")
        .outputFluids("gtceu:dichloroacetate 500", "gtceu:trichloroacetate 250", "gtceu:hydrochloric_acid 1000")
        .duration(200)
        .EUt(GTValues.VHA[GTValues.IV])

    event.recipes.gtceu.large_chemical_reactor("cyanoacetic_acid")
        .itemInputs("gtceu:chloroacetate_dust", "gtceu:sodium_cyanide_dust")
        .inputFluids("gtceu:hydrochloric_acid 1000", "gtceu:oxygen 500")
        .itemOutputs("gtceu:cyanoacetic_acid_dust", "gtceu:sodium_hydroxide_dust")
        .outputFluids("gtceu:chlorine 2000")
        .duration(600)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.chemical_reactor("ethyl_cyanoacetate")
        .notConsumableFluid("gtceu:fluoroantimonic_acid 2000")
        .inputFluids("gtceu:ethanol 1000")
        .itemInputs("gtceu:cyanoacetic_acid_dust")
        .outputFluids("gtceu:ethyl_cyanoacetate 1000", "minecraft:water 1000")
        .duration(360)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.chemical_reactor("uncracked_ethyl_cyanoacrylate")
        .inputFluids("gtceu:ethyl_cyanoacetate 1000", "gtceu:formaldehyde 1000")
        .outputFluids("gtceu:uncracked_ethyl_cyanoacrylate 1000", "minecraft:water 1000")
        .duration(800)
        .EUt(GTValues.VA[GTValues.HV])

    // Cracking recipes - CR
    event.recipes.gtceu.chemical_reactor("ethyl_cyanoacrylate_hydro")
        .inputFluids("gtceu:uncracked_ethyl_cyanoacrylate 500", "gtceu:hydrogen 3000")
        .outputFluids("gtceu:ethyl_cyanoacrylate 250")
        .duration(160)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor("ethyl_cyanoacrylate_steam")
        .inputFluids("gtceu:uncracked_ethyl_cyanoacrylate 1000", "gtceu:steam 1000")
        .outputFluids("gtceu:ethyl_cyanoacrylate 500")
        .duration(240)
        .EUt(GTValues.VA[GTValues.LV])

    // Cracking recipes - Cracker
    event.recipes.gtceu.cracker("ethyl_cyanoacrylate_hydro")
        .inputFluids("gtceu:uncracked_ethyl_cyanoacrylate 1000", "gtceu:hydrogen 6000")
        .outputFluids("gtceu:ethyl_cyanoacrylate 1000")
        .duration(160)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.cracker("ethyl_cyanoacrylate_steam")
        .inputFluids("gtceu:uncracked_ethyl_cyanoacrylate 1000", "gtceu:steam 1000")
        .outputFluids("gtceu:ethyl_cyanoacrylate 1000")
        .duration(240)
        .EUt(GTValues.VA[GTValues.HV])

    // Polymerization recipe
    event.recipes.gtceu.chemical_reactor("polyethyl_cyanoacrylate")
        .chancedFluidInput("gtceu:dimethyl_sulfoxide 200", 200, -40)
        .inputFluids("gtceu:ethyl_cyanoacrylate 144", "minecraft:water 1000")
        .itemOutputs("gtceu:polyethyl_cyanoacrylate_dust")
        .duration(300)
        .EUt(GTValues.VA[GTValues.LuV])

    // Polymerization recipe with distilled water
    event.recipes.gtceu.chemical_reactor("polyethyl_cyanoacrylate_distilled")
        .chancedFluidInput("gtceu:dimethyl_sulfoxide 200", 200, -40)
        .inputFluids("gtceu:ethyl_cyanoacrylate 96", "gtceu:distilled_water 1000")
        .itemOutputs("gtceu:polyethyl_cyanoacrylate_dust")
        .duration(300)
        .EUt(GTValues.VA[GTValues.LuV])

    // Dimethyl sulfoxide (catalyst) chain below
    event.recipes.gtceu.chemical_reactor("dimethyl_sulfoxide")
        .inputFluids("gtceu:dimethyl_sulfide 1000", "gtceu:nitrogen_dioxide 1000")
        .outputFluids("gtceu:dimethyl_sulfoxide 1000", "gtceu:nitric_oxide 1000")
        .duration(1000)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.chemical_reactor("dimethyl_sulfide")
        .notConsumable("gtceu:aluminium_dust")
        .inputFluids("gtceu:hydrogen_sulfide 1000", "gtceu:methanol 2000")
        .outputFluids("gtceu:dimethyl_sulfide 1000", "minecraft:water 2000")
        .duration(500)
        .EUt(GTValues.VHA[GTValues.LuV])

    // Uses for PECA with higher efficiency than PBI
    event.recipes.gtceu.bender("fluid_cell_peca")
        .itemInputs("gtceu:polyethyl_cyanoacrylate_plate")
        .itemOutputs("32x gtceu:fluid_cell")
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(12)

    event.recipes.gtceu.chemical_reactor("plastic_board_peca")
        .itemInputs("gtceu:polyethyl_cyanoacrylate_plate", "4x gtceu:copper_foil")
        .inputFluids("gtceu:sulfuric_acid 250")
        .itemOutputs("16x gtceu:plastic_circuit_board")
        .duration(500)
        .EUt(10)

    event.recipes.gtceu.assembler("duct_tape_peca")
        .itemInputs("gtceu:polyethyl_cyanoacrylate_foil", "gtceu:carbon_fiber_mesh")
        .inputFluids("gtceu:polyethylene 36")
        .itemOutputs("32x gtceu:duct_tape")
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])













































// END END game 

    let voltagetierexpensive = {
        "uev": "omnium",
        "uiv": "nullium",
        "uxv": "infinity"
    }
    Object.entries(voltagetierexpensive).forEach(([voltage, material]) => {

    event.replaceInput({id: `gtceu:shaped/${voltage}_machine_hull`}, 'gtceu:wood_plate', 'gtceu:polyethyl_cyanoacrylate_plate')
    event.replaceInput({id: `gtceu:shaped/${voltage}_machine_hull`}, '#forge:plates/iron', `gtceu:${material}_plate`)
    event.replaceInput({id: `gtceu:shaped/${voltage}_machine_hull`}, 'gtceu:red_alloy_single_cable', `gtceu:${material}_single_wire`)

    event.shaped(`gtceu:${voltage}_machine_casing`, [`MMM`, `MWM`, `MMM`], {M: `gtceu:${material}_plate`, W: "#forge:tools/wrenches"}).id(`gtceu:casing_${voltage}`)

    GTM.assembler(`casing_${voltage}`)
    .itemInputs(`8x gtceu:${material}_plate`,)
    .itemOutputs(`gtceu:${voltage}_machine_casing`)
    .circuit(8)
    .duration(50)
    .EUt(16)
    })

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:red_alloy_single_cable',
    'gtceu:tritanium_quadruple_cable'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:red_alloy_quadruple_cable',
    'gtceu:tritanium_hex_cable'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:tin_rotor',
    'gtceu:naquadah_alloy_rotor'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    '#forge:glass',
    'gtceu:fusion_glass'
    )
    
    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:copper_quadruple_wire',
    'gtceu:omnium_quadruple_wire'
    )
    
    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:copper_double_wire',
    'gtceu:omnium_double_wire'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:gold_single_wire',
    'gtceu:osmiridium_double_wire'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:iron_rod',
    'gtceu:vanadium_gallium_rod'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:lead_hex_wire',
    'gtceu:enriched_naquadah_trinium_europium_duranide_hex_wire'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:lead_octal_wire',
    'gtceu:enriched_naquadah_trinium_europium_duranide_octal_wire'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:lead_quadruple_wire',
    'gtceu:enriched_naquadah_trinium_europium_duranide_quadruple_wire'
    )
    
    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:lead_double_wire',
    'gtceu:enriched_naquadah_trinium_europium_duranide_double_wire'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:tin_single_wire',
    'gtceu:tritanium_single_wire'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:bronze_normal_fluid_pipe',
    'gtceu:neutronium_normal_fluid_pipe'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    'gtceu:iron_plate',
    'gtceu:omnium_plate'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    '#forge:chests/wooden',
    'gtceu:uv_quantum_chest'
    )

    event.replaceInput(
    { output: /gtceu:uev_.*(_.*)?/ },
    "gtceu:bronze_buzz_saw_blade",
    "gtceu:neutronium_buzz_saw_blade"
    )

    event.remove({output: /gtceu:(uhv|uev)_transformer_(1a|2a|4a|8a|16a)/})







    // shitpost

    GTM.metaphysical_metallurgy_tainter('radioactive_bronze_generation')
    .itemInputs('gtceu:bronze_ingot')
    .itemOutputs('gtceu:radioactive_bronze_ore_ore')
    .duration(1)
    .EUt(34359738352)







})