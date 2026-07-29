ServerEvents.recipes(biomanced =>{
const GTM = biomanced.recipes.gtceu
// blood chain

GTM.mixer('blood_electrolytes_synthesis')
    .itemInputs('3x gtceu:sodium_dust', '2x gtceu:potassium_dust', '2x gtceu:calcium_dust', 'gtceu:magnesium_dust', 'gtceu:phosphorus_dust')
    .inputFluids('minecraft:water 1000', 'gtceu:chlorine 4000')
    .outputFluids('gtceu:blood_electrolytes 14000')
    .duration(20)
    .EUt(480)

GTM.biomechanical_mixer('amino_acid_solution')
    .inputFluids('gtceu:ammonia 2000', 'gtceu:acetic_acid 1000', 'minecraft:water 1000')
    .perTick(true)
    .inputFluids('gtceu:blood_electrolytes 25')
    .perTick(false)
    .itemInputs('2x gtceu:carbon_dust')
    .outputFluids('gtceu:amino_acid_solution 4000')
    .duration(300)
    .EUt(480)
    .cleanroom(CleanroomType.STERILE_CLEANROOM)

GTM.biomechanical_mixer('human_serum_albumin_synthesis')
    .inputFluids('gtceu:amino_acid_solution 4000')
    .perTick(true)
    .inputFluids('gtceu:blood_electrolytes 25')
    .perTick(false)
    .itemInputs('2x gtceu:sulfur_dust', 'gtceu:zinc_dust')
    .itemOutputs('4x gtceu:human_serum_albumin_dust')
    .duration(800)
    .EUt(1920)
    .cleanroom(CleanroomType.STERILE_CLEANROOM)

GTM.biomechanical_mixer('hemoglobin_synthesis')
    .inputFluids('gtceu:amino_acid_solution 6000', 'gtceu:oxygen 2000', 'gtceu:nitrogen 4000')
    .perTick(true)
    .inputFluids('gtceu:blood_electrolytes 25')
    .perTick(false)
    .itemInputs('4x gtceu:iron_dust')
    .itemOutputs('4x gtceu:hemoglobin_dust')
    .duration(1000)
    .EUt(1920)
    .cleanroom(CleanroomType.STERILE_CLEANROOM)

GTM.biomechanical_mixer('fibrinogen_synthesis')
    .inputFluids('gtceu:amino_acid_solution 5000')
    .perTick(true)
    .inputFluids('gtceu:blood_electrolytes 25')
    .perTick(false)
    .itemInputs('gtceu:calcium_dust', '2x gtceu:phosphorus_dust')
    .itemOutputs('4x gtceu:fibrinogen_dust')
    .duration(600)
    .EUt(1920)
    .cleanroom(CleanroomType.STERILE_CLEANROOM)

GTM.biomechanical_mixer('blood_proteins_mixing')
    .perTick(true)
    .inputFluids('gtceu:blood_electrolytes 25')
    .perTick(false)
    .itemInputs('2x gtceu:human_serum_albumin_dust', '2x gtceu:hemoglobin_dust', 'gtceu:fibrinogen_dust')
    .outputFluids('gtceu:blood_proteins 5000')
    .duration(400)
    .EUt(480)
    .cleanroom(CleanroomType.STERILE_CLEANROOM)

GTM.biomechanical_mixer('blood_plasma_synthesis')
    .inputFluids('minecraft:water 8000', 'gtceu:blood_proteins 1000', 'gtceu:blood_electrolytes 1000')
    .perTick(true)
    .inputFluids('gtceu:blood_electrolytes 25')
    .perTick(false)
    .outputFluids('gtceu:blood_plasma 10000')
    .duration(400)
    .EUt(960)
    .cleanroom(CleanroomType.STERILE_CLEANROOM)

GTM.biomechanical_extruder('cellulose_extraction')
    .perTick(true)
    .inputFluids('gtceu:blood_electrolytes 25')
    .perTick(false)
    .itemInputs('16x minecraft:sugar_cane')
    .itemOutputs('8x gtceu:cellulose_dust')
    .duration(400)
    .EUt(120)
    .cleanroom(CleanroomType.STERILE_CLEANROOM)

// random heebie-jeebies
GTM.biomechanical_extruder('cellulose_to_paper')
    .inputFluids('minecraft:water 2000')
    .perTick(true)
    .inputFluids('gtceu:blood_electrolytes 25')
    .perTick(false)
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

GTM.biomechanical_mixer('artificial_blood')
    .inputFluids('gtceu:blood_plasma 5500', 'gtceu:blood_electrolytes 3500', 'water 1000')
    .outputFluids('gtceu:artificial_blood 10000')
    .perTick(true)
    .inputFluids('gtceu:blood_electrolytes 25')
    .duration(250)
    .EUt(480)
   
   
// return from blood... to flesh alloy

biomanced.custom(
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
   
const alloyParts = {
    flesh_alloy: [
        ['small_gear', 'small_gear', 1, 1],
        ['plate', 'plate', 1, 1],
        ['double_plate', null, 2, 1],
        ['nugget', 'nugget', 1, 9],
        ['gear', 'gear', 4, 1],
        ['rod', 'rod_extruder', 1, 2],
    ],
    sentient_alloy: [
        ['small_gear', 'small_gear', 1, 1],
        ['plate', 'plate', 1, 1],
        ['double_plate', null, 2, 1],
        ['nugget', 'nugget', 1, 9],
        ['gear', 'gear', 4, 1],
        ['rod', 'rod_extruder', 1, 2],
    ]
}

const getItemName = (alloy, part) => {
    if (part === 'small_gear') return `small_${alloy}_gear`
    if (part === 'double_plate') return `double_${alloy}_plate`
    return `${alloy}_${part}`
}

const getMoldName = (mold) => {
    if (mold === 'rod_extruder') return `gtceu:rod_extruder_mold`
    return `gtceu:${mold}_casting_mold`
}

Object.entries(alloyParts).forEach(([alloy, parts]) => {
    parts.forEach(([part, mold, inputCount, outputCount]) => {
        const ingotInput = inputCount || 1
        const itemName = getItemName(alloy, part)
        const isDoublePlate = part === 'double_plate'

        const recipe = GTM.biomechanical_extruder(`${alloy}_${part}`)
            .duration(40)
            .perTick(true)
            .inputFluids('gtceu:blood_electrolytes 100')
            .perTick(false)
            .EUt(GTValues.VA[GTValues.IV])
            .cleanroom(CleanroomType.STERILE_CLEANROOM)
            .itemInputs(isDoublePlate
                ? `${ingotInput}x gtceu:${alloy}_plate`
                : `${ingotInput}x gtceu:${alloy}_ingot`)
            .itemOutputs(`${outputCount || 1}x gtceu:${itemName}`)

        if (mold) recipe.notConsumable(getMoldName(mold))

        GTM.biomechanical_recycler(`${alloy}_${part}_recycle`)
            .itemInputs(`${outputCount || 1}x gtceu:${itemName}`)
            .itemOutputs(`${ingotInput}x gtceu:${alloy}_dust`)
            .duration(40)
            .perTick(true)
            .inputFluids('gtceu:blood_electrolytes 100')
    })
})

GTM.biomechanical_recycler('flesh_alloy_ingot_recycle')
.itemInputs('gtceu:flesh_alloy_ingot')
.itemOutputs('gtceu:flesh_alloy_dust')
.duration(40)
.perTick(true)
.inputFluids('gtceu:blood_electrolytes 100')

GTM.biomechanical_recycler('sentient_alloy_ingot_recycle')
.itemInputs('gtceu:sentient_alloy_ingot')
.itemOutputs('gtceu:sentient_alloy_dust')
.duration(50)
.perTick(true)
.inputFluids('gtceu:blood_electrolytes 125')

GTM.biomechanical_extruder('flesh_alloy_ingot')
.itemInputs('gtceu:flesh_alloy_dust')
.notConsumable('gtceu:ingot_extruder_mold')
.itemOutputs('gtceu:flesh_alloy_ingot')
.duration(40)
.perTick(true)
.inputFluids('gtceu:blood_electrolytes 100')

GTM.biomechanical_extruder('sentient_alloy_ingot')
.itemInputs('gtceu:sentient_alloy_dust')
.notConsumable('gtceu:ingot_extruder_mold')
.itemOutputs('gtceu:sentient_alloy_ingot')
.duration(50)
.perTick(true)
.inputFluids('gtceu:blood_electrolytes 125')

biomanced.remove({id: 'gtceu:biomechanical_recycler/flesh_alloy_dust_recycle'})
biomanced.remove({id: 'gtceu:biomechanical_recycler/sentient_alloy_dust_recycle'})
   
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
.itemInputs('2x gtceu:flesh_alloy_casing', '24x gtceu:flesh_alloy_plate', '16x gtceu:flesh_alloy_rod', '12x gtceu:double_flesh_alloy_plate', 'biomancy:bio_forge', 'biomancy:bio_lab', 'biomancy:primordial_cradle', '64x gtceu:stem_cells', '8x gtceu:crystal_methamphetamine_dust')
.inputFluids('gtceu:artificial_blood 8000', 'gtceu:sterilized_growth_medium 6000', 'gtceu:mutagen 4000', 'gtceu:polybenzimidazole 2500')
.itemOutputs('gtceu:organism_assembly_line')
.duration(12000)
.EUt(32768)
["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('biomancy:bio_lab')).EUt(GTValues.VA[GTValues.IV]).duration(2400))
   
GTM.organism_assembly_line('organism_assembly_line')
.itemInputs('2x gtceu:flesh_alloy_casing', '24x gtceu:flesh_alloy_plate', '16x gtceu:flesh_alloy_rod', '12x gtceu:double_flesh_alloy_plate', 'biomancy:bio_forge', 'biomancy:bio_lab', 'biomancy:primordial_cradle', '64x gtceu:stem_cells')
.inputFluids('gtceu:artificial_blood 8000', 'gtceu:sterilized_growth_medium 6000', 'gtceu:mutagen 4000', 'gtceu:polybenzimidazole 2500', 'gtceu:crystal_methamphetamine 1152')
.itemOutputs('gtceu:organism_assembly_line')
.duration(2000)
.EUt(2048)
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.stationResearch(global.OrganismAssemblyLineResearch(biomanced, 'organism_assembly_line', 'biomancy:bio_lab', 32, 51200, va.luv))

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
]
   
nutrientRecipes.forEach((entry) => {
const input = entry[0]
const nutrientsCost = entry[1]
const processingTime = entry[2]
const outputCount = entry[3]

const recipeId = input.replace('#', '')
GTM.biomechanical_recycler(`${recipeId}_recycling`)
.itemInputs(input)
.perTick(true)
.inputFluids(`gtceu:blood_electrolytes ${nutrientsCost*5}`)
.perTick(false)
.itemOutputs(`${outputCount}x biomancy:nutrient_paste`)
.duration(5 ** Math.log10(processingTime))
.EUt(2048 * (Math.log10(processingTime)))
})

GTM.electrolyzer('blood_recycling')
.inputFluids('gtceu:natural_blood 1000')
.outputFluids('gtceu:blood_plasma 550', 'water 450')
.duration(100)
.EUt(512)

GTM.extractor('blood_extraction')
.itemInputs('undergarden:blood_globule')
.outputFluids('gtceu:natural_blood 250')
.duration(100)
.EUt(512)
// --------------------------------------- test one
biomanced.shaped('2x gtceu:sterilizing_filter_casing', 
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

GTM.organism_assembly_line('filter_casing_sterile')
.itemInputs('32x gtceu:polybenzimidazole_small_fluid_pipe', '16x gtceu:luv_emitter', '32x gtceu:item_filter', '16x gtceu:blacklight', '16x gtceu:luv_electric_motor', '16x gtceu:trinium_frame', '16x gtceu:hssd_rotor')
.inputFluids('gtceu:artificial_blood 5000')
.itemOutputs('16x gtceu:sterilizing_filter_casing')
.duration(1600)
.EUt(131072)

GTM.organism_assembly_line('filter_casing')
.itemInputs('48x iron_bars', '48x gtceu:item_filter', '16x gtceu:lv_electric_motor', '16x gtceu:nexus_steel_frame', '16x gtceu:nexus_steel_rotor')
.inputFluids('gtceu:artificial_blood 2000')
.itemOutputs('16x gtceu:filter_casing')
.duration(1600)
.EUt(8192)

GTM.organism_assembly_line('incubation_chamber')
.itemInputs('gtceu:chemical_reaction_vat', '48x gtceu:flesh_alloy_plate', '24x gtceu:flesh_alloy_rod', '2x gtceu:zpm_world_accelerator', '16x #gtceu:circuits/zpm')
.inputFluids('gtceu:artificial_blood 10000', 'gtceu:mutagen 6000', 'gtceu:polyether_ether_ketone 4000', 'gtceu:trinium 2500')
.itemOutputs('gtceu:incubation_chamber')
.duration(1600)
.EUt(2097152)
.cleanroom(CleanroomType.STERILE_CLEANROOM)

//actual meth synthesis (what has my life came to)

GTM.chemical_reactor('methylamine_from_dimethylamine')
    .inputFluids('gtceu:dimethylamine 1000', 'gtceu:oxygen 1000')
    .outputFluids('gtceu:methylamine 1000', 'gtceu:formaldehyde 1000')
    .duration(240)
    .EUt(128)

GTM.large_chemical_reactor('phenylacetic_acid_from_toluene')
    .inputFluids('gtceu:toluene 1000', 'gtceu:carbon_monoxide 2000', 'gtceu:methanol 1000', 'gtceu:oxygen 500')
    .notConsumable('gtceu:palladium_dust')
    .outputFluids('gtceu:phenylacetic_acid 1000')
    .duration(500)
    .EUt(480)

GTM.large_chemical_reactor('phenylacetone_synthesis')
    .inputFluids('gtceu:phenylacetic_acid 1000', 'gtceu:acetic_anhydride 1000', 'gtceu:iron_iii_chloride 144')
    .outputFluids('gtceu:phenylacetone 1000', 'gtceu:acetic_acid 1000')
    .duration(400)
    .EUt(480)

GTM.large_chemical_reactor('blue_methamphetamine_synthesis')
    .inputFluids('gtceu:phenylacetone 1000', 'gtceu:methylamine 1000', 'gtceu:hydrogen 2000')
    .itemInputs('gtceu:cobalt_dust')
    .itemOutputs('4x gtceu:crystal_methamphetamine_dust')
    .duration(600)
    .EUt(480)

//return to idk

const animalspawnegglistforthereasonsaboveme = {
    // Passive
    allay: { drops: ['feather', 'glowstone_dust'], circuit: null },
    axolotl: { drops: ['tropical_fish', 'bone_meal'], circuit: null },
    bat: { drops: ['leather', 'feather'], circuit: 7 },
    camel: { drops: ['leather', 'wheat'], circuit: null },
    cat: { drops: ['string', 'leather'], circuit: 6 },
    chicken: { drops: ['feather', 'chicken'], circuit: 4 },
    cod: { drops: ['cod', 'bone_meal'], circuit: 5 },
    cow: { drops: ['leather', 'beef'], circuit: 1 },
    donkey: { drops: ['leather', 'sugar'], circuit: 2 },
    frog: { drops: ['slime_ball', 'lily_pad'], circuit: 10 },
    glow_squid: { drops: ['glow_ink_sac', 'ink_sac'], circuit: null },
    horse: { drops: ['leather', 'sugar'], circuit: 2 },
    llama: { drops: ['leather', 'string'], circuit: 6 },
    mooshroom: { drops: ['leather', 'beef'], circuit: 1 },
    mule: { drops: ['leather', 'sugar'], circuit: 2 },
    ocelot: { drops: ['string', 'feather'], circuit: 8 },
    parrot: { drops: ['feather', 'cookie'], circuit: null },
    pig: { drops: ['porkchop', 'leather'], circuit: 3 },
    pufferfish: { drops: ['pufferfish', 'bone_meal'], circuit: null },
    rabbit: { drops: ['rabbit', 'rabbit_hide'], circuit: null },
    salmon: { drops: ['salmon', 'bone_meal'], circuit: 9 },
    sheep: { drops: ['white_wool', 'mutton'], circuit: null },
    sniffer: { drops: ['torchflower_seeds', 'pitcher_pod'], circuit: null },
    snow_golem: { drops: ['snowball', 'pumpkin'], circuit: null },
    squid: { drops: ['ink_sac', 'cod'], circuit: null },
    strider: { drops: ['string', 'warped_fungus'], circuit: null },
    tadpole: { drops: ['slime_ball', 'lily_pad'], circuit: 10 },
    tropical_fish: { drops: ['tropical_fish', 'bone_meal'], circuit: null },
    turtle: { drops: ['seagrass', 'bowl'], circuit: null },
    villager: { drops: ['emerald', 'paper'], circuit: null },
    wandering_trader: { drops: ['emerald', 'lead'], circuit: null },
    
    // Neutral
    bee: { drops: ['honeycomb', 'honey_bottle'], circuit: null },
    cave_spider: { drops: ['string', 'spider_eye'], circuit: 11 },
    dolphin: { drops: ['cod', 'prismarine_shard'], circuit: null },
    enderman: { drops: ['ender_pearl', 'obsidian'], circuit: null },
    fox: { drops: ['sweet_berries', 'feather'], circuit: null },
    goat: { drops: ['mutton', 'milk_bucket'], circuit: null },
    iron_golem: { drops: ['iron_ingot', 'poppy'], circuit: null },
    panda: { drops: ['bamboo', 'slime_ball'], circuit: null },
    piglin: { drops: ['gold_ingot', 'golden_sword'], circuit: null },
    polar_bear: { drops: ['cod', 'salmon'], circuit: null },
    spider: { drops: ['string', 'spider_eye'], circuit: 11 },
    trader_llama: { drops: ['leather', 'string'], circuit: 6 },
    wolf: { drops: ['bone', 'leather'], circuit: null },
    zombified_piglin: { drops: ['gold_nugget', 'rotten_flesh'], circuit: null },
    
    // Hostile
    blaze: { drops: ['blaze_rod', 'blaze_powder'], circuit: null },
    creeper: { drops: ['gunpowder', 'string'], circuit: null },
    drowned: { drops: ['rotten_flesh', 'copper_ingot'], circuit: null },
    elder_guardian: { drops: ['sponge', 'prismarine_shard'], circuit: null },
    endermite: { drops: ['ender_pearl', 'sand'], circuit: null },
    evoker: { drops: ['totem_of_undying', 'emerald'], circuit: null },
    ghast: { drops: ['ghast_tear', 'gunpowder'], circuit: null },
    guardian: { drops: ['prismarine_shard', 'prismarine_crystals'], circuit: null },
    hoglin: { drops: ['porkchop', 'leather'], circuit: 3 },
    husk: { drops: ['rotten_flesh', 'iron_ingot'], circuit: 12 },
    magma_cube: { drops: ['magma_cream', 'blaze_powder'], circuit: null },
    phantom: { drops: ['phantom_membrane', 'bone'], circuit: null },
    piglin_brute: { drops: ['gold_ingot', 'golden_axe'], circuit: null },
    pillager: { drops: ['arrow', 'crossbow'], circuit: null },
    ravager: { drops: ['saddle', 'iron_ingot'], circuit: null },
    shulker: { drops: ['shulker_shell', 'chorus_fruit'], circuit: null },
    silverfish: { drops: ['stone', 'cobblestone'], circuit: null },
    skeleton: { drops: ['bone', 'arrow'], circuit: null },
    skeleton_horse: { drops: ['bone', 'saddle'], circuit: null },
    slime: { drops: ['slime_ball', 'dirt'], circuit: null },
    stray: { drops: ['bone', 'string'], circuit: null },
    vex: { drops: ['feather', 'redstone'], circuit: null },
    vindicator: { drops: ['emerald', 'iron_ingot'], circuit: null },
    warden: { drops: ['sculk_catalyst', 'echo_shard'], circuit: null },
    witch: { drops: ['glass_bottle', 'redstone'], circuit: null },
    wither_skeleton: { drops: ['coal', 'wither_skeleton_skull'], circuit: null },
    zoglin: { drops: ['rotten_flesh', 'porkchop'], circuit: null },
    zombie: { drops: ['rotten_flesh', 'iron_ingot'], circuit: 12 },
    zombie_horse: { drops: ['rotten_flesh', 'bone'], circuit: null },
    zombie_villager: { drops: ['rotten_flesh', 'iron_ingot'], circuit: 12 },
}

Object.entries(animalspawnegglistforthereasonsaboveme).forEach(([victim, data]) => {
    const { drops, circuit } = data  // Extract from the value object
    
    const recipe = GTM.assembler(`${victim}_spawn_egg_assembly`)
        .itemInputs('minecraft:egg', `4x ${drops[0]}`, `4x ${drops[1]}`)
        .itemOutputs(`minecraft:${victim}_spawn_egg`)
        .duration(2000)
        .EUt(32)

    if (circuit !== null) {
        recipe.circuit(circuit)
    }

    const recipe2 = GTM.spawn_simulator(`${victim}_spawn_egg_incubation`)
        .itemInputs('2x minecraft:egg', `6x ${drops[0]}`, `6x ${drops[1]}`)
        .itemOutputs(`2x minecraft:${victim}_spawn_egg`)
        .inputFluids('gtceu:artificial_blood 1000')
        .perTick(true)
        .inputFluids('gtceu:blood_electrolytes 100')
        .perTick(false)
        .duration(100)
        .EUt(2048)

    if (circuit !== null) {
        recipe2.circuit(circuit)
    }
})

GTM.mixer('organism_amalgam')
.itemInputs('biomancy:flesh_bits', 'biomancy:elastic_fibers', 'biomancy:tough_fibers', 'biomancy:withering_ooze', 'biomancy:toxin_extract', 'biomancy:volatile_fluid')
.itemOutputs('3x gtceu:organism_amalgam')
.cleanroom(CleanroomType.CLEANROOM)
.duration(200)
.EUt(512)

GTM.biomechanical_mixer('organism_amalgam')
.itemInputs('biomancy:flesh_bits', 'biomancy:elastic_fibers', 'biomancy:tough_fibers', 'biomancy:withering_ooze', 'biomancy:toxin_extract', 'biomancy:volatile_fluid')
.itemOutputs('9x gtceu:organism_amalgam')
.perTick(true)
.inputFluids('gtceu:blood_electrolytes 100')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.duration(200)
.EUt(8192)

GTM.organism_assembly_line('organism_glass')
.itemInputs('8x gtceu:laminated_glass', '1x gtceu:flesh_alloy_plate')
.itemOutputs('8x gtceu:organism_glass')
.inputFluids('gtceu:artificial_blood 500')
.perTick(true)
.inputFluids('gtceu:blood_electrolytes 100')
.duration(80)
.EUt(8192)

for (let i = 0; i <= 6; i++) {
    var cardiffteeth = Math.pow(2, i)
    GTM.organism_incubation_chamber(`stem_cell_incubation_${i}`)
    .notConsumable(`${cardiffteeth}x gtceu:stem_cells`)
    .itemOutputs(`${cardiffteeth}x gtceu:stem_cells`)
    .inputFluids('gtceu:artificial_blood 100')
    .duration(600 + (i * 3))
    .EUt(32768)
    .circuit(i/2)
}

const biologicalshitafoo = {
    fibrinogen : 256,
    hemoglobin: 160,
    human_serum_albumin: 64
}

Object.entries(biologicalshitafoo).forEach(([type, stemcellsnackagobbergoo]) => {
const time = (stemcellsnackagobbergoo**0.75)*2
GTM.organism_incubation_chamber(`${type}_incubation`)
.notConsumable(`4x gtceu:${type}_dust`)
.itemInputs(`${stemcellsnackagobbergoo}x gtceu:stem_cells`)
.itemOutputs(`4x gtceu:${type}_dust`)
.inputFluids('gtceu:artificial_blood 100')
.duration(time)
.EUt(32768)
})
biomanced.replaceOutput(
    {type: 'gtceu:arc_furnace'},
    'gtceu:flesh_alloy_ingot',
    'gtceu:dark_ash_dust'
)

biomanced.replaceOutput(
    {type: 'gtceu:arc_furnace'},
    'gtceu:flesh_alloy_nugget',
    'gtceu:tiny_dark_ash_dust'
)

GTM.biomechanical_mixer('flesh_alloy')
.itemInputs('2x gtceu:tungsten_steel_dust', 'gtceu:collagen_dust', '2x gtceu:organism_amalgam', '12x gtceu:stem_cells', '2x biomancy:creator_mix')
.perTick(true)
.inputFluids('gtceu:artificial_blood 10')
.perTick(false)
.itemOutputs('6x gtceu:flesh_alloy_dust')
.duration(400)
.EUt(122880)
})