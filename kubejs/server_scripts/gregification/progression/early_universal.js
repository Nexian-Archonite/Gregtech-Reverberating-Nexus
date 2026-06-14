ServerEvents.recipes(event => {
    const GTM = event.recipes.gtceu


    const assemblymachines = ['assembler', 'bender', 'centrifuge', 'electrolyzer', 'extruder', 'forming_press', 'lathe', 'mixer', 'ore_washer', 'sifter', 'thermal_centrifuge', 'wiremill', 'macerator', 'autoclave']
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
        .itemInputs('7x gtceu:aluminium_dust', '2x gtceu:magnesium_dust', 'gtceu:manganese_dust')
        .itemOutputs('10x gtceu:birmabright_dust')
        .duration(350)
        .EUt(240)
        .circuit(3)

    GTM.mixer(('duralumin'))
        .itemInputs('4x gtceu:aluminium_dust', '3x gtceu:copper_dust', 'gtceu:magnesium_dust', 'gtceu:manganese_dust')
        .itemOutputs('9x gtceu:duralumin_dust')
        .duration(400)
        .EUt(240)
        .circuit(2)

    GTM.mixer(('beryllium_aluminium_alloy'))
        .itemInputs('7x gtceu:beryllium_dust', 'gtceu:aluminium_dust')
        .itemOutputs('8x gtceu:beryllium_aluminium_alloy_dust')
        .duration(310)
        .EUt(240)
        .circuit(1)

    GTM.mixer(('hydronalium'))
        .itemInputs('6x gtceu:aluminium_dust', '3x gtceu:magnesium_dust', 'gtceu:manganese_dust')
        .itemOutputs('10x gtceu:hydronalium_dust')
        .duration(410)
        .EUt(240)
        .circuit(2)

    GTM.mixer(('elgiloy'))
        .itemInputs('4x gtceu:cobalt_dust', '2x gtceu:chromium_dust', 'gtceu:nickel_dust', 'gtceu:steel_dust', 'gtceu:molybdenum_dust', 'gtceu:manganese_dust')
        .itemOutputs('10x gtceu:elgiloy_dust')
        .duration(420)
        .EUt(240)

    GTM.mixer(('beryllium_bronze'))
        .itemInputs('10x gtceu:copper_dust', 'gtceu:beryllium_dust')
        .itemOutputs('11x gtceu:beryllium_bronze_dust')
        .duration(290)
        .EUt(240)
        .circuit(1)

   GTM.mixer(('silicon_bronze'))
        .itemInputs('32x gtceu:copper_dust', '2x gtceu:silicon_dust', 'gtceu:manganese_dust')
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
        .itemInputs('gtceu:zinc_dust', '4x gtceu:aluminium_dust', '3x gtceu:copper_dust')
        .itemOutputs('8x gtceu:zamak_dust')
        .duration(350)
        .EUt(240)
        .circuit(3)

    GTM.mixer(('tumbaga'))
        .itemInputs('20x gtceu:copper_dust', '6x gtceu:gold_dust', 'gtceu:silver_dust')
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

event.shaped(Item.of(`2x gtceu:echoing_fluxum_casing`), [
            'PHP',
            'PFP',
            'PWP'
        ], {
            P: `gtceu:echoing_fluxum_steel_plate`,
            F: `gtceu:echoing_fluxum_steel_frame`,
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches'
        }).id(`gtceu:shaped/echoing_fluxum_steel_casing`)

        GTM.assembler((`echoing_fluxum_steel_casing`))
            .itemInputs(`6x gtceu:echoing_fluxum_steel_plate`, `gtceu:echoing_fluxum_steel_frame`)
            .itemOutputs(`2x gtceu:echoing_fluxum_casing`)
            .duration(50)
            .EUt(16)
            .circuit(6)

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

const steelRecipes = [
  {
    fuel: 'minecraft:charcoal',
    iron: 8,
    fuelAmount: 8,
    steel: 1152,
    fluxes: [
      { flux: 'gtceu:calcite_dust', duration: 4000 },
      { flux: 'gtceu:quicklime_dust', duration: 3500 },
      { flux: 'gtceu:magnesia_dust', duration: 3000 }
    ]
  },
  {
    fuel: 'gtceu:charcoal_dust',
    iron: 8,
    fuelAmount: 8,
    steel: 1152,
    fluxes: [
      { flux: 'gtceu:calcite_dust', duration: 4000 },
      { flux: 'gtceu:quicklime_dust', duration: 3500 },
      { flux: 'gtceu:magnesia_dust', duration: 3000 }
    ]
  },
  {
    fuel: 'minecraft:coal',
    iron: 10,
    fuelAmount: 8,
    steel: 1440,
    fluxes: [
      { flux: 'gtceu:calcite_dust', duration: 5000 },
      { flux: 'gtceu:quicklime_dust', duration: 4375 },
      { flux: 'gtceu:magnesia_dust', duration: 3750 }
    ]
  },
  {
    fuel: 'gtceu:coke_gem',
    iron: 16,
    fuelAmount: 8,
    steel: 2304,
    fluxes: [
      { flux: 'gtceu:calcite_dust', duration: 1000 },
      { flux: 'gtceu:quicklime_dust', duration: 875 },
      { flux: 'gtceu:magnesia_dust', duration: 750 }
    ]
  }
]

const bronzeRecipes = [
  {
    fuel: 'minecraft:charcoal',
    copper: 9,
    tin: 3,
    phosphor: 1,
    fuelAmount: 8,
    bronze: 1746,
    fluxes: [
      { flux: 'gtceu:calcite_dust', duration: 1000 },
      { flux: 'gtceu:quicklime_dust', duration: 875 },
      { flux: 'gtceu:magnesia_dust', duration: 750 }
    ]
  },
  {
    fuel: 'gtceu:charcoal_dust',
    copper: 9,
    tin: 3,
    phosphor: 1,
    fuelAmount: 8,
    bronze: 1746,
    fluxes: [
      { flux: 'gtceu:calcite_dust', duration: 1000 },
      { flux: 'gtceu:quicklime_dust', duration: 875 },
      { flux: 'gtceu:magnesia_dust', duration: 750 }
    ]
  },
  {
    fuel: 'minecraft:coal',
    copper: 12,
    tin: 4,
    phosphor: 2,
    fuelAmount: 8,
    bronze: 2320,
    fluxes: [
      { flux: 'gtceu:calcite_dust', duration: 1250 },
      { flux: 'gtceu:quicklime_dust', duration: 1225 },
      { flux: 'gtceu:magnesia_dust', duration: 1175 }
    ]
  },
  {
    fuel: 'gtceu:coke_gem',
    copper: 18,
    tin: 6,
    phosphor: 3,
    fuelAmount: 8,
    bronze: 3472,
    fluxes: [
      { flux: 'gtceu:calcite_dust', duration: 1200 },
      { flux: 'gtceu:quicklime_dust', duration: 1000 },
      { flux: 'gtceu:magnesia_dust', duration: 800 }
    ]
  }
]

const PhosphateRecipes = [
    {
        fuel: "minecraft:charcoal",
        apatite: 9,
        sand: 6,
        fuelAmount: 8,
        phopshate: 3,
        fluxes: [
      { flux: 'gtceu:calcite_dust', duration: 1200 },
      { flux: 'gtceu:quicklime_dust', duration: 1000 },
      { flux: 'gtceu:magnesia_dust', duration: 800 }
    ],
        leachate: 500
    },
    {
        fuel: "gtceu:charcoal_dust",
        apatite: 9,
        sand: 6,
        fuelAmount: 8,
        phopshate: 3,
        fluxes: [
      { flux: 'gtceu:calcite_dust', duration: 1200 },
      { flux: 'gtceu:quicklime_dust', duration: 1000 },
      { flux: 'gtceu:magnesia_dust', duration: 800 }
    ],
        leachate: 500
    },
    {
        fuel: "minecraft:coal",
        apatite: 18,
        sand: 9,
        fuelAmount: 10,
        phopshate: 6,
        fluxes: [
      { flux: 'gtceu:calcite_dust', duration: 1500 },
      { flux: 'gtceu:quicklime_dust', duration: 1250 },
      { flux: 'gtceu:magnesia_dust', duration: 1000 }
    ],
        leachate: 750
    },
    {
        fuel: "gtceu:coke_gem",
        apatite: 27,
        sand: 12,
        fuelAmount: 12,
        phopshate: 9,
        fluxes: [
      { flux: 'gtceu:calcite_dust', duration: 1200 },
      { flux: 'gtceu:quicklime_dust', duration: 1000 },
      { flux: 'gtceu:magnesia_dust', duration: 800 }
    ],
        leachate: 1000
    }
]
steelRecipes.forEach(recipe => {
  recipe.fluxes.forEach(fluxData => {
    const builder = GTM.primitive_cylindrical_hearth(`steel_from_${recipe.fuel.split(':')[1]}_${fluxData.flux.split(':')[1]}`)
      .itemInputs(`${recipe.iron}x minecraft:iron_ingot`, `${recipe.fuelAmount}x ${recipe.fuel}`, `3x ${fluxData.flux}`)
      .outputFluids(`gtceu:steel ${recipe.steel}`)
      .duration(fluxData.duration)
    
    if (recipe.fuel === 'gtceu:coke_gem') builder.EUt(32)
    if (recipe.fuel !== 'gtceu:coke_gem' && recipe.fuel !== 'minecraft:charcoal') {builder.EUt(8)}
  })
})

bronzeRecipes.forEach(recipe => {
  recipe.fluxes.forEach(fluxData => {
    const builder = GTM.primitive_cylindrical_hearth(`bronze_from_${recipe.fuel.split(':')[1]}_${fluxData.flux.split(':')[1]}`)
    .itemInputs(`${recipe.copper}x gtceu:copper_dust`, `${recipe.tin}x gtceu:tin_dust`, `${recipe.phosphor}x gtceu:tiny_phosphorus_dust`, `${recipe.fuelAmount}x ${recipe.fuel}`, `3x ${fluxData.flux}`)
    .outputFluids(`gtceu:bronze ${recipe.bronze}`)
    .duration(fluxData.duration)
    
    if (recipe.fuel === 'gtceu:coke_gem') builder.EUt(32)
    if (recipe.fuel !== 'gtceu:coke_gem' && recipe.fuel !== 'minecraft:charcoal') {builder.EUt(8)}
    })
})

PhosphateRecipes.forEach(recipe => {
  recipe.fluxes.forEach(fluxData => {
    const builder = GTM.primitive_coking_array(`phosphate_from_${recipe.fuel.split(':')[1]}_${fluxData.flux.split(':')[1]}`)
    .itemInputs(`${recipe.apatite}x gtceu:apatite_dust`, `${recipe.sand}x sand`, `${recipe.fuelAmount}x ${recipe.fuel}`, `3x ${fluxData.flux}`)
    .inputFluids(`gtceu:wood_leachate ${recipe.leachate}`)
    .duration(fluxData.duration)
    .outputFluids(`gtceu:phosphoric_acid ${1000*recipe.phopshate}`)
    
    if (recipe.fuel === 'gtceu:coke_gem') builder.EUt(32)
    if (recipe.fuel !== 'gtceu:coke_gem' && recipe.fuel !== 'minecraft:charcoal') {builder.EUt(8)}
  })
})

GTM.alloying_kiln('electrum')
.itemInputs('2x gtceu:silver_ingot', '2x gold_ingot')
.itemOutputs('3x gtceu:electrum_ingot')
.duration(100)
.EUt(4)

GTM.alloying_kiln('invar')
.itemInputs('3x iron_ingot', 'gtceu:nickel_ingot')
.itemOutputs('3x gtceu:invar_ingot')
.duration(100)
.EUt(4)
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