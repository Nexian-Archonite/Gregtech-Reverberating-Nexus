ServerEvents.recipes(event => {
    const GTM = event.recipes.gtceu
    const CRT = event.recipes.gtceu
    event.shaped(
    '2x gtceu:small_andesite_dust',
    [
        ' H ',
        ' A ',
        '   '
    ], {
    H: '#forge:tools/mortars',
    A: 'minecraft:andesite'
    })

    event.shaped(
    '2x gtceu:andesite_dust',
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
        'CCC',
        'CCC',
        'CCC'
    ], {
    C: 'cobblestone'
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
    'gtceu:stone_rod',
    [
        'F  ' ,
        ' S ',
        '   '
    ], {
    F: '#forge:tools/files',
    S: 'minecraft:stone'
    })

    event.shapeless(Item.of('2x gtceu:andesite_alloy_dust'),
    [
        '4x gtceu:andesite_dust',
        '4x gtceu:iron_dust',
        'kubejs:primitive_glue_tube'
    ])

event.shaped(
    'gtceu:wood_plate', [
        'SSS'
    ], {
        S: '#minecraft:wooden_slabs'
    })

    event.shaped(
    'gtceu:treated_wood_plate', [
        'SSS'
    ], {
        S: 'gtceu:treated_wood_slab'
    })

event.shaped(
    'create:andesite_casing',
    [
        ' G ',
        'HFW',
        ' P '
    ], {
        G: 'kubejs:primitive_glue_tube',
        H: '#forge:tools/hammers',
        F: 'gtceu:andesite_alloy_frame',
        W: '#forge:tools/wrenches',
        P: 'gtceu:treated_wood_plate'
    }
)

event.recipes.create.compacting('create:andesite_casing',
    ['gtceu:andesite_alloy_frame', 'gtceu:treated_wood_plate', Fluid.of('gtceu:primitive_glue 100')]
)

event.shaped(
    'create:brass_casing',
    [
        ' G ',
        'HFW',
        ' P '
    ], {
        G: 'kubejs:primitive_glue_tube',
        H: '#forge:tools/hammers',
        F: 'gtceu:brass_frame',
        W: '#forge:tools/wrenches',
        P: 'gtceu:treated_wood_plate'
    }
)

event.recipes.create.compacting('create:brass_casing',
    ['gtceu:brass_frame', 'gtceu:treated_wood_plate', Fluid.of('gtceu:primitive_glue 100')]
)

event.shaped(
    'create:copper_casing',
    [
        ' G ',
        'HFW',
        ' P '
    ], {
        G: 'kubejs:primitive_glue_tube',
        H: '#forge:tools/hammers',
        F: 'gtceu:copper_frame',
        W: '#forge:tools/wrenches',
        P: 'gtceu:treated_wood_plate'
    }
)

event.recipes.create.compacting('create:copper_casing',
    ['gtceu:copper_frame', 'gtceu:treated_wood_plate', Fluid.of('gtceu:primitive_glue 100')]
)

event.shapeless(Item.of('4x kubejs:primitive_glue_tube'), [
    '2x #forge:flour',
    'kubejs:boiling_water_bucket',
    '4x kubejs:empty_glue_tube',
    '2x minecraft:sugar' 
]).replaceIngredient('kubejs:boiling_water_bucket', 'minecraft:bucket')

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

event.shaped(Item.of('kubejs:empty_glue_tube'), [
' C ',
'ALS',
' L '
], {
A: '#gtceu:tools/crafting_knives',
S: '#forge:tools/saws',
L: '#minecraft:logs',
C: '#forge:glass'
})

event.shaped(Item.of('gtceu:cupronickel_coil_block'), [
'WWW',
'WTW',
'WWW'
], {
W: 'gtceu:cupronickel_double_wire',
T: '#forge:tools/wrenches'
})

event.shaped('gtceu:empty_wooden_form', [
    'AA',
    'AA'
], {
    A: "#minecraft:planks"
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
event.smelting('3x glass_pane', 'sand', 0, 60)

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

event.shaped('minecraft:furnace', [
'COC',
'OGO',
'COC'
], {
C: 'kubejs:compressed_cobblestone',
O: 'minecraft:cobblestone_slab',
G: 'gtceu:stone_gear'
})

event.shaped('minecraft:crafting_table', [
'FL',
'LA'
], {
F: 'minecraft:flint',
L: '#minecraft:logs',
A: '#minecraft:axes'
})

event.shaped('minecraft:campfire', [
' S ',
'SCS',
'LLL'
], {
S: 'minecraft:stick',
C: '#minecraft:coals',
L: '#minecraft:logs'
})

event.shaped('campfire', [
'F',
'L'
], {
F: 'minecraft:flint_and_steel',
L: '#minecraft:logs'
})

event.shaped('4x kubejs:glass_ampule', [
'P',
'P'
], {
P: '#forge:glass_panes'
})

event.shaped('undergarden:catalyst', [
'EIE',
'IMI',
'EIE'
], {
E: "gtceu:electrum_block",
I: "gtceu:invar_block",
M: "gtceu:manasteel_block"
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

event.shapeless('9x cobblestone', ['kubejs:compressed_cobblestone'])

event.shaped('2x gtceu:wrought_iron_bolt', ['S ', ' I'], {S: '#forge:tools/saws', I: 'gtceu:wrought_iron_rod'})
event.shaped('2x gtceu:iron_bolt', ['S ', ' I'], {S: '#forge:tools/saws', I: 'gtceu:iron_rod'})

event.shapeless('gtceu:manasteel_ingot', ['botania:manasteel_ingot'])

// G - R - E - G - T - E - C - H from here

tiers.forEach(tier => {
    const replacementTier = tierReplacements[tier] || `source_imbued_${tier}`
    parts.forEach(part => {
        const oldItem = `gtceu:${tier}_${part}`
        const newItem = `gtceu:${replacementTier}_${part}`
        recipePatterns.forEach(pattern => {
            event.replaceInput({ id: pattern , not: {id: /gtceu:steam_.*(_.*)?/}}, oldItem, newItem)
        })
    })
})


GTM.assembler(('nexus_steel_casing'))
.itemInputs('6x gtceu:nexus_steel_plate', 'gtceu:nexus_steel_frame')
.itemOutputs('gtceu:nexus_steel_casing')
.duration(50)
.circuit(6)
.EUt(16)

GTM.assembler(('igneous_bronze_casing'))
.itemInputs('6x gtceu:igneous_bronze_plate', 'gtceu:igneous_bronze_frame')
.itemOutputs('gtceu:igneous_bronze_casing')
.duration(50)
.circuit(6)
.EUt(16)

GTM.assembler(('magikstone_casing'))
.itemInputs('6x gtceu:condensed_mana_plate', 'gtceu:source_frame')
.itemOutputs('gtceu:magikstone_casing')
.duration(50)
.circuit(6)
.EUt(16)

GTM.electrolyzer(('decomposition_electrolyzing_sculk'))
.itemInputs('gtceu:sculk_dust')
.itemOutputs('gtceu:deepslate_dust', 'gtceu:echo_dust')
.duration(20)
.EUt(16)

GTM.fluid_solidifier(('echo_shard_catalyst_crystalizing'))
.notConsumable('minecraft:echo_shard')
.inputFluids('#forge:experience 100')
.itemOutputs('minecraft:echo_shard')
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
.outputFluids(Fluid.of('cofh_core:experience', 15))
.EUt(16)
.duration(10)

GTM.mixer(('echoite_mixer'))
    .inputFluids(Fluid.of('gtceu:tantalum', 144), Fluid.of('gtceu:nickel', 144))
    .itemInputs('gtceu:echo_dust', 'gtceu:chromium_dust', 'gtceu:nexus_dust')
    .outputFluids(Fluid.of('gtceu:echoite', 720))
    .EUt(16)
    .duration(1200)
    .circuit(4)

GTM.echo_imbuement_chamber(('echolumium_imbuement'))
.itemInputs('gtceu:aluminium_ingot')
.inputFluids(Fluid.of('gtceu:echoite', 72))
.itemOutputs('gtceu:echolumium_ingot')
.EUt(32)
.duration(100)
.blastFurnaceTemp(1700)

GTM.echoite_exile(('echoite'))
.itemInputs('16x gtceu:nexus_dust', '16x gtceu:echo_dust', '16x gtceu:chromium_dust')
.inputFluids(Fluid.of('gtceu:nickel', 2304), Fluid.of('gtceu:tantalum', 2304))
.outputFluids(Fluid.of('gtceu:echoite', 11520))
.EUt(32)
.duration(800)

GTM.alloying_kiln(('nexus_dust'))
.itemInputs('4x gtceu:condensed_mana_dust', '2x gtceu:gold_dust')
.itemOutputs('4x gtceu:nexus_dust')
.EUt(4)
.duration(20)

GTM.alloying_kiln(('nexus_steel'))
.itemInputs('2x gtceu:nexus_dust', '6x gtceu:steel_dust')
.itemOutputs('8x gtceu:nexus_steel_ingot')
.EUt(8)
.duration(40)

GTM.alloying_kiln(('igneous_bronze_alternative'))
.itemInputs('3x gtceu:copper_dust', 'gtceu:tin_dust', '2x gtceu:andesite_alloy_dust')
.itemOutputs('4x gtceu:igneous_bronze_ingot')
.EUt(6)
.duration(30)

GTM.alloying_kiln(('igneous_bronze'))
.itemInputs('4x gtceu:bronze_dust', '2x gtceu:andesite_alloy_dust')
.itemOutputs('4x gtceu:igneous_bronze_ingot')
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
]).superheated()

event.replaceInput({ output: "gtceu:lv_electric_motor" }, "gtceu:copper_single_wire", "gtceu:source_attuned_copper_single_wire")

GTM.centrifuge(('unpure_source_purification'))
.inputFluids(Fluid.of('gtceu:unpure_source 432'))
.outputFluids(Fluid.of('gtceu:source 324'), Fluid.of('undergarden:virulent_mix_source 108'))
.EUt(128)
.duration(40)

GTM.assembler(('basic_circuit_board'))
.itemInputs('4x gtceu:copper_foil', 'gtceu:wood_plate')
.inputFluids(Fluid.of('gtceu:glue 100'))
.itemOutputs('gtceu:resin_printed_circuit_board')
.EUt(28)
.duration(100)

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
.itemInputs('13x gtceu:source_dust', '8x gtceu:mana_dust', '3x gtceu:igneous_bronze_dust')
.itemOutputs('24x gtceu:metallurgically_enhanced_source_dust')
.EUt(64)
.duration(40)


GTM.sifter(('mythical_ore_vein'))
.itemInputs('botania:livingrock')
.chancedOutput('kubejs:mythical_ore_vein', 2500, 0)
.chancedOutput('kubejs:mythical_ore_vein', 2500, 0)
.chancedOutput('kubejs:mythical_ore_vein', 2500, 0)
.duration(100)
.EUt(16)

GTM.sifter(('mythical_ore_vein_sifting'))
.itemInputs('kubejs:mythical_ore_vein')
.chancedOutput('mythicbotany:raw_elementium', 2500, 0)
.chancedOutput('botania:dragonstone', 2500, 0)
.chancedOutput('botania:pixie_dust', 2500, 0)
.chancedOutput('gtceu:source_gem', 2500, 0)
.duration(100)
.EUt(16)


GTM.centrifuge(('echoite_decomposition'))
.inputFluids(Fluid.of('gtceu:echoite 720'))
.itemOutputs('gtceu:nexus_dust', 'gtceu:echo_dust', 'gtceu:chromium_dust', 'gtceu:nickel_dust', 'gtceu:tantalum_dust')
.duration(100)
.EUt(16)

event.recipes.create.mixing('2x gtceu:andesite_alloy_dust', ['2x gtceu:andesite_dust', '2x gtceu:iron_dust', Fluid.of('gtceu:primitive_glue 100')])
event.recipes.create.mixing(Fluid.of('gtceu:primitive_glue 500'), ['2x #forge:flour', '2x gtceu:sticky_resin', Fluid.of('minecraft:water 500')]).heated()

GTM.mixer(('andesite_alloy_dust_glue'))
.itemInputs('gtceu:andesite_dust', 'gtceu:iron_dust')
.inputFluids(Fluid.of('gtceu:glue 100'))
.itemOutputs('2x gtceu:andesite_alloy_dust')
.duration(10)
.circuit(1)
.EUt(16)


GTM.alloy_smelter(('andesite_alloy'))
.itemInputs('gtceu:andesite_dust', 'gtceu:iron_dust')
.itemOutputs('2x gtceu:andesite_alloy_ingot')
.duration(20)
.EUt(64)




    var assemblymachines = ['assembler', 'bender', 'centrifuge', 'electrolyzer', 'extruder', 'forming_press', 'lathe', 'mixer', 'ore_washer', 'sifter', 'thermal_centrifuge', 'wiremill', 'macerator', 'autoclave']
assemblymachines.forEach((machine) => {
GTM.assembler((`large_cubic_${machine}`))
.itemInputs(`gtceu:hv_${machine}`, 'kubejs:multiblock_upgrade_kit')
.itemOutputs(`gtceu:t_large_${machine}`)
.duration(100)
.EUt(GTValues.V[GTValues.MV])
})
casingalloys.forEach((material) => {
        event.shaped(Item.of(`2x kubejs:${material}_casing`), [
            'PHP',
            'PFP',
            'PWP'
        ], {
            P: `gtceu:${material}_plate`,
            F: `gtceu:${material}_frame`,
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches'
        }).id(`kubejs:shaped/${material}_casing`)

        GTM.assembler((`${material}_casing`))
            .itemInputs(`6x gtceu:${material}_plate`, `gtceu:${material}_frame`)
            .itemOutputs(`2x kubejs:${material}_casing`)
            .duration(50)
            .EUt(16)
            .circuit(6)
    })

casingalloysgregtechonlylimitededition.forEach((material) => {
        event.shaped(Item.of(`2x gtceu:${material}_casing`), [
            'PHP',
            'PFP',
            'PWP'
        ], {
            P: `gtceu:${material}_plate`,
            F: `gtceu:${material}_frame`,
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches'
        }).id(`gtceu:shaped/${material}_casing`)

        GTM.assembler((`${material}_casing`))
            .itemInputs(`6x gtceu:${material}_plate`, `gtceu:${material}_frame`)
            .itemOutputs(`2x gtceu:${material}_casing`)
            .duration(50)
            .EUt(16)
            .circuit(6)
    })


    GTM.mixer(('birmabright'))
        .itemInputs('7x gtceu:aluminium_dust', '2x gtceu:magnesium_dust', '1x gtceu:manganese_dust')
        .itemOutputs('10x gtceu:birmabright_dust')
        .duration(350)
        .EUt(240)
        .circuit(3)

    GTM.mixer(('duralumin'))
        .itemInputs('4x gtceu:aluminium_dust', '3x gtceu:copper_dust', '1x gtceu:magnesium_dust', '1x gtceu:manganese_dust')
        .itemOutputs('9x gtceu:duralumin_dust')
        .duration(400)
        .EUt(240)
        .circuit(2)

    GTM.mixer(('beryllium_aluminium_alloy'))
        .itemInputs('7x gtceu:beryllium_dust', '1x gtceu:aluminium_dust')
        .itemOutputs('8x gtceu:beryllium_aluminium_alloy_dust')
        .duration(310)
        .EUt(240)
        .circuit(1)

    GTM.mixer(('hydronalium'))
        .itemInputs('6x gtceu:aluminium_dust', '3x gtceu:magnesium_dust', '1x gtceu:manganese_dust')
        .itemOutputs('10x gtceu:hydronalium_dust')
        .duration(410)
        .EUt(240)
        .circuit(2)

    GTM.mixer(('elgiloy'))
        .itemInputs('4x gtceu:cobalt_dust', '2x gtceu:chromium_dust', '1x gtceu:nickel_dust', '1x gtceu:steel_dust', '1x gtceu:molybdenum_dust', '1x gtceu:manganese_dust')
        .itemOutputs('10x gtceu:elgiloy_dust')
        .duration(420)
        .EUt(240)

    GTM.mixer(('beryllium_bronze'))
        .itemInputs('10x gtceu:copper_dust', '1x gtceu:beryllium_dust')
        .itemOutputs('11x gtceu:beryllium_bronze_dust')
        .duration(290)
        .EUt(240)
        .circuit(1)

   GTM.mixer(('silicon_bronze'))
        .itemInputs('32x gtceu:copper_dust', '2x gtceu:silicon_dust', '1x gtceu:manganese_dust')
        .itemOutputs('35x gtceu:silicon_bronze_dust')
        .duration(600)
        .EUt(240)
        .circuit(1)

    GTM.mixer(('kovar'))
        .itemInputs('18x gtceu:iron_dust', '11x gtceu:nickel_dust', '6x gtceu:cobalt_dust')
        .itemOutputs('35x gtceu:kovar_dust')
        .duration(450)
        .EUt(240)
        .circuit(3)

    GTM.mixer(('zamak'))
        .itemInputs('1x gtceu:zinc_dust', '4x gtceu:aluminium_dust', '3x gtceu:copper_dust')
        .itemOutputs('8x gtceu:zamak_dust')
        .duration(350)
        .EUt(240)
        .circuit(3)

    GTM.mixer(('tumbaga'))
        .itemInputs('20x gtceu:copper_dust', '6x gtceu:gold_dust', '1x gtceu:silver_dust')
        .itemOutputs('27x gtceu:tumbaga_dust')
        .duration(470)
        .EUt(240)
        .circuit(4)

   GTM.mixer(('transplatine'))
        .itemInputs('17x gtceu:platinum_dust', '5x gtceu:silver_dust', '2x gtceu:osmium_dust', '2x gtceu:chromium_dust')
        .itemOutputs('27x gtceu:transplatine_dust')
        .duration(540)
        .EUt(240)
        .circuit(27)

    GTM.assembler(('multiblock_upgrade_kit'))
        .itemInputs('kubejs:lumium_glass', '#gtceu:circuits/mv', '4x gtceu:signalum_plate', '12x gtceu:cobalt_foil')
        .itemOutputs('kubejs:multiblock_upgrade_kit')
        .duration(800)
        .EUt(512)

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

event.shaped(Item.of(`2x gtceu:atomic_casing`), [
            'PHP',
            'PFP',
            'PWP'
        ], {
            P: `gtceu:tainted_zircalloy_plate`,
            F: `gtceu:tainted_zircalloy_frame`,
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches'
        }).id(`gtceu:shaped/atomic_casing`)

        GTM.assembler((`atomic_casing`))
            .itemInputs(`6x gtceu:tainted_zircalloy_plate`, `gtceu:tainted_zircalloy_frame`)
            .itemOutputs(`2x gtceu:atomic_casing`)
            .duration(50)
            .EUt(16)
            .circuit(6)

GTM.assembler(('mechanical_conjuration_institute'))
.itemInputs('ars_nouveau:imbuement_chamber', '16x ars_nouveau:conjuration_essence', 'gtceu:echo_imbuement_chamber', '16x gtceu:invar_plate', '8x #gtceu:circuits/hv')
.itemOutputs('gtceu:mechanical_conjuration_institute')
.duration(600)
.EUt(128)

GTM.assembler(('superphasic_mixer'))
.itemInputs('gtceu:mv_mixer', 'gtceu:mv_fluid_heater', '24x #gtceu:circuits/ev', '24x gtceu:double_cobalt_brass_plate')
.itemOutputs('gtceu:superphasic_mixer')
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
})
