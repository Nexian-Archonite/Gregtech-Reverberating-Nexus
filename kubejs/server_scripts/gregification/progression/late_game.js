ServerEvents.recipes(event => {
    const GTM = event.recipes.gtceu

   // welcome to late game, i hope you brought a spezi and some crumpets ay
   
 //pol polm polmy polyme polymer

GTM.chemical_vat('nitrobenzene_to_aniline')
    .inputFluids('gtceu:nitrobenzene 1000', 'gtceu:hydrogen 3000')
    .outputFluids('gtceu:aniline 1000', 'water 2000')
    .duration(120)
    .addData("HeatPressure", 2.5)
    .addData("Temp", 473)
    .EUt(8192)

GTM.chemical_vat('aniline_to_fluorobenzene')
    .inputFluids('gtceu:aniline 1000', 'gtceu:hydrofluoric_acid 1000')
    .outputFluids('gtceu:fluorobenzene 1000', 'gtceu:nitrogen 1000')
    .duration(160)
    .addData("HeatPressure", 1.5)
    .addData("Temp", 423)
    .EUt(8192)

GTM.chemical_vat('benzene_propene_to_hydroquinone')
    .inputFluids('gtceu:benzene 1000', 'gtceu:propene 2000', 'gtceu:oxygen 2000')
    .outputFluids('gtceu:acetone 2000')
    .itemOutputs('2x gtceu:hydroquinone_dust')
    .duration(240)
    .addData("HeatPressure", 4.0)
    .addData("Temp", 423)
    .EUt(32768)

GTM.chemical_vat('fluorobenzene_to_difluorobenzophenone')
    .inputFluids('gtceu:fluorobenzene 2000', 'gtceu:carbon_monoxide 1000')
    .notConsumable('gtceu:iridium_chloride_dust')
    .itemOutputs('1x gtceu:difluorobenzophenone_dust')
    .outputFluids('gtceu:hydrochloric_acid 1000')
    .duration(200)
    .addData("HeatPressure", 3.0)
    .addData("Temp", 373)
    .EUt(32768)

GTM.chemical_vat('benzene_to_diphenyl_sulfone')
    .inputFluids('gtceu:benzene 2000', 'gtceu:sulfuric_acid 1000')
    .itemOutputs('1x gtceu:diphenyl_sulfone_dust')
    .outputFluids('water 1000')
    .duration(180)
    .addData("HeatPressure", 2.0)
    .addData("Temp", 573)
    .EUt(32768)

GTM.chemical_vat('peek_polymerization')
    .itemInputs('2x gtceu:difluorobenzophenone_dust', '1x gtceu:hydroquinone_dust', '1x gtceu:potassium_carbonate_dust')
    .notConsumable('gtceu:diphenyl_sulfone_dust')
    .itemOutputs('3x gtceu:polyether_ether_ketone_dust')
    .outputFluids('gtceu:hydrofluoric_acid 2000')
    .duration(600)
    .addData("HeatPressure", 5.0)
    .addData("Temp", 623)
    .EUt(131072)

GTM.chemical_vat('toluene_to_pseudocumene')
    .inputFluids('gtceu:toluene 1000', 'gtceu:dimethylbenzene 1000', 'gtceu:methanol 1000')
    .outputFluids('gtceu:pseudocumene 1000')
    .duration(300)
    .addData("HeatPressure", 3.5)
    .addData("Temp", 573)
    .EUt(131072)

GTM.chemical_vat('pseudocumene_to_trimellitic_anhydride')
    .inputFluids('gtceu:pseudocumene 1000', 'gtceu:oxygen 3000', 'gtceu:acetic_acid 500')
    .notConsumable('gtceu:cobalt_dust')
    .notConsumable('gtceu:manganese_dust')
    .itemOutputs('1x gtceu:trimellitic_anhydride_dust')
    .outputFluids('water 2000')
    .duration(400)
    .addData("HeatPressure", 4.5)
    .addData("Temp", 493)
    .EUt(131072)

GTM.chemical_vat('so2_cl2_to_thionyl_chloride')
    .inputFluids('gtceu:sulfur_dioxide 1000', 'gtceu:chlorine 2000')
    .outputFluids('gtceu:thionyl_chloride 1000')
    .duration(120)
    .addData("HeatPressure", 2.0)
    .addData("Temp", 343)
    .EUt(32768)

GTM.chemical_vat('trimellitic_anhydride_to_tmac')
    .itemInputs('1x gtceu:trimellitic_anhydride_dust')
    .inputFluids('gtceu:thionyl_chloride 1000')
    .itemOutputs('1x gtceu:trimellitic_anhydride_chloride_dust')
    .outputFluids('gtceu:sulfur_dioxide 1000', 'gtceu:hydrochloric_acid 1000')
    .duration(200)
    .addData("HeatPressure", 2.5)
    .addData("Temp", 353)
    .EUt(131072)

GTM.chemical_vat('maleic_anhydride_to_gbl')
    .itemInputs('1x gtceu:maleic_anhydride_dust')
    .inputFluids('gtceu:hydrogen 4000')
    .outputFluids('gtceu:gamma_butyrolactone 1000')
    .duration(240)
    .addData("HeatPressure", 6.0)
    .addData("Temp", 533)
    .EUt(131072)

GTM.chemical_vat('gbl_to_nmp')
    .inputFluids('gtceu:gamma_butyrolactone 1000', 'gtceu:methylamine 1000')
    .outputFluids('gtceu:n_methylpyrrolidone 1000', 'water 1000')
    .duration(180)
    .addData("HeatPressure", 10.0)
    .addData("Temp", 553)
    .EUt(131072)

GTM.chemical_vat('aniline_formaldehyde_to_mda')
    .inputFluids('gtceu:aniline 2000', 'gtceu:formaldehyde 1000', 'gtceu:hydrochloric_acid 500')
    .itemOutputs('1x gtceu:methylenedianiline_dust')
    .outputFluids('water 1000')
    .duration(300)
    .addData("HeatPressure", 1.5)
    .addData("Temp", 383)
    .EUt(524288)

GTM.chemical_vat('torlon_polymerization')
    .itemInputs('1x gtceu:trimellitic_anhydride_chloride_dust', '1x gtceu:methylenedianiline_dust')
    .notConsumableFluid('gtceu:n_methylpyrrolidone 1000')
    .itemOutputs('2x gtceu:torlon_dust')
    .outputFluids('gtceu:hydrochloric_acid 2000')
    .duration(800)
    .addData("HeatPressure", 3.0)
    .addData("Temp", 363)
    .EUt(33554432)

//back to start rekt or whatever, i don't watch movies
GTM.fusion_accelerator('anti-dilithide')
.notConsumable('gtceu:dilithium_gem')
.perTick(true)
.inputFluids('gtceu:negatron 6', 'gtceu:nulltron 8', 'gtceu:positron 6')
.itemOutputs('gtceu:anti-dilithide_gem')
.EUt(va.uv, 4)
.fusionStartEU(8388304)
.duration(1000)

GTM.fusion_accelerator('stellarite_grid')
.perTick(true)
.inputFluids('gtceu:up_quark 2', 'gtceu:down_quark 2', 'gtceu:positron 1', 'gtceu:sur_quark 2', 'gtceu:sub_quark 2')
.outputFluids('gtceu:stellarite_grid_plasma 1')
.EUt(va.uhv, 4)
.fusionStartEU(33554432)
.duration(1000)

GTM.fusion_accelerator('stellarite_lattice')
.perTick(true)
.inputFluids('gtceu:charm_quark 2', 'gtceu:strange_quark 2', 'gtceu:negatron 1', 'gtceu:ordinary_quark 2', 'gtceu:curse_quark 2')
.outputFluids('gtceu:stellarite_lattice_plasma 1')
.EUt(va.uhv, 4)
.fusionStartEU(33554432)
.duration(1000)

GTM.fusion_accelerator('stellarite_matrix')
.perTick(true)
.inputFluids('gtceu:top_quark 2', 'gtceu:bottom_quark 2', 'gtceu:nulltron 1', 'gtceu:superior_quark 2', 'gtceu:inferior_quark 2')
.outputFluids('gtceu:stellarite_matrix_plasma 1')
.EUt(va.uhv, 4)
.fusionStartEU(33554432)
.duration(1000)

GTM.fusion_accelerator('stellarite_assembly')
.perTick(true)
.inputFluids('gtceu:stellarite_grid_plasma 1', 'gtceu:stellarite_lattice_plasma 1', 'gtceu:stellarite_matrix_plasma 1', 'gtceu:neutronium 3')
.outputFluids('gtceu:stellarite_plasma 3')
.EUt(va.uhv, 6)
.fusionStartEU(33554432)
.duration(1000)

//rocketry part 12059710125091251920905190725

//tier 3
GTM.forming_press('tier_3_rocket_plating')
.itemInputs('gtceu:dense_echolumium_plate', 'gtceu:dense_beryllium_bronze_plate', 'gtceu:dense_ostrite_plate')
.itemOutputs('gtceu:rocket_plating_ostrite')
.duration(1000)
.EUt(2048)

GTM.space_factory('ostrite_tank')
.itemInputs('2x gtceu:dense_ostrite_plate', 'gtceu:ev_super_tank', '6x gtceu:polytetrafluoroethylene_plate', '4x gtceu:dilithium_gem', '4x gtceu:anti-dilithide_gem')
.itemOutputs('ad_astra:ostrum_tank')
.duration(1000)
.EUt(8192)

GTM.space_factory('ostrite_engine_casing')
.itemInputs('8x gtceu:dense_ostrite_plate', '2x gtceu:echolumium_frame', '2x gtceu:auralloy-omega_over_transcendentine_small_fluid_pipe')
.itemOutputs('gtceu:engine_casing_ostrite')
.duration(1000)
.EUt(8192)

GTM.space_factory('ostrite_engine')
.itemInputs('gtceu:engine_casing_ostrite', '4x gtceu:gravitation_engine_unit', '14x gtceu:auralloy-omega_over_transcendentine_tiny_fluid_pipe')
.inputFluids('gtceu:supercooled_ice 640')
.itemOutputs('ad_astra:ostrum_engine')
.duration(1000)
.EUt(8192)

GTM.space_factory('tier_3_rocket')
.itemInputs('ad_astra:rocket_nose_cone', '18x gtceu:rocket_plating_ostrite', '4x ad_astra:ostrum_tank', 'ad_astra:ostrum_engine')
.itemOutputs('ad_astra:tier_3_rocket')
.inputFluids('gtceu:cryostatic-antilithide 3000')
.duration(1000)
.EUt(32768)

GTM.chemical_bath('tier_3_rocket_fueling')
.itemInputs('ad_astra:tier_3_rocket')
.inputFluids('gtceu:cryostatic-antilithide 3000')
.itemOutputs(Item.of('ad_astra:tier_3_rocket', '{BotariumData:{StoredFluids:[{Amount:3000L,Fluid:"gtceu:cryostatic-antilithide"}]}}'))
.duration(100)
.EUt(512)

//tier 4
GTM.forming_press('tier_4_rocket_plating')
.itemInputs('gtceu:dense_echolumium_plate', 'gtceu:dense_hafnium_carbide_plate', 'gtceu:dense_calenite_plate')
.itemOutputs('gtceu:rocket_plating_calenite')
.duration(1000)
.EUt(8192)

GTM.space_factory('calenite_tank')
.itemInputs('2x gtceu:dense_calenite_plate', 'gtceu:iv_quantum_tank', '6x gtceu:polybenzimidazole_plate', '4x gtceu:flawless_dilithium_gem', '4x gtceu:flawless_anti-dilithide_gem')
.itemOutputs('ad_astra:calorite_tank')
.duration(1000)
.EUt(32768)

GTM.space_factory('calenite_engine_casing')
.itemInputs('8x gtceu:dense_calenite_plate', '2x gtceu:echolumium_frame', '2x gtceu:stellarite_small_fluid_pipe')
.itemOutputs('gtceu:engine_casing_calenite')
.duration(1000)
.EUt(32768)

GTM.space_factory('calenite_engine')
.itemInputs('gtceu:engine_casing_calenite', '4x gtceu:gravitation_engine_unit', '14x gtceu:stellarite_tiny_fluid_pipe')
.inputFluids('gtceu:supercooled_ice 640')
.itemOutputs('ad_astra:calorite_engine')
.duration(1000)
.EUt(32768)

GTM.space_factory('tier_4_rocket')
.itemInputs('ad_astra:rocket_nose_cone', '18x gtceu:rocket_plating_calenite', '4x ad_astra:calorite_tank', '2x ad_astra:calorite_engine')
.itemOutputs('ad_astra:tier_4_rocket')
.inputFluids('gtceu:cryostatic-antilithide 3000')
.duration(1000)
.EUt(131072)

GTM.chemical_bath('tier_4_rocket_fueling')
.itemInputs('ad_astra:tier_4_rocket')
.inputFluids('gtceu:cryostatic-antilithide 3000')
.itemOutputs(Item.of('ad_astra:tier_4_rocket', '{BotariumData:{StoredFluids:[{Amount:3000L,Fluid:"gtceu:cryostatic-antilithide"}]}}'))
.duration(100)
.EUt(512)

GTM.chemical_vat('cryostatic_antilithide_synthesis')
.inputFluids('gtceu:resonance_plasma 4000', 'gtceu:cryothetic_zero 50')
.itemInputs('2x gtceu:flawless_dilithium_gem', '2x gtceu:flawless_anti-dilithide_gem')
.outputFluids('gtceu:cryostatic-antilithide 5000')
.addData("HeatPressure", 0.1)
.addData("Temp", 10)
.duration(400)
.EUt(32768)

//return from rocketrE

GTM.assembly_line('transcendentine-polydimensional_accelerator')
.itemInputs('gtceu:luv_fusion_reactor', '32x #gtceu:circuits/uv', '64x gtceu:auralloy-omega_over_transcendentine_plate', '64x gtceu:auralloy-omega_over_transcendentine_plate', '8x gtceu:superconducting_coil', '32x gtceu:cryosporsite_rod')
.inputFluids('gtceu:polybenzimidazole 32000', 'gtceu:purified_draconium 24000')
.itemOutputs('gtceu:transcendental_polydimensional_accelerator')
.stationResearch(b => b.researchStack('gtceu:auralloy-omega_over_transcendentine_casing').EUt(va.zpm).CWUt(48))
.duration(4000)
.EUt(131072)


































// END of late game 

    const voltagetierexpensive = {
        "uev": "omnium",
        "uiv": "nullium",
    }
    Object.entries(voltagetierexpensive).forEach(([voltage, material]) => {

    event.replaceInput({id: `gtceu:shaped/${voltage}_machine_hull`}, 'gtceu:wood_plate', 'gtceu:polyether_ether_ketone_plate')
    event.replaceInput({id: `gtceu:shaped/${voltage}_machine_hull`}, new RegExp(`#forge:plates/.*`), `gtceu:${material}_plate`)
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