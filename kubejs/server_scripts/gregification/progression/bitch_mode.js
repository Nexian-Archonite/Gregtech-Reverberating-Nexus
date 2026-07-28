//packmode: easy
ServerEvents.recipes(event => {
    const GTM = event.recipes.gtceu
    const CRT = event.recipes.create
    event.shaped(
    '3x gtceu:small_andesite_dust',
    [
        ' H ',
        ' A ',
        '   '
    ], {
    H: '#forge:tools/mortars',
    A: 'minecraft:andesite'
    })

    event.shaped(
    '3x gtceu:andesite_dust',
    [
        ' A ',
        'AHA',
        ' A '
    ], {
    H: '#forge:tools/mortars',
    A: 'minecraft:andesite'
    })

    event.shaped(
    'kubejs:compressed_cobblestone', 
    [
        'GCG',
        'CCC',
        'GCG'
    ], {
    C: 'cobblestone',
    G: "gravel"
    })

    event.shaped(
    'gtceu:stone_plate',
    [
        ' H ',
        ' S ',
        ' S '
    ], {
    H: '#forge:tools/hammers',
    S: 'minecraft:stone'
    })

    event.shaped(
    '2x gtceu:stone_rod',
    [
        'F  ' ,
        ' S ',
        '   '
    ], {
    F: '#forge:tools/files',
    S: 'minecraft:stone'
    })

    event.shapeless(Item.of('8x gtceu:andesite_alloy_dust'),
    [
        '4x gtceu:andesite_dust',
        '4x gtceu:iron_dust',
        'kubejs:primitive_glue_tube'
    ]).damageIngredient('kubejs:primitive_glue_tube')


    event.shaped(
    'gtceu:treated_wood_plate', [
        'SSS'
    ], {
        S: 'gtceu:treated_wood_slab'
    })

event.shapeless(Item.of('4x kubejs:primitive_glue_tube'), [
    '2x #forge:flour',
    'kubejs:boiling_water_bucket',
    '4x kubejs:empty_glue_tube',
    '2x minecraft:sugar' 
]).replaceIngredient('kubejs:boiling_water_bucket', 'minecraft:water_bucket')

event.shapeless('quark:blackstone_furnace', [
'minecraft:furnace'
])

event.shapeless('quark:deepslate_furnace', [
'quark:blackstone_furnace'
])

event.shapeless('minecraft:furnace', [
'quark:deepslate_furnace'
])

event.shapeless('minecraft:furnace', [
'quark:blackstone_furnace'
])

event.shapeless('4x minecraft:gravel', [
'dirt',
'cobblestone'
])

event.shaped(Item.of('4x kubejs:empty_glue_tube'), [
' C ',
'ALS',
' L '
], {
A: '#gtceu:tools/crafting_knives',
S: '#forge:tools/saws',
L: '#minecraft:logs',
C: '#forge:glass'
})


event.recipes.create.compacting('gtceu:compressed_fireclay', ['gtceu:fireclay_dust', Fluid.of('minecraft:water 125')])

event.shaped(Item.of('2x gtceu:magikstone_casing'), [
'PHP',
'PFP',
"PWP"
], {
P: 'gtceu:condensed_mana_plate',
F: 'gtceu:source_frame',
H: '#forge:tools/hammers',
W: '#forge:tools/wrenches'
})

event.campfireCooking('kubejs:boiling_water_bucket', 'minecraft:water_bucket', 0, 600)
event.campfireCooking('minecraft:torch', 'minecraft:stick', 0, 100)
event.campfireCooking('minecraft:stone', 'minecraft:cobblestone', 0, 200)
event.campfireCooking('gtceu:wrought_iron_ingot', 'minecraft:iron_ingot', 1, 200)

event.smelting('minecraft:leather', 'minecraft:brown_mushroom_block', 0.1, 100)
event.smelting('minecraft:leather', 'minecraft:red_mushroom_block', 0.1, 100)
event.blasting('4x quark:clear_shard', '#forge:sandstone', 0, 200)
event.smelting('3x glass_pane', '#minecraft:smelts_to_glass', 0, 60)

event.shaped('minecraft:red_mushroom_block', [
'MM',
'MM'
], {
M: "minecraft:red_mushroom"
})

event.shaped('minecraft:brown_mushroom_block', [
'MM',
'MM'
], {
M: "minecraft:brown_mushroom"
})

ferricminerals.forEach((type) => {
    event.campfireCooking('iron_ingot', new RegExp(`^(gtceu|minecraft):raw_${type}$`), 0.15, 160)
    event.campfireCooking('iron_ingot', new RegExp(`^(gtceu|minecraft):${type}_dust$`), 0.15, 160)
    event.campfireCooking('6x iron_nugget', `gtceu:crushed_${type}_ore`, 0.1, 120)
})
event.shaped('4x kubejs:glass_ampule', [
'P',
'P'
], {
P: '#forge:glass_panes'
})

event.shaped('gtceu:charged_certus_quartz_block', [
'GG',
'GG'
], {
G: 'gtceu:charged_certus_quartz_gem'
}).id('gtceu:shaped/block_compress_charged_certus_quartz')

event.shapeless('4x gtceu:charged_certus_quartz_gem', [
'gtceu:charged_certus_quartz_block'
]).id('gtceu:shapeless/block_decompress_charged_certus_quartz')

event.shapeless('gtceu:manasteel_ingot', ['botania:manasteel_ingot'])
event.shapeless('gtceu:source_gem', ['ars_nouveau:source_gem'])




event.shaped('2x gtceu:bronze_gearbox', [
'PHP',
'GFG',
'PWP'
], {
P: 'gtceu:bronze_plate',
H: '#forge:tools/hammers',
G: 'gtceu:bronze_gear',
F: 'gtceu:bronze_frame',
W: "#forge:tools/wrenches"
}).id('gtceu:shaped/casing_bronze_gearbox')

event.shaped('2x gtceu:bronze_pipe_casing', [
'PGP',
'GFG',
'PGP'
], {
P: 'gtceu:bronze_plate',
G: 'gtceu:bronze_normal_fluid_pipe',
F: 'gtceu:bronze_frame',
}).id('gtceu:shaped/casing_bronze_pipe')

event.shaped('2x gtceu:bronze_firebox_casing', [
'PGP',
'GFG',
'PGP'
], {
P: 'gtceu:bronze_plate',
G: 'gtceu:bronze_rod',
F: 'gtceu:bronze_frame',
}).id('gtceu:shaped/casing_bronze_firebox')

event.shaped('6x gtceu:bronze_gearbox', [
'PHP',
'GFG',
'PWP'
], {
P: 'gtceu:igneous_bronze_plate',
H: '#forge:tools/hammers',
G: 'gtceu:igneous_bronze_gear',
F: 'gtceu:igneous_bronze_frame',
W: "#forge:tools/wrenches"
}).id('gtceu:shaped/casing_igneous_bronze_gearbox')

event.shaped('6x gtceu:bronze_pipe_casing', [
'PGP',
'GFG',
'PGP'
], {
P: 'gtceu:igneous_bronze_plate',
G: 'gtceu:igneous_bronze_normal_fluid_pipe',
F: 'gtceu:igneous_bronze_frame',
}).id('gtceu:shaped/casing_igneous_bronze_pipe')

event.shaped('6x gtceu:bronze_firebox_casing', [
'PGP',
'GFG',
'PGP'
], {
P: 'gtceu:igneous_bronze_plate',
G: 'gtceu:igneous_bronze_rod',
F: 'gtceu:igneous_bronze_frame',
}).id('gtceu:shaped/casing_igneous_bronze_firebox')

event.campfireCooking('gtceu:coke_oven_brick', 'gtceu:compressed_coke_clay', 0.1, 220)
event.blasting('smooth_stone', 'cobblestone', 0, 100)
event.blasting('smooth_stone', 'stone', 0, 40)

event.shaped('gtceu:rubber_plate', [
'H',
'R',
'R'
], {
H: '#forge:tools/hammers',
R: 'gtceu:sticky_resin'
})

event.shaped('4x farmersdelight:rich_soil', [
' L ',
'LBL',
' L '
], {
L: 'farmersdelight:organic_compost',
B: 'lapis_lazuli'
})

event.shapeless('stone_button', ['stone'])

event.shaped('gtceu:primitive_coking_array', [
'BHB',
'DCD',
'BWB'
], {
B: 'gtceu:coke_oven_bricks',
H: '#forge:tools/hammers',
D: 'gtceu:wood_drum',
C: 'gtceu:coke_oven',
W: '#forge:tools/wrenches'
})
// G - R - E - G - T - E - C - H from here


GTM.electrolyzer(('decomposition_electrolyzing_sculk'))
.itemInputs('gtceu:sculk_dust')
.itemOutputs('gtceu:deepslate_dust', 'gtceu:echo_dust')
.duration(20)
.EUt(16)

GTM.fluid_solidifier(('echo_shard_catalyst_crystalizing'))
.notConsumable('minecraft:echo_shard')
.inputFluids('#forge:experience 50')
.itemOutputs('2x minecraft:echo_shard')
.duration(20)
.EUt(16)

GTM.forming_press(('sheep_spawn_egg'))
.itemInputs('8x minecraft:mutton', 'egg')
.itemOutputs('minecraft:sheep_spawn_egg')
.duration(10)
.EUt(16)

GTM.forming_press(('rabbit_spawn_egg'))
.itemInputs('8x minecraft:rabbit', 'egg')
.itemOutputs('minecraft:rabbit_spawn_egg')
.duration(10)
.EUt(16)

GTM.forming_press(('chicken_spawn_egg'))
.itemInputs('8x minecraft:chicken', 'egg')
.itemOutputs('minecraft:chicken_spawn_egg')
.duration(10)
.EUt(16)

GTM.forming_press(('cod_spawn_egg'))
.itemInputs('8x minecraft:cod', 'egg')
.itemOutputs('minecraft:cod_spawn_egg')
.duration(10)
.EUt(16)

GTM.forming_press(('salmon_spawn_egg'))
.itemInputs('8x minecraft:salmon', 'egg')
.itemOutputs('minecraft:salmon_spawn_egg')
.duration(10)
.EUt(16)

GTM.extractor(('experience_from_deez_nuts'))
.chancedInput('#forge:spawn_eggs', 100, 0)
.outputFluids(Fluid.of('cofh_core:experience', 25))
.EUt(16)
.duration(10)

GTM.mixer(('echoite_mixer'))
    .inputFluids(Fluid.of('gtceu:tantalum', 144), Fluid.of('gtceu:nickel', 144))
    .itemInputs('gtceu:echo_dust', 'gtceu:chromium_dust', 'gtceu:nexus_dust')
    .outputFluids(Fluid.of('gtceu:echoite', 864))
    .EUt(16)
    .duration(1200)
    .circuit(4)

GTM.echo_imbuement_chamber(('echolumium_imbuement'))
.itemInputs('gtceu:aluminium_ingot')
.inputFluids(Fluid.of('gtceu:echoite', 120))
.itemOutputs('gtceu:echolumium_ingot')
.EUt(32)
.duration(100)

GTM.echoite_exile(('echoite'))
.itemInputs('16x gtceu:nexus_dust', '16x gtceu:echo_dust', '16x gtceu:chromium_dust')
.inputFluids(Fluid.of('gtceu:nickel', 2304), Fluid.of('gtceu:tantalum', 2304))
.outputFluids(Fluid.of('gtceu:echoite', 13860))
.EUt(32)
.duration(800)

GTM.alloying_kiln(('nexus_dust'))
.itemInputs('4x gtceu:condensed_mana_dust', '2x gtceu:bronze_dust')
.itemOutputs('6x gtceu:nexus_dust')
.EUt(4)
.duration(20)

GTM.alloying_kiln(('nexus_steel'))
.itemInputs('2x gtceu:nexus_dust', '6x gtceu:steel_dust')
.itemOutputs('8x gtceu:nexus_steel_ingot')
.EUt(8)
.duration(40)

GTM.alloying_kiln(('igneous_bronze_alternative'))
.itemInputs('3x gtceu:copper_dust', 'gtceu:tin_dust', '2x gtceu:andesite_alloy_dust')
.itemOutputs('6x gtceu:igneous_bronze_ingot')
.EUt(6)
.duration(30)

GTM.alloying_kiln(('igneous_bronze'))
.itemInputs('4x gtceu:bronze_dust', '2x gtceu:andesite_alloy_dust')
.itemOutputs('6x gtceu:igneous_bronze_ingot')
.EUt(6)
.duration(30)

GTM.chemical_bath(('condensed_mana_gem'))
.inputFluids(Fluid.of('blasmatech:mana 3000'))
.itemInputs('gtceu:source_gem')
.itemOutputs('gtceu:condensed_mana_gem')
.EUt(16)
.duration(25)

event.recipes.create.mixing("gtceu:small_condensed_mana_dust", [
    Fluid.of('blasmatech:mana 1000'),
    "gtceu:source_dust"
]).heated()


GTM.centrifuge(('unpure_source_purification'))
.inputFluids(Fluid.of('gtceu:unpure_source 432'))
.outputFluids(Fluid.of('gtceu:source 324'), Fluid.of('undergarden:virulent_mix_source 108'))
.EUt(128)
.duration(40)

GTM.macerator(('sky_dust'))
.itemInputs('ae2:sky_stone_block')
.itemOutputs('ae2:sky_dust')
.EUt(28)
.duration(100)

GTM.macerator(('sky_dust_alt'))
.itemInputs('ad_astra:sky_stone')
.itemOutputs('ae2:sky_dust')
.EUt(28)
.duration(100)

GTM.forming_press(('logic_press'))
.notConsumable('ae2:logic_processor_press')
.itemInputs('minecraft:iron_block')
.itemOutputs('ae2:logic_processor_press')
.EUt(64)
.duration(100)

GTM.forming_press(('engineering_press'))
.notConsumable('ae2:engineering_processor_press')
.itemInputs('minecraft:iron_block')
.itemOutputs('ae2:engineering_processor_press')
.EUt(64)
.duration(100)

GTM.forming_press(('calculation_press'))
.notConsumable('ae2:calculation_processor_press')
.itemInputs('minecraft:iron_block')
.itemOutputs('ae2:calculation_processor_press')
.EUt(64)
.duration(100)

GTM.forming_press(('silicon_press'))
.notConsumable('ae2:silicon_press')
.itemInputs('minecraft:iron_block')
.itemOutputs('ae2:silicon_press')
.EUt(64)
.duration(100)

GTM.forming_press(('accumulation_press'))
.notConsumable('megacells:accumulation_processor_press')
.itemInputs('minecraft:iron_block')
.itemOutputs('megacells:accumulation_processor_press')
.EUt(64)
.duration(100)

GTM.forming_press(('quantum_press'))
.notConsumable('advanced_ae:quantum_processor_press')
.itemInputs('minecraft:iron_block')
.itemOutputs('advanced_ae:quantum_processor_press')
.EUt(64)
.duration(100)

GTM.forming_press(('accumulation_press_formature'))
.itemInputs('ae2:calculation_processor_press', 'ae2:engineering_processor_press', '2x gtceu:dense_netherite_plate')
.itemOutputs('megacells:accumulation_processor_press')
.EUt(256)
.duration(100)

GTM.forming_press(('quantum_press_formature'))
.itemInputs('ae2:calculation_processor_press', 'ae2:engineering_processor_press', 'ae2:logic_processor_press','4x advanced_ae:quantum_alloy_plate')
.itemOutputs('advanced_ae:quantum_processor_press')
.EUt(256)
.duration(100)

GTM.mixer(('nexus_steel_mixer'))
.itemInputs('2x gtceu:nexus_dust', '6x gtceu:steel_dust')
.itemOutputs('8x gtceu:nexus_steel_dust')
.EUt(128)
.duration(40)

GTM.alloying_kiln(('mes_ingot'))
.itemInputs('13x gtceu:source_dust', '8x gtceu:mana_dust', '6x gtceu:ferroarcane_dust', '3x gtceu:igneous_bronze_dust')
.itemOutputs('24x gtceu:wizarding_steel_dust')
.EUt(64)
.duration(40)


GTM.sifter(('mythical_ore_vein'))
.itemInputs('botania:livingrock')
.chancedOutput('kubejs:mythical_ore_vein', 3500, 0)
.chancedOutput('kubejs:mythical_ore_vein', 3500, 0)
.chancedOutput('kubejs:mythical_ore_vein', 3500, 0)
.duration(100)
.EUt(16)

GTM.sifter(('mythical_ore_vein_sifting'))
.itemInputs('kubejs:mythical_ore_vein')
.chancedOutput('mythicbotany:raw_elementium', 3500, 0)
.chancedOutput('botania:dragonstone', 3500, 0)
.chancedOutput('botania:pixie_dust', 3500, 0)
.chancedOutput('gtceu:source_gem', 3500, 0)
.duration(100)
.EUt(16)


GTM.centrifuge(('echoite_decomposition'))
.inputFluids(Fluid.of('gtceu:echoite 884'))
.itemOutputs('gtceu:nexus_dust', 'gtceu:echo_dust', 'gtceu:chromium_dust', 'gtceu:nickel_dust', 'gtceu:tantalum_dust')
.duration(100)
.EUt(16)

event.recipes.create.mixing('2x gtceu:andesite_alloy_dust', ['2x gtceu:andesite_dust', '2x gtceu:iron_dust', Fluid.of('gtceu:primitive_glue 100')])
event.recipes.create.mixing(Fluid.of('gtceu:primitive_glue 500'), ['2x #forge:flour', '2x gtceu:sticky_resin', Fluid.of('kubejs:boiling_water 500')]).heated()

GTM.mixer(('andesite_alloy_dust_glue'))
.itemInputs('gtceu:andesite_dust', 'gtceu:iron_dust')
.inputFluids(Fluid.of('gtceu:glue 100'))
.itemOutputs('3x gtceu:andesite_alloy_dust')
.duration(10)
.circuit(1)
.EUt(16)


GTM.alloy_smelter(('andesite_alloy'))
.itemInputs('gtceu:andesite_dust', 'gtceu:iron_dust')
.itemOutputs('3x gtceu:andesite_alloy_ingot')
.duration(20)
.EUt(64)

GTM.compressor(('compress_plate_dust_wood'))
.itemInputs('gtceu:wood_dust')
.itemOutputs('gtceu:wood_plate')
.duration(200)
.EUt(2)

CRT.mixing(['4x gtceu:bronze_ingot'], ['3x gtceu:copper_dust', 'gtceu:tin_dust']).heated()

event.blasting('gtceu:steel_ingot', 'gtceu:wrought_iron_ingot', 0.35, 100)

CRT.mechanical_crafting('gtceu:primitive_alloyment_kiln', [
'FFBFF',
'FBDBF',
'BDSDB',
'FBDBF',
'FFBFF'
], {
F: 'gtceu:firebricks',
B: 'gtceu:bronze_frame',
D: 'gtceu:double_igneous_bronze_plate',
S: "gtceu:lp_steam_alloy_smelter",
})

CRT.mechanical_crafting('gtceu:primitive_alloyment_kiln', [
'FFBFF',
'FBDBF',
'BDSDB',
'FBDBF',
'FFBFF'
], {
F: 'gtceu:firebricks',
B: 'gtceu:bronze_frame',
D: 'gtceu:double_igneous_bronze_plate',
S: "gtceu:hp_steam_alloy_smelter",
})
})


