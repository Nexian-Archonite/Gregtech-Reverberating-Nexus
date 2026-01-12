// Electron tube as a ULV circuit
ServerEvents.tags("item", event => {
    event.add("gtceu:circuits/ulv", "create:electron_tube")
})

ServerEvents.recipes(event => {
const CRT = event.recipes.create
const GTM = event.recipes.gtceu
CRT.mixing('6x gtceu:igneous_bronze_ingot', ['3x gtceu:copper_dust', '2x gtceu:andesite_alloy_dust', 'gtceu:tin_dust']).heated()

//lossier soldering alloy recipe for mystery project
CRT.mixing(Fluid.of('gtceu:soldering_alloy 540'), ['3x gtceu:tin_dust', '6x gtceu:small_lead_dust', '2x gtceu:small_antimony_dust']).heated()

// Solid idea, but you gotta commit to it! Removing all other resistor recipes
event.remove({ output: "gtceu:resistor" })

event.recipes.create.sequenced_assembly(
    [
        Item.of('2x gtceu:resistor')
    ],
    "gtceu:elementally_purified_carbon_dust",
    [
        event.recipes.createDeploying("gtceu:elementally_purified_carbon_dust", ["gtceu:elementally_purified_carbon_dust", 'gtceu:fine_copper_wire']),
        event.recipes.createFilling("gtceu:elementally_purified_carbon_dust", ["gtceu:elementally_purified_carbon_dust", Fluid.of('gtceu:primitive_glue 100')])
    ]
    )
    .transitionalItem("gtceu:elementally_purified_carbon_dust")
    .loops(4)

event.recipes.create.sequenced_assembly(
    [
        Item.of('4x gtceu:resistor')
    ],
    "gtceu:elementally_purified_carbon_dust",
    [
        event.recipes.createDeploying("gtceu:elementally_purified_carbon_dust", ["gtceu:elementally_purified_carbon_dust", 'gtceu:fine_source_attuned_copper_wire']),
        event.recipes.createFilling("gtceu:elementally_purified_carbon_dust", ["gtceu:elementally_purified_carbon_dust", Fluid.of('gtceu:primitive_glue 100')])
    ]
    )
    .transitionalItem("gtceu:elementally_purified_carbon_dust")
    .loops(4)


// Moving assembler resistor recipe to MV, pure carbon only
event.recipes.gtceu.assembler('resistor')
    .itemInputs("gtceu:elementally_purified_carbon_dust", "4x gtceu:fine_source_attuned_copper_wire")
    .inputFluids(Fluid.of('gtceu:glue 100'))
    .itemOutputs("4x gtceu:resistor")
    .duration(80)
    .EUt(GTValues.VA[GTValues.MV])


// Blaze Cake, adding some magic to it
event.remove({ output: "create:blaze_cake" })
event.remove({ output: "create:blaze_cake_base" })
event.recipes.create.compacting("create:blaze_cake_base", ["#forge:eggs", "2x minecraft:sugar", "create:cinder_flour"]).heated()

event.recipes.create.sequenced_assembly(
    [
        Item.of('create:blaze_cake')
    ],
    "create:blaze_cake_base",
    [
        event.recipes.create.filling("create:blaze_cake_base", ["create:blaze_cake_base", Fluid.of('minecraft:lava 500')]),
        event.recipes.create.deploying("create:blaze_cake_base", ["create:blaze_cake_base", "ars_nouveau:fire_essence"]),
        event.recipes.create.deploying("create:blaze_cake_base", ["create:blaze_cake_base", "create:cinder_flour"]),
        event.recipes.create.pressing("create:blaze_cake_base", "create:blaze_cake_base")
    ]
)
.transitionalItem("create:blaze_cake_base")
.loops(2)

// Gregifying the electron tube
event.replaceInput({ input: "create:electron_tube" }, "create:electron_tube", "#gtceu:circuits/ulv")

// Removing old recipes
event.remove({ output: "create:rose_quartz"})
event.remove({ output: "create:polished_rose_quartz"})
event.remove({ output: "create:electron_tube"})

CRT.mixing(Fluid.of('gtceu:redstone 72'), "minecraft:redstone").heated() // lossy recipe
CRT.filling("create:rose_quartz", ["minecraft:quartz", Fluid.of('gtceu:redstone 576')])
CRT.splashing("create:polished_rose_quartz", ["create:rose_quartz"])

GTM.cutter(("rose_quartz_polishing"))
.itemInputs('create:rose_quartz')
.inputFluids(Fluid.of('gtceu:lubricant 1'))
.itemOutputs('create:polished_rose_quartz')
.EUt(16)
.duration(10)

GTM.cutter(("rose_quartz_polishing_distilled_water"))
.itemInputs('create:rose_quartz')
.inputFluids(Fluid.of('gtceu:distilled_water 3'))
.itemOutputs('create:polished_rose_quartz')
.EUt(16)
.duration(15)

GTM.cutter(("rose_quartz_polishing_water"))
.itemInputs('create:rose_quartz')
.inputFluids(Fluid.of('water 4'))
.itemOutputs('create:polished_rose_quartz')
.EUt(16)
.duration(20)

event.shaped("create:electron_tube",
[
    "BTB",
    "WQW",
    "BWB"
], {
    B: "gtceu:brass_screw",
    T: "gtceu:glass_tube",
    W: "gtceu:lead_quadruple_cable",
    Q: "create:polished_rose_quartz"
})

CRT.mixing(Fluid.of('gtceu:mechanical_essence 10'), ['4x kubejs:mechanical_hands', 'gtceu:small_source_dust', Fluid.of('gtceu:precision 25')]).superheated()
// And NOW you get a neat vac tube recipe later on as an upgrade
event.remove({ output: "gtceu:vacuum_tube"})
const tgt = 'gtceu:glass_tube'
event.recipes.create.sequenced_assembly(
    [
        Item.of('2x gtceu:vacuum_tube')
    ],
    'gtceu:glass_tube',
    [
        event.recipes.createDeploying(tgt, [tgt, 'gtceu:nexus_steel_bolt']),
        event.recipes.createDeploying(tgt, [tgt, 'gtceu:copper_single_wire']),
        event.recipes.createFilling(tgt, [tgt, Fluid.of('gtceu:redstone 144')])
    ]
)
.transitionalItem('gtceu:glass_tube')
.loops(2)

// Once again moving assembler recipe to MV
event.recipes.gtceu.assembler('vac_tube')
    .itemInputs("gtceu:glass_tube", "gtceu:nexus_steel_bolt", "2x gtceu:source_attuned_copper_single_wire")
    .inputFluids(Fluid.of('gtceu:red_alloy 18'))
    .itemOutputs("4x gtceu:vacuum_tube")
    .duration(80)
    .EUt(GTValues.VA[GTValues.MV])


CRT.mechanical_crafting('gtceu:primitive_alloyment_kiln', [
'FFFFF',
'FBRBF',
'FIAWF',
'FBEBF',
'FFFFF'
], {
F: 'gtceu:firebricks',
B: 'gtceu:bronze_frame',
R: 'ars_nouveau:air_essence',
I: 'ars_nouveau:fire_essence',
E: 'ars_nouveau:water_essence',
W: 'ars_nouveau:earth_essence',
A: 'gtceu:steel_frame'
})

var EIC = 'gtceu:echo_imbuement_chamber'
event.recipes.create.sequenced_assembly(
    [
        EIC
    ],
    'gtceu:lv_fluid_solidifier',
    [
        CRT.deploying(EIC, [EIC, 'gtceu:nexus_steel_plate']),
        CRT.deploying(EIC, [EIC, 'gtceu:metallurgically_enhanced_source_rod']),
        CRT.filling(EIC, [EIC, Fluid.of('gtceu:soldering_alloy 250')]),
        CRT.deploying(EIC, [EIC, 'gtceu:nexus_steel_plate']),
        CRT.deploying(EIC, [EIC, 'gtceu:aluminium_plate'])
    ]
)
.transitionalItem(EIC)
.loops(16)

var RCCB = 'gtceu:resin_printed_circuit_board'
CRT.sequenced_assembly(
    [
        'create:precision_mechanism'
    ],
    RCCB,
    [
        CRT.deploying(RCCB, [RCCB, 'gtceu:brass_plate']),
        CRT.filling(RCCB, [RCCB, Fluid.of('gtceu:soldering_alloy 250')]),
        CRT.deploying(RCCB, [RCCB, 'gtceu:vacuum_tube']),
        CRT.deploying(RCCB, [RCCB, 'gtceu:small_gold_gear']),
        CRT.deploying(RCCB, [RCCB, 'gtceu:resistor'])
    ]
)
.transitionalItem(RCCB)
.loops(4)

CRT.mixing(Fluid.of('gtceu:precision 100'), 'create:precision_mechanism').heated()

CRT.filling('kubejs:primitive_glue_tube', [Fluid.of('gtceu:primitive_glue 100'),'kubejs:empty_glue_tube'])

CRT.mixing(['gtceu:opal_dust', Fluid.of('gtceu:crude_ethyl_silicate 40')], ['3x gtceu:small_nether_quartz_dust', Fluid.of('gtceu:crude_ethyl_silicate 50')]).heated()
CRT.mixing(['gtceu:opal_dust', Fluid.of('gtceu:crude_ethyl_silicate 40')], ['3x gtceu:small_quartzite_dust', Fluid.of('gtceu:crude_ethyl_silicate 50')]).heated()
CRT.mixing(['gtceu:opal_dust', Item.of('gtceu:tiny_opal_dust').withChance(0.1), Fluid.of('gtceu:crude_ethyl_silicate 45')], ['3x gtceu:small_certus_quartz_dust', Fluid.of('gtceu:crude_ethyl_silicate 50')]).heated()

CRT.mixing(Fluid.of('gtceu:ethanol 50'), ['2x minecraft:sugar', '3x #forge:crops', Fluid.of('water 100')]).heated()
CRT.mixing([Fluid.of('gtceu:methanol 50'), '2x gtceu:small_charcoal_dust'], 'gtceu:bio_chaff').heated()
CRT.mixing([Fluid.of('gtceu:methanol 50'), '2x gtceu:small_charcoal_dust'], 'createaddition:biomass').heated()
CRT.mixing([Fluid.of('gtceu:methanol 100'), 'gtceu:charcoal_dust'], 'createaddition:biomass_pellet').heated()

CRT.mixing(Fluid.of('gtceu:crude_ethyl_silicate 1000'), ['15x gtceu:nether_quartz_dust', Fluid.of('gtceu:ethanol 1000'), Fluid.of('gtceu:wood_leachate 200')]).heated()
CRT.compacting([Fluid.of('gtceu:wood_leachate 5'), 'gtceu:tiny_charcoal_dust'],[Fluid.of('water 50'), 'gtceu:charcoal_dust']).heated()

CRT.compacting('gtceu:opal_gem', ['2x gtceu:opal_dust', Fluid.of('water 50')]).superheated()

CRT.filling('kubejs:mechanical_essence_ampule', ['kubejs:glass_ampule', Fluid.of('gtceu:mechanical_essence 50')])
})