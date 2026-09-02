ServerEvents.recipes(event => {
    const GTM = event.recipes.gtceu
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


    event.shaped(
    'gtceu:treated_wood_plate', [
        'SSS'
    ], {
        S: 'gtceu:treated_wood_slab'
    })


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

event.shaped('4x kubejs:empty_glue_tube', [
' C ',
'ALS',
' L '
], {
A: '#gtceu:tools/crafting_knives',
S: '#forge:tools/saws',
L: '#minecraft:logs',
C: '#forge:glass'
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

event.custom(
    {
  "type": "biomancy:bio_forging",
  "bio_forge_tab": "biomancy:machines",
  "ingredients": [
    {
      "count": 12,
      "item": "gtceu:gold_plate"
    },
    {
      "count": 6,
      "item": "biomancy:exotic_dust"
    },
    {
      "count": 4,
      "item": "gtceu:nexus_dust"
    },
    {
      "item": "minecraft:chest"
    },
    {
      "item": "gtceu:condensed_mana_gem"
    }
  ],
  "nutrientsCost": 2,
  "result": {
    "item": "ars_nouveau:imbuement_chamber"
  }
}
)

// G - R - E - G - T - E - C - H from here


GTM.electrolyzer('decomposition_electrolyzing_sculk')
.itemInputs('gtceu:sculk_dust')
.itemOutputs('gtceu:deepslate_dust', 'gtceu:echo_dust')
.duration(20)
.EUt(16)

GTM.fluid_solidifier('echo_shard_catalyst_crystalizing')
.notConsumable('minecraft:echo_shard')
.inputFluids('#forge:experience 50')
.itemOutputs('2x minecraft:echo_shard')
.duration(20)
.EUt(16)

GTM.forming_press('sheep_spawn_egg')
.itemInputs('8x minecraft:mutton', 'egg')
.itemOutputs('minecraft:sheep_spawn_egg')
.duration(10)
.EUt(16)

GTM.forming_press('rabbit_spawn_egg')
.itemInputs('8x minecraft:rabbit', 'egg')
.itemOutputs('minecraft:rabbit_spawn_egg')
.duration(10)
.EUt(16)

GTM.forming_press('chicken_spawn_egg')
.itemInputs('8x minecraft:chicken', 'egg')
.itemOutputs('minecraft:chicken_spawn_egg')
.duration(10)
.EUt(16)

GTM.forming_press('cod_spawn_egg')
.itemInputs('8x minecraft:cod', 'egg')
.itemOutputs('minecraft:cod_spawn_egg')
.duration(10)
.EUt(16)

GTM.forming_press('salmon_spawn_egg')
.itemInputs('8x minecraft:salmon', 'egg')
.itemOutputs('minecraft:salmon_spawn_egg')
.duration(10)
.EUt(16)

GTM.extractor('experience_from_deez_nuts')
.chancedInput('#forge:spawn_eggs', 100, 0)
.outputFluids('cofh_core:experience 25')
.EUt(16)
.duration(10)

GTM.mixer('echoite_mixer')
    .inputFluids('gtceu:tantalum 144', 'gtceu:nickel 144')
    .itemInputs('gtceu:echo_dust', 'gtceu:chromium_dust', 'gtceu:nexus_dust')
    .outputFluids('gtceu:echoite 864')
    .EUt(16)
    .duration(1200)
    .circuit(4)

GTM.echonite_imbuement_chamber('echolumium_imbuement')
.itemInputs('gtceu:aluminium_ingot')
.inputFluids('gtceu:echoite 120')
.itemOutputs('gtceu:echolumium_ingot')
.EUt(32)
.duration(100)

GTM.echonite_imbuement_chamber('mechanical_imbuement')
.itemInputs('gtceu:stainless_steel_ingot')
.inputFluids('gtceu:mechanical_concentrate 120')
.itemOutputs('gtceu:mechanical_stainless_ingot')
.EUt(128)
.duration(100)

GTM.primitive_blast_furnace('nexus_dust')
.itemInputs('4x gtceu:condensed_mana_dust', '2x gtceu:bronze_dust')
.itemOutputs('6x gtceu:nexus_dust')
.duration(20)

GTM.primitive_blast_furnace('nexus_steel')
.itemInputs('2x gtceu:nexus_dust', '6x gtceu:steel_dust')
.itemOutputs('8x gtceu:nexus_steel_ingot')
.EUt(8)
.duration(40)

GTM.primitive_blast_furnace('igneous_bronze_alternative')
.itemInputs('3x gtceu:copper_dust', 'gtceu:tin_dust', '2x gtceu:andesite_dust')
.itemOutputs('6x gtceu:igneous_bronze_ingot')
.duration(60)

GTM.primitive_blast_furnace('igneous_bronze')
.itemInputs('4x gtceu:bronze_dust', '2x gtceu:andesite_dust')
.itemOutputs('6x gtceu:igneous_bronze_ingot')
.duration(60)

GTM.chemical_bath('condensed_mana_gem')
.inputFluids('blasmatech:mana 3000')
.itemInputs('gtceu:source_gem')
.itemOutputs('gtceu:condensed_mana_gem')
.EUt(16)
.duration(25)

GTM.centrifuge(('unpure_source_purification'))
.inputFluids('gtceu:unpure_source 432')
.outputFluids('gtceu:source 324', 'undergarden:virulent_mix_source 108')
.EUt(128)
.duration(40)

GTM.macerator('sky_dust')
.itemInputs('ae2:sky_stone_block')
.itemOutputs('ae2:sky_dust')
.EUt(28)
.duration(100)

GTM.macerator('sky_dust_alt')
.itemInputs('ad_astra:sky_stone')
.itemOutputs('ae2:sky_dust')
.EUt(28)
.duration(100)

GTM.forming_press('logic_press')
.notConsumable('ae2:logic_processor_press')
.itemInputs('minecraft:iron_block')
.itemOutputs('ae2:logic_processor_press')
.EUt(64)
.duration(100)

GTM.forming_press('engineering_press')
.notConsumable('ae2:engineering_processor_press')
.itemInputs('minecraft:iron_block')
.itemOutputs('ae2:engineering_processor_press')
.EUt(64)
.duration(100)

GTM.forming_press('calculation_press')
.notConsumable('ae2:calculation_processor_press')
.itemInputs('minecraft:iron_block')
.itemOutputs('ae2:calculation_processor_press')
.EUt(64)
.duration(100)

GTM.forming_press('silicon_press')
.notConsumable('ae2:silicon_press')
.itemInputs('minecraft:iron_block')
.itemOutputs('ae2:silicon_press')
.EUt(64)
.duration(100)

GTM.forming_press('accumulation_press')
.notConsumable('megacells:accumulation_processor_press')
.itemInputs('minecraft:iron_block')
.itemOutputs('megacells:accumulation_processor_press')
.EUt(64)
.duration(100)

GTM.forming_press('quantum_press')
.notConsumable('advanced_ae:quantum_processor_press')
.itemInputs('minecraft:iron_block')
.itemOutputs('advanced_ae:quantum_processor_press')
.EUt(64)
.duration(100)

GTM.forming_press('accumulation_press_formature')
.itemInputs('ae2:calculation_processor_press', 'ae2:engineering_processor_press', '2x gtceu:dense_netherite_plate')
.itemOutputs('megacells:accumulation_processor_press')
.EUt(256)
.duration(100)

GTM.forming_press('quantum_press_formature')
.itemInputs('ae2:calculation_processor_press', 'ae2:engineering_processor_press', 'ae2:logic_processor_press','4x advanced_ae:quantum_alloy_plate')
.itemOutputs('advanced_ae:quantum_processor_press')
.EUt(256)
.duration(100)

GTM.mixer('nexus_steel_mixer')
.itemInputs('2x gtceu:nexus_dust', '6x gtceu:steel_dust')
.itemOutputs('8x gtceu:nexus_steel_dust')
.EUt(128)
.duration(40)

GTM.primitive_blast_furnace('mes_ingot')
.itemInputs('13x gtceu:source_dust', '8x gtceu:mana_dust', '6x gtceu:ferroarcane_dust')
.itemOutputs('24x gtceu:wizarding_steel_dust')
.EUt(64)
.duration(40)

GTM.autoclave('mechanical_essence')
.itemInputs('16x kubejs:mechanical_hands')
.inputFluids('gtceu:source 50')
.outputFluids('gtceu:mechanical_essence 50')
.EUt(64)
.duration(40)

GTM.sifter('mythical_ore_vein')
.itemInputs('botania:livingrock')
.chancedOutput('kubejs:mythical_ore_vein', 3500, 0)
.chancedOutput('kubejs:mythical_ore_vein', 3500, 0)
.chancedOutput('kubejs:mythical_ore_vein', 3500, 0)
.duration(100)
.EUt(16)

GTM.sifter('mythical_ore_vein_sifting')
.itemInputs('kubejs:mythical_ore_vein')
.chancedOutput('mythicbotany:raw_elementium', 3500, 0)
.chancedOutput('botania:dragonstone', 3500, 0)
.chancedOutput('botania:pixie_dust', 3500, 0)
.chancedOutput('gtceu:source_gem', 3500, 0)
.duration(100)
.EUt(16)


GTM.centrifuge('echoite_decomposition')
.inputFluids('gtceu:echoite 864')
.itemOutputs('gtceu:nexus_dust', 'gtceu:echo_dust', 'gtceu:chromium_dust', 'gtceu:nickel_dust', 'gtceu:tantalum_dust')
.duration(100)
.EUt(16)

event.shapeless('2x gtceu:andesite_dust', [
'gtceu:stone_dust',
'gtceu:diorite_dust'
])


GTM.compressor('compress_plate_dust_wood')
.itemInputs('gtceu:wood_dust')
.itemOutputs('gtceu:wood_plate')
.duration(200)
.EUt(2)



    GTM.mixer(('enderium_dust'))
    .itemInputs('3x gtceu:lead_dust', 'gtceu:platinum_dust')
    .inputFluids(Fluid.of('gtceu:resonant_ender', 1000))
    .itemOutputs('4x gtceu:enderium_dust')
    .duration(560)
    .circuit(14)
    .EUt(240)

    GTM.mixer(('lumium_dust'))
    .itemInputs('3x gtceu:tin_dust', 'gtceu:silver_dust')
    .inputFluids(Fluid.of('gtceu:glowstone', 576))
    .itemOutputs('4x gtceu:lumium_dust')
    .duration(560)
    .circuit(1)
    .EUt(240)

    GTM.mixer(('signalum_dust'))
    .itemInputs('3x gtceu:copper_dust', 'gtceu:silver_dust')
    .inputFluids(Fluid.of('gtceu:redstone', 288))
    .itemOutputs('4x gtceu:signalum_dust')
    .duration(560)
    .circuit(12)
    .EUt(240)

    GTM.extractor(('resonant_ender'))
    .itemInputs('ender_pearl')
    .outputFluids(Fluid.of('gtceu:resonant_ender 250'))
    .duration(50)
    .EUt(16)

    GTM.alloy_blast_smelter(('echoite'))
    .itemInputs('2x gtceu:echo_dust', '2x gtceu:chromium_dust', '2x gtceu:nickel_dust', '2x gtceu:tantalum_dust', '2x gtceu:nexus_dust')
    .outputFluids(Fluid.of('gtceu:echoite', 1440))
    .blastFurnaceTemp(3500)
    .duration(1120)
    .circuit(4)
    .EUt(18)

    GTM.alloy_blast_smelter(('echoite_gas'))
    .itemInputs('4x gtceu:echo_dust', '4x gtceu:chromium_dust', '4x gtceu:nickel_dust', '4x gtceu:tantalum_dust', '4x gtceu:nexus_dust')
    .inputFluids('#forge:oxygen 2000')
    .outputFluids(Fluid.of('gtceu:echoite', 2880))
    .blastFurnaceTemp(3500)
    .duration(750)
    .circuit(14)
    .EUt(16)


    //chemistry arc

GTM.chemical_reactor(('tetrachlorosilane'))
.itemInputs('gtceu:silicon_dust')
.inputFluids(Fluid.of('gtceu:chlorine 4000'))
.outputFluids(Fluid.of('gtceu:tetrachlorosilane 1000'))
.duration(40)
.EUt(128)

GTM.chemical_reactor(('tetraethyl_orthosilicate'))
.inputFluids(Fluid.of('gtceu:tetrachlorosilane 1000'), Fluid.of('gtceu:ethanol 4000'))
.outputFluids(Fluid.of('gtceu:tetraethyl_orthosilicate 1000'), Fluid.of('gtceu:hydrochloric_acid 4000'))
.duration(40)
.EUt(128)

GTM.autoclave(('tetraethyl_orthosilicate_catalystic_reaction_with_silicon_dioxide_like_quartzite'))
.itemInputs('gtceu:quartzite_dust')
.inputFluidsRanged(Fluid.of('gtceu:tetraethyl_orthosilicate'), 10, 30)
.itemOutputsRanged('gtceu:opal_gem', 1, 3)
.duration(40)
.EUt(128)

GTM.autoclave(('tetraethyl_orthosilicate_catalystic_reaction_with_silicon_dioxide_like_nether_quartz'))
.itemInputs('gtceu:nether_quartz_dust')
.inputFluidsRanged(Fluid.of('gtceu:tetraethyl_orthosilicate'), 10, 30)
.itemOutputsRanged('gtceu:opal_gem', 1, 3)
.duration(40)
.EUt(128)

GTM.autoclave(('tetraethyl_orthosilicate_catalystic_reaction_with_silicon_dioxide_like_certus_quartz'))
.itemInputs('gtceu:quartzite_dust')
.inputFluidsRanged(Fluid.of('gtceu:tetraethyl_orthosilicate'), 10, 30)
.itemOutputsRanged('gtceu:opal_gem', 1, 3)
.duration(40)
.EUt(128)


GTM.assembler(('phase_alternator'))
.itemInputs('gtceu:mv_mixer', 'gtceu:mv_fluid_heater', '24x #gtceu:circuits/ev', '24x gtceu:double_cobalt_brass_plate')
.itemOutputs('gtceu:phase_alternator')
.duration(600)
.EUt(512)

GTM.compressor(('compress_charged_certus_quartz_gem_to_block'))
.itemInputs('4x gtceu:charged_certus_quartz_gem')
.itemOutputs('gtceu:charged_certus_quartz_block')
.duration(300)
.EUt(2)

GTM.macerator(('macerate_charged_certus_quartz_block'))
.itemInputs('gtceu:charged_certus_quartz_block')
.itemOutputs('4x gtceu:charged_certus_quartz_dust')
.duration(180)
.EUt(2)

GTM.forge_hammer(('hammer_charged_certus_quartz_block_to_gem'))
.itemInputs('gtceu:charged_certus_quartz_block')
.itemOutputs('4x gtceu:charged_certus_quartz_gem')
.duration(100)
.EUt(24)


GTM.primitive_blast_furnace('electrum')
.itemInputs('2x gtceu:silver_ingot', '2x gold_ingot')
.itemOutputs('3x gtceu:electrum_ingot')
.duration(100)
.EUt(4)

GTM.primitive_blast_furnace('invar')
.itemInputs('3x iron_ingot', 'gtceu:nickel_ingot')
.itemOutputs('3x gtceu:invar_ingot')
.duration(100)
.EUt(4)

event.shaped('iron_door', ['PP', 'PR', 'PP'], {P: 'gtceu:iron_plate', R: 'gtceu:iron_round'})

GTM.chemical_reactor('pink_salt')
.itemInputs('13x galosphere:pink_salt')
.inputFluids('gtceu:sulfuric_acid 4000')
.itemOutputs('8x gtceu:salt_dust', '2x gtceu:hematite_dust', '3x gtceu:calcium_carbonate_dust')
.duration(200)
.EUt(32)

GTM.chemical_reactor('rose_pink_salt')
.itemInputs('13x galosphere:rose_pink_salt')
.inputFluids('gtceu:sulfuric_acid 4000')
.itemOutputs('9x gtceu:salt_dust', '1x gtceu:hematite_dust', '3x gtceu:calcium_carbonate_dust')
.duration(200)
.EUt(32)

GTM.chemical_reactor('pastel_salt')
.itemInputs('13x galosphere:pastel_pink_salt')
.inputFluids('gtceu:sulfuric_acid 4000')
.itemOutputs('11x gtceu:salt_dust', '2x gtceu:calcium_carbonate_dust')
.duration(200)
.EUt(32)

GTM.extractor('allurite_shard_to_echonite')
.itemInputs('galosphere:allurite_shard')
.outputFluids('gtceu:echoite 2')
.itemOutputs('echo_shard')
.duration(200)
.EUt(32)

GTM.extractor('allurite_to_echonite')
.itemInputs('galosphere:allurite_block')
.outputFluids('gtceu:echoite 8')
.itemOutputs('gtceu:echo_shard_block')
.duration(200)
.EUt(32)

GTM.extractor('lumiere_shard_to_argentostannum')
.itemInputs('galosphere:lumiere_shard')
.outputFluids('gtceu:glowstone 72')
.itemOutputs('gtceu:argentostannum_dust')
.duration(200)
.EUt(32)

GTM.extractor('lumiere_to_argentostannum')
.itemInputs('galosphere:lumiere_block')
.outputFluids('gtceu:glowstone 288')
.itemOutputs('4x gtceu:argentostannum_dust')
.duration(200)
.EUt(32)

GTM.autoclave('argentostannum_to_lumium')
.itemInputs('gtceu:argentostannum_dust')
.inputFluids('gtceu:glowstone 72')
.itemOutputs('gtceu:lumium_dust')
.duration(200)
.EUt(32)


event.shaped('chest', [
'PPP',
'P P',
'PPP'
], {
P: '#minecraft:planks'
})

GTM.assembler('echonite_imbuement_chamber')
.itemInputs('gtceu:lv_fluid_solidifier', 'gtceu:lv_autoclave', '16x gtceu:nexus_steel_plate', '6x gtceu:wizarding_steel_plate')
.itemOutputs('gtceu:echonite_imbuement_chamber')
.inputFluids('gtceu:rubber 288')
.EUt(24)
})



GTCEuServerEvents.fluidVeins(event => {
    event.add('gtceu:virulence_tainted_source', vein => {
        vein.dimensions('undergarden:undergarden')
        vein.fluid(() => Fluid.of('gtceu:virulence_tainted_source').fluid)
        vein.weight(275)
        vein.minimumYield(150)
        vein.maximumYield(600)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    })

    event.add('gtceu:tainted_magmatic_mineral_sludge', vein => {
        vein.dimensions('undergarden:undergarden')
        vein.fluid(() => Fluid.of('gtceu:tainted_magmatic_mineral_sludge').fluid)
        vein.weight(50)
        vein.minimumYield(300)
        vein.maximumYield(1100)
        vein.depletionAmount(1)
        vein.depletionChance(0.25)
        vein.depletedYield(300)
    })

    event.add('gtceu:mystical_magma', vein => {
        vein.dimensions('undergarden:undergarden')
        vein.fluid(() => Fluid.of('gtceu:mystical_undergarden_magma').fluid)
        vein.weight(20)
        vein.minimumYield(400)
        vein.maximumYield(1300)
        vein.depletionAmount(4)
        vein.depletionChance(0.5)
        vein.depletedYield(100)
    })
})