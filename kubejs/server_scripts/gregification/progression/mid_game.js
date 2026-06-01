ServerEvents.recipes(event => {
const GTM = event.recipes.gtceu

GTM.distillation_tower(('unpure_source_from_tainted'))
    .inputFluids(Fluid.of('gtceu:virulence_tainted_source 2500'))
    .outputFluids(Fluid.of('undergarden:virulent_mix_source 2065'), Fluid.of('gtceu:unpure_source 435'), Fluid.of('gtceu:taint 3'))
    .duration(40)
    .EUt(128)

    GTM.fluid_heater(('virtulence_to_taint'))
    .inputFluids(Fluid.of('undergarden:virulent_mix_source 100'))
    .outputFluids(Fluid.of('gtceu:taint 25'))
    .duration(40)
    .EUt(128)

    GTM.distillation_tower(('source_distillation'))
    .inputFluids(Fluid.of('gtceu:unpure_source 1000'))
    .outputFluids(Fluid.of('gtceu:crystalline_sludge 500'), Fluid.of('gtceu:source 500'))
    .duration(40)
    .EUt(128)

    GTM.centrifuge(('crystalline_sludge'))
    .inputFluids(Fluid.of('gtceu:crystalline_sludge 1000'))
    .itemOutputsRanged(Item.of('gtceu:diamond_dust'), 1, 6)
    .itemOutputsRanged(Item.of('gtceu:mana_dust'), 3, 11)
    .itemOutputsRanged(Item.of('gtceu:ruby_dust'), 1, 5)
    .itemOutputsRanged(Item.of('gtceu:sapphire_dust'), 1, 4)
    .itemOutputsRanged(Item.of('gtceu:aluminium_dust'), 0, 2)
    .itemOutputsRanged(Item.of('gtceu:arcane_dust'), 3,7)
    .outputFluids(Fluid.of('gtceu:source 100'))
    .duration(600)
    .EUt(64)

    GTM.electrolyzer(('tainted_calcite_concentrate'))
    .inputFluids(Fluid.of('gtceu:tainted_calcite_concentrate 1000'))
    .outputFluids(Fluid.of('gtceu:dissolved_calcium_carbonate 4800'), Fluid.of('gtceu:taint 200'), Fluid.of('gtceu:sulfuric_acid 1000'))
    .duration(200)
    .EUt(32)

    GTM.centrifuge(('tainted_magmatic_mineral_sludge'))
    .inputFluids(Fluid.of('gtceu:tainted_magmatic_mineral_sludge 10000'))
    .outputFluids(Fluid.of('gtceu:tainted_rich_magmatic_mineral_sludge 1500'), Fluid.of('gtceu:tainted_medium_magmatic_mineral_sludge 2000'), Fluid.of('gtceu:tainted_poor_magmatic_mineral_sludge 2500'), Fluid.of('lava 4000'))
    .duration(240)
    .EUt(120)

    const magmatypes = ["rich", "medium", "poor"]
    magmatypes.forEach((idk) => {
        GTM.chemical_reactor((`${idk}_mineral_magma_calcification`))
        .inputFluids(Fluid.of(`gtceu:tainted_${idk}_magmatic_mineral_sludge 2000`))
        .itemInputs('6x gtceu:calcium_dust')
        .outputFluids(Fluid.of(`gtceu:calcic_${idk}_magmatic_mineral_sludge 2000`))
        .duration(40)
        .EUt(120)

        GTM.chemical_reactor((`${idk}_mineral_magma_decalcification`))
        .inputFluids(Fluid.of(`gtceu:calcic_${idk}_magmatic_mineral_sludge 5000`), Fluid.of('gtceu:sulfuric_acid 1250'))
        .outputFluids(Fluid.of(`gtceu:decalcified_${idk}_magmatic_mineral_sludge 5000`), Fluid.of(`gtceu:tainted_calcite_concentrate 1500`))
        .duration(160)
        .EUt(120)

        GTM.fermenter((`${idk}_mineral_magma_purification_via_decomposition`))
        .inputFluids(Fluid.of(`gtceu:decalcified_${idk}_magmatic_mineral_sludge 1000`))
        .outputFluids(Fluid.of(`gtceu:${idk}_magmatic_mineral_sludge 1000`))
        .itemOutputs('7x gtceu:calcium_carbonate_dust')
        .duration(160)
        .EUt(120)
    })

    GTM.chemical_vat(('rich_mineral_magmatic_sludge_decomposition'))
    .inputFluids(Fluid.of('gtceu:rich_magmatic_mineral_sludge 2000'))
    .notConsumable('botania:alchemy_catalyst')
    .outputFluids(Fluid.of('gtceu:medium_magmatic_mineral_sludge 400'), Fluid.of('gtceu:taint 250'), Fluid.of('gtceu:decalcified_bauxite_sludge 350'))
    .itemOutputs('3x gtceu:naquadah_dust', '6x gtceu:platinum_group_sludge_dust', '4x gtceu:crushed_tungstate_ore')
    .duration(80)
    .addData("HeatPressure", 3.5)
    .addData("Temp", 1400)
    .EUt(2048)

    GTM.electrolyzer(('medium_mineral_magmatic_sludge_decomposition'))
    .inputFluids(Fluid.of('gtceu:medium_magmatic_mineral_sludge 2000'))
    .outputFluids(Fluid.of('gtceu:poor_magmatic_mineral_sludge 400'), Fluid.of('gtceu:taint 250'))
    .itemOutputs('8x gtceu:crushed_ilmenite_ore', '7x gtceu:rare_earth_dust', '4x gtceu:titanium_trifluoride_dust')
    .chancedOutput('gtceu:tiny_naquadah_dust', 100, 0)
    .duration(66)
    .EUt(480)

    GTM.centrifuge(('poor_mineral_magmatic_sludge_decomposition'))
    .inputFluids(Fluid.of('gtceu:poor_magmatic_mineral_sludge 2000'))
    .outputFluids(Fluid.of('lava 1000'), Fluid.of('gtceu:taint 500'))
    .itemOutputs('3x gtceu:bauxite_slag_dust', '4x gtceu:iron_dust', '5x gtceu:platinum_sludge_residue_dust')
    .duration(50)
    .EUt(120)

    GTM.phase_alternator(('heat_treatment_of_taint'))
    .inputFluids(Fluid.of('gtceu:taint 200'))
    .outputFluidsRanged(Fluid.of('gtceu:heat_treated_taint'), 150, 200)
    .duration(40)
    .EUt(128)

    GTM.mixer(('taint_alloyment'))
    .inputFluids(Fluid.of('gtceu:taint 750'))
    .itemInputs('4x gtceu:lanthanum_dust', '3x gtceu:yttrium_dust', '2x gtceu:annealed_copper_dust', 'gtceu:niobium_dust')
    .outputFluids(Fluid.of('gtceu:alloyed_taint 2190'))
    .duration(600)
    .EUt(512)

    GTM.arc_furnace(('chromaticality_manipulation_of_taint'))
    .inputFluids(Fluid.of('gtceu:taint 144'))
    .itemInputs('gtceu:nexus_dust')
    .outputFluids(Fluid.of('gtceu:chromatically_mutated_taint 216'))
    .chancedOutput('gtceu:nexus_dust', 5000, 0)
    .duration(40)
    .EUt(128)

    GTM.phase_alternator(('perfect_taint'))
    .inputFluids(Fluid.of('gtceu:heat_treated_taint 175'), Fluid.of('gtceu:alloyed_taint 1000'), Fluid.of('gtceu:chromatically_mutated_taint 180'), Fluid.of('gtceu:mechanical_concentrate 5'))
    .outputFluids(Fluid.of('gtceu:perfected_taint 460'))
    .duration(200)
    .EUt(256)

    GTM.phase_alternator(('virulence_to_taint'))
    .inputFluids(Fluid.of('undergarden:virulent_mix_source 10000'))
    .outputFluids(Fluid.of('gtceu:taint 7500'))
    .duration(1000)
    .EUt(512)

    GTM.metaphysical_metallurgy_tainter(('titanium_dust_to_tainted'))
    .itemInputs('gtceu:titanium_dust')
    .inputFluids(Fluid.of('gtceu:perfected_taint 144'))
    .itemOutputs('gtceu:tainted_titanium_dust')
    .duration(100)
    .EUt(2048)

    GTM.metaphysical_metallurgy_tainter(('molten_titanium_to_tainted'))
    .inputFluids(Fluid.of('gtceu:titanium 72'), Fluid.of('gtceu:perfected_taint 72'))
    .outputFluids(Fluid.of('gtceu:tainted_titanium 144'))
    .duration(100)
    .EUt(8192)

    GTM.electrolyzer(('tainted_titanium_recycling'))
    .itemInputs('2x gtceu:tainted_titanium_dust')
    .itemOutputs('gtceu:titanium_dust')
    .outputFluids(Fluid.of('gtceu:perfected_taint 144'))
    .duration(45)
    .EUt(128)
    
// return from Taint
    GTM.assembler(('effervescent_echoite_exile'))
    .itemInputs('gtceu:mv_mixer', '12x gtceu:condensed_mana_plate', '4x gtceu:invar_plate', '16x gtceu:aluminium_dust', 'kubejs:multiblock_upgrade_kit')
    .inputFluids(Fluid.of(`gtceu:tantalum ${144*24}`))
    .itemOutputs('gtceu:effervescent_echoite_exile')
    .duration(400)
    .EUt(128)

    

GTM.assembler(('industrial_refraction_kiln'))
.itemInputs('gtceu:primitive_alloyment_kiln', 'gtceu:lumium_frame', '12x gtceu:signalum_plate', '8x gtceu:enderium_plate', '4x #gtceu:circuits/hv', '2x gtceu:kanthal_coil_block')
.inputFluids(Fluid.of('gtceu:soldering_alloy 4000'))
.itemOutputs('gtceu:industrial_refraction_kiln')
.duration(600)
.EUt(512)

//QoL tbf
GTM.assembler(('inductor_source_attuned'))
.itemInputs('gtceu:steel_ring', '2x gtceu:fine_source_attuned_copper_wire')
.inputFluids(Fluid.of('gtceu:polyethylene 36'))
.itemOutputs('8x gtceu:inductor')
.duration(320)
.EUt(120)

GTM.assembler(('inductor_nzf_source_attuned'))
.itemInputs('gtceu:nickel_zinc_ferrite_ring', '2x gtceu:fine_source_attuned_copper_wire')
.inputFluids(Fluid.of('gtceu:polyethylene 36'))
.itemOutputs('16x gtceu:inductor')
.duration(320)
.EUt(120)

GTM.assembler(('diode_polyethylene_source_attuned'))
.itemInputs('gtceu:fine_source_attuned_copper_wire', 'gtceu:small_gallium_arsenide_dust')
.inputFluids(Fluid.of('gtceu:polyethylene 144'))
.itemOutputs('8x gtceu:diode')
.duration(400)
.EUt(30)

GTM.assembler(('diode_polyethylene_source_attuned_wafer'))
.itemInputs('gtceu:fine_source_attuned_copper_wire', 'gtceu:silicon_wafer')
.inputFluids(Fluid.of('gtceu:polyethylene 144'))
.itemOutputs('8x gtceu:diode')
.duration(400)
.EUt(30)

GTM.assembler(('advanced_computer_casing/progressed'))
.itemInputs('gtceu:computer_casing', '#gtceu:circuits/zpm', '64x gtceu:fine_permendur_wire', '64x gtceu:fine_electrum_wire', '4x gtceu:indium_tin_barium_titanium_cuprate_single_wire')
.itemOutputs('2x gtceu:advanced_computer_casing')
.EUt(122880)
.duration(200)

GTM.assembler(('computer_casing/progressed'))
.itemInputs('gtceu:osmiridium_frame', '6x gtceu:osmiridium_plate', '#gtceu:circuits/luv', '32x gtceu:fine_permendur_wire', '32x gtceu:fine_source_attuned_copper_wire', '2x gtceu:vanadium_gallium_single_wire')
.itemOutputs('4x gtceu:computer_casing')
.EUt(122880)
.duration(200)

GTM.assembler(('high_power_casing/progressed'))
.itemInputs('gtceu:osmiridium_frame', '6x gtceu:osmiridium_plate', '#gtceu:circuits/iv', '16x gtceu:fine_permendur_wire', '16x gtceu:fine_source_attuned_copper_wire', '2x gtceu:niobium_titanium_single_wire')
.itemOutputs('4x gtceu:high_power_casing')
.EUt(30720)
.duration(100)

GTM.extractor(('do_you_like_how_i_walk_do_you_like_talk_do_you_like_how_my_face_disintegrates_into_chalk'))
.itemInputs('clock')
.itemOutputs('kubejs:mechanical_hands')
.outputFluids('gtceu:dissolved_calcium_carbonate 800')
.EUt(32)
.duration(100)

GTM.extractor(('ruler_of_everything'))
.itemInputs('kubejs:mechanical_hands')
.itemOutputs('clock')
.outputFluids('gtceu:dissolved_calcium_carbonate 69')
.EUt(32)
.duration(100)


GTM.chemical_reactor(('ammonium_hydroxide'))
.inputFluids(Fluid.of('gtceu:ammonia 300'), Fluid.of('water 700'))
.outputFluids(Fluid.of('gtceu:ammonium_hydroxide 1000'))
.EUt(128)
.duration(100)

GTM.electrolyzer(('ammonium_hydroxide_decomposition'))
.inputFluids(Fluid.of('gtceu:ammonium_hydroxide 1000'))
.outputFluids(Fluid.of('gtceu:ammonia 300'), Fluid.of('water 700'))
.EUt(30)
.duration(8)

GTM.chemical_reactor(('ammonium_hydroxide_to_formate'))
.inputFluids(Fluid.of('gtceu:ammonium_hydroxide 1000'), Fluid.of('gtceu:formic_acid 1000'))
.outputFluids(Fluid.of('gtceu:ammonium_formate 1000'))
.EUt(120)
.duration(300)


GTM.chemical_reactor(('magically_manifested_mechanical_dust'))
.itemInputs('2x gtceu:wizarding_steel_dust', '3x gtceu:nickel_zinc_ferrite_dust')
.inputFluids(Fluid.of('gtceu:mechanical_essence 50'), Fluid.of('gtceu:cupronickel 288'))
.itemOutputs('2x gtceu:magically_manifested_mechanical_dust')
.EUt(120)
.duration(300)

GTM.chemical_bath(('acidic_mechanical_sludge'))
.itemInputs('4x gtceu:magically_manifested_mechanical_dust')
.inputFluids(Fluid.of('gtceu:aqua_regia 500'))
.outputFluids(Fluid.of('gtceu:acidic_mechanical_sludge 750'))
.EUt(120)
.duration(300)

GTM.chemical_reactor(('acidic_mechanical_sludge'))
.itemInputs('2x gtceu:magically_manifested_mechanical_dust')
.inputFluids(Fluid.of('gtceu:aqua_regia 200'))
.outputFluids(Fluid.of('gtceu:acidic_mechanical_sludge 500'))
.EUt(1920)
.duration(200)

GTM.chemical_reactor(('alkalized_mechanical_sludge'))
.inputFluids(Fluid.of('gtceu:acidic_mechanical_sludge 1000'), Fluid.of('gtceu:ammonium_hydroxide 1000'))
.outputFluids(Fluid.of('gtceu:alkalized_mechanical_sludge 1000'), Fluid.of('gtceu:ammonia 100'))
.EUt(120)
.duration(300)

GTM.chemical_reactor(('ammonium_formate_to_aqueous_formate'))
.inputFluids(Fluid.of("gtceu:ammonium_formate 1000"))
.itemInputs('gtceu:sodium_hydroxide_dust')
.outputFluids(Fluid.of('gtceu:aqueous_ammonium_formate 1000'), Fluid.of('minecraft:water 1000'))
.EUt(120)
.duration(300)

GTM.fluid_heater(('aqueous_ammonium_formate_to_ammonium_hydroxide'))
.inputFluids(Fluid.of('gtceu:aqueous_ammonium_formate 1000'))
.outputFluids(Fluid.of('gtceu:ammonium_hydroxide 1000'))
.EUt(30)
.duration(20)

GTM.fluid_heater(('mechanical_concentrate'))
.inputFluids(Fluid.of('gtceu:alkalized_mechanical_sludge 1000'))
.outputFluids(Fluid.of('gtceu:mechanical_concentrate 432'))
.EUt(32)
.duration(20)


//return to normality ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
GTM.alloy_smelter(('obsidian_glass'))
.itemInputs('gtceu:tempered_glass', '2x gtceu:obsidian_plate')
.itemOutputs('kubejs:obsidian_glass')
.duration(100)
.EUt(128)

GTM.alloy_smelter(('signalum_glass'))
.itemInputs('kubejs:obsidian_glass', '2x gtceu:signalum_plate')
.itemOutputs('kubejs:signalum_glass')
.duration(100)
.EUt(128)

GTM.alloy_smelter(('lumium_glass'))
.itemInputs('kubejs:signalum_glass', '2x gtceu:lumium_plate')
.itemOutputs('kubejs:lumium_glass')
.duration(100)
.EUt(512)

GTM.alloy_smelter(('enderium_glass'))
.itemInputs('kubejs:lumium_glass', '2x gtceu:enderium_plate')
.itemOutputs('kubejs:enderium_glass')
.duration(40)
.EUt(2048)

GTM.electrolyzer(('condensed_mana_to_regular'))
.itemInputs('gtceu:condensed_mana_dust')
.itemOutputs('3x gtceu:mana_dust')
.duration(40)
.EUt(32)

GTM.mechanical_conjuration_institute(('stainless_to_mechanical'))
.inputFluids(Fluid.of('gtceu:mechanical_concentrate 144'))
.itemInputs('gtceu:stainless_steel_dust')
.itemOutputs('gtceu:mechanical_stainless_dust')
.duration(100)
.EUt(512)

GTM.mechanical_conjuration_institute(('molten_stainless_to_mechanical'))
.inputFluids(Fluid.of('gtceu:stainless_steel 72'), Fluid.of('gtceu:mechanical_concentrate 72'))
.outputFluids(Fluid.of('gtceu:mechanical_stainless 144'))
.duration(100)
.EUt(2048)

GTM.chemical_bath(('whydoesthisnotautocompletethisgoddamncoolingrecipe'))
    .itemInputs('gtceu:hot_mechanical_stainless_ingot')
    .inputFluids(Fluid.of('gtceu:distilled_water 100'))
    .itemOutputs('gtceu:mechanical_stainless_ingot')
    .duration(200)
    .EUt(120)

    GTM.chemical_bath(('whydoesthisnotautocompletethisgoddamncoolingrecipe_p2'))
    .itemInputs('gtceu:hot_mechanical_stainless_ingot')
    .inputFluids(Fluid.of('water 100'))
    .itemOutputs('gtceu:mechanical_stainless_ingot')
    .duration(300)
    .EUt(120)

 const tiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev"]
    tiers.forEach((level) => {
        event.recipes.gtceu.assembler(`kubejs:${level}_universal_circuit`)
            .itemInputs(`#gtceu:circuits/${level}`)
            .itemOutputs(`kubejs:${level}_universal_circuit`)
            .EUt(32)
            .duration(5)
    })

    const sculkcrafterrecipe = [
        ["ev", "platinum"],
        ["iv", "rhodium"],
        ["luv", "osmiridium"],
        ["zpm", "naquadah"],
    ]
    sculkcrafterrecipe.forEach(([tier, plate]) => {
        event.shaped(`gtceu:${tier}_automatic_sculk_crafter`, [
            "CPC",
            "EHE",
            "PPM"
        ], {
            P: `gtceu:${plate}_plate`,
            E: `gtceu:${tier}_emitter`,
            H: `gtceu:${tier}_machine_hull`,
            C: `#gtceu:circuits/${tier}`,
            M: `gtceu:${tier}_electric_motor`
        }).id(`gtceu:shaped/${tier}_automatic_sculk_crafter`)
    })

const energisticsassembly = [
    ["mv", "copper", 'hv'],
    ["hv", "gold", 'ev'],
    ["ev", "aluminium", 'iv'],
    ["iv", "platinum", 'luv'],
    ["luv", "vintanium", 'zpm'],
    ["zpm", "vanadium_gallium", 'uv'],
]
energisticsassembly.forEach(([componenttier, cablematerial, circuittier]) => {
    event.shaped(`gtceu:${componenttier}_energistics_assembler`, [
        'RCR',
        'MHM',
        'CTC'
    ], {
        R: `gtceu:${componenttier}_robot_arm`,
        C: `#gtceu:circuits/${circuittier}`,
        M: `gtceu:${componenttier}_conveyor_module`,
        H: `gtceu:${componenttier}_machine_hull`,
        T: `gtceu:${cablematerial}_double_cable`
    }).id(`gtceu:shaped/${componenttier}_energistics_assembler`)
})

const biomechanicalmachines = [
    ["iv", "auralloy-omega"],
    ["luv", "rhodipalladic-desnite"],
    ["zpm", "transuranic_naquadrium"],
    ["uv", "darmstadtium"]
]

Object.entries({
    mixer: (tier, material) => [
        ['GRG', 'GPG', 'CSC'],
        {
            'C': `#gtceu:circuits/${tier}`,
            'P': `gtceu:${tier}_electric_motor`,
            'S': 'gtceu:flesh_alloy_casing',
            'G': '#forge:glass',
            'R': `gtceu:${material}_rotor`
        }
    ],
    extruder: (tier, material) => [
        ['WAC', 'PHP', 'WAC'],
        {
            'C': `#gtceu:circuits/${tier}`,
            'P': `gtceu:${tier}_electric_piston`,
            'H': `gtceu:${tier}_machine_hull`,
            'A': `gtceu:double_${material}_plate`,
            'W': 'gtceu:samarium_iron_arsenic_oxide_quadruple_wire'
        }
    ],
    recycler: (tier) => [
        ['GCG', 'PSW', 'FCF'],
        {
            'W': `gtceu:${tier}_electric_pump`,
            'C': `#gtceu:circuits/${tier}`,
            'S': 'gtceu:flesh_alloy_casing',
            'F': `gtceu:electrum_single_cable`,
            'P': `gtceu:${tier}_electric_piston`,
            'G': '#forge:glass'
        }
    ]
}).forEach(([type, recipeFn]) => {
    biomechanicalmachines.forEach(([tier, material]) => {
        const [pattern, keys] = recipeFn(tier, material)
        event.shaped(`gtceu:${tier}_biomechanical_${type}`, pattern, keys)
            .id(`gtceu:shaped/${tier}_biomechanical_${type}`)
    })
})

GTM.sculk_crafter(('ancient_debris'))
.itemInputs('ars_nouveau:fire_essence', 'gtceu:source_gem', 'gtceu:netherite_scrap')
.chancedInput('botania:rune_greed', 1000, 0)
.inputFluids(Fluid.of('gtceu:mechanical_essence 30'))
.itemOutputs('2x minecraft:ancient_debris')
.duration(100)
.EUt(512)

GTM.cyclotron(('rare_earth_cycling'))
.inputFluids(Fluid.of('gtceu:tributyl_phosphate 50'))
.itemInputs('4x gtceu:rare_earth_dust')
.chancedOutput('5x gtceu:small_europium_dust', 1500, 0)
.chancedOutput('5x gtceu:small_neodymium_dust', 4500, 0)
.chancedOutput('5x gtceu:small_samarium_dust', 3500, 0)
.chancedOutput('5x gtceu:small_cerium_dust', 3500, 0)
.chancedOutput('5x gtceu:small_yttrium_dust', 3500, 0)
.chancedOutput('5x gtceu:small_lanthanum_dust', 2500, 0)
.chancedOutput('5x gtceu:small_dysprosium_dust', 4500, 0)
.chancedOutput('5x gtceu:small_lutetium_dust', 4500, 0)
.outputFluids(Fluid.of('water 40'))
.duration(64)
.EUt(GTValues.V[GTValues.EV], 3)


GTM.vacuum_freezer(('supercooled_ice'))
.inputFluids(Fluid.of('gtceu:ice 50000'))
.outputFluids(Fluid.of('gtceu:supercooled_ice 1000'))
.duration(10)
.EUt(2048)
    
GTM.phase_alternator(('cryothetic_zero'))
.inputFluids(Fluid.of('gtceu:supercooled_ice 1000'), Fluid.of('gtceu:taint 1000'))
.outputFluids(Fluid.of('gtceu:cryothetic_zero 10'), Fluid.of('gtceu:heat_treated_taint 2000'))
.duration(10)
.EUt(2048)

GTM.echo_imbuement_chamber(('cryosporsite_imbuement'))
.inputFluids(Fluid.of('gtceu:cryothetic_zero 144'))
.itemInputs('gtceu:dysprosium_dust')
.itemOutputs('gtceu:cryosporsite_dust')
.duration(20)
.EUt(2048)

GTM.metaphysical_metallurgy_tainter(('cryosporsite_tainting'))
.inputFluids(Fluid.of('gtceu:cryothetic_zero 18'), Fluid.of('gtceu:dysprosium 18'))
.outputFluids(Fluid.of('gtceu:cryosporsite 36'))
.duration(20)
.EUt(8192)

//chemistry part: ii (haha get the refer- GET OUT) ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

GTM.chemical_reactor(('hydroxy'))
.inputFluids(Fluid.of('gtceu:hydroxy 945'), Fluid.of('gtceu:hydrogen 55'))
.outputFluids(Fluid.of('water 1000'))
.daytime(false)
.duration(600)
.EUt(512)

GTM.chemical_reactor(('aqua_regihydroxide'))
.inputFluids(Fluid.of('gtceu:aqua_regia 1000'))
.itemInputs('3x gtceu:sodium_hydroxide_dust')
.outputFluids(Fluid.of('gtceu:aqua_regihydroxide 1000'), Fluid.of('gtceu:hydroxy 50'))
.itemOutputs('3x gtceu:sodium_dust')
.duration(100)
.EUt(512)

GTM.chemical_reactor(('hydrofluoric_hydroxicide'))
.inputFluids(Fluid.of('gtceu:hydrofluoric_acid 1000'))
.itemInputs('3x gtceu:sodium_hydroxide_dust')
.outputFluids(Fluid.of('gtceu:hydrofluoric_hydroxicide 1000'), Fluid.of('gtceu:hydroxy 30'))
.itemOutputs('3x gtceu:sodium_dust')
.duration(100)
.EUt(512)

GTM.chemical_vat(('phthoraquareghydroxyl_inferna'))
.inputFluids(Fluid.of('gtceu:aqua_regihydroxide 1000'), Fluid.of('gtceu:hydrofluoric_hydroxicide 1000'))
.outputFluids(Fluid.of('gtceu:infernal_acid 1000'))
.addData("HeatPressure", 3.5)
.addData("Temp", 1400)
.duration(600)
.EUt(GTValues.VA[GTValues.EV], 3)

GTM.implosion_compressor(('ancient_debris_cracking'))
.itemInputs('ancient_debris', '4x gtceu:industrial_tnt')
.itemOutputs('gtceu:cracked_ancient_debris', '3x gtceu:netherrack_dust')
.duration(20)
.EUt(8192)

GTM.macerator(('cracked_ancient_debris_macerating'))
.itemInputs('gtceu:cracked_ancient_debris')
.itemOutputs('gtceu:crumbling_ancient_debris')
.chancedOutput('gtceu:netherite_scrap', 2500, 0)
.itemOutputsRanged('gtceu:netherrack_dust', 1, 4)
.duration(400)
.EUt(2048)

event.smelting('gtceu:netherite_scrap', 'gtceu:cracked_ancient_debris').xp(2).cookingTime(150)
event.smelting('2x gtceu:netherite_scrap', 'gtceu:crumbling_ancient_debris').xp(2).cookingTime(100)

GTM.chemical_bath(('ancient_debris_acidosis'))
.itemInputs('gtceu:crumbling_ancient_debris')
.inputFluids(Fluid.of('gtceu:infernal_acid 1000'))
.outputFluids(Fluid.of('gtceu:acidic_unpure_uncracked_sulfuric_netherite_slag 2000'))
.duration(200)
.EUt(8192)

GTM.chemical_vat(('ancient_debris_acidososmosis'))
.itemInputs('gtceu:crumbling_ancient_debris')
.inputFluids(Fluid.of('gtceu:infernal_acid 1000'))
.outputFluids(Fluid.of('gtceu:acidic_unpure_uncracked_sulfuric_netherite_slag 4000'))
.addData("HeatPressure", 3.75)
.addData("Temp", 1400)
.duration(400)
.EUt(8192)

GTM.chemical_vat(('unpurified_netherite_alkalization'))
.inputFluids(Fluid.of('gtceu:acidic_unpure_uncracked_sulfuric_netherite_slag 1000'))
.itemInputs('16x gtceu:sodium_hydroxide_dust')
.outputFluids(Fluid.of('gtceu:unpure_uncracked_sulfuric_netherite_slag 1050'))
.itemOutputs('16x gtceu:sodium_dust')
.addData("HeatPressure", 1.625)
.addData("Temp", 750)
.duration(200)
.EUt(8192)

GTM.cyclotron(('netherite_slag_purification'))
.inputFluids(Fluid.of('gtceu:unpure_uncracked_sulfuric_netherite_slag 2100'))
.notConsumable('botania:alchemy_catalyst')
.itemOutputs('2x gtceu:platinum_group_sludge_dust', '3x gtceu:netherrack_dust', 'gtceu:zirconium_dust')
.outputFluids(Fluid.of('gtceu:purified_uncracked_sulfuric_netherite_slag 1500'))
.duration(600)
.EUt(GTValues.V[GTValues.IV], 3)

GTM.chemical_vat(('purified_netherite_slag_desulfurization'))
.inputFluids(Fluid.of('gtceu:purified_uncracked_sulfuric_netherite_slag 1000'))
.itemInputs('4x gtceu:caesium_hydroxide_dust')
.itemOutputs('4x gtceu:caesium_sulfate_dust')
.outputFluids(Fluid.of('gtceu:purified_uncracked_netherite_slag 1000'))
.duration(200)
.addData("HeatPressure", 1.25)
.addData("Temp", 530)
.EUt(8192)

GTM.cracker(('purified_netherite_slag_cracking'))
.inputFluids(Fluid.of('gtceu:purified_uncracked_netherite_slag 4000'), Fluid.of('gtceu:steam 1000'))
.outputFluids(Fluid.of('gtceu:purified_cracked_netherite_slag 4000'), Fluid.of('gtceu:scrub_waste 1000'))
.duration(200)
.EUt(8192)

GTM.electrolyzer(('purified_netherite_slag_cracking_residue_removal'))
.inputFluids(Fluid.of('gtceu:purified_cracked_netherite_slag 1000'))
.outputFluids(Fluid.of('gtceu:purified_netherite_sludge 900'), Fluid.of('gtceu:scrub_waste 50'), Fluid.of('gtceu:rich_magmatic_mineral_sludge 50'))
.duration(200)
.EUt(GTValues.VA[GTValues.EV], 3)

GTM.cyclotron(('purified_netherite_sludge_cycling'))
.inputFluids(Fluid.of('gtceu:purified_netherite_sludge 1000'))
.itemOutputs('gtceu:purified_netherite_scrap', '2x gtceu:platinum_group_sludge_dust', 'gtceu:naquadah_dust', '3x gtceu:bastnasite_dust', '2x gtceu:tungstate_dust', '6x gtceu:netherite_dust')
.outputFluids(Fluid.of('gtceu:aqua_regia 100'))
.duration(400)
.EUt(GTValues.V[GTValues.IV], 3)

GTM.alloy_blast_smelter(('purified_netherite_alloyment'))
.itemInputs('4x gtceu:platinum_ingot', '4x gtceu:purified_netherite_scrap', '16x minecraft:gold_ingot')
.outputFluids(Fluid.of('gtceu:purified_netherite 576'))
.blastFurnaceTemp(4500)
.duration(400)
.EUt(8192)

//snap back to reality  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- wait nvm this is radiology or smth

const yumyumrods = ["uranium_235", "plutonium_241", "plutonium", "thorium_uranium"]
yumyumrods.forEach(type => {
GTM.assembler((`${type}_fuel_rod_assembly`))
.itemInputs('gtceu:empty_fuel_rod', `32x gtceu:${type}_dioxide_rod`, '4x kubejs:enderium_glass')
.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene 100'))
.itemOutputs(`gtceu:${type}_oxide_fuel_rod`)
.duration(400)
.EUt(2048)
})

GTM.assembler((`mixed_oxide_fuel_rod_assembly`))
.itemInputs('gtceu:empty_fuel_rod', `32x gtceu:mixed_oxide_fuel_rod`, '4x kubejs:enderium_glass')
.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene 100'))
.itemOutputs(`gtceu:mox_fuel_rod`)
.duration(400)
.EUt(8192)

GTM.assembler(('enriched_naquadrium_boride_fuel_rod_assembly'))
.itemInputs('gtceu:empty_fuel_rod', `32x gtceu:enriched_naquadrium_boride_rod`, '4x kubejs:enderium_glass')
.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene 100'))
.itemOutputs(`gtceu:enriched_naquadrium_boride_fuel_rod`)
.duration(400)
.EUt(512)

GTM.assembler(('nuclear_reactor_assembly'))
.itemInputs('gtceu:ev_chemical_reactor', '64x gtceu:tainted_zircalloy_plate','48x kubejs:mechanical_essence_ampule','32x gtceu:lead_plate', '16x #gtceu:circuits/iv','8x gtceu:tainted_titanium_normal_fluid_pipe', '4x gtceu:duct_tape')
.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene 24000'))
.itemOutputs('gtceu:nuclear_fission_reactor')
.duration(12000)
.EUt(2048)

GTM.nuclear_fission(('uranium_235_burning'))
.itemInputs('gtceu:uranium_235_oxide_fuel_rod')
.perTick(true)
.inputFluids(Fluid.of('gtceu:distilled_water 200'))
.outputFluids(Fluid.of('gtceu:nuclear_steam 3400'))
.perTick(false)
.itemOutputs('gtceu:spent_uranium_235_oxide_fuel_rod')
.duration(12500)


GTM.nuclear_fission(('plutonium_239_burning'))
.itemInputs('gtceu:plutonium_oxide_fuel_rod')
.perTick(true)
.inputFluids(Fluid.of('gtceu:distilled_water 800'))
.outputFluids(Fluid.of('gtceu:nuclear_steam 13600'))
.perTick(false)
.itemOutputs('gtceu:spent_plutonium_oxide_fuel_rod')
.duration(2083)

GTM.nuclear_fission(('mox_burning'))
.itemInputs('gtceu:mox_fuel_rod')
.perTick(true)
.inputFluids(Fluid.of('gtceu:distilled_water 800'))
.outputFluids(Fluid.of('gtceu:nuclear_steam 13600'))
.perTick(false)
.itemOutputs('gtceu:spent_mox_fuel_rod')
.duration(10000)

GTM.nuclear_fission(('plutonium_241_oxide_burning'))
.itemInputs('gtceu:plutonium_241_oxide_fuel_rod')
.perTick(true)
.inputFluids(Fluid.of('gtceu:distilled_water 2250'))
.outputFluids(Fluid.of('gtceu:nuclear_steam 38250'))
.perTick(false)
.itemOutputs('gtceu:spent_plutonium_241_oxide_fuel_rod')
.duration(556)

GTM.nuclear_fission(('thorium_uranium_oxide_burning'))
.itemInputs('gtceu:thorium_uranium_oxide_fuel_rod')
.perTick(true)
.inputFluids(Fluid.of('water 25'))
.outputFluids(Fluid.of('gtceu:steam 3400'))
.perTick(false)
.itemOutputs('gtceu:spent_thorium_uranium_oxide_fuel_rod')
.duration(80000)

GTM.nuclear_fission(('thorium_uranium_oxide_burning_distilled'))
.itemInputs('gtceu:thorium_uranium_oxide_fuel_rod')
.perTick(true)
.inputFluids(Fluid.of('gtceu:distilled_water 50'))
.outputFluids(Fluid.of('gtceu:steam 6800'))
.perTick(false)
.itemOutputs('gtceu:spent_thorium_uranium_oxide_fuel_rod')
.duration(60000)

GTM.nuclear_turbine(('nuclear_steam'))
.perTick(true)
.inputFluids(Fluid.of('gtceu:nuclear_steam 340'))
.outputFluids(Fluid.of('gtceu:distilled_water 2'))
.duration(20)
.EUt(-512)

GTM.assembler(('empty_fuel_rod'))
.itemInputs('2x gtceu:steel_plate', '16x gtceu:tungsten_steel_rod')
.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene 16'))
.itemOutputs('4x gtceu:empty_fuel_rod')
.duration(200)
.EUt(2048)

const thefourhorsemenofnuclearcolumns = 
{"extraction": "magnetic_neodymium_block",
"scrubbing": "watertight_casing",
"partition": "nexus_steel_casing",
"stripping": "electrolytic_cell"}


Object.entries(thefourhorsemenofnuclearcolumns).forEach(([ColumnType, BlockType]) => {
    GTM.assembler((`${ColumnType}_column`))
    .itemInputs('gtceu:ev_extractor', '32x gtceu:tainted_titanium_plate', `16x gtceu:${BlockType}`, `16x gtceu:tungsten_steel_small_fluid_pipe`, '48x gtceu:lead_plate')
    .inputFluids('gtceu:polytetrafluoroethylene 4000')
    .itemOutputs(`gtceu:${ColumnType}_column`)
    .duration(200)
    .EUt(2048)
})

yumyumrods.forEach(type => {
GTM.macerator((`${type}_fuel_rod_chopping`))
.itemInputs(`gtceu:spent_${type}_oxide_fuel_rod`)
.itemOutputs(`gtceu:chopped_${type}_oxide_fuel_rod`, 'gtceu:radioactive_fuel_cladding_scrap_dust', '2x gtceu:small_radioactive_fuel_cladding_scrap_dust')
.duration(200)
.EUt(2048)

GTM.nuclear_dissolvant((`chopped_${type}_rod_melting`))
    .itemInputs(`gtceu:chopped_${type}_oxide_fuel_rod`)
    .inputFluids('gtceu:nitric_acid 4000')
    .outputFluids('gtceu:fuel_dissolver_solution 4000', 'gtceu:nitrogen_dioxide 1000')
    .itemOutputs('2x gtceu:small_radioactive_fuel_cladding_scrap_dust')
    .duration(1200)
    .EUt(1024)
})

GTM.nuclear_dissolvant(('chopped_mox_rod_melting'))
    .itemInputs('gtceu:chopped_mox_fuel_rod')
    .inputFluids('gtceu:nitric_acid 6000')
    .outputFluids('gtceu:fuel_dissolver_solution 6000', 'gtceu:nitrogen_dioxide 1000')
    .itemOutputs('2x gtceu:small_radioactive_fuel_cladding_scrap_dust')
    .duration(1200)
    .EUt(1024)

GTM.macerator((`mox_fuel_rod_chopping`))
.itemInputs(`gtceu:spent_mox_fuel_rod`)
.itemOutputs(`gtceu:chopped_mox_fuel_rod`, 'gtceu:radioactive_fuel_cladding_scrap_dust', '2x gtceu:small_radioactive_fuel_cladding_scrap_dust')
.duration(200)
.EUt(8192)

GTM.macerator((`thorium_fuel_rod_chopping`))
.itemInputs(`gtceu:spent_thorium_uranium_oxide_fuel_rod`)
.itemOutputs(`gtceu:chopped_thorium_uranium_oxide_fuel_rod`, 'gtceu:radioactive_fuel_cladding_scrap_dust', '2x gtceu:small_radioactive_fuel_cladding_scrap_dust')
.duration(200)
.EUt(512)

GTM.centrifuge(('thorium_fuel_rod_centrifuging'))
.itemInputs('gtceu:chopped_thorium_uranium_oxide_fuel_rod')
.itemOutputs('2x gtceu:small_radioactive_fuel_cladding_scrap_dust', '16x gtceu:mixed_thorium_uranium_233_mass_dust')
.duration(200)
.EUt(512)

GTM.mixer(('mox_fuel'))
.itemInputs('8x gtceu:plutonium_dust', '5x gtceu:uranium_233_dust', '2x gtceu:plutonium_241_dust')
.itemOutputs('15x gtceu:mixed_oxide_fuel_dust')
.duration(230)
.EUt(8192)

GTM.electrolyzer(('mox_fuel_recycling'))
.itemInputs('15x gtceu:mixed_oxide_fuel_dust')
.itemOutputs('8x gtceu:plutonium_dust', '5x gtceu:uranium_233_dust', '2x gtceu:plutonium_241_dust')
.duration(2820)
.EUt(60)

GTM.mixer('tbp_solution_mixing')
    .inputFluids('gtceu:tributyl_phosphate 3000', 'gtceu:kerosene 7000')
    .outputFluids('gtceu:tbp_solution 10000')
    .duration(100)
    .EUt(30)

GTM.mixer('dilute_nitric_acid_mixing')
    .inputFluids('gtceu:nitric_acid 1000', 'minecraft:water 3000')
    .outputFluids('gtceu:dilute_nitric_acid 4000')
    .duration(40)
    .EUt(30)

GTM.chemical_reactor('naphtha_to_kerosene')
    .inputFluids('gtceu:naphtha 2000', 'gtceu:hydrogen 1000')
    .outputFluids('gtceu:kerosene 1500')
    .circuit(1)
    .duration(300)
    .EUt(512)


GTM.chemical_reactor('purex_feed_adjustment')
    .inputFluids('gtceu:fuel_dissolver_solution 4000', 'gtceu:nitric_acid 1000')
    .outputFluids('gtceu:adjusted_feed_solution 5000')
    .duration(200)
    .EUt(480)

GTM.extraction_column('purex_coextraction')
    .inputFluids('gtceu:adjusted_feed_solution 5000', 'gtceu:tbp_solution 5000')
    .outputFluids('gtceu:organic_phase_u_pu 3000', 'gtceu:purex_raffinate 7000')
    .duration(600)
    .EUt(1024)

GTM.scrubbing_column('purex_scrubbing')
    .inputFluids('gtceu:organic_phase_u_pu 3000', 'gtceu:dilute_nitric_acid 1000')
    .outputFluids('gtceu:scrubbed_organic_phase 3000', 'gtceu:scrub_waste 1000')
    .duration(400)
    .EUt(1024)

GTM.partition_column('purex_partitioning')
    .inputFluids('gtceu:scrubbed_organic_phase 3000', 'gtceu:hydroxylamine_nitrate 500')
    .outputFluids('gtceu:aqueous_plutonium_solution 1000', 'gtceu:organic_uranium_phase 2000')
    .duration(800)
    .EUt(1024)

GTM.stripping_column('purex_uranium_stripping')
    .inputFluids('gtceu:organic_uranium_phase 2000', 'gtceu:dilute_nitric_acid 1000')
    .outputFluids('gtceu:uranyl_nitrate_solution 2000', 'gtceu:spent_tbp 1000')
    .duration(500)
    .EUt(1024)

GTM.stripping_column('purex_plutonium_concentration')
    .inputFluids('gtceu:aqueous_plutonium_solution 1000', 'gtceu:tbp_solution 1000')
    .outputFluids('gtceu:organic_plutonium_phase 500', 'gtceu:medium_active_waste 1500')
    .duration(600)
    .EUt(1024)

GTM.distillery('purex_uranium_concentration')
    .inputFluids('gtceu:uranyl_nitrate_solution 2000')
    .outputFluids('gtceu:concentrated_uranyl_nitrate 500', 'minecraft:water 1500')
    .duration(400)
    .EUt(480)

GTM.stripping_column('purex_plutonium_stripping')
    .inputFluids('gtceu:organic_plutonium_phase 500', 'gtceu:hydroxylamine_nitrate 200')
    .outputFluids('gtceu:plutonium_nitrate_solution 500', 'gtceu:spent_tbp 200')
    .duration(500)
    .EUt(1024)

GTM.chemical_vat('purex_uranium_trioxide')
    .inputFluids('gtceu:concentrated_uranyl_nitrate 500')
    .itemOutputs('4x gtceu:uranium_trioxide_dust')
    .outputFluids('gtceu:nitrogen_dioxide 1000', 'minecraft:water 500')
    .duration(600)
    .EUt(480)
    .addData("HeatPressure", 1.673)
    .addData("Temp", 673)
    

GTM.chemical_reactor('uranium_dioxide_reduction')
    .itemInputs('gtceu:uranium_trioxide_dust')
    .inputFluids('gtceu:hydrogen 2000')
    .itemOutputs('gtceu:uranium_dioxide_dust')
    .outputFluids('minecraft:water 1000')
    .duration(200)
    .EUt(120)

GTM.chemical_reactor('purex_plutonium_oxalate')
    .inputFluids('gtceu:plutonium_nitrate_solution 500')
    .itemInputs('gtceu:oxalic_acid_dust')
    .itemOutputs('2x gtceu:plutonium_oxalate_dust')
    .outputFluids('gtceu:dilute_nitric_acid 500')
    .duration(400)
    .EUt(480)

GTM.chemical_vat('plutonium_dioxide_calcination')
    .itemInputs('gtceu:plutonium_oxalate_dust')
    .itemOutputs('2x gtceu:mixed_plutonium_dioxide_dust', 'gtceu:americium_dust')
    .outputFluids('gtceu:carbon_dioxide 2000')
    .duration(400)
    .EUt(480)
    .addData("HeatPressure", 1.873)
    .addData("Temp", 873)
    

GTM.chemical_reactor('purex_solvent_recovery')
    .inputFluids('gtceu:spent_tbp 1000')
    .itemInputs('2x gtceu:sodium_carbonate_dust')
    .outputFluids('gtceu:regenerated_tbp 900', 'gtceu:solvent_wash_waste 600')
    .duration(300)
    .EUt(480)

//outta PUREX ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
GTM.chemical_reactor('solvay_step1')
    .inputFluids('gtceu:salt_water 1000', 'gtceu:ammonia 1000', 'gtceu:carbon_dioxide 1000')
    .itemOutputs('2x gtceu:sodium_bicarbonate_dust')
    .duration(200)
    .EUt(480)


GTM.electric_blast_furnace('solvay_step2')
    .itemInputs('2x gtceu:sodium_bicarbonate_dust')
    .itemOutputs('gtceu:sodium_carbonate_dust')
    .outputFluids('gtceu:carbon_dioxide 500', 'gtceu:steam 500')
    .blastFurnaceTemp(400)
    .duration(100)
    .EUt(1920)

//chemistry part three bajillion (oh you gotta be kidding me) ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Hydroxylamine Nitrate
GTM.large_chemical_reactor(('ammonium_carbonate'))
.inputFluids('gtceu:ammonia 2000', 'gtceu:carbon_dioxide 1000', 'water 1000')
.outputFluids('gtceu:ammonium_carbonate')
.duration(20)
.EUt(2048)

GTM.chemical_vat(('dinitrogen_trioxide'))
.inputFluids('gtceu:ammonia 4000', 'gtceu:oxygen 5000')
.outputFluids('gtceu:dinitrogen_trioxide 1000', 'water 6000')
.addData("HeatPressure", 1.25)
.addData("Temp", 603)
.duration(40)
.EUt(2048)

GTM.large_chemical_reactor(('ammonium_nitrate'))
.inputFluids('gtceu:ammonium_carbonate 1000', 'gtceu:dinitrogen_trioxide 1000')
.outputFluids('gtceu:ammonium_nitrite 2000', 'gtceu:carbon_dioxide 1000', 'water 1000')
.duration(20)
.EUt(2048)

GTM.chemical_vat(('hydroxylamine_disulfonate'))
.inputFluids('gtceu:ammonium_nitrite 1000', 'gtceu:sulfur_dioxide 2000', 'gtceu:ammonia 1000', 'gtceu:bisulfite 1000')
.outputFluids('gtceu:hydroxylamine_disulfonate 1000')
.addData("HeatPressure", 1)
.addData("Temp", 273)
.duration(40)
.EUt(2048)

GTM.chemical_vat(('hydroxylamine_sulfate'))
.inputFluids('gtceu:hydroxylamine_disulfonate 1000', 'water 2000')
.outputFluids('gtceu:hydroxylamine_sulfate 1000', 'gtceu:ammonium_bisulfate 1000')
.addData("HeatPressure", 1)
.addData("Temp", 653)
.duration(40)
.EUt(2048)

GTM.large_chemical_reactor(('hydroxylamine'))
.inputFluids('gtceu:hydroxylamine_sulfate 1000', 'gtceu:ammonia 2000')
.outputFluids('gtceu:hydroxylamine 2000')
.itemOutputs('gtceu:ammonium_sulfate_dust')
.duration(20)
.EUt(2048)
    
GTM.chemical_vat(('hydroxylamine_nitrate'))
.inputFluids('gtceu:hydroxylamine 1000', 'gtceu:nitric_acid 1000')
.outputFluids('gtceu:hydroxylamine_nitrate 1000')
.addData("HeatPressure", 1)
.addData("Temp", 303)
.duration(40)
.EUt(2048)

// Tributyl Phosphate
GTM.large_chemical_reactor(('phosphorus_trichloride'))
.itemInputs('gtceu:phosphorus_dust')
.inputFluids('gtceu:chlorine 3000')
.outputFluids('gtceu:phosphorus_trichloride 1000')
.duration(20)
.EUt(512)

GTM.large_chemical_reactor(('phosphoryl_chloride'))
.inputFluids('gtceu:phosphorus_trichloride 1000', 'gtceu:oxygen 500')
.outputFluids('gtceu:phosphoryl_chloride 1000')
.duration(20)
.EUt(512)

GTM.chemical_vat(('n-butenol'))
.inputFluids('gtceu:propene 2000', 'gtceu:carbon_monoxide 1000', 'water 1000')
.outputFluids('gtceu:n-butanol 1000')
.addData("HeatPressure", 3.25)
.addData("Temp", 653)
.duration(40)
.EUt(GTValues.VA[GTValues.EV])

GTM.chemical_vat("n-butanol_from_butyraldehyde")
.inputFluids("gtceu:butyraldehyde 1000", "gtceu:hydrogen 2000")
.notConsumable("gtceu:nickel_dust")
.outputFluids("gtceu:n-butanol 1000")
.addData("HeatPressure", 2.25)
.addData("Temp", 553)
.duration(40)
.EUt(GTValues.VA[GTValues.LuV])

GTM.large_chemical_reactor(('tributyl_phosphate'))
.inputFluids('gtceu:phosphoryl_chloride 1000', 'gtceu:n-butanol 3000')
.outputFluids('gtceu:tributyl_phosphate 1000', 'gtceu:hydrochloric_acid 3000')
.duration(20)
.EUt(2048)

//Oxalic Acid 1A:
GTM.chemical_vat(('sodium_formate'))
.inputFluids('gtceu:carbon_monoxide 1000')
.itemInputs('gtceu:sodium_hydroxide_dust')
.itemOutputs('gtceu:sodium_formate_dust')
.addData("HeatPressure", 1)
.addData("Temp", 650)
.duration(40)
.EUt(2048)

GTM.chemical_vat(('sodium_oxalate'))
.itemInputs('2x gtceu:sodium_formate_dust')
.itemOutputs('gtceu:sodium_oxalate_dust')
.outputFluids('gtceu:hydrogen 1000')
.addData("HeatPressure", 2.5)
.addData("Temp", 673)
.duration(40)
.EUt(2048)

GTM.large_chemical_reactor('oxalic_acid')
.itemInputs('gtceu:sodium_oxalate_dust')
.inputFluids('gtceu:sulfuric_acid 1000')
.itemOutputs('gtceu:oxalic_acid_dust', 'gtceu:sodium_sulfate_dust')
.duration(20)
.EUt(2048)
//Oxalic Acid 1B:

GTM.chemical_vat(('oxalic_acid_via_nitric_acidosis'))
.itemInputs('sugar')
.inputFluids('gtceu:nitric_acid 2000')
.itemOutputs('gtceu:oxalic_acid_dust')
.outputFluids('gtceu:nitrogen_dioxide 1000')
.addData("HeatPressure", 1.1)
.addData("Temp", 303)
.duration(40)
.EUt(2048)

const oxidizingmaterialsforfutureusemostlyactuallyjustforPUREX = ['uranium', 'uranium_235', 'plutonium', 'plutonium_241', 'thorium']
oxidizingmaterialsforfutureusemostlyactuallyjustforPUREX.forEach((type) => {
GTM.chemical_reactor(`${type}_oxidizing`)
.itemInputs(`gtceu:${type}_dust`)
.inputFluids('gtceu:oxygen 2000')
.itemOutputs(`3x gtceu:${type}_dioxide_dust`)
.duration(60)
.EUt(32)
})

GTM.mixer('thorium_uranium_dioxide_mixing')
.itemInputs('9x gtceu:thorium_dioxide_dust', 'gtceu:uranium_dioxide_dust')
.itemOutputs('10x gtceu:thorium_uranium_dioxide_dust')
.duration(60)
.EUt(128)

//snap back to reality

GTM.mixer(('nitinol_dust'))
.itemInputs('3x gtceu:nickel_dust', '3x gtceu:titanium_dust', '3x gtceu:niobium_dust')
.itemOutputs('10x gtceu:nitinol_dust')
.duration(120)
.EUt(512)
.circuit(10)
//rocketry and shit

GTM.assembler(('echoversal_space_complex'))
.itemInputs('64x gtceu:double_echolumium_plate', '64x gtceu:tainted_titanium_plate', '32x gtceu:cryosporsite_block' , '24x #gtceu:circuits/iv', '16x gtceu:ev_robot_arm', '12x gtceu:ev_conveyor_module', 'gtceu:ev_assembler')
.inputFluids('gtceu:polytetrafluoroethylene 32000')
.itemOutputs('gtceu:echoversal_space_complex')
.duration(1600)
.EUt(2048)

GTM.assembler(('interstellar_miner'))
.itemInputs('64x gtceu:double_resonite_plate', '64x gtceu:tainted_titanium_plate', '32x gtceu:cryosporsite_block' , '24x #gtceu:circuits/luv', '16x gtceu:iv_robot_arm', '12x gtceu:iv_conveyor_module', 'gtceu:iv_assembler')
.inputFluids('gtceu:polytetrafluoroethylene 32000')
.itemOutputs('gtceu:interstellar_miner')
.duration(1600)
.EUt(8192)

GTM.space_factory(('engine_frame'))
.itemInputs('32x gtceu:nexus_steel_rod', '8x gtceu:nexus_steel_plate')
.itemOutputs('ad_astra:engine_frame')
.inputFluids('gtceu:polytetrafluoroethylene 1000')
.duration(1000)
.EUt(2048)

GTM.space_factory(('tainted_titanium_tank'))
.itemInputs('gtceu:lv_super_tank', '16x gtceu:tainted_titanium_plate', '8x gtceu:tainted_titanium_rod', '4x gtceu:tainted_titanium_small_fluid_pipe')
.itemOutputs('ad_astra:steel_tank')
.inputFluids('gtceu:polytetrafluoroethylene 4000')
.duration(2400)
.EUt(8192)

GTM.space_factory(('desnium_tank'))
.itemInputs('gtceu:mv_super_tank', '16x gtceu:desnium_plate', '8x gtceu:desnium_rod', '4x gtceu:desnium_small_fluid_pipe')
.itemOutputs('ad_astra:desh_tank')
.inputFluids('gtceu:polybenzimidazole 4000')
.duration(2400)
.EUt(32768)
//...

GTM.space_factory(('tainted_titanium_engine'))
.itemInputs('3x ad_astra:engine_frame', '3x ad_astra:steel_tank', '3x gtceu:advanced_power_thruster', '16x gtceu:tainted_titanium_plate', '6x gtceu:tainted_titanium_small_fluid_pipe')
.itemOutputs('ad_astra:steel_engine')
.inputFluids('gtceu:polytetrafluoroethylene 4000')
.duration(3200)
.EUt(8192)

GTM.space_factory(('desnium_engine'))
.itemInputs('3x ad_astra:engine_frame', '3x ad_astra:desh_tank', '4x gtceu:advanced_power_thruster', '16x gtceu:desnium_plate', '6x gtceu:desnium_small_fluid_pipe')
.itemOutputs('ad_astra:desh_engine')
.inputFluids('gtceu:polybenzimidazole 4000')
.duration(3200)
.EUt(32768)
//...

GTM.space_factory(('tier-1_rocket'))
.itemInputs('2x ad_astra:steel_engine', '4x ad_astra:steel_tank', '96x gtceu:tainted_titanium_plate', '32x gtceu:tainted_zircalloy_rod', '24x gtceu:echolumium_plate', '16x kubejs:iv_universal_circuit')
.itemOutputs('ad_astra:tier_1_rocket')
.inputFluids('gtceu:polytetrafluoroethylene 16000')
.duration(4800)
.EUt(8192)

GTM.space_factory(('tier-2_rocket'))
.itemInputs('3x ad_astra:desh_engine', '6x ad_astra:desh_tank', '96x gtceu:desnium_plate', '32x gtceu:tainted_zircalloy_rod', '24x gtceu:echolumium_plate', '16x kubejs:luv_universal_circuit')
.itemOutputs('ad_astra:tier_2_rocket')
.inputFluids('gtceu:polybenzimidazole 16000')
.duration(4800)
.EUt(8192)

//return to wherever the fuck i was

GTM.assembler(('chemical_reaction_vat'))
.itemInputs('gtceu:large_chemical_reactor', '24x gtceu:tainted_titanium_plate', '32x gtceu:polytetrafluoroethylene_plate', '16x kubejs:ev_universal_circuit', '6x gtceu:ev_electric_pump')
.itemOutputs('gtceu:chemical_reaction_vat')
.duration(4800)
.EUt(2048)

GTM.cyclotron(('xenotime_cycling'))
.itemInputs('15x gtceu:xenotime_dust')
.itemOutputs('6x gtceu:yttrium_dust', '4x gtceu:phosphate_dust', '3x gtceu:dysprosium_dust', 'gtceu:uranium_dust', 'gtceu:thorium_dust')
.duration(500)
.EUt(1920)

GTM.cyclotron(('blue_zircon_cycling'))
.itemInputs('23x gtceu:blue_zircon_dust')
.itemOutputs('11x gtceu:zirconium_dust', '7x gtceu:silicon_dust', '3x gtceu:hafnium_dust', 'gtceu:uranium_dust')
.outputFluids('gtceu:oxygen 1000')
.duration(400)
.EUt(1920)

GTM.chemical_reactor('sodium_hydroxide_causticization')
.itemInputs('gtceu:sodium_carbonate_dust', '2x gtceu:calcium_hydroxide_dust')
.itemOutputs('2x gtceu:sodium_hydroxide_dust', 'gtceu:calcium_carbonate_dust')
.duration(100)
.EUt(120)

//The Great Lanthanum Arc

GTM.forming_press('laminated_glass')
.itemInputs('4x gtceu:tempered_glass', '2x gtceu:polyvinyl_butyral_plate', '2x gtceu:lanthanum_plate')
.itemOutputs('gtceu:laminated_glass')
.duration(100)
.EUt(480)

GTM.assembler('fusion_glass')
.itemInputs('2x gtceu:laminated_glass', '6x gtceu:naquadah_plate', '6x gtceu:neutron_reflector', '4x gtceu:lanthanum_plate')
.itemOutputs('2x gtceu:fusion_glass')
.inputFluids('gtceu:polybenzimidazole 144')
.duration(50)
.EUt(30720)
.cleanroom(CleanroomType.CLEANROOM)

GTM.mixer('borosilicate_dust')
.itemInputs('14x gtceu:glass_dust', 'gtceu:boron_dust', 'gtceu:lanthanum_dust')
.itemOutputs('16x gtceu:borosilicate_glass_dust')
.circuit(1)
.duration(180)
.EUt(7)

GTM.alloy_blast_smelter('borosilicate_glass')
.itemInputs('14x gtceu:glass_dust', 'gtceu:boron_dust', 'gtceu:lanthanum_dust')
.outputFluids('gtceu:borosilicate_glass 2304')
.circuit(8)
.duration(140)
.EUt(16)
.blastFurnaceTemp(1921)

GTM.alloy_blast_smelter('borosilicate_glass_gas')
.itemInputs('14x gtceu:glass_dust', 'gtceu:boron_dust', 'gtceu:lanthanum_dust')
.inputFluids('gtceu:nitrogen 1000')
.outputFluids('gtceu:borosilicate_glass 2304')
.circuit(18)
.duration(93)
.EUt(16)
.blastFurnaceTemp(1921)

GTM.mixer(('stainless_steel_from_elements'))
.itemInputs('6x gtceu:iron_dust', 'gtceu:nickel_dust', 'gtceu:manganese_dust', 'gtceu:chromium_dust', '2x gtceu:lanthanum_dust')
.itemOutputs('11x gtceu:stainless_steel_dust')
.circuit(3)
.duration(400)
.EUt(120)

GTM.mixer(('stainless_steel_from_invar'))
.itemInputs('4x gtceu:iron_dust', '3x gtceu:invar_dust', 'gtceu:manganese_dust', 'gtceu:chromium_dust', '2x gtceu:lanthanum_dust')
.itemOutputs('11x gtceu:stainless_steel_dust')
.circuit(1)
.duration(399)
.EUt(121)

GTM.mixer(('echoing_fluxum_steel'))
.itemInputs('gtceu:fluix_dust', '2x gtceu:steel_dust', 'gtceu:lanthanum_dust')
.inputFluids('gtceu:echoite 1000')
.itemOutputs('5x gtceu:echoing_fluxum_steel_dust')
.duration(220)
.EUt(96)


GTM.mixer(('blue_steel'))
.itemInputs('gtceu:sterling_silver_dust', 'gtceu:bismuth_bronze_dust', '2x gtceu:lanthanum_dust', '4x gtceu:black_steel_dust', '2x gtceu:steel_dust')
.itemOutputs('10x gtceu:blue_steel_dust')
.duration(800)
.EUt(28)

GTM.mixer(('red_steel'))
.itemInputs('gtceu:rose_gold_dust', 'gtceu:brass_dust', '2x gtceu:lanthanum_dust', '4x gtceu:black_steel_dust', '2x gtceu:steel_dust')
.itemOutputs('10x gtceu:red_steel_dust')
.duration(800)
.EUt(28)

GTM.mixer('tungstensteel')
.itemInputs('gtceu:steel_dust', 'gtceu:lanthanum_dust', '2x gtceu:tungsten_dust')
.itemOutputs('4x gtceu:tungsten_steel_dust')
.duration(180)
.EUt(1920)

//return from Lanthanum Arc

GTM.mixer('netherite')
.itemInputs('gtceu:platinum_dust', 'gtceu:netherite_scrap', '4x gtceu:gold_dust')
.itemOutputs('gtceu:netherite_dust')
.duration(180)
.EUt(2048)

GTM.centrifuge('netherite')
.itemInputs('gtceu:netherite_dust')
.itemOutputs('gtceu:platinum_dust', 'gtceu:netherite_scrap', '4x gtceu:gold_dust')
.duration(180)

GTM.fluid_solidifier('resonant_ender_to_pearl')
.inputFluids('gtceu:resonant_ender 250')
.itemOutputs('ender_pearl')
.duration(40)
.EUt(32)

GTM.mixer('energite_dust')
.itemInputs('5x redstone', '4x gtceu:ruby_dust')
.itemOutputs('9x gtceu:energite_dust')
.EUt(120)
.duration(600)

GTM.centrifuge('lapotron_dust')
.itemInputs('5x gtceu:lapotron_dust')
.itemOutputs('3x gtceu:energite_dust', '2x gtceu:lapis_dust')
.duration(40)
.EUt(32)

GTM.electric_blast_furnace(('netherite'))
.itemInputs('gtceu:netherite_dust')
.itemOutputs('netherite_ingot')
.blastFurnaceTemp(4500)
.duration(400)
.EUt(1800)

GTM.electric_blast_furnace(('netherite_gas'))
.itemInputs('gtceu:netherite_dust')
.inputFluids('gtceu:argon 50')
.itemOutputs('netherite_ingot')
.blastFurnaceTemp(4500)
.duration(300)
.EUt(1800)

GTM.cyclotron(('extraterrestrial_resonite_cycling'))
.itemInputs('23x gtceu:extraterrestrial_resonite_dust')
.itemOutputs('15x gtceu:resonite_dust', '6x gtceu:lunar_desh_dust', '2x gtceu:pitchblende_dust')
.EUt(2048)
.duration(250)

GTM.assembler(('nuclear_turbine'))
.itemInputs('gtceu:steam_large_turbine', '12x gtceu:tainted_titanium_plate', '8x #gtceu:circuits/ev', '4x gtceu:polytetrafluoroethylene_normal_fluid_pipe')
.itemOutputs('gtceu:nuclear_turbine')
.EUt(2048)
.duration(200)

GTM.assembler(('metaphysical_metallurgy_tainter'))
.itemInputs('gtceu:hv_chemical_bath', '16x gtceu:condensed_mana_plate', '8x gtceu:double_wizarding_steel_plate', '6x gtceu:advanced_power_thruster', '16x #gtceu:circuits/hv')
.inputFluids('gtceu:polytetrafluoroethylene 2000')
.itemOutputs('gtceu:metaphysical_metallurgy_tainter')
.EUt(512)
.duration(600)

GTM.assembler(('nuclear_dissolvant'))
.itemInputs('gtceu:ev_extractor', 'gtceu:ev_centrifuge', '24x gtceu:tainted_titanium_plate', '4x gtceu:cryosporsite_block', '12x #gtceu:circuits/ev')
.itemOutputs('gtceu:nuclear_dissolvant')
.EUt(2048)
.duration(600)
.circuit(17)


GTM.assembler(('cyclotron'))
.itemInputs('gtceu:ev_centrifuge', 'gtceu:ev_electrolyzer', '32x gtceu:incoloy_ma_956_plate', '16x gtceu:ev_electric_motor', '8x #gtceu:circuits/ev')
.itemOutputs('gtceu:cyclotron')
.EUt(2048)
.duration(600)
.circuit(13)

GTM.mixer(('caesium_hydroxide'))
.itemInputs('10x gtceu:caesium_dust')
.inputFluids('water 10000')
.itemOutputs('7x gtceu:caesium_hydroxide_dust')
.EUt(128)
.duration(600)


const thelisttoendalllists = {
    overworld: {
        ores: [
            ['chalcopyrite', 'vanadium_magnetite', 'redstone', 'galena', 'cobaltite'],
            ['diamond', 'graphite', 'sapphire', 'lepidolite', 'tantalite'],
            ['pyrochlore', 'apatite', 'pentlandite', 'realgar', 'cassiterite'],
            ['gold', 'silver', 'coal', 'lapis', 'gypsum']
        ],
        fluids: [
            'gtceu:oil_light 50000',
            'gtceu:oil_medium 50000',
            'gtceu:oil_heavy 50000',
            'gtceu:oil 50000'
        ]
    },
    nether: {
        ores: [
            ['netherrack_monazite', 'netherrack_electrotine', 'netherrack_saltpeter', 'netherrack_emerald'],
            ['netherrack_thorium', 'netherrack_wulfenite', 'netherrack_certus_quartz', 'netherrack_tetrahedrite'],
            ['netherrack_stibnite', 'netherrack_blue_zircon', 'netherrack_hafnium', 'netherrack_silicon']
        ],
        fluids: [
            'lava 100000',
            'gtceu:natural_gas 75000',
            'lava 100000'
        ]
    },
    end: {
        ores: [
            ['endstone_xenotime', 'endstone_dysprosium', 'endstone_naquadah'],
            ['endstone_uraninite', 'endstone_chromite', 'endstone_gold'],
            ['endstone_vanadium_magnetite', 'endstone_tungstate', 'endstone_ilmenite'],
            ['endstone_bauxite', 'endstone_cooperite', 'endstone_pitchblende']
        ],
        fluids: [
            'gtceu:krypton 50000',
            'gtceu:xenon 50000',
            'gtceu:deuterium 50000',
            'gtceu:tritium 50000'
        ]
    },
    moon: {
        ores: [
            ['moon_xenotime', 'moon_bastnasite', 'moon_monazite', 'moon_helium_3'],
            ['moon_silicon_dioxide', 'moon_enstatite', 'moon_chromite', 'moon_extraterrestrial_resonite'],
            ['lunar_desh', 'moon_aluminium', 'moon_ilmenite', 'moon_rutile'],
            ['moon_europium', 'moon_hafnium', 'moon_dysprosium', 'moon_lanthanum']
        ],
        fluids: [
            'gtceu:helium_3 5000',
            'gtceu:helium_3 5000',
            'gtceu:helium_3 5000',
            'gtceu:helium_3 5000'
        ]
    },
    undergarden: {
        ores: [
            ['depthrock_berzelianite', 'depthrock_clausthalite', 'depthrock_tiemannite', 'depthrock_nexus'],
        [   'depthrock_hessite', 'depthrock_altaite', 'depthrock_calaverite', 'depthrock_condensed_mana']
        ],
        fluids: [
            'gtceu:tainted_magmatic_mineral_sludge 50000',
            'gtceu:virulence_tainted_source 75000'
        ],
    },
    mars: {
        ores: [
            ['mars_jarosite', 'mars_fluorapatite', 'mars_rhodite', 'mars_dilithium'],
            ['mars_phenakite', 'mars_kernite', 'mars_molybdenite', 'mars_martian_ostrum'],
            ['mars_ulvospinel', 'mars_sphalerite', 'mars_merrillite', 'mars_laurite'],
            ['mars_taenite', 'mars_roquesite', 'mars_gallite', 'mars_sperrylite']
        ],
        fluids: [
            'gtceu:dilithium_zirconoaluminophosphocalcioferrisilicate 50000',
            'gtceu:martian_bacterial_sludge 50000',
            'gtceu:dilithium_zirconoaluminophosphocalcioferrisilicate 50000',
            'gtceu:martian_bacterial_sludge 50000',
        ]
    },
}

Object.entries(thelisttoendalllists).forEach(function(dimEntry) {
    var dimension = dimEntry[0]
    var data = dimEntry[1]

    data.ores.forEach(function(ores, circuit) {
        var recipe = GTM.chemical_vat(dimension + '_amalgam_separation_' + circuit)
            .itemInputs('gtceu:' + dimension + '_ore_amalgam')
            .inputFluids('gtceu:infernal_acid 1000')
            .circuit(circuit)
            .addData("HeatPressure", 6)
            .addData("Temp", 600)
            .duration(200)
            .EUt(2048)

        ores.forEach(function(ore) {
            recipe.itemOutputs('64x gtceu:' + ore + '_ore')
        })

        var fluid = data.fluids[circuit]
        if (fluid) {
            recipe.outputFluids(fluid)
        }
    })
})

const markerDimensions = {
    'overworld': 'minecraft:stone',
    'the_nether': 'minecraft:netherrack',
    'the_end': 'minecraft:end_stone',
    'undergarden': 'undergarden:depthrock'
}

const globeDimensions = ['moon', 'mars', 'mercury', 'venus', 'glacio']

Object.entries(markerDimensions).forEach(function(entry) {
    var dimension = entry[0]
    var researchItem = entry[1]

    event.recipes.gtceu.assembly_line('marker_' + dimension)
        .itemInputs(`64x ${researchItem}`)
        .itemOutputs('gtceu:' + dimension + '_marker')
        .duration(10000)
        .inputFluids('gtceu:resonance_plasma 10000')
        .EUt(GTValues.VA[GTValues.EV])
        ["scannerResearch(java.util.function.UnaryOperator)"](function(b) {
            return b.researchStack(Item.of(researchItem)).EUt(GTValues.VA[GTValues.EV]).duration(420)
        })
})

globeDimensions.forEach(function(dimension) {
    event.recipes.gtceu.assembly_line('marker_' + dimension)
        .itemInputs(`64x ad_astra:${dimension}_stone`)
        .itemOutputs('ad_astra:' + dimension + '_globe')
        .duration(10000)
        .inputFluids('gtceu:resonance_plasma 10000')
        .EUt(GTValues.VA[GTValues.EV])
        ["scannerResearch(java.util.function.UnaryOperator)"](function(b) {
            return b.researchStack(Item.of('ad_astra:' + dimension + '_stone')).EUt(GTValues.VA[GTValues.EV]).duration(420)
        })
})

const tierData = [
    { tier: 1, rocket: 'ad_astra:tier_1_rocket', rocketChance: 1000, amalgams: 64, duration: 12000, EUt: GTValues.VA[GTValues.IV] },
    { tier: 2, rocket: 'ad_astra:tier_2_rocket', rocketChance: 500,  amalgams: 80, duration: 10500, EUt: GTValues.VA[GTValues.LuV] },
    { tier: 3, rocket: 'ad_astra:tier_3_rocket', rocketChance: 200,  amalgams: 96, duration: 9000,  EUt: GTValues.VA[GTValues.ZPM] },
    { tier: 4, rocket: 'ad_astra:tier_4_rocket', rocketChance: 100,  amalgams: 112, duration: 7500, EUt: GTValues.VA[GTValues.UHV] }
]

const dimensions = [
    { id: 'overworld',   minTier: 1, notConsumable: 'gtceu:overworld_marker' },
    { id: 'nether',  minTier: 1, notConsumable: 'gtceu:the_nether_marker' },
    { id: 'end',     minTier: 1, notConsumable: 'gtceu:the_end_marker' },
    { id: 'undergarden', minTier: 1, notConsumable: 'gtceu:undergarden_marker' },
    { id: 'moon',        minTier: 1, notConsumable: 'ad_astra:moon_globe' },
    { id: 'mars',        minTier: 2, notConsumable: 'ad_astra:mars_globe' },
    { id: 'mercury',     minTier: 3, notConsumable: 'ad_astra:mercury_globe' },
    { id: 'venus',       minTier: 3, notConsumable: 'ad_astra:venus_globe' },
    { id: 'glacio',      minTier: 4, notConsumable: 'ad_astra:glacio_globe' }
]

tierData.forEach(function(tierEntry) {
    var tier = tierEntry.tier
    var rocket = tierEntry.rocket
    var amalgams = tierEntry.amalgams
    var duration = tierEntry.duration
    var rocketChance = tierEntry.rocketChance
    var EUt = tierEntry.EUt

    dimensions.forEach(function(dimEntry) {
        var dimId = dimEntry.id
        var minTier = dimEntry.minTier
        var notConsumable = dimEntry.notConsumable

        if (tier < minTier) return

        GTM.interstellar_miner('interstellar_' + dimId + '_t' + tier)
            .notConsumable(notConsumable)
            .chancedInput('1x ' + rocket, rocketChance, 0)
            .itemInputs(tier + 'x gtceu:tungsten_grinding_head')
            .inputFluids('gtceu:harmonical_fuel 2500')
            .itemOutputs(amalgams + 'x gtceu:' + dimId + '_ore_amalgam')
            .duration(duration)
            .EUt(EUt)
    })
})
GTM.mixer('harmonical_fuel')
.itemInputs('9x gtceu:resonance_dust')
.inputFluids('gtceu:dinitrogen_trioxide 2000', 'gtceu:dimethylhydrazine 2000')
.outputFluids('gtceu:harmonical_fuel 3000')
.duration(120)
.EUt(2048)

GTM.combustion_generator('harmonical_fuel')
.inputFluids("gtceu:harmonical_fuel 1")
.duration(1200)
.EUt(-512)

GTM.electric_blast_furnace('naquadrium_boride_separation')
    .itemInputs('2x gtceu:naquadrium_boride_dust')
    .inputFluids('gtceu:chlorine 3000')
    .itemOutputs('gtceu:hot_naquadrium_ingot')
    .outputFluids('gtceu:boron_trichloride 1000')
    .blastFurnaceTemp(400)
    .duration(100)
    .EUt(1920)

GTM.electric_blast_furnace('enriched_naquadrium_boride_separation')
    .itemInputs('2x gtceu:enriched_naquadrium_boride_dust')
    .inputFluids('gtceu:chlorine 3000')
    .itemOutputs('gtceu:hot_enriched_naquadrium_ingot')
    .outputFluids('gtceu:boron_trichloride 1000')
    .blastFurnaceTemp(400)
    .duration(100)
    .EUt(1920)


GTM.autoclave('enriched_naquadrium_boriding')
.itemInputs('gtceu:enriched_naquadrium_dust')
.inputFluids('gtceu:boron_trichloride 1000')
.itemOutputs('gtceu:enriched_naquadrium_boride_dust')
.outputFluids('gtceu:chlorine 3000')
.duration(40)
.EUt(8192)

GTM.autoclave('naquadrium_boriding')
.itemInputs('gtceu:naquadrium_dust')
.inputFluids('gtceu:boron_trichloride 1000')
.itemOutputs('gtceu:naquadrium_boride_dust')
.outputFluids('gtceu:chlorine 3000')
.duration(40)
.EUt(7680)

GTM.phase_alternator('hypothermic_helium-3_plasma')
.inputFluids('gtceu:taint 100000', 'gtceu:helium_3 10000')
.outputFluids('gtceu:heat_treated_taint 100000', 'gtceu:hypothermic_helium_3_plasma 100')
.duration(20)
.EUt(8192)

GTM.centrifuge('arcane_essence_to_dust')
.itemInputs('4x irons_spellbooks:arcane_essence')
.itemOutputs('4x gtceu:arcane_dust', 'irons_spellbooks:mithril_scrap')
.duration(20)
.EUt(128)

GTM.alloy_smelter('arcane_dust_to_essence')
.itemInputs('4x gtceu:arcane_dust', 'irons_spellbooks:mithril_scrap')
.itemOutputs('4x irons_spellbooks:arcane_essence')
.duration(20)
.EUt(128)

GTM.brewery('irons_spellbooks:compat/common_ink')
.inputFluids('gtceu:black_dye 1000')
.itemInputs('#forge:dusts/arcane')
.outputFluids('irons_spellbooks:common_ink 750')
.duration(20)
.EUt(32)

GTM.brewery('irons_spellbooks:compat/uncommon_ink')
.inputFluids('irons_spellbooks:common_ink  1000')
.itemInputs('copper_ingot')
.outputFluids('irons_spellbooks:uncommon_ink 750')
.duration(20)
.EUt(64)

GTM.brewery('irons_spellbooks:compat/rare_ink')
.inputFluids('irons_spellbooks:uncommon_ink  1000')
.itemInputs('iron_ingot')
.outputFluids('irons_spellbooks:rare_ink 750')
.duration(20)
.EUt(128)

GTM.brewery('irons_spellbooks:compat/epic_ink')
.inputFluids('irons_spellbooks:rare_ink  1000')
.itemInputs('gold_ingot')
.outputFluids('irons_spellbooks:epic_ink 750')
.duration(20)
.EUt(256)

GTM.brewery('irons_spellbooks:compat/legendary_ink')
.inputFluids('irons_spellbooks:epic_ink  1000')
.itemInputs('amethyst_shard')
.outputFluids('irons_spellbooks:legendary_ink 750')
.duration(20)
.EUt(512)

GTM.autoclave('arcane_dust_to_ferroarcane')
.itemInputs('gtceu:arcane_dust')
.inputFluids('gtceu:iron_iii_chloride 250')
.itemOutputs('gtceu:ferroarcane_dust')
.duration(20)
.EUt(512)

GTM.alloy_smelter('irons_spellbooks:compat/cinder_essence')
.itemInputs('7x gtceu:ferroarcane_dust', 'gtceu:purified_netherite_dust')
.itemOutputs('8x irons_spellbooks:cinder_essence')
.duration(20)
.EUt(2048)

GTM.metaphysical_metallurgy_tainter('ferroarcane_to_raw_ascendine')
.itemInputs('4x gtceu:ferroarcane_dust')
.inputFluids('gtceu:heat_treated_taint 100', 'gtceu:hypothermic_helium_3_plasma 100', 'gtceu:resonance_plasma 100')
.itemOutputs('5x gtceu:raw_ascendine_dust')
.duration(20)
.EUt(8192)

GTM.metaphysical_metallurgy_tainter('raw_ascendine_to_ascendine')
.itemInputs('4x gtceu:raw_ascendine_dust')
.inputFluids('gtceu:chromatically_mutated_taint 100', 'gtceu:hypothermic_helium_3_plasma 100', 'gtceu:resonance_plasma 100')
.itemOutputs('5x gtceu:ascendine_dust')
.duration(20)
.EUt(8192)

GTM.metaphysical_metallurgy_tainter('ascendine_to_transcending_ascendine')
.itemInputs('4x gtceu:ascendine_dust')
.inputFluids('gtceu:alloyed_taint 100', 'gtceu:hypothermic_helium_3_plasma 100', 'gtceu:resonance_plasma 100')
.itemOutputs('5x gtceu:transcending_ascendine_dust')
.duration(20)
.EUt(8192)

GTM.metaphysical_metallurgy_tainter('transcending_ascendine_to_transcendentine')
.itemInputs('4x gtceu:transcending_ascendine_dust')
.inputFluids('gtceu:perfected_taint 100', 'gtceu:hypothermic_helium_3_plasma 100', 'gtceu:resonance_plasma 100')
.itemOutputs('5x gtceu:transcendentine_dust')
.duration(20)
.EUt(8192)

GTM.implosion_compressor('auralloy-omega_transcendentine_alloying')
.itemInputs('8x gtceu:transcendentine_dust', '2x gtceu:auralloy-omega_dust', '4x gtceu:industrial_tnt')
.itemOutputs('10x gtceu:auralloy-omega_over_transcendentine_dust')
.duration(20)
.EUt(8192)

// Pu-239
GTM.supercritical_fission('pu239_burning')
    .itemInputs('gtceu:plutonium_oxide_fuel_rod')
    .perTick(true)
    .chancedInput('gtceu:resonite_dust', 100, 0)
    .chancedFluidOutput('gtceu:resonance_plasma 120', 100, 0)
    .perTick(false)
    .itemOutputs('gtceu:spent_plutonium_oxide_fuel_rod')
    .duration(2400)
    .EUt(-GTValues.VA[GTValues.ZPM], 1)

// MOX
GTM.supercritical_fission('mox_burning')
    .itemInputs('gtceu:mox_fuel_rod')
    .perTick(true)
    .chancedInput('gtceu:resonite_dust', 100, 0)
    .chancedFluidOutput('gtceu:resonance_plasma 120', 100, 0)
    .perTick(false)
    .itemOutputs('gtceu:spent_mox_fuel_rod')
    .duration(12000)
    .EUt(-GTValues.VA[GTValues.ZPM], 1)

// Pu-241
GTM.supercritical_fission('pu241_burning')
    .itemInputs('gtceu:plutonium_241_oxide_fuel_rod')
    .perTick(true)
    .chancedInput('gtceu:resonite_dust', 100, 0)
    .chancedFluidOutput('gtceu:resonance_plasma 120', 100, 0)
    .perTick(false)
    .itemOutputs('gtceu:spent_plutonium_241_oxide_fuel_rod')
    .duration(600)
    .EUt(-GTValues.VA[GTValues.ZPM], 2)

// Enriched Naquadrium Boride
GTM.supercritical_fission('enriched_naquadrium_boride_burning')
    .itemInputs('gtceu:enriched_naquadrium_boride_fuel_rod')
    .perTick(true)
    .chancedInput('gtceu:resonite_dust', 100, 0)
    .chancedFluidOutput('gtceu:resonance_plasma 120', 100, 0)
    .perTick(false)
    .itemOutputs('gtceu:spent_enriched_naquadrium_boride_fuel_rod')
    .duration(24000)
    .EUt(-GTValues.VA[GTValues.ZPM], 40)

GTM.phase_alternator('cryothetic_zero_through_hypothermic_helium-3')
.inputFluids('gtceu:supercooled_ice 100000', 'gtceu:hypothermic_helium_3_plasma 1000')
.outputFluids('gtceu:cryothetic_zero 10000', 'gtceu:helium_3 100000')
.duration(100)
.EUt(131072)
//the particle guy goes HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
GTM.particle_accelerator('cryosporsite_ionization')
.inputFluids('gtceu:cryosporsite 432')
.perTick(true)
.chancedOutput('gtceu:rare_earth_dust', 100, 0)
.outputFluids('gtceu:electron 400')
.perTick(false)
.fusionStartEU(524288)
.EUt(8192)
.duration(500)

GTM.particle_accelerator('hydrogen_ionization')
.perTick(true)
.inputFluids('gtceu:hydrogen 100')
.outputFluids('gtceu:electron 50', 'gtceu:proton 50')
.fusionStartEU(524288)
.EUt(8192)
.duration(1000)

GTM.particle_accelerator('positron_pair_production')
.perTick(true)
.inputFluids('gtceu:electron 100')
.outputFluids('gtceu:electron 51', 'gtceu:positron 49')
.perTick(false)
.fusionStartEU(2097152)
.EUt(32768)
.duration(1000)
.circuit(3)

GTM.particle_accelerator('nulltron_pair_production')
.perTick(true)
.inputFluids('gtceu:neutron 100')
.outputFluids('gtceu:neutron 51', 'gtceu:nulltron 49')
.perTick(false)
.fusionStartEU(4194304)
.EUt(65536)
.duration(1000)
.circuit(3)

GTM.particle_accelerator('negatron_pair_production')
.perTick(true)
.inputFluids('gtceu:proton 100')
.outputFluids('gtceu:proton 51', 'gtceu:negatron 49')
.perTick(false)
.fusionStartEU(4404019)
.EUt(72000)
.duration(1000)
.circuit(3)

GTM.particle_accelerator('enriched_naquadrium_bombardment')
.perTick(true)
.inputFluids('gtceu:enriched_naquadrium 5')
.inputFluids('gtceu:proton 50')
.chancedFluidOutputLogic('and')
.chancedFluidOutput('gtceu:naquadrium 5', 2500, 0)
.chancedFluidOutput('gtceu:naquadah 5', 2500, 0)
.chancedFluidOutput('gtceu:naquadria 5', 2500, 0)
.chancedFluidOutput('gtceu:trinium 5', 2500, 0)
.fusionStartEU(6291456)
.EUt(65535)
.duration(1000)
.circuit(4)

//im quarking it so hard im about to gluon

GTM.particle_accelerator('proton_quark_disintegration')
.perTick(true)
.inputFluids('gtceu:proton 100')
.outputFluids('gtceu:up_quark 67', 'gtceu:down_quark 33')
.perTick(false)
.fusionStartEU(8388608)
.EUt(524288)
.duration(1000)
.circuit(6)

GTM.particle_accelerator('negatron_antiquark_disintegration')
.perTick(true)
.inputFluids('gtceu:negatron 100')
.outputFluids('gtceu:sub_quark 67', 'gtceu:sur_quark 33')
.perTick(false)
.fusionStartEU(8388608)
.EUt(524288)
.duration(1000)
.circuit(7)

GTM.particle_accelerator('neutron_nulltron_annihilation')
.perTick(true)
.inputFluids('gtceu:neutron 50', 'gtceu:nulltron 50')
.chancedFluidOutput('gtceu:up_quark 25', 1500, 0)
.chancedFluidOutput('gtceu:down_quark 25', 1500, 0)
.chancedFluidOutput('gtceu:sub_quark 25', 1500, 0)
.chancedFluidOutput('gtceu:sur_quark 25', 1500, 0)
.chancedFluidOutput('gtceu:bottom_quark 10', 500, 0)
.chancedFluidOutput('gtceu:superior_quark 10', 500, 0)
.perTick(false)
.fusionStartEU(8388608)
.EUt(524288)
.duration(1000)
.circuit(8)

GTM.particle_accelerator('strange_pair_production')
.perTick(true)
.inputFluids('gtceu:electron 50', 'gtceu:positron 50')
.outputFluids('gtceu:strange_quark 49', 'gtceu:ordinary_quark 49')
.perTick(false)
.fusionStartEU(8388608)
.EUt(524288)
.duration(1000)
.circuit(9)

GTM.particle_accelerator('charm_pair_production')
.perTick(true)
.inputFluids('gtceu:proton 50', 'gtceu:negatron 50')
.outputFluids('gtceu:charm_quark 49', 'gtceu:curse_quark 49')
.perTick(false)
.fusionStartEU(8388608)
.EUt(524288)
.duration(1000)
.circuit(10)

GTM.particle_accelerator('top_inferior_production')
.perTick(true)
.inputFluids('gtceu:glueball 10')
.chancedFluidOutput('gtceu:top_quark 5', 500, 0)
.chancedFluidOutput('gtceu:inferior_quark 5', 500, 0)
.perTick(false)
.fusionStartEU(8388608)
.EUt(524288)
.duration(1000)
.circuit(11)

//quark annihilation goes brr

GTM.particle_accelerator('up_sub_annihilation')
.perTick(true)
.inputFluids('gtceu:up_quark 1', 'gtceu:sub_quark 1')
.chancedFluidOutput('gtceu:glueball 1', 1, 0)
.perTick(false)
.fusionStartEU(8388608)
.EUt(524288)
.duration(1000)
.circuit(12)

GTM.particle_accelerator('down_sur_annihilation')
.perTick(true)
.inputFluids('gtceu:down_quark 1', 'gtceu:sur_quark 1')
.chancedFluidOutput('gtceu:glueball 1', 1, 0)
.perTick(false)
.fusionStartEU(8388608)
.EUt(524288)
.duration(1000)
.circuit(13)

GTM.particle_accelerator('strange_ordinary_annihilation')
.perTick(true)
.inputFluids('gtceu:strange_quark 1', 'gtceu:ordinary_quark 1')
.chancedFluidOutput('gtceu:glueball 1', 1, 0)
.perTick(false)
.fusionStartEU(8388608)
.EUt(524288)
.duration(1000)
.circuit(14)

GTM.particle_accelerator('charm_curse_annihilation')
.perTick(true)
.inputFluids('gtceu:charm_quark 1', 'gtceu:curse_quark 1')
.chancedFluidOutput('gtceu:glueball 1', 1, 0)
.perTick(false)
.fusionStartEU(8388608)
.EUt(524288)
.duration(1000)
.circuit(15)

GTM.particle_accelerator('bottom_superior_annihilation')
.perTick(true)
.inputFluids('gtceu:bottom_quark 1', 'gtceu:superior_quark 1')
.chancedFluidOutput('gtceu:glueball 1', 10, 0)
.perTick(false)
.fusionStartEU(8388608)
.EUt(524288)
.duration(1000)
.circuit(16)

GTM.particle_accelerator('top_inferior_annihilation')
.perTick(true)
.inputFluids('gtceu:top_quark 1', 'gtceu:inferior_quark 1')
.chancedFluidOutput('gtceu:glueball 1', 100, 0)
.perTick(false)
.fusionStartEU(8388608)
.EUt(524288)
.duration(1000)
.circuit(17)

// more material annihilation. HowToBasic could never
//Naquadrium-560
GTM.particle_accelerator('enriched_naquadrium_ionization')
.perTick(true)
.inputFluids('gtceu:enriched_naquadrium 1')
.outputFluids('gtceu:neutron 189', 'gtceu:proton 91', 'gtceu:electron 91')
.chancedFluidOutput('gtceu:glueball 3', 10, 0)
.fusionStartEU(524288)
.EUt(8192)
.duration(1000)

// Helium-4
GTM.particle_accelerator('helium_ionization')
.perTick(true)
.inputFluids('gtceu:helium 1')
.outputFluids('gtceu:neutron 2', 'gtceu:proton 2', 'gtceu:electron 2')
.fusionStartEU(524288)
.EUt(8192)
.duration(1000)

// Lithium-7
GTM.particle_accelerator('lithium_ionization')
.perTick(true)
.inputFluids('gtceu:lithium 1')
.outputFluids('gtceu:neutron 4', 'gtceu:proton 3', 'gtceu:electron 3')
.fusionStartEU(524288)
.EUt(8192)
.duration(1000)

// Nitrogen-14
GTM.particle_accelerator('nitrogen_ionization')
.perTick(true)
.inputFluids('gtceu:nitrogen 1')
.outputFluids('gtceu:neutron 7', 'gtceu:proton 7', 'gtceu:electron 7')
.fusionStartEU(524288)
.EUt(8192)
.duration(1000)

// Oxygen-16
GTM.particle_accelerator('oxygen_ionization')
.perTick(true)
.inputFluids('gtceu:oxygen 1')
.outputFluids('gtceu:neutron 8', 'gtceu:proton 8', 'gtceu:electron 8')
.fusionStartEU(524288)
.EUt(8192)
.duration(1000)

// Aluminum-27
GTM.particle_accelerator('aluminum_ionization')
.perTick(true)
.inputFluids('gtceu:aluminium 1')
.outputFluids('gtceu:neutron 14', 'gtceu:proton 13', 'gtceu:electron 13')
.fusionStartEU(524288)
.EUt(8192)
.duration(1000)

// Silicon-28
GTM.particle_accelerator('silicon_ionization')
.perTick(true)
.inputFluids('gtceu:silicon 1')
.outputFluids('gtceu:neutron 14', 'gtceu:proton 14', 'gtceu:electron 14')
.fusionStartEU(524288)
.EUt(8192)
.duration(1000)

// Iron-56
GTM.particle_accelerator('iron_ionization')
.perTick(true)
.inputFluids('gtceu:iron 1')
.outputFluids('gtceu:neutron 30', 'gtceu:proton 26', 'gtceu:electron 26')
.fusionStartEU(524288)
.EUt(8192)
.duration(1000)

// Nickel-58
GTM.particle_accelerator('nickel_ionization')
.perTick(true)
.inputFluids('gtceu:nickel 1')
.outputFluids('gtceu:neutron 30', 'gtceu:proton 28', 'gtceu:electron 28')
.fusionStartEU(524288)
.EUt(8192)
.duration(1000)

// Copper-63
GTM.particle_accelerator('copper_ionization')
.perTick(true)
.inputFluids('gtceu:copper 1')
.outputFluids('gtceu:neutron 34', 'gtceu:proton 29', 'gtceu:electron 29')
.fusionStartEU(524288)
.EUt(8192)
.duration(1000)

// Zinc-64
GTM.particle_accelerator('zinc_ionization')
.perTick(true)
.inputFluids('gtceu:zinc 1')
.outputFluids('gtceu:neutron 34', 'gtceu:proton 30', 'gtceu:electron 30')
.fusionStartEU(524288)
.EUt(8192)
.duration(1000)

// Silver-107
GTM.particle_accelerator('silver_ionization')
.perTick(true)
.inputFluids('gtceu:silver 1')
.outputFluids('gtceu:neutron 60', 'gtceu:proton 47', 'gtceu:electron 47')
.fusionStartEU(524288)
.EUt(8192)
.duration(1000)

// Tin-120
GTM.particle_accelerator('tin_ionization')
.perTick(true)
.inputFluids('gtceu:tin 1')
.outputFluids('gtceu:neutron 70', 'gtceu:proton 50', 'gtceu:electron 50')
.fusionStartEU(524288)
.EUt(8192)
.duration(1000)

// Gold-197
GTM.particle_accelerator('gold_ionization')
.perTick(true)
.inputFluids('gtceu:gold 1')
.outputFluids('gtceu:neutron 118', 'gtceu:proton 79', 'gtceu:electron 79')
.fusionStartEU(524288)
.EUt(8192)
.duration(1000)

// Lead-208
GTM.particle_accelerator('lead_ionization')
.perTick(true)
.inputFluids('gtceu:lead 1')
.outputFluids('gtceu:neutron 126', 'gtceu:proton 82', 'gtceu:electron 82')
.fusionStartEU(524288)
.EUt(8192)
.duration(1000)

// Uranium-238
GTM.particle_accelerator('uranium_ionization')
.perTick(true)
.inputFluids('gtceu:uranium 1')
.outputFluids('gtceu:neutron 146', 'gtceu:proton 92', 'gtceu:electron 92')
.fusionStartEU(524288)
.EUt(8192)
.duration(1000)

// Thorium-232
GTM.particle_accelerator('thorium_ionization')
.perTick(true)
.inputFluids('gtceu:thorium 1')
.outputFluids('gtceu:neutron 142', 'gtceu:proton 90', 'gtceu:electron 90')
.fusionStartEU(524288)
.EUt(8192)
.duration(1000)

// Bismuth-209
GTM.particle_accelerator('bismuth_ionization')
.perTick(true)
.inputFluids('gtceu:bismuth 1')
.outputFluids('gtceu:neutron 126', 'gtceu:proton 83', 'gtceu:electron 83')
.fusionStartEU(524288)
.EUt(8192)
.duration(1000)

// Platinum-195
GTM.particle_accelerator('platinum_ionization')
.perTick(true)
.inputFluids('gtceu:platinum 1')
.outputFluids('gtceu:neutron 117', 'gtceu:proton 78', 'gtceu:electron 78')
.fusionStartEU(524288)
.EUt(8192)
.duration(1000)

// Osmium-192
GTM.particle_accelerator('osmium_ionization')
.perTick(true)
.inputFluids('gtceu:osmium 1')
.outputFluids('gtceu:neutron 116', 'gtceu:proton 76', 'gtceu:electron 76')
.fusionStartEU(524288)
.EUt(8192)
.duration(1000)

// Iridium-193
GTM.particle_accelerator('iridium_ionization')
.perTick(true)
.inputFluids('gtceu:iridium 1')
.outputFluids('gtceu:neutron 116', 'gtceu:proton 77', 'gtceu:electron 77')
.fusionStartEU(524288)
.EUt(8192)
.duration(1000)
})