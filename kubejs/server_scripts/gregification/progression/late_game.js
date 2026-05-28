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
//return to sender

//the ZPM / UV chain of DOOM (dun dun dunn)

GTM.chemical_vat('naquadah_separation')
.itemInputs('6x gtceu:naquadah_dust')
.inputFluids('gtceu:infernal_acid 1000')
.itemOutputs('4x gtceu:titanium_trifluoride_dust')
.outputFluids('gtceu:impure_enriched_naquadah_solution 2000', 'gtceu:impure_naquadria_solution 2000')
.duration(600)
.EUt(30720)
.circuit(13)
.addData("HeatPressure", 2)
.addData("Temp", 1900)

GTM.chemical_vat('naquadah_separation_hp')
.itemInputs('6x gtceu:naquadah_dust')
.inputFluids('gtceu:infernal_acid 1100')
.itemOutputs('4x gtceu:titanium_trifluoride_dust')
.outputFluids('gtceu:impure_enriched_naquadah_solution 2200', 'gtceu:impure_naquadria_solution 2200')
.duration(540)
.EUt(30720)
.circuit(11)
.addData("HeatPressure", 8)
.addData("Temp", 1900)

GTM.chemical_vat('naquadrium_separation')
.itemInputs('6x gtceu:naquadah_dust')
.inputFluids('gtceu:infernal_acid 1500', 'gtceu:resonance_plasma 750')
.itemOutputs('4x gtceu:crude_resonite_crystal_dust')
.outputFluids('gtceu:impure_enriched_naquadrium_solution 2000', 'gtceu:impure_naquadrium_solution 2000')
.duration(600)
.EUt(30720)
.circuit(24)
.addData("HeatPressure", 3)
.addData("Temp", 2200)

GTM.chemical_vat('naquadrium_separation_hp')
.itemInputs('6x gtceu:naquadah_dust')
.inputFluids('gtceu:infernal_acid 1650', 'gtceu:resonance_plasma 825')
.itemOutputs('4x gtceu:crude_resonite_crystal_dust')
.outputFluids('gtceu:impure_enriched_naquadrium_solution 2200', 'gtceu:impure_naquadrium_solution 2200')
.duration(540)
.EUt(30720)
.circuit(26)
.addData("HeatPressure", 8.1)
.addData("Temp", 2200)

GTM.centrifuge('impure_enriched_naquadrium_solution_separation')
.inputFluids('gtceu:impure_enriched_naquadrium_solution 2000')
.itemOutputs('2x gtceu:rhenium_fluorosulfate_dust', 'gtceu:iridium_chloride_dust')
.outputFluids('gtceu:enriched_naquadrium_solution 1000')
.duration(440)
.EUt(7680)

GTM.centrifuge('impure_naquadrium_solution_separation')
.inputFluids('gtceu:impure_naquadrium_solution 2000')
.itemOutputs('2x gtceu:rhenium_fluorosulfate_dust', 'gtceu:ruthenium_phosphate_dust')
.outputFluids('gtceu:naquadrium_solution 1000')
.duration(440)
.EUt(7680)

GTM.mixer('boron_trichloride')
.itemInputs('gtceu:boron_dust')
.inputFluids('gtceu:chlorine 3000')
.outputFluids('gtceu:boron_trichloride 1000')
.duration(400)
.EUt(512)

GTM.chemical_reactor('proto-carborane')
.inputFluids('gtceu:boron_trichloride 11000', 'gtceu:dichloroethane 500')
.itemInputs('11x gtceu:sodium_dust')
.itemOutputs('11x gtceu:salt_dust')
.outputFluids('gtceu:proto-carborane_acid 1000', 'gtceu:hydrochloric_acid 1000')
.duration(600)
.EUt(2048)

GTM.large_chemical_reactor('carborane')
.itemInputs('3x gtceu:titanium_dust', 'gtceu:iridium_chloride_dust')
.inputFluids('gtceu:proto-carborane_acid')
.itemOutputs('gtceu:iridium_dust')
.outputFluids('gtceu:carborane_acid', 'gtceu:titanium_tetrachloride 3000', 'gtceu:chlorine 2000')
.duration(600)
.EUt(2048)

GTM.mixer('enriched_naquadrium_solution_acidizing')
.inputFluids('gtceu:enriched_naquadrium_solution', 'gtceu:carborane_acid 2000')
.outputFluids('gtceu:acidic_enriched_naquadrium_solution 3000')
.duration(100)
.EUt(512)

GTM.mixer('naquadrium_solution_acidizing')
.inputFluids('gtceu:naquadrium_solution', 'gtceu:carborane_acid 2000')
.outputFluids('gtceu:acidic_naquadrium_solution 3000')
.duration(100)
.EUt(512)

GTM.centrifuge('acidic_enriched_naquadrium_separation')
.inputFluids('gtceu:acidic_enriched_naquadrium_solution')
.itemOutputs('3x gtceu:enriched_naquadrium_boride_dust')
.outputFluids('gtceu:enriched_naquadrium_waste 2000', 'gtceu:aqua_regia 500')
.duration(100)
.EUt(512)

GTM.centrifuge('acidic_naquadrium_separation')
.inputFluids('gtceu:acidic_naquadrium_solution')
.itemOutputs('3x gtceu:naquadrium_boride_dust')
.outputFluids('gtceu:naquadrium_waste 2000', 'gtceu:hydrofluoric_acid 500')
.duration(100)
.EUt(512)

GTM.distillation_tower('enriched_naquadrium_waste_separation')
.inputFluids('gtceu:enriched_naquadrium_waste 2000')
.chancedOutput('gtceu:osmium_chloride_dust', 5000, 0)
.outputFluids('gtceu:hydrofluoric_acid 500', 'gtceu:enriched_naquadrium_solution 500', 'gtceu:naquadrium_solution 250')
.duration(300)
.EUt(512)

GTM.distillation_tower('naquadrium_waste_separation')
.inputFluids('gtceu:naquadrium_waste 2000')
.chancedOutput('gtceu:rhodium_chloride_dust', 5000, 0)
.outputFluids('gtceu:aqua_regia 500', 'gtceu:naquadrium_solution 500', 'gtceu:enriched_naquadrium_solution 250')
.duration(300)
.EUt(512)

GTM.assembler('coil_naquadrium')
.inputFluids('gtceu:auralloy-omega 144')
.itemInputs('8x gtceu:naquadrium_double_wire', '8x gtceu:tri-osmic_matrix_foil')
.EUt(30720)
.duration(725)









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













































// END of late game 

    const voltagetierexpensive = {
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